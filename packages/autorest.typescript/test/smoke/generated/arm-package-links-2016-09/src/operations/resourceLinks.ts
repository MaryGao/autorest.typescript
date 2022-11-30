/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ResourceLinks } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ManagementLinkClient } from "../managementLinkClient";
import {
  ResourceLink,
  ResourceLinksListAtSubscriptionNextOptionalParams,
  ResourceLinksListAtSubscriptionOptionalParams,
  ResourceLinksListAtSubscriptionResponse,
  ResourceLinksListAtSourceScopeNextOptionalParams,
  ResourceLinksListAtSourceScopeOptionalParams,
  ResourceLinksListAtSourceScopeResponse,
  ResourceLinksDeleteOptionalParams,
  ResourceLinksCreateOrUpdateOptionalParams,
  ResourceLinksCreateOrUpdateResponse,
  ResourceLinksGetOptionalParams,
  ResourceLinksGetResponse,
  ResourceLinksListAtSubscriptionNextResponse,
  ResourceLinksListAtSourceScopeNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ResourceLinks operations. */
export class ResourceLinksImpl implements ResourceLinks {
  private readonly client: ManagementLinkClient;

  /**
   * Initialize a new instance of the class ResourceLinks class.
   * @param client Reference to the service client
   */
  constructor(client: ManagementLinkClient) {
    this.client = client;
  }

  /**
   * Gets all the linked resources for the subscription.
   * @param options The options parameters.
   */
  public listAtSubscription(
    options?: ResourceLinksListAtSubscriptionOptionalParams
  ): PagedAsyncIterableIterator<ResourceLink> {
    const iter = this.listAtSubscriptionPagingAll(options);
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
        return this.listAtSubscriptionPagingPage(options, settings);
      }
    };
  }

  private async *listAtSubscriptionPagingPage(
    options?: ResourceLinksListAtSubscriptionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ResourceLink[]> {
    let result: ResourceLinksListAtSubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listAtSubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listAtSubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listAtSubscriptionPagingAll(
    options?: ResourceLinksListAtSubscriptionOptionalParams
  ): AsyncIterableIterator<ResourceLink> {
    for await (const page of this.listAtSubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of resource links at and below the specified source scope.
   * @param scope The fully qualified ID of the scope for getting the resource links. For example, to
   *              list resource links at and under a resource group, set the scope to
   *              /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup.
   * @param options The options parameters.
   */
  public listAtSourceScope(
    scope: string,
    options?: ResourceLinksListAtSourceScopeOptionalParams
  ): PagedAsyncIterableIterator<ResourceLink> {
    const iter = this.listAtSourceScopePagingAll(scope, options);
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
        return this.listAtSourceScopePagingPage(scope, options, settings);
      }
    };
  }

  private async *listAtSourceScopePagingPage(
    scope: string,
    options?: ResourceLinksListAtSourceScopeOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ResourceLink[]> {
    let result: ResourceLinksListAtSourceScopeResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listAtSourceScope(scope, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listAtSourceScopeNext(
        scope,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listAtSourceScopePagingAll(
    scope: string,
    options?: ResourceLinksListAtSourceScopeOptionalParams
  ): AsyncIterableIterator<ResourceLink> {
    for await (const page of this.listAtSourceScopePagingPage(scope, options)) {
      yield* page;
    }
  }

  /**
   * Deletes a resource link with the specified ID.
   * @param linkId The fully qualified ID of the resource link. Use the format,
   *               /subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/{provider-namespace}/{resource-type}/{resource-name}/Microsoft.Resources/links/{link-name}.
   *               For example,
   *               /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup/Microsoft.Web/sites/mySite/Microsoft.Resources/links/myLink
   * @param options The options parameters.
   */
  delete(
    linkId: string,
    options?: ResourceLinksDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { linkId, options },
      deleteOperationSpec
    );
  }

  /**
   * Creates or updates a resource link between the specified resources.
   * @param linkId The fully qualified ID of the resource link. Use the format,
   *               /subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/{provider-namespace}/{resource-type}/{resource-name}/Microsoft.Resources/links/{link-name}.
   *               For example,
   *               /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup/Microsoft.Web/sites/mySite/Microsoft.Resources/links/myLink
   * @param parameters Parameters for creating or updating a resource link.
   * @param options The options parameters.
   */
  createOrUpdate(
    linkId: string,
    parameters: ResourceLink,
    options?: ResourceLinksCreateOrUpdateOptionalParams
  ): Promise<ResourceLinksCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { linkId, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Gets a resource link with the specified ID.
   * @param linkId The fully qualified Id of the resource link. For example,
   *               /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup/Microsoft.Web/sites/mySite/Microsoft.Resources/links/myLink
   * @param options The options parameters.
   */
  get(
    linkId: string,
    options?: ResourceLinksGetOptionalParams
  ): Promise<ResourceLinksGetResponse> {
    return this.client.sendOperationRequest(
      { linkId, options },
      getOperationSpec
    );
  }

  /**
   * Gets all the linked resources for the subscription.
   * @param options The options parameters.
   */
  private _listAtSubscription(
    options?: ResourceLinksListAtSubscriptionOptionalParams
  ): Promise<ResourceLinksListAtSubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listAtSubscriptionOperationSpec
    );
  }

  /**
   * Gets a list of resource links at and below the specified source scope.
   * @param scope The fully qualified ID of the scope for getting the resource links. For example, to
   *              list resource links at and under a resource group, set the scope to
   *              /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup.
   * @param options The options parameters.
   */
  private _listAtSourceScope(
    scope: string,
    options?: ResourceLinksListAtSourceScopeOptionalParams
  ): Promise<ResourceLinksListAtSourceScopeResponse> {
    return this.client.sendOperationRequest(
      { scope, options },
      listAtSourceScopeOperationSpec
    );
  }

  /**
   * ListAtSubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListAtSubscription method.
   * @param options The options parameters.
   */
  private _listAtSubscriptionNext(
    nextLink: string,
    options?: ResourceLinksListAtSubscriptionNextOptionalParams
  ): Promise<ResourceLinksListAtSubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listAtSubscriptionNextOperationSpec
    );
  }

  /**
   * ListAtSourceScopeNext
   * @param scope The fully qualified ID of the scope for getting the resource links. For example, to
   *              list resource links at and under a resource group, set the scope to
   *              /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup.
   * @param nextLink The nextLink from the previous successful call to the ListAtSourceScope method.
   * @param options The options parameters.
   */
  private _listAtSourceScopeNext(
    scope: string,
    nextLink: string,
    options?: ResourceLinksListAtSourceScopeNextOptionalParams
  ): Promise<ResourceLinksListAtSourceScopeNextResponse> {
    return this.client.sendOperationRequest(
      { scope, nextLink, options },
      listAtSourceScopeNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/{linkId}",
  httpMethod: "DELETE",
  responses: { 200: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.linkId],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/{linkId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceLink
    },
    201: {
      bodyMapper: Mappers.ResourceLink
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.linkId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/{linkId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceLink
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.linkId],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtSubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Resources/links",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceLinkResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtSourceScopeOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Resources/links",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceLinkResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter1],
  urlParameters: [Parameters.$host, Parameters.scope],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtSubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceLinkResult
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtSourceScopeNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceLinkResult
    }
  },
  urlParameters: [Parameters.$host, Parameters.nextLink, Parameters.scope],
  headerParameters: [Parameters.accept],
  serializer
};
