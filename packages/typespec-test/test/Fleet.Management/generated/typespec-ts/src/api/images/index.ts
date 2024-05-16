// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { Image, ImageListResult } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  AzureSphereContext as Client,
  ImagesCreateOrUpdate200Response,
  ImagesCreateOrUpdate201Response,
  ImagesCreateOrUpdateDefaultResponse,
  ImagesCreateOrUpdateLogicalResponse,
  ImagesDelete200Response,
  ImagesDelete202Response,
  ImagesDelete204Response,
  ImagesDeleteDefaultResponse,
  ImagesDeleteLogicalResponse,
  ImagesGet200Response,
  ImagesGetDefaultResponse,
  ImagesListByCatalog200Response,
  ImagesListByCatalogDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  ImagesGetOptionalParams,
  ImagesCreateOrUpdateOptionalParams,
  ImagesDeleteOptionalParams,
  ImagesListByCatalogOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  imageName: string,
  options: ImagesGetOptionalParams = { requestOptions: {} },
): StreamableMethod<ImagesGet200Response | ImagesGetDefaultResponse> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/images/{imageName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      imageName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: ImagesGet200Response | ImagesGetDefaultResponse,
): Promise<Image> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          image: result.body.properties?.["image"],
          imageId: result.body.properties?.["imageId"],
          imageName: result.body.properties?.["imageName"],
          regionalDataBoundary:
            result.body.properties?.["regionalDataBoundary"],
          uri: result.body.properties?.["uri"],
          description: result.body.properties?.["description"],
          componentId: result.body.properties?.["componentId"],
          imageType: result.body.properties?.["imageType"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a Image */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  imageName: string,
  options: ImagesGetOptionalParams = { requestOptions: {} },
): Promise<Image> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    catalogName,
    imageName,
    options,
  );
  return _getDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  imageName: string,
  resource: Image,
  options: ImagesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | ImagesCreateOrUpdate200Response
  | ImagesCreateOrUpdate201Response
  | ImagesCreateOrUpdateDefaultResponse
  | ImagesCreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/images/{imageName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      imageName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? undefined
          : {
              image: resource.properties?.["image"],
              imageId: resource.properties?.["imageId"],
              regionalDataBoundary:
                resource.properties?.["regionalDataBoundary"],
            },
      },
    });
}

export async function _createOrUpdateDeserialize(
  result:
    | ImagesCreateOrUpdate200Response
    | ImagesCreateOrUpdate201Response
    | ImagesCreateOrUpdateDefaultResponse
    | ImagesCreateOrUpdateLogicalResponse,
): Promise<Image> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as ImagesCreateOrUpdateLogicalResponse;
  return {
    id: result.body["id"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          image: result.body.properties?.["image"],
          imageId: result.body.properties?.["imageId"],
          imageName: result.body.properties?.["imageName"],
          regionalDataBoundary:
            result.body.properties?.["regionalDataBoundary"],
          uri: result.body.properties?.["uri"],
          description: result.body.properties?.["description"],
          componentId: result.body.properties?.["componentId"],
          imageType: result.body.properties?.["imageType"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Create a Image */
export function createOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  imageName: string,
  resource: Image,
  options: ImagesCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Image>, Image> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        imageName,
        resource,
        options,
      ),
  }) as PollerLike<OperationState<Image>, Image>;
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  imageName: string,
  options: ImagesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | ImagesDelete200Response
  | ImagesDelete202Response
  | ImagesDelete204Response
  | ImagesDeleteDefaultResponse
  | ImagesDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/images/{imageName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      imageName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | ImagesDelete200Response
    | ImagesDelete202Response
    | ImagesDelete204Response
    | ImagesDeleteDefaultResponse
    | ImagesDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as ImagesDeleteLogicalResponse;
  return;
}

/** Delete a Image */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  imageName: string,
  options: ImagesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        imageName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _listByCatalogSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: ImagesListByCatalogOptionalParams = { requestOptions: {} },
): StreamableMethod<
  ImagesListByCatalog200Response | ImagesListByCatalogDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/images",
      subscriptionId,
      resourceGroupName,
      catalogName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        $filter: options?.filter,
        $top: options?.top,
        $skip: options?.skip,
        $maxpagesize: options?.maxpagesize,
      },
    });
}

export async function _listByCatalogDeserialize(
  result: ImagesListByCatalog200Response | ImagesListByCatalogDefaultResponse,
): Promise<ImageListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      id: p["id"],
      type: p["type"],
      systemData: !p.systemData
        ? undefined
        : {
            createdBy: p.systemData?.["createdBy"],
            createdByType: p.systemData?.["createdByType"],
            createdAt:
              p.systemData?.["createdAt"] !== undefined
                ? new Date(p.systemData?.["createdAt"])
                : undefined,
            lastModifiedBy: p.systemData?.["lastModifiedBy"],
            lastModifiedByType: p.systemData?.["lastModifiedByType"],
            lastModifiedAt:
              p.systemData?.["lastModifiedAt"] !== undefined
                ? new Date(p.systemData?.["lastModifiedAt"])
                : undefined,
          },
      properties: !p.properties
        ? undefined
        : {
            image: p.properties?.["image"],
            imageId: p.properties?.["imageId"],
            imageName: p.properties?.["imageName"],
            regionalDataBoundary: p.properties?.["regionalDataBoundary"],
            uri: p.properties?.["uri"],
            description: p.properties?.["description"],
            componentId: p.properties?.["componentId"],
            imageType: p.properties?.["imageType"],
            provisioningState: p.properties?.["provisioningState"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List Image resources by Catalog */
export function listByCatalog(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: ImagesListByCatalogOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Image> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByCatalogSend(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        options,
      ),
    _listByCatalogDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
