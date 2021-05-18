/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ReplicationLinks } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  ReplicationLink,
  ReplicationLinksListByDatabaseOptionalParams,
  ReplicationLinksDeleteOptionalParams,
  ReplicationLinksGetOptionalParams,
  ReplicationLinksGetResponse,
  ReplicationLinksFailoverOptionalParams,
  ReplicationLinksFailoverAllowDataLossOptionalParams,
  UnlinkParameters,
  ReplicationLinksUnlinkOptionalParams,
  ReplicationLinksListByDatabaseResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a ReplicationLinks. */
export class ReplicationLinksImpl implements ReplicationLinks {
  private readonly client: SqlManagementClientContext;

  /**
   * Initialize a new instance of the class ReplicationLinks class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists a database's replication links.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database to retrieve links for.
   * @param options The options parameters.
   */
  public listByDatabase(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: ReplicationLinksListByDatabaseOptionalParams
  ): PagedAsyncIterableIterator<ReplicationLink> {
    const iter = this.listByDatabasePagingAll(
      resourceGroupName,
      serverName,
      databaseName,
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
        return this.listByDatabasePagingPage(
          resourceGroupName,
          serverName,
          databaseName,
          options
        );
      }
    };
  }

  private async *listByDatabasePagingPage(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: ReplicationLinksListByDatabaseOptionalParams
  ): AsyncIterableIterator<ReplicationLink[]> {
    let result = await this._listByDatabase(
      resourceGroupName,
      serverName,
      databaseName,
      options
    );
    yield result.value || [];
  }

  private async *listByDatabasePagingAll(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: ReplicationLinksListByDatabaseOptionalParams
  ): AsyncIterableIterator<ReplicationLink> {
    for await (const page of this.listByDatabasePagingPage(
      resourceGroupName,
      serverName,
      databaseName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Deletes a database replication link. Cannot be done during failover.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database that has the replication link to be dropped.
   * @param linkId The ID of the replication link to be deleted.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    linkId: string,
    options?: ReplicationLinksDeleteOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      databaseName,
      linkId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      deleteOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Gets a database replication link.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database to get the link for.
   * @param linkId The replication link ID to be retrieved.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    linkId: string,
    options?: ReplicationLinksGetOptionalParams
  ): Promise<ReplicationLinksGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      databaseName,
      linkId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<ReplicationLinksGetResponse>;
  }

  /**
   * Sets which replica database is primary by failing over from the current primary replica database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database that has the replication link to be failed over.
   * @param linkId The ID of the replication link to be failed over.
   * @param options The options parameters.
   */
  async beginFailover(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    linkId: string,
    options?: ReplicationLinksFailoverOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      databaseName,
      linkId,
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
      failoverOperationSpec,
      sendOperation
    );
  }

  /**
   * Sets which replica database is primary by failing over from the current primary replica database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database that has the replication link to be failed over.
   * @param linkId The ID of the replication link to be failed over.
   * @param options The options parameters.
   */
  async beginFailoverAndWait(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    linkId: string,
    options?: ReplicationLinksFailoverOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const poller = await this.beginFailover(
      resourceGroupName,
      serverName,
      databaseName,
      linkId,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Sets which replica database is primary by failing over from the current primary replica database.
   * This operation might result in data loss.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database that has the replication link to be failed over.
   * @param linkId The ID of the replication link to be failed over.
   * @param options The options parameters.
   */
  async beginFailoverAllowDataLoss(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    linkId: string,
    options?: ReplicationLinksFailoverAllowDataLossOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      databaseName,
      linkId,
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
      failoverAllowDataLossOperationSpec,
      sendOperation
    );
  }

  /**
   * Sets which replica database is primary by failing over from the current primary replica database.
   * This operation might result in data loss.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database that has the replication link to be failed over.
   * @param linkId The ID of the replication link to be failed over.
   * @param options The options parameters.
   */
  async beginFailoverAllowDataLossAndWait(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    linkId: string,
    options?: ReplicationLinksFailoverAllowDataLossOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const poller = await this.beginFailoverAllowDataLoss(
      resourceGroupName,
      serverName,
      databaseName,
      linkId,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a database replication link in forced or friendly way.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database that has the replication link to be failed over.
   * @param linkId The ID of the replication link to be failed over.
   * @param parameters The required parameters for unlinking replication link.
   * @param options The options parameters.
   */
  async beginUnlink(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    linkId: string,
    parameters: UnlinkParameters,
    options?: ReplicationLinksUnlinkOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      databaseName,
      linkId,
      parameters,
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
      unlinkOperationSpec,
      sendOperation
    );
  }

  /**
   * Deletes a database replication link in forced or friendly way.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database that has the replication link to be failed over.
   * @param linkId The ID of the replication link to be failed over.
   * @param parameters The required parameters for unlinking replication link.
   * @param options The options parameters.
   */
  async beginUnlinkAndWait(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    linkId: string,
    parameters: UnlinkParameters,
    options?: ReplicationLinksUnlinkOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const poller = await this.beginUnlink(
      resourceGroupName,
      serverName,
      databaseName,
      linkId,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists a database's replication links.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database to retrieve links for.
   * @param options The options parameters.
   */
  private _listByDatabase(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: ReplicationLinksListByDatabaseOptionalParams
  ): Promise<ReplicationLinksListByDatabaseResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      databaseName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByDatabaseOperationSpec
    ) as Promise<ReplicationLinksListByDatabaseResponse>;
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

const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/replicationLinks/{linkId}",
  httpMethod: "DELETE",
  responses: { 200: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.linkId
  ],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/replicationLinks/{linkId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ReplicationLink
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.linkId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const failoverOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/replicationLinks/{linkId}/failover",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.linkId
  ],
  serializer
};
const failoverAllowDataLossOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/replicationLinks/{linkId}/forceFailoverAllowDataLoss",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.linkId
  ],
  serializer
};
const unlinkOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/replicationLinks/{linkId}/unlink",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  requestBody: Parameters.parameters14,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.linkId
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByDatabaseOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/replicationLinks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ReplicationLinkListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
