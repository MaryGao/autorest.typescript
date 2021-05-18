/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ServerSecurityAlertPolicies } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  ServerSecurityAlertPolicy,
  ServerSecurityAlertPoliciesListByServerNextOptionalParams,
  ServerSecurityAlertPoliciesListByServerOptionalParams,
  SecurityAlertPolicyNameAutoGenerated,
  ServerSecurityAlertPoliciesGetOptionalParams,
  ServerSecurityAlertPoliciesGetResponse,
  ServerSecurityAlertPoliciesCreateOrUpdateOptionalParams,
  ServerSecurityAlertPoliciesCreateOrUpdateResponse,
  ServerSecurityAlertPoliciesListByServerResponse,
  ServerSecurityAlertPoliciesListByServerNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a ServerSecurityAlertPolicies. */
export class ServerSecurityAlertPoliciesImpl
  implements ServerSecurityAlertPolicies {
  private readonly client: SqlManagementClientContext;

  /**
   * Initialize a new instance of the class ServerSecurityAlertPolicies class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Get the server's threat detection policies.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  public listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ServerSecurityAlertPoliciesListByServerOptionalParams
  ): PagedAsyncIterableIterator<ServerSecurityAlertPolicy> {
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
    options?: ServerSecurityAlertPoliciesListByServerOptionalParams
  ): AsyncIterableIterator<ServerSecurityAlertPolicy[]> {
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
    options?: ServerSecurityAlertPoliciesListByServerOptionalParams
  ): AsyncIterableIterator<ServerSecurityAlertPolicy> {
    for await (const page of this.listByServerPagingPage(
      resourceGroupName,
      serverName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get a server's security alert policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param securityAlertPolicyName The name of the security alert policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    securityAlertPolicyName: SecurityAlertPolicyNameAutoGenerated,
    options?: ServerSecurityAlertPoliciesGetOptionalParams
  ): Promise<ServerSecurityAlertPoliciesGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      securityAlertPolicyName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<ServerSecurityAlertPoliciesGetResponse>;
  }

  /**
   * Creates or updates a threat detection policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param securityAlertPolicyName The name of the threat detection policy.
   * @param parameters The server security alert policy.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    securityAlertPolicyName: SecurityAlertPolicyNameAutoGenerated,
    parameters: ServerSecurityAlertPolicy,
    options?: ServerSecurityAlertPoliciesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ServerSecurityAlertPoliciesCreateOrUpdateResponse>,
      ServerSecurityAlertPoliciesCreateOrUpdateResponse
    >
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      securityAlertPolicyName,
      parameters,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        ServerSecurityAlertPoliciesCreateOrUpdateResponse
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
   * Creates or updates a threat detection policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param securityAlertPolicyName The name of the threat detection policy.
   * @param parameters The server security alert policy.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    securityAlertPolicyName: SecurityAlertPolicyNameAutoGenerated,
    parameters: ServerSecurityAlertPolicy,
    options?: ServerSecurityAlertPoliciesCreateOrUpdateOptionalParams
  ): Promise<ServerSecurityAlertPoliciesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      serverName,
      securityAlertPolicyName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Get the server's threat detection policies.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  private _listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ServerSecurityAlertPoliciesListByServerOptionalParams
  ): Promise<ServerSecurityAlertPoliciesListByServerResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByServerOperationSpec
    ) as Promise<ServerSecurityAlertPoliciesListByServerResponse>;
  }

  /**
   * ListByServerNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param nextLink The nextLink from the previous successful call to the ListByServer method.
   * @param options The options parameters.
   */
  private _listByServerNext(
    resourceGroupName: string,
    serverName: string,
    nextLink: string,
    options?: ServerSecurityAlertPoliciesListByServerNextOptionalParams
  ): Promise<ServerSecurityAlertPoliciesListByServerNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByServerNextOperationSpec
    ) as Promise<ServerSecurityAlertPoliciesListByServerNextResponse>;
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/securityAlertPolicies/{securityAlertPolicyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerSecurityAlertPolicy
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.securityAlertPolicyName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/securityAlertPolicies/{securityAlertPolicyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ServerSecurityAlertPolicy
    },
    201: {
      bodyMapper: Mappers.ServerSecurityAlertPolicy
    },
    202: {
      bodyMapper: Mappers.ServerSecurityAlertPolicy
    },
    204: {
      bodyMapper: Mappers.ServerSecurityAlertPolicy
    },
    default: {}
  },
  requestBody: Parameters.parameters43,
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.securityAlertPolicyName1
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByServerOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/securityAlertPolicies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogicalServerSecurityAlertPolicyListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByServerNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogicalServerSecurityAlertPolicyListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion4],
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
