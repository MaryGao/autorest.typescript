/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ResourceGroups } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ResourceManagementClient } from "../resourceManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  ResourceGroup,
  ResourceGroupsListNextOptionalParams,
  ResourceGroupsListOptionalParams,
  ResourceGroupsListResponse,
  ResourceGroupsCheckExistenceOptionalParams,
  ResourceGroupsCreateOrUpdateOptionalParams,
  ResourceGroupsCreateOrUpdateResponse,
  ResourceGroupsDeleteOptionalParams,
  ResourceGroupsGetOptionalParams,
  ResourceGroupsGetResponse,
  ResourceGroupPatchable,
  ResourceGroupsUpdateOptionalParams,
  ResourceGroupsUpdateResponse,
  ExportTemplateRequest,
  ResourceGroupsExportTemplateOptionalParams,
  ResourceGroupsExportTemplateResponse,
  ResourceGroupsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ResourceGroups operations. */
export class ResourceGroupsImpl implements ResourceGroups {
  private readonly client: ResourceManagementClient;

  /**
   * Initialize a new instance of the class ResourceGroups class.
   * @param client Reference to the service client
   */
  constructor(client: ResourceManagementClient) {
    this.client = client;
  }

  /**
   * Gets all the resource groups for a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: ResourceGroupsListOptionalParams
  ): PagedAsyncIterableIterator<ResourceGroup> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(options, settings);
      }
    };
  }

  private async *listPagingPage(
    options?: ResourceGroupsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ResourceGroup[]> {
    let result: ResourceGroupsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: ResourceGroupsListOptionalParams
  ): AsyncIterableIterator<ResourceGroup> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Checks whether a resource group exists.
   * @param resourceGroupName The name of the resource group to check. The name is case insensitive.
   * @param options The options parameters.
   */
  checkExistence(
    resourceGroupName: string,
    options?: ResourceGroupsCheckExistenceOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      checkExistenceOperationSpec
    );
  }

  /**
   * Creates or updates a resource group.
   * @param resourceGroupName The name of the resource group to create or update. Can include
   *                          alphanumeric, underscore, parentheses, hyphen, period (except at end), and Unicode characters that
   *                          match the allowed characters.
   * @param parameters Parameters supplied to the create or update a resource group.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    parameters: ResourceGroup,
    options?: ResourceGroupsCreateOrUpdateOptionalParams
  ): Promise<ResourceGroupsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * When you delete a resource group, all of its resources are also deleted. Deleting a resource group
   * deletes all of its template deployments and currently stored operations.
   * @param resourceGroupName The name of the resource group to delete. The name is case insensitive.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    options?: ResourceGroupsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
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

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * When you delete a resource group, all of its resources are also deleted. Deleting a resource group
   * deletes all of its template deployments and currently stored operations.
   * @param resourceGroupName The name of the resource group to delete. The name is case insensitive.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    options?: ResourceGroupsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(resourceGroupName, options);
    return poller.pollUntilDone();
  }

  /**
   * Gets a resource group.
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    options?: ResourceGroupsGetOptionalParams
  ): Promise<ResourceGroupsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      getOperationSpec
    );
  }

  /**
   * Resource groups can be updated through a simple PATCH operation to a group address. The format of
   * the request is the same as that for creating a resource group. If a field is unspecified, the
   * current value is retained.
   * @param resourceGroupName The name of the resource group to update. The name is case insensitive.
   * @param parameters Parameters supplied to update a resource group.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    parameters: ResourceGroupPatchable,
    options?: ResourceGroupsUpdateOptionalParams
  ): Promise<ResourceGroupsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, parameters, options },
      updateOperationSpec
    );
  }

  /**
   * Captures the specified resource group as a template.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param parameters Parameters for exporting the template.
   * @param options The options parameters.
   */
  async beginExportTemplate(
    resourceGroupName: string,
    parameters: ExportTemplateRequest,
    options?: ResourceGroupsExportTemplateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ResourceGroupsExportTemplateResponse>,
      ResourceGroupsExportTemplateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ResourceGroupsExportTemplateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
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

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, parameters, options },
      exportTemplateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Captures the specified resource group as a template.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param parameters Parameters for exporting the template.
   * @param options The options parameters.
   */
  async beginExportTemplateAndWait(
    resourceGroupName: string,
    parameters: ExportTemplateRequest,
    options?: ResourceGroupsExportTemplateOptionalParams
  ): Promise<ResourceGroupsExportTemplateResponse> {
    const poller = await this.beginExportTemplate(
      resourceGroupName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets all the resource groups for a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: ResourceGroupsListOptionalParams
  ): Promise<ResourceGroupsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: ResourceGroupsListNextOptionalParams
  ): Promise<ResourceGroupsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const checkExistenceOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}",
  httpMethod: "HEAD",
  responses: {
    204: {},
    404: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceGroup
    },
    201: {
      bodyMapper: Mappers.ResourceGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters5,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}",
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
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters6,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const exportTemplateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/exportTemplate",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceGroupExportResult
    },
    201: {
      bodyMapper: Mappers.ResourceGroupExportResult
    },
    202: {
      bodyMapper: Mappers.ResourceGroupExportResult
    },
    204: {
      bodyMapper: Mappers.ResourceGroupExportResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters7,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourcegroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceGroupListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.top],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceGroupListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
