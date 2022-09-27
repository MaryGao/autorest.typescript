/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { InstanceFailoverGroups } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  InstanceFailoverGroup,
  InstanceFailoverGroupsListByLocationNextOptionalParams,
  InstanceFailoverGroupsListByLocationOptionalParams,
  InstanceFailoverGroupsGetOptionalParams,
  InstanceFailoverGroupsGetResponse,
  InstanceFailoverGroupsCreateOrUpdateOptionalParams,
  InstanceFailoverGroupsCreateOrUpdateResponse,
  InstanceFailoverGroupsDeleteOptionalParams,
  InstanceFailoverGroupsListByLocationResponse,
  InstanceFailoverGroupsFailoverOptionalParams,
  InstanceFailoverGroupsFailoverResponse,
  InstanceFailoverGroupsForceFailoverAllowDataLossOptionalParams,
  InstanceFailoverGroupsForceFailoverAllowDataLossResponse,
  InstanceFailoverGroupsListByLocationNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing InstanceFailoverGroups operations. */
export class InstanceFailoverGroupsImpl implements InstanceFailoverGroups {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class InstanceFailoverGroups class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Lists the failover groups in a location.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The name of the region where the resource is located.
   * @param options The options parameters.
   */
  public listByLocation(
    resourceGroupName: string,
    locationName: string,
    options?: InstanceFailoverGroupsListByLocationOptionalParams
  ): PagedAsyncIterableIterator<InstanceFailoverGroup> {
    const iter = this.listByLocationPagingAll(
      resourceGroupName,
      locationName,
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
        return this.listByLocationPagingPage(
          resourceGroupName,
          locationName,
          options
        );
      }
    };
  }

  private async *listByLocationPagingPage(
    resourceGroupName: string,
    locationName: string,
    options?: InstanceFailoverGroupsListByLocationOptionalParams
  ): AsyncIterableIterator<InstanceFailoverGroup[]> {
    let result = await this._listByLocation(
      resourceGroupName,
      locationName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByLocationNext(
        resourceGroupName,
        locationName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByLocationPagingAll(
    resourceGroupName: string,
    locationName: string,
    options?: InstanceFailoverGroupsListByLocationOptionalParams
  ): AsyncIterableIterator<InstanceFailoverGroup> {
    for await (const page of this.listByLocationPagingPage(
      resourceGroupName,
      locationName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a failover group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The name of the region where the resource is located.
   * @param failoverGroupName The name of the failover group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    locationName: string,
    failoverGroupName: string,
    options?: InstanceFailoverGroupsGetOptionalParams
  ): Promise<InstanceFailoverGroupsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, locationName, failoverGroupName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a failover group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The name of the region where the resource is located.
   * @param failoverGroupName The name of the failover group.
   * @param parameters The failover group parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    locationName: string,
    failoverGroupName: string,
    parameters: InstanceFailoverGroup,
    options?: InstanceFailoverGroupsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<InstanceFailoverGroupsCreateOrUpdateResponse>,
      InstanceFailoverGroupsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<InstanceFailoverGroupsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        locationName,
        failoverGroupName,
        parameters,
        options
      },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      InstanceFailoverGroupsCreateOrUpdateResponse,
      OperationState<InstanceFailoverGroupsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a failover group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The name of the region where the resource is located.
   * @param failoverGroupName The name of the failover group.
   * @param parameters The failover group parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    locationName: string,
    failoverGroupName: string,
    parameters: InstanceFailoverGroup,
    options?: InstanceFailoverGroupsCreateOrUpdateOptionalParams
  ): Promise<InstanceFailoverGroupsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      locationName,
      failoverGroupName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a failover group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The name of the region where the resource is located.
   * @param failoverGroupName The name of the failover group.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    locationName: string,
    failoverGroupName: string,
    options?: InstanceFailoverGroupsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, locationName, failoverGroupName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes a failover group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The name of the region where the resource is located.
   * @param failoverGroupName The name of the failover group.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    locationName: string,
    failoverGroupName: string,
    options?: InstanceFailoverGroupsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      locationName,
      failoverGroupName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists the failover groups in a location.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The name of the region where the resource is located.
   * @param options The options parameters.
   */
  private _listByLocation(
    resourceGroupName: string,
    locationName: string,
    options?: InstanceFailoverGroupsListByLocationOptionalParams
  ): Promise<InstanceFailoverGroupsListByLocationResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, locationName, options },
      listByLocationOperationSpec
    );
  }

  /**
   * Fails over from the current primary managed instance to this managed instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The name of the region where the resource is located.
   * @param failoverGroupName The name of the failover group.
   * @param options The options parameters.
   */
  async beginFailover(
    resourceGroupName: string,
    locationName: string,
    failoverGroupName: string,
    options?: InstanceFailoverGroupsFailoverOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<InstanceFailoverGroupsFailoverResponse>,
      InstanceFailoverGroupsFailoverResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<InstanceFailoverGroupsFailoverResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, locationName, failoverGroupName, options },
      spec: failoverOperationSpec
    });
    const poller = await createHttpPoller<
      InstanceFailoverGroupsFailoverResponse,
      OperationState<InstanceFailoverGroupsFailoverResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Fails over from the current primary managed instance to this managed instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The name of the region where the resource is located.
   * @param failoverGroupName The name of the failover group.
   * @param options The options parameters.
   */
  async beginFailoverAndWait(
    resourceGroupName: string,
    locationName: string,
    failoverGroupName: string,
    options?: InstanceFailoverGroupsFailoverOptionalParams
  ): Promise<InstanceFailoverGroupsFailoverResponse> {
    const poller = await this.beginFailover(
      resourceGroupName,
      locationName,
      failoverGroupName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Fails over from the current primary managed instance to this managed instance. This operation might
   * result in data loss.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The name of the region where the resource is located.
   * @param failoverGroupName The name of the failover group.
   * @param options The options parameters.
   */
  async beginForceFailoverAllowDataLoss(
    resourceGroupName: string,
    locationName: string,
    failoverGroupName: string,
    options?: InstanceFailoverGroupsForceFailoverAllowDataLossOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<InstanceFailoverGroupsForceFailoverAllowDataLossResponse>,
      InstanceFailoverGroupsForceFailoverAllowDataLossResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<InstanceFailoverGroupsForceFailoverAllowDataLossResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, locationName, failoverGroupName, options },
      spec: forceFailoverAllowDataLossOperationSpec
    });
    const poller = await createHttpPoller<
      InstanceFailoverGroupsForceFailoverAllowDataLossResponse,
      OperationState<InstanceFailoverGroupsForceFailoverAllowDataLossResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Fails over from the current primary managed instance to this managed instance. This operation might
   * result in data loss.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The name of the region where the resource is located.
   * @param failoverGroupName The name of the failover group.
   * @param options The options parameters.
   */
  async beginForceFailoverAllowDataLossAndWait(
    resourceGroupName: string,
    locationName: string,
    failoverGroupName: string,
    options?: InstanceFailoverGroupsForceFailoverAllowDataLossOptionalParams
  ): Promise<InstanceFailoverGroupsForceFailoverAllowDataLossResponse> {
    const poller = await this.beginForceFailoverAllowDataLoss(
      resourceGroupName,
      locationName,
      failoverGroupName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByLocationNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param locationName The name of the region where the resource is located.
   * @param nextLink The nextLink from the previous successful call to the ListByLocation method.
   * @param options The options parameters.
   */
  private _listByLocationNext(
    resourceGroupName: string,
    locationName: string,
    nextLink: string,
    options?: InstanceFailoverGroupsListByLocationNextOptionalParams
  ): Promise<InstanceFailoverGroupsListByLocationNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, locationName, nextLink, options },
      listByLocationNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/instanceFailoverGroups/{failoverGroupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.InstanceFailoverGroup
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.locationName,
    Parameters.failoverGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/instanceFailoverGroups/{failoverGroupName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.InstanceFailoverGroup
    },
    201: {
      bodyMapper: Mappers.InstanceFailoverGroup
    },
    202: {
      bodyMapper: Mappers.InstanceFailoverGroup
    },
    204: {
      bodyMapper: Mappers.InstanceFailoverGroup
    },
    default: {}
  },
  requestBody: Parameters.parameters27,
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.locationName,
    Parameters.failoverGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/instanceFailoverGroups/{failoverGroupName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.locationName,
    Parameters.failoverGroupName
  ],
  serializer
};
const listByLocationOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/instanceFailoverGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.InstanceFailoverGroupListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.locationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const failoverOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/instanceFailoverGroups/{failoverGroupName}/failover",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.InstanceFailoverGroup
    },
    201: {
      bodyMapper: Mappers.InstanceFailoverGroup
    },
    202: {
      bodyMapper: Mappers.InstanceFailoverGroup
    },
    204: {
      bodyMapper: Mappers.InstanceFailoverGroup
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.locationName,
    Parameters.failoverGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const forceFailoverAllowDataLossOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/instanceFailoverGroups/{failoverGroupName}/forceFailoverAllowDataLoss",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.InstanceFailoverGroup
    },
    201: {
      bodyMapper: Mappers.InstanceFailoverGroup
    },
    202: {
      bodyMapper: Mappers.InstanceFailoverGroup
    },
    204: {
      bodyMapper: Mappers.InstanceFailoverGroup
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.locationName,
    Parameters.failoverGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByLocationNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.InstanceFailoverGroupListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.locationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
