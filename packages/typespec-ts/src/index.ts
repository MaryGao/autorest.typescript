// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Program, EmitContext } from "@typespec/compiler";
import * as fsextra from "fs-extra";
import {
  buildClientDefinitions,
  buildResponseTypes,
  buildParameterTypes,
  buildIsUnexpectedHelper,
  buildClient,
  buildIndexFile,
  buildTopLevelIndex,
  buildRollupConfig,
  buildTsConfig,
  buildApiExtractorConfig,
  buildPackageFile,
  buildPollingHelper,
  buildPaginateHelper,
  buildEsLintConfig,
  buildKarmaConfigFile,
  buildEnvFile,
  buildEnvBrowserFile,
  buildRecordedClientFile,
  buildSampleTest,
  buildReadmeFile,
  buildSerializeHelper,
  buildLogger,
  RLCOptions,
  normalizeName,
  NameType,
  hasUnexpectedHelper,
  RLCModel
} from "@azure-tools/rlc-common";
import { transformRLCModel } from "./transform/transform.js";
import { emitContentByBuilder, emitModels } from "./utils/emitUtil.js";
import {
  SdkContext,
  createSdkContext
} from "@azure-tools/typespec-client-generator-core";
import * as path from "path";
import { Project, SyntaxKind } from "ts-morph";
import { buildClientContext } from "./modular/buildClientContext.js";
import { emitCodeModel } from "./modular/buildCodeModel.js";
import {
  buildRootIndex,
  buildSubClientIndexFile
} from "./modular/buildRootIndex.js";
import { buildModels, buildModelsOptions } from "./modular/emitModels.js";
import { buildOperationFiles } from "./modular/buildOperations.js";
import { buildSubpathIndexFile } from "./modular/buildSubpathIndex.js";
import { buildClassicalClient } from "./modular/buildClassicalClient.js";
import { emitPackage, emitTsConfig } from "./modular/buildProjectFiles.js";
import { getRLCClients } from "./utils/clientUtils.js";
import { join } from "path";

export * from "./lib.js";

export async function $onEmit(context: EmitContext) {
  /** Shared status */
  const program: Program = context.program;
  const options: RLCOptions = context.options;
  const dpgContext = createSdkContext(context);
  const clients = getRLCClients(dpgContext);
  const srcPath: string = context.emitterOutputDir;
  const needUnexpectedHelper: Map<string, boolean> = new Map<string, boolean>();
  const serviceNameToRlcModelsMap: Map<string, RLCModel> = new Map<
    string,
    RLCModel
  >();

  // 1. Clear sources folder
  clearSrcFolder();
  // 2. Generate RLC sources
  await generateRLC();
  // 3. Generate Modular sources
  await generateModular();
  // 4. Generate metadata and samples/tests

  function clearSrcFolder() {
    const isMultiClient = options.multiClient ?? false;
    const isModularLibrary = options.isModularLibrary ?? false;
    const pathToClear = join(
      context.emitterOutputDir ?? "",
      "src",
      // When generating modular library, RLC has to go under rest folder
      options.isModularLibrary ? "rest" : ""
    );
    fsextra.emptyDirSync(pathToClear);
    if (isMultiClient || isModularLibrary) {
      const folderPath = path.join(
        pathToClear.substring(0, pathToClear.lastIndexOf(path.sep + "src") + 4)
      );
      fsextra.emptyDirSync(folderPath);
    }
  }

  async function generateRLC() {
    let count = -1;
    for (const client of clients) {
      count++;
      const rlcModels = await transformRLCModel(
        program,
        options,
        client,
        context.emitterOutputDir,
        dpgContext
      );
      serviceNameToRlcModelsMap.set(client.service.name, rlcModels);

      needUnexpectedHelper.set(client.name, hasUnexpectedHelper(rlcModels));

      await emitModels(rlcModels, program);
      await emitContentByBuilder(program, buildClientDefinitions, rlcModels);
      await emitContentByBuilder(program, buildResponseTypes, rlcModels);
      await emitContentByBuilder(program, buildClient, rlcModels);
      await emitContentByBuilder(program, buildParameterTypes, rlcModels);
      await emitContentByBuilder(program, buildIsUnexpectedHelper, rlcModels);
      await emitContentByBuilder(program, buildIndexFile, rlcModels);
      await emitContentByBuilder(program, buildLogger, rlcModels);
      await emitContentByBuilder(program, buildTopLevelIndex, rlcModels);
      await emitContentByBuilder(program, buildPaginateHelper, rlcModels);
      await emitContentByBuilder(program, buildPollingHelper, rlcModels);
      // buildSerializeHelper
      await emitContentByBuilder(program, buildSerializeHelper, rlcModels);
      // build metadata relevant files
      await emitContentByBuilder(
        program,
        [
          buildEsLintConfig,
          buildRollupConfig,
          buildApiExtractorConfig,
          buildReadmeFile,
          buildPackageFile,
          buildTsConfig
        ],
        rlcModels,
        context.emitterOutputDir
      );
      // build test relevant files
      await emitContentByBuilder(
        program,
        [
          buildKarmaConfigFile,
          buildEnvFile,
          buildEnvBrowserFile,
          buildRecordedClientFile,
          buildSampleTest
        ],
        rlcModels,
        context.emitterOutputDir
      );
    }
  }

  async function generateModular() {
    if (options.isModularLibrary) {
      // TODO: Emit modular parts of the library
      const project = new Project();
      const modularCodeModel = emitCodeModel(
        context,
        serviceNameToRlcModelsMap,
        {
          casing: "camel"
        }
      );
      const rootIndexFile = project.createSourceFile(
        `${srcPath}/src/index.ts`,
        "",
        {
          overwrite: true
        }
      );
      for (const subClient of modularCodeModel.clients) {
        let subfolder = "";
        if (modularCodeModel.clients.length > 1) {
          subfolder = normalizeName(
            subClient.name.replace("Client", ""),
            NameType.File
          );
        }

        buildModels(modularCodeModel, project, srcPath, subfolder);
        buildModelsOptions(subClient, project, srcPath, subfolder);
        const hasClientUnexpectedHelper =
          needUnexpectedHelper.get(
            subClient.rlcClientName.replace("Context", "Client")
          ) ?? false;
        buildOperationFiles(
          dpgContext,
          subClient,
          project,
          srcPath,
          subfolder,
          hasClientUnexpectedHelper
        );
        buildClientContext(dpgContext, subClient, project, srcPath, subfolder);
        buildSubpathIndexFile(project, srcPath, "models", subfolder);
        buildSubpathIndexFile(project, srcPath, "api", subfolder);
        buildClassicalClient(
          dpgContext,
          subClient,
          project,
          srcPath,
          subfolder
        );
        if (modularCodeModel.clients.length > 1) {
          buildSubClientIndexFile(subClient, project, srcPath, subfolder);
        }
        buildRootIndex(subClient, project, rootIndexFile, srcPath, subfolder);
      }

      emitPackage(project, srcPath, modularCodeModel);
      emitTsConfig(project, srcPath, modularCodeModel);
      removeUnusedInterfaces(project);

      for (const file of project.getSourceFiles()) {
        await emitContentByBuilder(
          program,
          () => ({ content: file.getFullText(), path: file.getFilePath() }),
          modularCodeModel as any
        );
        // emitFile(program, { content: hrlcClient.content, path: hrlcClient.path });
      }
    }
  }
}

/**
 * Removing this for now, as it has some problem when we have two models with the same name and only one of them is unused, this function will end up removing the other used models.
 */
export function removeUnusedInterfaces(project: Project) {
  const allInterfaces = project.getSourceFiles().flatMap((file) =>
    file.getInterfaces().map((interfaceDeclaration) => {
      return { interfaceDeclaration, filepath: file.getFilePath() };
    })
  );

  const unusedInterfaces = allInterfaces.filter((interfaceDeclaration) => {
    const references = interfaceDeclaration.interfaceDeclaration
      .findReferencesAsNodes()
      .filter((node) => {
        const kind = node.getParent()?.getKind();
        return (
          kind !== SyntaxKind.ExportSpecifier &&
          kind !== SyntaxKind.InterfaceDeclaration
        );
      });
    return references.length === 0;
  });

  unusedInterfaces.forEach((interfaceDeclaration) => {
    const references = interfaceDeclaration.interfaceDeclaration
      .findReferencesAsNodes()
      .filter((node) => {
        const kind = node.getParent()?.getKind();
        return kind === SyntaxKind.ExportSpecifier;
      });
    const map = new Map<string, string>();
    references.forEach((node) => {
      const exportPath = node.getSourceFile().getFilePath();
      map.set(exportPath, node.getText());
    });

    // Get the index.ts file
    const indexFiles = project.getSourceFiles("**/index.ts"); // Adjust the path to your index.ts file
    // to make sure the top level index file is in the last
    const sortedIndexFiles = indexFiles.sort((idx1, idx2) => {
      return (
        idx2.getFilePath().split("/").length -
        idx1.getFilePath().split("/").length
      );
    });

    const matchAliasNodes: string[] = [];
    for (const indexFile of sortedIndexFiles) {
      const filepath = indexFile.getFilePath();
      if (map.has(filepath)) {
        // Get all export declarations
        const exportDeclarations = indexFile.getExportDeclarations();

        // Iterate over each export declaration
        exportDeclarations.forEach((exportDeclaration) => {
          // Find named exports that match the unused interface
          const matchingExports = exportDeclaration
            .getNamedExports()
            .filter((ne) => {
              const aliasNode = ne.getAliasNode();
              if (
                aliasNode &&
                aliasNode.getText() !== map.get(filepath) &&
                ne.getName() === map.get(filepath)
              ) {
                matchAliasNodes.push(aliasNode.getText());
              }
              return (
                matchAliasNodes.indexOf(ne.getName()) > -1 ||
                ne.getName() === map.get(filepath) ||
                ne.getAliasNode()?.getText() === map.get(filepath)
              );
            });
          // Remove the matching exports
          matchingExports.forEach((me) => me.remove());
        });
      }
    }
    interfaceDeclaration.interfaceDeclaration.remove();
  });
}
