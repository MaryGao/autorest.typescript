import { InterfaceDeclarationStructure, Project, PropertySignatureStructure, StructureKind } from "ts-morph";
import { RLCModel } from "./generateClientDefinitions.js";
import * as path from "path";
import { ParameterPropertyStructure, ParameterTypeStructure } from "./parameterInterfaces.js";

export function buildParameterTypes(
    model: RLCModel,
    options: {
        importedParameters: Set<string>;
        importedResponses: Set<string>;
        clientImports: Set<string>;
    }
) {
    const project = new Project();
    const srcPath = model.srcPath;
    const filePath = path.join(srcPath, `parameters.ts`);
    const parametersFile = project.createSourceFile(filePath, undefined, {
        overwrite: true
    });
    for (const param of model.params) {
        for (const part of param.compositions) {
            parametersFile.addInterfaces(buildParameterInterface(part));
        }

        // Add Operation parameters type alias which is composed of the types we generated above
        // plus the common type RequestParameters
        parametersFile.addTypeAlias({
            name: param.name,
            isExported: true,
            type: [...param.compositions.map(c => c.name), param.baseType].join(" & ")
        });
    }
    // Add imports
    // TODO: add more imports
    parametersFile.addImportDeclarations([
        {
            namedImports: ["RequestParameters"],
            moduleSpecifier: "@azure-rest/core-client"
        }
    ]);
    return { path: filePath, content: parametersFile.getFullText() };

}

function buildParameterInterface(param: ParameterTypeStructure) {
    let constructInterfaces: InterfaceDeclarationStructure[] = [];
    const propertiesToBuild: ParameterTypeStructure[] = param.properties.filter(p => p.buildType && (p.buildStructure != undefined)).map(p => p!.buildStructure!);
    const paramInterface: InterfaceDeclarationStructure = {
        isExported: true,
        kind: StructureKind.Interface,
        name: param.name,
        properties: param.properties.map(buildParameterProperty)
    };
    constructInterfaces.push(paramInterface);
    for (const internalParam of propertiesToBuild) {
        constructInterfaces = [...constructInterfaces, ...buildParameterInterface(internalParam)];
    }
    return constructInterfaces;
}

function buildParameterProperty(prop: ParameterPropertyStructure): PropertySignatureStructure {
    const description = prop.description;
    return {
        name: prop.name,
        ...(description && { docs: [{ description }] }),
        hasQuestionToken: prop.isOptional,
        type: prop.type,
        kind: StructureKind.PropertySignature
    };
}
