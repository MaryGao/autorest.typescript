import { FunctionDeclaration, Project, SourceFile } from "ts-morph";
import { getClientParameters } from "./helpers/clientHelpers.js";
import { importCredential } from "./helpers/credentialHelpers.js";
import { getClientName } from "./helpers/namingHelpers.js";
import { Client, Parameter } from "./modularCodeModel.js";
import { isRLCMultiEndpoint } from "../utils/clientUtils.js";
import { SdkContext } from "@azure-tools/typespec-client-generator-core";

/**
 * This function creates the file containing the modular client context
 */
export function buildClientContext(
  dpgContext: SdkContext,
  client: Client,
  project: Project,
  srcPath: string = "src",
  subfolder: string = ""
): SourceFile {
  const { description, parameters } = client;
  const name = getClientName(client);
  const clientContextFile = project.createSourceFile(
    `${srcPath}/src/${
      subfolder && subfolder !== "" ? subfolder + "/" : ""
    }/api/${name}Context.ts`
  );

  let factoryFunction;
  clientContextFile.addImportDeclaration({
    moduleSpecifier: "@azure-rest/core-client",
    namedImports: ["ClientOptions"]
  });

  clientContextFile.addInterface({
    name: `${name}ClientOptions`,
    isExported: true,
    extends: ["ClientOptions"]
  });

  if (isRLCMultiEndpoint(dpgContext)) {
    clientContextFile.addImportDeclaration({
      moduleSpecifier: `../../rest/${subfolder}/index.js`,
      namedImports: [`Client`]
    });

    clientContextFile.addExportDeclaration({
      moduleSpecifier: `../../rest/${subfolder}/index.js`,
      namedExports: [`Client`]
    });
    factoryFunction = clientContextFile.addFunction({
      docs: [description],
      name: `create${name}`,
      returnType: `Client.${client.name}`,
      parameters: getClientParameters(client),
      isExported: true
    });
  } else {
    const rlcClientName = client.rlcClientName;
    clientContextFile.addImportDeclaration({
      moduleSpecifier: `${
        subfolder && subfolder !== "" ? "../" : ""
      }../rest/index.js`,
      namedImports: [`${rlcClientName}`]
    });

    clientContextFile.addExportDeclaration({
      moduleSpecifier: `${
        subfolder && subfolder !== "" ? "../" : ""
      }../rest/index.js`,
      namedExports: [`${rlcClientName}`]
    });

    factoryFunction = clientContextFile.addFunction({
      docs: [description],
      name: `create${name}`,
      returnType: `${rlcClientName}`,
      parameters: getClientParameters(client),
      isExported: true
    });
  }

  const credentialsParam = parameters.find(
    (p) => p.clientName === "credential"
  );

  const baseUrlParam: Parameter | undefined = parameters.find(
    (p) => p.location === "endpointPath"
  );

  if (baseUrlParam) {
    let baseUrl: string | undefined = "endpoint";
    baseUrl =
      baseUrlParam.type.type === "constant"
        ? baseUrlParam.type.value
        : baseUrlParam.clientName;
    factoryFunction.addStatements([`const baseUrl = ${baseUrl}`]);
  }

  let getClientStatement = `const clientContext = getClient(options)`;

  if (baseUrlParam) {
    getClientStatement = `const clientContext = getClient(baseUrl, options)`;
  }

  // If the client needs credentials we need to pass those to getClient
  if (credentialsParam) {
    importCredential(credentialsParam.type, clientContextFile);
    addCredentialOptionsStatement(credentialsParam, factoryFunction);
    getClientStatement = baseUrlParam
      ? `const clientContext = getClient(baseUrl, credential, options)`
      : `const clientContext = getClient(credential, options)`;
  }

  factoryFunction.addStatements([getClientStatement, "return clientContext;"]);

  if (isRLCMultiEndpoint(dpgContext)) {
    clientContextFile.addImportDeclarations([
      {
        moduleSpecifier: `../../rest/${subfolder}/index.js`,
        namedImports: ["createClient as getClient"]
      }
    ]);
  } else {
    clientContextFile.addImportDeclarations([
      {
        moduleSpecifier: `${
          subfolder && subfolder !== "" ? "../" : ""
        }../rest/index.js`,
        defaultImport: "getClient"
      }
    ]);
  }

  clientContextFile.fixMissingImports(
    {},
    { importModuleSpecifierEnding: "js" }
  );

  return clientContextFile;
}

/**
 * This function adds the statements to pass the credential to getClient
 */
function addCredentialOptionsStatement(
  credential: Parameter,
  factoryFunction: FunctionDeclaration
): void {
  switch (credential.type.type) {
    case "Key":
      if (!credential.type.policy?.key) {
        throw new Error(`Key credential does not define a header name`);
      }
      factoryFunction.addStatements(
        `options.credentials = {...options.credentials, apiKeyHeaderName: "${credential.type.policy.key}"}`
      );
      return;
    default:
      return;
  }
}
