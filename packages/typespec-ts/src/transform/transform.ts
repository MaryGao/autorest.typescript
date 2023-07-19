// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  SdkClient,
  SdkContext,
  listOperationGroups,
  listOperationsInOperationGroup
} from "@azure-tools/typespec-client-generator-core";
import {
  ImportKind,
  NameType,
  normalizeName,
  OperationParameter,
  OperationResponse,
  PathParameter,
  Paths,
  RLCModel,
  RLCOptions,
  Schema,
  SchemaContext,
  UrlInfo
} from "@azure-tools/rlc-common";
import { Program, getDoc, ignoreDiagnostics } from "@typespec/compiler";
import { HttpOperation, getHttpOperation, getServers } from "@typespec/http";
import { join } from "path";
import {
  getDefaultService,
  getFormattedPropertyDoc,
  getSchemaForType,
  getTypeName,
  predictDefaultValue
} from "../utils/modelUtils.js";
import { transformHelperFunctionDetails } from "./transformHelperFunctionDetails.js";
import { transformToParameterTypes } from "./transformParameters.js";
import { transformPaths } from "./transformPaths.js";
import { transformToResponseTypes } from "./transformResponses.js";
import { transformSchemas } from "./transformSchemas.js";
import { transformRLCOptions } from "./transfromRLCOptions.js";
import { transformApiVersionInfo } from "./transformApiVersionInfo.js";
import { getClientLroOverload } from "../utils/operationUtil.js";
import { TelemetryOptions } from "@azure-tools/rlc-common";

export interface RLCSdkContext extends SdkContext {
  options?: RLCOptions;
}

export async function transformRLCModel(
  program: Program,
  emitterOptions: RLCOptions,
  client: SdkClient,
  emitterOutputDir: string,
  dpgContext: RLCSdkContext
): Promise<RLCModel> {
  const options: RLCOptions = transformRLCOptions(
    emitterOptions,
    emitterOutputDir,
    dpgContext
  );
  dpgContext.options = options;
  const srcPath = join(
    emitterOutputDir ?? "",
    "src",
    // When generating modular library, RLC has to go under rest folder
    options.isModularLibrary ? "rest" : "",
    options.batch && options.batch.length > 1
      ? normalizeName(client.name.replace("Client", ""), NameType.File)
      : ""
  );
  const libraryName = normalizeName(
    options.batch && (options.isModularLibrary || options.batch.length > 1)
      ? client.name
      : options?.title ??
          client.name ??
          getDefaultService(program)?.title ??
          "",
    NameType.Class
  );
  const importSet = new Map<ImportKind, Set<string>>();
  const paths: Paths = transformPaths(program, client, dpgContext);
  const schemas: Schema[] = transformSchemas(program, client, dpgContext);

  const responses: OperationResponse[] = transformToResponseTypes(
    importSet,
    client,
    dpgContext
  );
  const parameters: OperationParameter[] = transformToParameterTypes(
    importSet,
    client,
    dpgContext
  );
  const helperDetails = transformHelperFunctionDetails(client, dpgContext);
  // Enrich client-level annotation detail
  helperDetails.clientLroOverload = getClientLroOverload(paths);
  const urlInfo = transformUrlInfo(dpgContext);
  const apiVersionInfo = transformApiVersionInfo(client, dpgContext, urlInfo);
  const telemetryOptions = transformTelemetryOptions(dpgContext, client);
  return {
    srcPath,
    libraryName,
    paths,
    options,
    schemas,
    responses,
    importSet,
    apiVersionInfo,
    parameters,
    helperDetails,
    urlInfo,
    telemetryOptions
  };
}

function transformTelemetryOptions(
  dpgContext: SdkContext,
  client: SdkClient
): TelemetryOptions | undefined {
  const customRequestIdHeaderName = getFirstCustomRequestHeaderName(
    dpgContext,
    client
  );
  if (customRequestIdHeaderName) {
    return {
      customRequestIdHeaderName
    };
  }
  return undefined;
}

function getFirstCustomRequestHeaderName(
  dpgContext: SdkContext,
  client: SdkClient
) {
  const program = dpgContext.program;
  const operationGroups = listOperationGroups(dpgContext, client);
  for (const operationGroup of operationGroups) {
    const operations = listOperationsInOperationGroup(
      dpgContext,
      operationGroup
    );
    for (const op of operations) {
      const headerName = getCustomRequestHeader(
        ignoreDiagnostics(getHttpOperation(program, op))
      );
      if (headerName != undefined) {
        return headerName;
      }
    }
  }
  const clientOperations = listOperationsInOperationGroup(dpgContext, client);
  for (const clientOp of clientOperations) {
    const headerName = getCustomRequestHeader(
      ignoreDiagnostics(getHttpOperation(program, clientOp))
    );
    if (headerName != undefined) {
      return headerName;
    }
  }
  return undefined;
}

function getCustomRequestHeader(route: HttpOperation): string | undefined {
  const CUSTOM_REQUEST_HEADER_NAME = "client-request-id";
  const params = route.parameters.parameters.filter(
    (p) =>
      p.type === "header" && p.name.toLowerCase() === CUSTOM_REQUEST_HEADER_NAME
  );
  if (params.length > 0) {
    return CUSTOM_REQUEST_HEADER_NAME;
  }

  return undefined;
}

export function transformUrlInfo(dpgContext: SdkContext): UrlInfo | undefined {
  const program = dpgContext.program;
  const serviceNs = getDefaultService(program)?.type;
  let endpoint = undefined;
  const urlParameters: PathParameter[] = [];
  if (serviceNs) {
    const host = getServers(program, serviceNs);
    if (host?.[0]?.url) {
      endpoint = host[0].url;
    }
    if (host && host?.[0] && host?.[0]?.parameters) {
      // Currently we only support one parameter in the servers definition
      for (const key of host[0].parameters.keys()) {
        const property = host?.[0]?.parameters.get(key);
        const type = property?.type;

        if (!property || !type) {
          continue;
        }

        const schema = getSchemaForType(
          dpgContext,
          type,
          [SchemaContext.Exception, SchemaContext.Input],
          false,
          property!
        );
        urlParameters.push({
          name: key,
          type: getTypeName(schema),
          description:
            (getDoc(program, property) &&
              getFormattedPropertyDoc(program, property, schema, " ")) ??
            getFormattedPropertyDoc(program, type, schema, " " /* sperator*/),
          value: predictDefaultValue(dpgContext, host?.[0]?.parameters.get(key))
        });
      }
    }
  }
  // Set the default value if missing endpoint parameter
  if (endpoint == undefined && urlParameters.length === 0) {
    endpoint = "{endpoint}";
    urlParameters.push({
      name: "endpoint",
      type: "string"
    });
  }
  return { endpoint, urlParameters };
}
