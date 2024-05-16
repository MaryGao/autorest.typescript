// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  DeviceGroup,
  DeviceGroupListResult,
  CountDevicesResponse,
  Product,
  ProductUpdate,
  ProductListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  AzureSphereContext as Client,
  ProductsCountDevices200Response,
  ProductsCountDevicesDefaultResponse,
  ProductsCreateOrUpdate200Response,
  ProductsCreateOrUpdate201Response,
  ProductsCreateOrUpdateDefaultResponse,
  ProductsCreateOrUpdateLogicalResponse,
  ProductsDelete200Response,
  ProductsDelete202Response,
  ProductsDelete204Response,
  ProductsDeleteDefaultResponse,
  ProductsDeleteLogicalResponse,
  ProductsGenerateDefaultDeviceGroups200Response,
  ProductsGenerateDefaultDeviceGroupsDefaultResponse,
  ProductsGet200Response,
  ProductsGetDefaultResponse,
  ProductsListByCatalog200Response,
  ProductsListByCatalogDefaultResponse,
  ProductsUpdate200Response,
  ProductsUpdate202Response,
  ProductsUpdateDefaultResponse,
  ProductsUpdateLogicalResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  ProductsGetOptionalParams,
  ProductsCreateOrUpdateOptionalParams,
  ProductsUpdateOptionalParams,
  ProductsDeleteOptionalParams,
  ProductsListByCatalogOptionalParams,
  ProductsCountDevicesOptionalParams,
  ProductsGenerateDefaultDeviceGroupsOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  options: ProductsGetOptionalParams = { requestOptions: {} },
): StreamableMethod<ProductsGet200Response | ProductsGetDefaultResponse> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: ProductsGet200Response | ProductsGetDefaultResponse,
): Promise<Product> {
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
          description: result.body.properties?.["description"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a Product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  options: ProductsGetOptionalParams = { requestOptions: {} },
): Promise<Product> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    catalogName,
    productName,
    options,
  );
  return _getDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  resource: Product,
  options: ProductsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | ProductsCreateOrUpdate200Response
  | ProductsCreateOrUpdate201Response
  | ProductsCreateOrUpdateDefaultResponse
  | ProductsCreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? undefined
          : { description: resource.properties?.["description"] },
      },
    });
}

export async function _createOrUpdateDeserialize(
  result:
    | ProductsCreateOrUpdate200Response
    | ProductsCreateOrUpdate201Response
    | ProductsCreateOrUpdateDefaultResponse
    | ProductsCreateOrUpdateLogicalResponse,
): Promise<Product> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as ProductsCreateOrUpdateLogicalResponse;
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
          description: result.body.properties?.["description"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Create a Product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
export function createOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  resource: Product,
  options: ProductsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Product>, Product> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        resource,
        options,
      ),
  }) as PollerLike<OperationState<Product>, Product>;
}

export function _updateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  properties: ProductUpdate,
  options: ProductsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | ProductsUpdate200Response
  | ProductsUpdate202Response
  | ProductsUpdateDefaultResponse
  | ProductsUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !properties.properties
          ? undefined
          : { description: properties.properties?.["description"] },
      },
    });
}

export async function _updateDeserialize(
  result:
    | ProductsUpdate200Response
    | ProductsUpdate202Response
    | ProductsUpdateDefaultResponse
    | ProductsUpdateLogicalResponse,
): Promise<Product> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as ProductsUpdateLogicalResponse;
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
          description: result.body.properties?.["description"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Update a Product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
export function update(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  properties: ProductUpdate,
  options: ProductsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Product>, Product> {
  return getLongRunningPoller(context, _updateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        properties,
        options,
      ),
  }) as PollerLike<OperationState<Product>, Product>;
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  options: ProductsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | ProductsDelete200Response
  | ProductsDelete202Response
  | ProductsDelete204Response
  | ProductsDeleteDefaultResponse
  | ProductsDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | ProductsDelete200Response
    | ProductsDelete202Response
    | ProductsDelete204Response
    | ProductsDeleteDefaultResponse
    | ProductsDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as ProductsDeleteLogicalResponse;
  return;
}

/** Delete a Product. '.default' and '.unassigned' are system defined values and cannot be used for product name' */
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
  productName: string,
  options: ProductsDeleteOptionalParams = { requestOptions: {} },
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
        productName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _listByCatalogSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: ProductsListByCatalogOptionalParams = { requestOptions: {} },
): StreamableMethod<
  ProductsListByCatalog200Response | ProductsListByCatalogDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products",
      subscriptionId,
      resourceGroupName,
      catalogName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByCatalogDeserialize(
  result:
    | ProductsListByCatalog200Response
    | ProductsListByCatalogDefaultResponse,
): Promise<ProductListResult> {
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
            description: p.properties?.["description"],
            provisioningState: p.properties?.["provisioningState"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List Product resources by Catalog */
export function listByCatalog(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: ProductsListByCatalogOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Product> {
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

export function _countDevicesSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  options: ProductsCountDevicesOptionalParams = { requestOptions: {} },
): StreamableMethod<
  ProductsCountDevices200Response | ProductsCountDevicesDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/countDevices",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _countDevicesDeserialize(
  result: ProductsCountDevices200Response | ProductsCountDevicesDefaultResponse,
): Promise<CountDevicesResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"],
  };
}

/** Counts devices in product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
export async function countDevices(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  options: ProductsCountDevicesOptionalParams = { requestOptions: {} },
): Promise<CountDevicesResponse> {
  const result = await _countDevicesSend(
    context,
    subscriptionId,
    resourceGroupName,
    catalogName,
    productName,
    options,
  );
  return _countDevicesDeserialize(result);
}

export function _generateDefaultDeviceGroupsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  options: ProductsGenerateDefaultDeviceGroupsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | ProductsGenerateDefaultDeviceGroups200Response
  | ProductsGenerateDefaultDeviceGroupsDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/generateDefaultDeviceGroups",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _generateDefaultDeviceGroupsDeserialize(
  result:
    | ProductsGenerateDefaultDeviceGroups200Response
    | ProductsGenerateDefaultDeviceGroupsDefaultResponse,
): Promise<DeviceGroupListResult> {
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
            description: p.properties?.["description"],
            osFeedType: p.properties?.["osFeedType"],
            updatePolicy: p.properties?.["updatePolicy"],
            allowCrashDumpsCollection:
              p.properties?.["allowCrashDumpsCollection"],
            regionalDataBoundary: p.properties?.["regionalDataBoundary"],
            hasDeployment: p.properties?.["hasDeployment"],
            provisioningState: p.properties?.["provisioningState"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Generates default device groups for the product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
export function generateDefaultDeviceGroups(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  options: ProductsGenerateDefaultDeviceGroupsOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<DeviceGroup> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _generateDefaultDeviceGroupsSend(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        options,
      ),
    _generateDefaultDeviceGroupsDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
