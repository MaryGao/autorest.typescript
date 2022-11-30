/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { DeletedWebApps } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { WebSiteManagementClient } from "../webSiteManagementClient";
import {
  DeletedSite,
  DeletedWebAppsListNextOptionalParams,
  DeletedWebAppsListOptionalParams,
  DeletedWebAppsListResponse,
  DeletedWebAppsListByLocationNextOptionalParams,
  DeletedWebAppsListByLocationOptionalParams,
  DeletedWebAppsListByLocationResponse,
  DeletedWebAppsGetDeletedWebAppByLocationOptionalParams,
  DeletedWebAppsGetDeletedWebAppByLocationResponse,
  DeletedWebAppsListNextResponse,
  DeletedWebAppsListByLocationNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DeletedWebApps operations. */
export class DeletedWebAppsImpl implements DeletedWebApps {
  private readonly client: WebSiteManagementClient;

  /**
   * Initialize a new instance of the class DeletedWebApps class.
   * @param client Reference to the service client
   */
  constructor(client: WebSiteManagementClient) {
    this.client = client;
  }

  /**
   * Description for Get all deleted apps for a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: DeletedWebAppsListOptionalParams
  ): PagedAsyncIterableIterator<DeletedSite> {
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
    options?: DeletedWebAppsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DeletedSite[]> {
    let result: DeletedWebAppsListResponse;
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
    options?: DeletedWebAppsListOptionalParams
  ): AsyncIterableIterator<DeletedSite> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Description for Get all deleted apps for a subscription at location
   * @param location
   * @param options The options parameters.
   */
  public listByLocation(
    location: string,
    options?: DeletedWebAppsListByLocationOptionalParams
  ): PagedAsyncIterableIterator<DeletedSite> {
    const iter = this.listByLocationPagingAll(location, options);
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
        return this.listByLocationPagingPage(location, options, settings);
      }
    };
  }

  private async *listByLocationPagingPage(
    location: string,
    options?: DeletedWebAppsListByLocationOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DeletedSite[]> {
    let result: DeletedWebAppsListByLocationResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByLocation(location, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByLocationNext(
        location,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByLocationPagingAll(
    location: string,
    options?: DeletedWebAppsListByLocationOptionalParams
  ): AsyncIterableIterator<DeletedSite> {
    for await (const page of this.listByLocationPagingPage(location, options)) {
      yield* page;
    }
  }

  /**
   * Description for Get all deleted apps for a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: DeletedWebAppsListOptionalParams
  ): Promise<DeletedWebAppsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Description for Get all deleted apps for a subscription at location
   * @param location
   * @param options The options parameters.
   */
  private _listByLocation(
    location: string,
    options?: DeletedWebAppsListByLocationOptionalParams
  ): Promise<DeletedWebAppsListByLocationResponse> {
    return this.client.sendOperationRequest(
      { location, options },
      listByLocationOperationSpec
    );
  }

  /**
   * Description for Get deleted app for a subscription at location.
   * @param location
   * @param deletedSiteId The numeric ID of the deleted app, e.g. 12345
   * @param options The options parameters.
   */
  getDeletedWebAppByLocation(
    location: string,
    deletedSiteId: string,
    options?: DeletedWebAppsGetDeletedWebAppByLocationOptionalParams
  ): Promise<DeletedWebAppsGetDeletedWebAppByLocationResponse> {
    return this.client.sendOperationRequest(
      { location, deletedSiteId, options },
      getDeletedWebAppByLocationOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: DeletedWebAppsListNextOptionalParams
  ): Promise<DeletedWebAppsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListByLocationNext
   * @param location
   * @param nextLink The nextLink from the previous successful call to the ListByLocation method.
   * @param options The options parameters.
   */
  private _listByLocationNext(
    location: string,
    nextLink: string,
    options?: DeletedWebAppsListByLocationNextOptionalParams
  ): Promise<DeletedWebAppsListByLocationNextResponse> {
    return this.client.sendOperationRequest(
      { location, nextLink, options },
      listByLocationNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Web/deletedSites",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedWebAppCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByLocationOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Web/locations/{location}/deletedSites",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedWebAppCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getDeletedWebAppByLocationOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Web/locations/{location}/deletedSites/{deletedSiteId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedSite
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
    Parameters.deletedSiteId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedWebAppCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByLocationNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedWebAppCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
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
