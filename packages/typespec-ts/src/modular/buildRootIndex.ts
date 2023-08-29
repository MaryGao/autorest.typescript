import { Project, SourceFile } from "ts-morph";
import { getClientName } from "./helpers/namingHelpers.js";
import { Client, ModularCodeModel } from "./modularCodeModel.js";

export function buildRootIndex(
  codeModel: ModularCodeModel,
  client: Client,
  rootIndexFile: SourceFile
) {
  const { project } = codeModel;
  const srcPath = codeModel.modularOptions.sourceRoot;
  const subfolder = client.subfolder ?? "";
  const clientName = `${getClientName(client)}Client`;
  const clientFile = project.getSourceFile(
    `${srcPath}/${subfolder !== "" ? subfolder + "/" : ""}${clientName}.ts`
  );

  if (!clientFile) {
    throw new Error(`Couldn't find client file: ${srcPath}/${clientName}.ts`);
  }

  exportClassicalClient(client, rootIndexFile, subfolder);
  exportModels(rootIndexFile, project, srcPath, clientName, subfolder, true);
  exportPagingUtil(codeModel, rootIndexFile, client);
}

function exportClassicalClient(
  client: Client,
  indexFile: SourceFile,
  subfolder: string,
  isSubClient: boolean = false
) {
  const clientName = `${getClientName(client)}Client`;
  indexFile.addExportDeclaration({
    namedExports: [clientName, `${clientName}Options`],
    moduleSpecifier: `./${
      subfolder !== "" && !isSubClient ? subfolder + "/" : ""
    }${clientName}.js`
  });
}

function exportModels(
  indexFile: SourceFile,
  project: Project,
  srcPath: string,
  clientName: string,
  subfolder: string = "",
  isTopLevel: boolean = false
) {
  const modelsFile = project.getSourceFile(
    `${srcPath}/${subfolder !== "" ? subfolder + "/" : ""}models/index.ts`
  );
  if (!modelsFile) {
    return;
  }

  const exported = [...indexFile.getExportedDeclarations().keys()];
  const namedExports = [...modelsFile.getExportedDeclarations().keys()].map(
    (modelName) => {
      if (exported.indexOf(modelName) > -1) {
        return `${modelName} as ${clientName}${modelName}`;
      }
      return modelName;
    }
  );
  const moduleSpecifier = `./${
    isTopLevel && subfolder !== "" ? subfolder + "/" : ""
  }models/index.js`;
  indexFile.addExportDeclaration({
    moduleSpecifier,
    namedExports
  });
}

function exportPagingUtil(
  codeModel: ModularCodeModel,
  indexFile: SourceFile,
  client: Client
) {
  // Only import the paging helper once
  if (client !== codeModel.clients[0]) {
    return;
  }
  const hasPaging = codeModel.clients.some((client) =>
    client.operationGroups.some((group) =>
      group.operations.some((op) => op.discriminator === "paging")
    )
  );
  if (!hasPaging) {
    return;
  }
  indexFile.addExportDeclaration({
    moduleSpecifier: `./util/pagingUtil.js`,
    namedExports: ["getContinuationToken", "setContinuationToken"] // Only export the getContinuationToken and setContinuationToken to public
  });
}

export function buildSubClientIndexFile(
  codeModel: ModularCodeModel,
  client: Client
) {
  const subfolder = client.subfolder ?? "";
  const srcPath = codeModel.modularOptions.sourceRoot;
  const subClientIndexFile = codeModel.project.createSourceFile(
    `${srcPath}/${subfolder !== "" ? subfolder + "/" : ""}index.ts`,
    undefined,
    { overwrite: true }
  );
  const clientName = `${getClientName(client)}Client`;
  const clientFilePath = `${srcPath}/${
    subfolder !== "" ? subfolder + "/" : ""
  }${clientName}.ts`;
  const clientFile = codeModel.project.getSourceFile(clientFilePath);

  if (!clientFile) {
    throw new Error(`Couldn't find client file: ${clientFilePath}`);
  }

  exportClassicalClient(client, subClientIndexFile, subfolder, true);
  exportModels(
    subClientIndexFile,
    codeModel.project,
    srcPath,
    clientName,
    subfolder
  );
}
