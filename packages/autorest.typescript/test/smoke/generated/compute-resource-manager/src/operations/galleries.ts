/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Galleries } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClient } from "../computeManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  Gallery,
  GalleriesListByResourceGroupNextOptionalParams,
  GalleriesListByResourceGroupOptionalParams,
  GalleriesListByResourceGroupResponse,
  GalleriesListNextOptionalParams,
  GalleriesListOptionalParams,
  GalleriesListResponse,
  GalleriesCreateOrUpdateOptionalParams,
  GalleriesCreateOrUpdateResponse,
  GalleryUpdate,
  GalleriesUpdateOptionalParams,
  GalleriesUpdateResponse,
  GalleriesGetOptionalParams,
  GalleriesGetResponse,
  GalleriesDeleteOptionalParams,
  GalleriesListByResourceGroupNextResponse,
  GalleriesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Galleries operations. */
export class GalleriesImpl implements Galleries {
  private readonly client: ComputeManagementClient;

  /**
   * Initialize a new instance of the class Galleries class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClient) {
    this.client = client;
  }

  /**
   * List galleries under a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: GalleriesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Gallery> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
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
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: GalleriesListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Gallery[]> {
    let result: GalleriesListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: GalleriesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<Gallery> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List galleries under a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: GalleriesListOptionalParams
  ): PagedAsyncIterableIterator<Gallery> {
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
    options?: GalleriesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Gallery[]> {
    let result: GalleriesListResponse;
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
    options?: GalleriesListOptionalParams
  ): AsyncIterableIterator<Gallery> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Create or update a Shared Image Gallery.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery. The allowed characters are alphabets and
   *                    numbers with dots and periods allowed in the middle. The maximum length is 80 characters.
   * @param gallery Parameters supplied to the create or update Shared Image Gallery operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    galleryName: string,
    gallery: Gallery,
    options?: GalleriesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<GalleriesCreateOrUpdateResponse>,
      GalleriesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<GalleriesCreateOrUpdateResponse> => {
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
      { resourceGroupName, galleryName, gallery, options },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update a Shared Image Gallery.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery. The allowed characters are alphabets and
   *                    numbers with dots and periods allowed in the middle. The maximum length is 80 characters.
   * @param gallery Parameters supplied to the create or update Shared Image Gallery operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    galleryName: string,
    gallery: Gallery,
    options?: GalleriesCreateOrUpdateOptionalParams
  ): Promise<GalleriesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      galleryName,
      gallery,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update a Shared Image Gallery.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery. The allowed characters are alphabets and
   *                    numbers with dots and periods allowed in the middle. The maximum length is 80 characters.
   * @param gallery Parameters supplied to the update Shared Image Gallery operation.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    galleryName: string,
    gallery: GalleryUpdate,
    options?: GalleriesUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<GalleriesUpdateResponse>,
      GalleriesUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<GalleriesUpdateResponse> => {
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
      { resourceGroupName, galleryName, gallery, options },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update a Shared Image Gallery.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery. The allowed characters are alphabets and
   *                    numbers with dots and periods allowed in the middle. The maximum length is 80 characters.
   * @param gallery Parameters supplied to the update Shared Image Gallery operation.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    galleryName: string,
    gallery: GalleryUpdate,
    options?: GalleriesUpdateOptionalParams
  ): Promise<GalleriesUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      galleryName,
      gallery,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Retrieves information about a Shared Image Gallery.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    galleryName: string,
    options?: GalleriesGetOptionalParams
  ): Promise<GalleriesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, galleryName, options },
      getOperationSpec
    );
  }

  /**
   * Delete a Shared Image Gallery.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery to be deleted.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    galleryName: string,
    options?: GalleriesDeleteOptionalParams
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
      { resourceGroupName, galleryName, options },
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
   * Delete a Shared Image Gallery.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery to be deleted.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    galleryName: string,
    options?: GalleriesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      galleryName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * List galleries under a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: GalleriesListByResourceGroupOptionalParams
  ): Promise<GalleriesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * List galleries under a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: GalleriesListOptionalParams
  ): Promise<GalleriesListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: GalleriesListByResourceGroupNextOptionalParams
  ): Promise<GalleriesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: GalleriesListNextOptionalParams
  ): Promise<GalleriesListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Gallery
    },
    201: {
      bodyMapper: Mappers.Gallery
    },
    202: {
      bodyMapper: Mappers.Gallery
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.gallery,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.galleryName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Gallery
    },
    201: {
      bodyMapper: Mappers.Gallery
    },
    202: {
      bodyMapper: Mappers.Gallery
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.gallery1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.galleryName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Gallery
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.select1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.galleryName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.galleryName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GalleryList
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
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/galleries",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GalleryList
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
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GalleryList
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
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GalleryList
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
