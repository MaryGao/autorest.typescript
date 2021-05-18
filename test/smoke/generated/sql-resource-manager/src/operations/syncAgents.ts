/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SyncAgents } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  SyncAgent,
  SyncAgentsListByServerNextOptionalParams,
  SyncAgentsListByServerOptionalParams,
  SyncAgentLinkedDatabase,
  SyncAgentsListLinkedDatabasesNextOptionalParams,
  SyncAgentsListLinkedDatabasesOptionalParams,
  SyncAgentsGetOptionalParams,
  SyncAgentsGetResponse,
  SyncAgentsCreateOrUpdateOptionalParams,
  SyncAgentsCreateOrUpdateResponse,
  SyncAgentsDeleteOptionalParams,
  SyncAgentsListByServerResponse,
  SyncAgentsGenerateKeyOptionalParams,
  SyncAgentsGenerateKeyResponse,
  SyncAgentsListLinkedDatabasesResponse,
  SyncAgentsListByServerNextResponse,
  SyncAgentsListLinkedDatabasesNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a SyncAgents. */
export class SyncAgentsImpl implements SyncAgents {
  private readonly client: SqlManagementClientContext;

  /**
   * Initialize a new instance of the class SyncAgents class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists sync agents in a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param options The options parameters.
   */
  public listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: SyncAgentsListByServerOptionalParams
  ): PagedAsyncIterableIterator<SyncAgent> {
    const iter = this.listByServerPagingAll(
      resourceGroupName,
      serverName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByServerPagingPage(
          resourceGroupName,
          serverName,
          options
        );
      }
    };
  }

  private async *listByServerPagingPage(
    resourceGroupName: string,
    serverName: string,
    options?: SyncAgentsListByServerOptionalParams
  ): AsyncIterableIterator<SyncAgent[]> {
    let result = await this._listByServer(
      resourceGroupName,
      serverName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByServerNext(
        resourceGroupName,
        serverName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByServerPagingAll(
    resourceGroupName: string,
    serverName: string,
    options?: SyncAgentsListByServerOptionalParams
  ): AsyncIterableIterator<SyncAgent> {
    for await (const page of this.listByServerPagingPage(
      resourceGroupName,
      serverName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists databases linked to a sync agent.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param syncAgentName The name of the sync agent.
   * @param options The options parameters.
   */
  public listLinkedDatabases(
    resourceGroupName: string,
    serverName: string,
    syncAgentName: string,
    options?: SyncAgentsListLinkedDatabasesOptionalParams
  ): PagedAsyncIterableIterator<SyncAgentLinkedDatabase> {
    const iter = this.listLinkedDatabasesPagingAll(
      resourceGroupName,
      serverName,
      syncAgentName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listLinkedDatabasesPagingPage(
          resourceGroupName,
          serverName,
          syncAgentName,
          options
        );
      }
    };
  }

  private async *listLinkedDatabasesPagingPage(
    resourceGroupName: string,
    serverName: string,
    syncAgentName: string,
    options?: SyncAgentsListLinkedDatabasesOptionalParams
  ): AsyncIterableIterator<SyncAgentLinkedDatabase[]> {
    let result = await this._listLinkedDatabases(
      resourceGroupName,
      serverName,
      syncAgentName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listLinkedDatabasesNext(
        resourceGroupName,
        serverName,
        syncAgentName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listLinkedDatabasesPagingAll(
    resourceGroupName: string,
    serverName: string,
    syncAgentName: string,
    options?: SyncAgentsListLinkedDatabasesOptionalParams
  ): AsyncIterableIterator<SyncAgentLinkedDatabase> {
    for await (const page of this.listLinkedDatabasesPagingPage(
      resourceGroupName,
      serverName,
      syncAgentName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a sync agent.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param syncAgentName The name of the sync agent.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    syncAgentName: string,
    options?: SyncAgentsGetOptionalParams
  ): Promise<SyncAgentsGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      syncAgentName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<SyncAgentsGetResponse>;
  }

  /**
   * Creates or updates a sync agent.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param syncAgentName The name of the sync agent.
   * @param parameters The requested sync agent resource state.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    syncAgentName: string,
    parameters: SyncAgent,
    options?: SyncAgentsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SyncAgentsCreateOrUpdateResponse>,
      SyncAgentsCreateOrUpdateResponse
    >
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      syncAgentName,
      parameters,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        SyncAgentsCreateOrUpdateResponse
      >;
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      operationArguments,
      createOrUpdateOperationSpec,
      sendOperation
    );
  }

  /**
   * Creates or updates a sync agent.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param syncAgentName The name of the sync agent.
   * @param parameters The requested sync agent resource state.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    syncAgentName: string,
    parameters: SyncAgent,
    options?: SyncAgentsCreateOrUpdateOptionalParams
  ): Promise<SyncAgentsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      serverName,
      syncAgentName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a sync agent.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param syncAgentName The name of the sync agent.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    serverName: string,
    syncAgentName: string,
    options?: SyncAgentsDeleteOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      syncAgentName,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      operationArguments,
      deleteOperationSpec,
      sendOperation
    );
  }

  /**
   * Deletes a sync agent.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param syncAgentName The name of the sync agent.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    serverName: string,
    syncAgentName: string,
    options?: SyncAgentsDeleteOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      serverName,
      syncAgentName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists sync agents in a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param options The options parameters.
   */
  private _listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: SyncAgentsListByServerOptionalParams
  ): Promise<SyncAgentsListByServerResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByServerOperationSpec
    ) as Promise<SyncAgentsListByServerResponse>;
  }

  /**
   * Generates a sync agent key.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param syncAgentName The name of the sync agent.
   * @param options The options parameters.
   */
  generateKey(
    resourceGroupName: string,
    serverName: string,
    syncAgentName: string,
    options?: SyncAgentsGenerateKeyOptionalParams
  ): Promise<SyncAgentsGenerateKeyResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      syncAgentName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      generateKeyOperationSpec
    ) as Promise<SyncAgentsGenerateKeyResponse>;
  }

  /**
   * Lists databases linked to a sync agent.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param syncAgentName The name of the sync agent.
   * @param options The options parameters.
   */
  private _listLinkedDatabases(
    resourceGroupName: string,
    serverName: string,
    syncAgentName: string,
    options?: SyncAgentsListLinkedDatabasesOptionalParams
  ): Promise<SyncAgentsListLinkedDatabasesResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      syncAgentName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listLinkedDatabasesOperationSpec
    ) as Promise<SyncAgentsListLinkedDatabasesResponse>;
  }

  /**
   * ListByServerNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param nextLink The nextLink from the previous successful call to the ListByServer method.
   * @param options The options parameters.
   */
  private _listByServerNext(
    resourceGroupName: string,
    serverName: string,
    nextLink: string,
    options?: SyncAgentsListByServerNextOptionalParams
  ): Promise<SyncAgentsListByServerNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByServerNextOperationSpec
    ) as Promise<SyncAgentsListByServerNextResponse>;
  }

  /**
   * ListLinkedDatabasesNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param syncAgentName The name of the sync agent.
   * @param nextLink The nextLink from the previous successful call to the ListLinkedDatabases method.
   * @param options The options parameters.
   */
  private _listLinkedDatabasesNext(
    resourceGroupName: string,
    serverName: string,
    syncAgentName: string,
    nextLink: string,
    options?: SyncAgentsListLinkedDatabasesNextOptionalParams
  ): Promise<SyncAgentsListLinkedDatabasesNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      syncAgentName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listLinkedDatabasesNextOperationSpec
    ) as Promise<SyncAgentsListLinkedDatabasesNextResponse>;
  }

  private getOperationOptions<TOptions extends coreHttp.OperationOptions>(
    options: TOptions | undefined,
    finalStateVia?: string
  ): coreHttp.RequestOptionsBase {
    const operationOptions: coreHttp.OperationOptions = options || {};
    operationOptions.requestOptions = {
      ...operationOptions.requestOptions,
      shouldDeserialize: shouldDeserializeLRO(finalStateVia)
    };
    return coreHttp.operationOptionsToRequestOptionsBase(operationOptions);
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/syncAgents/{syncAgentName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SyncAgent
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.syncAgentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/syncAgents/{syncAgentName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SyncAgent
    },
    201: {
      bodyMapper: Mappers.SyncAgent
    },
    202: {
      bodyMapper: Mappers.SyncAgent
    },
    204: {
      bodyMapper: Mappers.SyncAgent
    },
    default: {}
  },
  requestBody: Parameters.parameters22,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.syncAgentName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/syncAgents/{syncAgentName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.syncAgentName
  ],
  serializer
};
const listByServerOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/syncAgents",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SyncAgentListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const generateKeyOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/syncAgents/{syncAgentName}/generateKey",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SyncAgentKeyProperties
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.syncAgentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listLinkedDatabasesOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/syncAgents/{syncAgentName}/linkedDatabases",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SyncAgentLinkedDatabaseListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.syncAgentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByServerNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SyncAgentListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listLinkedDatabasesNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SyncAgentLinkedDatabaseListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.nextLink,
    Parameters.syncAgentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
