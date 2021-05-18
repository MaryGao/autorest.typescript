/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { VirtualWans } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  VirtualWAN,
  VirtualWansListByResourceGroupNextOptionalParams,
  VirtualWansListByResourceGroupOptionalParams,
  VirtualWansListNextOptionalParams,
  VirtualWansListOptionalParams,
  VirtualWansGetOptionalParams,
  VirtualWansGetResponse,
  VirtualWansCreateOrUpdateOptionalParams,
  VirtualWansCreateOrUpdateResponse,
  TagsObject,
  VirtualWansUpdateTagsOptionalParams,
  VirtualWansUpdateTagsResponse,
  VirtualWansDeleteOptionalParams,
  VirtualWansListByResourceGroupResponse,
  VirtualWansListResponse,
  VirtualWansListByResourceGroupNextResponse,
  VirtualWansListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a VirtualWans. */
export class VirtualWansImpl implements VirtualWans {
  private readonly client: NetworkManagementClientContext;

  /**
   * Initialize a new instance of the class VirtualWans class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all the VirtualWANs in a resource group.
   * @param resourceGroupName The resource group name of the VirtualWan.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: VirtualWansListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<VirtualWAN> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: VirtualWansListByResourceGroupOptionalParams
  ): AsyncIterableIterator<VirtualWAN[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: VirtualWansListByResourceGroupOptionalParams
  ): AsyncIterableIterator<VirtualWAN> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all the VirtualWANs in a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: VirtualWansListOptionalParams
  ): PagedAsyncIterableIterator<VirtualWAN> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: VirtualWansListOptionalParams
  ): AsyncIterableIterator<VirtualWAN[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: VirtualWansListOptionalParams
  ): AsyncIterableIterator<VirtualWAN> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Retrieves the details of a VirtualWAN.
   * @param resourceGroupName The resource group name of the VirtualWan.
   * @param virtualWANName The name of the VirtualWAN being retrieved.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    virtualWANName: string,
    options?: VirtualWansGetOptionalParams
  ): Promise<VirtualWansGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      virtualWANName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<VirtualWansGetResponse>;
  }

  /**
   * Creates a VirtualWAN resource if it doesn't exist else updates the existing VirtualWAN.
   * @param resourceGroupName The resource group name of the VirtualWan.
   * @param virtualWANName The name of the VirtualWAN being created or updated.
   * @param wANParameters Parameters supplied to create or update VirtualWAN.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    virtualWANName: string,
    wANParameters: VirtualWAN,
    options?: VirtualWansCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualWansCreateOrUpdateResponse>,
      VirtualWansCreateOrUpdateResponse
    >
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      virtualWANName,
      wANParameters,
      options: this.getOperationOptions(options, "azure-async-operation")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        VirtualWansCreateOrUpdateResponse
      >;
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      operationArguments,
      createOrUpdateOperationSpec,
      sendOperation,
      "azure-async-operation"
    );
  }

  /**
   * Creates a VirtualWAN resource if it doesn't exist else updates the existing VirtualWAN.
   * @param resourceGroupName The resource group name of the VirtualWan.
   * @param virtualWANName The name of the VirtualWAN being created or updated.
   * @param wANParameters Parameters supplied to create or update VirtualWAN.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    virtualWANName: string,
    wANParameters: VirtualWAN,
    options?: VirtualWansCreateOrUpdateOptionalParams
  ): Promise<VirtualWansCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      virtualWANName,
      wANParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates a VirtualWAN tags.
   * @param resourceGroupName The resource group name of the VirtualWan.
   * @param virtualWANName The name of the VirtualWAN being updated.
   * @param wANParameters Parameters supplied to Update VirtualWAN tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    virtualWANName: string,
    wANParameters: TagsObject,
    options?: VirtualWansUpdateTagsOptionalParams
  ): Promise<VirtualWansUpdateTagsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      virtualWANName,
      wANParameters,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      updateTagsOperationSpec
    ) as Promise<VirtualWansUpdateTagsResponse>;
  }

  /**
   * Deletes a VirtualWAN.
   * @param resourceGroupName The resource group name of the VirtualWan.
   * @param virtualWANName The name of the VirtualWAN being deleted.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    virtualWANName: string,
    options?: VirtualWansDeleteOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      virtualWANName,
      options: this.getOperationOptions(options, "location")
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
      sendOperation,
      "location"
    );
  }

  /**
   * Deletes a VirtualWAN.
   * @param resourceGroupName The resource group name of the VirtualWan.
   * @param virtualWANName The name of the VirtualWAN being deleted.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    virtualWANName: string,
    options?: VirtualWansDeleteOptionalParams
  ): Promise<coreHttp.RestResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      virtualWANName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists all the VirtualWANs in a resource group.
   * @param resourceGroupName The resource group name of the VirtualWan.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: VirtualWansListByResourceGroupOptionalParams
  ): Promise<VirtualWansListByResourceGroupResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByResourceGroupOperationSpec
    ) as Promise<VirtualWansListByResourceGroupResponse>;
  }

  /**
   * Lists all the VirtualWANs in a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: VirtualWansListOptionalParams
  ): Promise<VirtualWansListResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOperationSpec
    ) as Promise<VirtualWansListResponse>;
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The resource group name of the VirtualWan.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: VirtualWansListByResourceGroupNextOptionalParams
  ): Promise<VirtualWansListByResourceGroupNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByResourceGroupNextOperationSpec
    ) as Promise<VirtualWansListByResourceGroupNextResponse>;
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: VirtualWansListNextOptionalParams
  ): Promise<VirtualWansListNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listNextOperationSpec
    ) as Promise<VirtualWansListNextResponse>;
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualWans/{VirtualWANName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualWAN
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.virtualWANName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualWans/{VirtualWANName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualWAN
    },
    201: {
      bodyMapper: Mappers.VirtualWAN
    },
    202: {
      bodyMapper: Mappers.VirtualWAN
    },
    204: {
      bodyMapper: Mappers.VirtualWAN
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.wANParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.virtualWANName1
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateTagsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualWans/{VirtualWANName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualWAN
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.wANParameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.virtualWANName1
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualWans/{VirtualWANName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.virtualWANName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualWans",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListVirtualWANsResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/virtualWans",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListVirtualWANsResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListVirtualWANsResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListVirtualWANsResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
