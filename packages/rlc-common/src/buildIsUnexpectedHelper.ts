// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Paths, RLCModel } from "./interfaces.js";
import * as path from "path";
import {
  FunctionDeclarationOverloadStructure,
  OptionalKind,
  Project,
  VariableDeclarationKind
} from "ts-morph";
import { hasUnexpectedHelper } from "./helpers/operationHelpers.js";
export function buildIsUnexpectedHelper(model: RLCModel) {
  if (!hasUnexpectedHelper(model)) {
    return;
  }
  const project = new Project();
  const srcPath = model.srcPath;
  const filePath = path.join(srcPath, `isUnexpected.ts`);
  const isErrorHelper = project.createSourceFile(filePath, undefined, {
    overwrite: true
  });

  let map: Record<string, string[]> = {};
  let allResponseTypes: Set<string> = new Set();
  let allErrorTypes: Set<string> = new Set();
  let overloads: OptionalKind<FunctionDeclarationOverloadStructure>[] = [];
  const pathDictionary = model.paths;

  for (const [path, details] of Object.entries(pathDictionary)) {
    for (const [methodName, methodDetails] of Object.entries(details.methods)) {
      const originalMethod = methodName.toUpperCase();
      const operation = `${originalMethod} ${path}`;
      const success = methodDetails[0].successStatus;
      map = { ...map, ...{ [operation]: success } };

      // LROs may call the same path but with GET
      // to get the operation status.
      if (
        methodDetails[0].annotations?.isLongRunning &&
        originalMethod !== "GET"
      ) {
        const operation = `GET ${path}`;
        const success =
          (pathDictionary[path].methods["get"] &&
            pathDictionary[path].methods["get"][0]?.successStatus) ??
          methodDetails[0].successStatus;
        map = { ...map, ...{ [operation]: success } };
      }

      const successTypes = methodDetails[0].responseTypes.success;
      const errorTypes = methodDetails[0].responseTypes.error;

      if (!successTypes.length || !errorTypes.length || !errorTypes[0]) {
        continue;
      }

      successTypes.forEach((t) => allResponseTypes.add(t));
      errorTypes.forEach((t) => {
        allResponseTypes.add(t);
        allErrorTypes.add(t);
      });

      overloads.push({
        isExported: true,
        parameters: [
          {
            name: "response",
            type: [...successTypes, ...errorTypes].join(" | ")
          }
        ],
        returnType: `response is ${errorTypes[0]}`
      });
    }
  }
  isErrorHelper.addImportDeclaration({
    namedImports: [...allResponseTypes],
    moduleSpecifier: "./responses"
  });

  isErrorHelper.addVariableStatement({
    declarations: [
      {
        name: "responseMap",
        initializer: JSON.stringify(map),
        type: "Record<string, string[]>"
      }
    ],
    declarationKind: VariableDeclarationKind.Const
  });

  if (allErrorTypes.size) {
    const hasTemplate = hasParametrizedPath(pathDictionary);
    isErrorHelper.addFunction({
      overloads,
      isExported: true,
      name: "isUnexpected",
      parameters: [
        {
          name: "response",
          type: [...allResponseTypes].join(" | ")
        }
      ],
      returnType: `response is ${[...allErrorTypes].join(" | ")}`,
      statements: [
        `
          const lroOriginal = response.headers["x-ms-original-url"];
          const url = new URL(lroOriginal ?? response.request.url);
          const method = response.request.method;
          ${
            hasTemplate ? "let" : "const"
          } pathDetails = responseMap[\`\${method} \${url.pathname}\`];
          if (!pathDetails) {`,
        hasTemplate
          ? "pathDetails = geParametrizedPathSuccess(method, url.pathname);"
          : `return true;`,
        `  }
          return !pathDetails.includes(response.status);
        `
      ]
    });
    if (hasTemplate) {
      isErrorHelper.addFunction({
        isExported: false,
        name: "geParametrizedPathSuccess",
        parameters: [
          {
            name: "method",
            type: "string"
          },
          {
            name: "path",
            type: "string"
          }
        ],
        returnType: `string[]`,
        statements: [
          `
        const pathParts = path.split("/");

        // Iterate the responseMap to find a match
        for (const [key, value] of Object.entries(responseMap)) {
          // Extracting the path from the map key which is in format
          // GET /path/foo
          if (!key.startsWith(method)) {
            continue;
          }
          const candidatePath = getPathFromMapKey(key);
          // Get each part of the url path
          const candidateParts = candidatePath.split("/");
      
          // If the candidate and actual paths don't match in size
          // we move on to the next candidate path
          if (
            candidateParts.length === pathParts.length &&
            hasParametrizedPath(key)
          ) {
            // track if we have found a match to return the values found.
            let found = true;
            for (let i = 0; i < candidateParts.length; i++) {
              if (
                candidateParts[i]?.startsWith("{") &&
                candidateParts[i]?.endsWith("}")
              ) {
                // If the current part of the candidate is a "template" part
                // it is a match with the actual path part on hand
                // skip as the parameterized part can match anything
                continue;
              }
      
              // If the candidate part is not a template and
              // the parts don't match mark the candidate as not found
              // to move on with the next candidate path.
              if (candidateParts[i] !== pathParts[i]) {
                found = false;
                break;
              }
            }
      
            // We finished evaluating the current candidate parts
            // if all parts matched we return the success values form
            // the path mapping.
            if (found) {
              return value;
            }
          }
        }
      
        // No match was found, return an empty array.
        return [];
        `
        ]
      });

      isErrorHelper.addFunction({
        isExported: false,
        name: "hasParametrizedPath",
        parameters: [
          {
            name: "path",
            type: "string"
          }
        ],
        returnType: `boolean`,
        statements: [`return path.includes("/{");`]
      });

      isErrorHelper.addFunction({
        isExported: false,
        name: "getPathFromMapKey",
        parameters: [
          {
            name: "mapKey",
            type: "string"
          }
        ],
        returnType: `string`,
        statements: [
          `const pathStart = mapKey.indexOf("/");
         return mapKey.slice(pathStart);`
        ]
      });
    }
  }

  return {
    path: filePath,
    content: isErrorHelper.getFullText()
  };
}

function hasParametrizedPath(pathDictionary: Paths): boolean {
  for (const [path] of Object.entries(pathDictionary)) {
    if (path.includes("/{") && path.includes("}")) {
      return true;
    }
  }

  return false;
}
