/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { SharedGalleries } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClient } from "../computeManagementClient";
import {
  SharedGallery,
  SharedGalleriesListNextOptionalParams,
  SharedGalleriesListOptionalParams,
  SharedGalleriesListResponse,
  SharedGalleriesGetOptionalParams,
  SharedGalleriesGetResponse,
  SharedGalleriesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SharedGalleries operations. */
export class SharedGalleriesImpl implements SharedGalleries {
  private readonly client: ComputeManagementClient;

  /**
   * Initialize a new instance of the class SharedGalleries class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClient) {
    this.client = client;
  }

  /**
   * List shared galleries by subscription id or tenant id.
   * @param location Resource location.
   * @param options The options parameters.
   */
  public list(
    location: string,
    options?: SharedGalleriesListOptionalParams
  ): PagedAsyncIterableIterator<SharedGallery> {
    const iter = this.listPagingAll(location, options);
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
        return this.listPagingPage(location, options, settings);
      }
    };
  }

  private async *listPagingPage(
    location: string,
    options?: SharedGalleriesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<SharedGallery[]> {
    let result: SharedGalleriesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(location, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(location, continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    location: string,
    options?: SharedGalleriesListOptionalParams
  ): AsyncIterableIterator<SharedGallery> {
    for await (const page of this.listPagingPage(location, options)) {
      yield* page;
    }
  }

  /**
   * List shared galleries by subscription id or tenant id.
   * @param location Resource location.
   * @param options The options parameters.
   */
  private _list(
    location: string,
    options?: SharedGalleriesListOptionalParams
  ): Promise<SharedGalleriesListResponse> {
    return this.client.sendOperationRequest(
      { location, options },
      listOperationSpec
    );
  }

  /**
   * Get a shared gallery by subscription id or tenant id.
   * @param location Resource location.
   * @param galleryUniqueName The unique name of the Shared Gallery.
   * @param options The options parameters.
   */
  get(
    location: string,
    galleryUniqueName: string,
    options?: SharedGalleriesGetOptionalParams
  ): Promise<SharedGalleriesGetResponse> {
    return this.client.sendOperationRequest(
      { location, galleryUniqueName, options },
      getOperationSpec
    );
  }

  /**
   * ListNext
   * @param location Resource location.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    location: string,
    nextLink: string,
    options?: SharedGalleriesListNextOptionalParams
  ): Promise<SharedGalleriesListNextResponse> {
    return this.client.sendOperationRequest(
      { location, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/sharedGalleries",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SharedGalleryList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.sharedTo],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/sharedGalleries/{galleryUniqueName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SharedGallery
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
    Parameters.galleryUniqueName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SharedGalleryList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
