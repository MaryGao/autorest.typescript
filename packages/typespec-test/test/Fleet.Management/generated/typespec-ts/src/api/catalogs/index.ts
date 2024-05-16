// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  Device,
  DeviceListResult,
  Deployment,
  Image,
  DeploymentListResult,
  DeviceGroup,
  DeviceGroupListResult,
  CountDevicesResponse,
  Catalog,
  CatalogUpdate,
  CatalogListResult,
  ListDeviceGroupsRequest,
  PagedDeviceInsight,
  DeviceInsight,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  AzureSphereContext as Client,
  CatalogsCountDevices200Response,
  CatalogsCountDevicesDefaultResponse,
  CatalogsCreateOrUpdate200Response,
  CatalogsCreateOrUpdate201Response,
  CatalogsCreateOrUpdateDefaultResponse,
  CatalogsCreateOrUpdateLogicalResponse,
  CatalogsDelete200Response,
  CatalogsDelete202Response,
  CatalogsDelete204Response,
  CatalogsDeleteDefaultResponse,
  CatalogsDeleteLogicalResponse,
  CatalogsGet200Response,
  CatalogsGetDefaultResponse,
  CatalogsListByResourceGroup200Response,
  CatalogsListByResourceGroupDefaultResponse,
  CatalogsListBySubscription200Response,
  CatalogsListBySubscriptionDefaultResponse,
  CatalogsListDeployments200Response,
  CatalogsListDeploymentsDefaultResponse,
  CatalogsListDeviceGroups200Response,
  CatalogsListDeviceGroupsDefaultResponse,
  CatalogsListDeviceInsights200Response,
  CatalogsListDeviceInsightsDefaultResponse,
  CatalogsListDevices200Response,
  CatalogsListDevicesDefaultResponse,
  CatalogsUpdate200Response,
  CatalogsUpdateDefaultResponse,
  CatalogsUploadImage202Response,
  CatalogsUploadImageDefaultResponse,
  CatalogsUploadImageLogicalResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  CatalogsGetOptionalParams,
  CatalogsCreateOrUpdateOptionalParams,
  CatalogsUpdateOptionalParams,
  CatalogsDeleteOptionalParams,
  CatalogsListByResourceGroupOptionalParams,
  CatalogsListBySubscriptionOptionalParams,
  CatalogsCountDevicesOptionalParams,
  CatalogsListDeploymentsOptionalParams,
  CatalogsListDeviceGroupsOptionalParams,
  CatalogsListDeviceInsightsOptionalParams,
  CatalogsListDevicesOptionalParams,
  CatalogsUploadImageOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogsGetOptionalParams = { requestOptions: {} },
): StreamableMethod<CatalogsGet200Response | CatalogsGetDefaultResponse> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: CatalogsGet200Response | CatalogsGetDefaultResponse,
): Promise<Catalog> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    location: result.body["location"],
    tags: result.body["tags"],
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
          tenantId: result.body.properties?.["tenantId"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a Catalog */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogsGetOptionalParams = { requestOptions: {} },
): Promise<Catalog> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    catalogName,
    options,
  );
  return _getDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  resource: Catalog,
  options: CatalogsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | CatalogsCreateOrUpdate200Response
  | CatalogsCreateOrUpdate201Response
  | CatalogsCreateOrUpdateDefaultResponse
  | CatalogsCreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        location: resource["location"],
        tags: resource["tags"],
        properties: !resource.properties ? undefined : {},
      },
    });
}

export async function _createOrUpdateDeserialize(
  result:
    | CatalogsCreateOrUpdate200Response
    | CatalogsCreateOrUpdate201Response
    | CatalogsCreateOrUpdateDefaultResponse
    | CatalogsCreateOrUpdateLogicalResponse,
): Promise<Catalog> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as CatalogsCreateOrUpdateLogicalResponse;
  return {
    location: result.body["location"],
    tags: result.body["tags"],
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
          tenantId: result.body.properties?.["tenantId"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Create a Catalog */
export function createOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  resource: Catalog,
  options: CatalogsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Catalog>, Catalog> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        resource,
        options,
      ),
  }) as PollerLike<OperationState<Catalog>, Catalog>;
}

export function _updateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  properties: CatalogUpdate,
  options: CatalogsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<CatalogsUpdate200Response | CatalogsUpdateDefaultResponse> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: { tags: properties["tags"] },
    });
}

export async function _updateDeserialize(
  result: CatalogsUpdate200Response | CatalogsUpdateDefaultResponse,
): Promise<Catalog> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    location: result.body["location"],
    tags: result.body["tags"],
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
          tenantId: result.body.properties?.["tenantId"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Update a Catalog */
export async function update(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  properties: CatalogUpdate,
  options: CatalogsUpdateOptionalParams = { requestOptions: {} },
): Promise<Catalog> {
  const result = await _updateSend(
    context,
    subscriptionId,
    resourceGroupName,
    catalogName,
    properties,
    options,
  );
  return _updateDeserialize(result);
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | CatalogsDelete200Response
  | CatalogsDelete202Response
  | CatalogsDelete204Response
  | CatalogsDeleteDefaultResponse
  | CatalogsDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | CatalogsDelete200Response
    | CatalogsDelete202Response
    | CatalogsDelete204Response
    | CatalogsDeleteDefaultResponse
    | CatalogsDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as CatalogsDeleteLogicalResponse;
  return;
}

/** Delete a Catalog */
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
  options: CatalogsDeleteOptionalParams = { requestOptions: {} },
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
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _listByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: CatalogsListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | CatalogsListByResourceGroup200Response
  | CatalogsListByResourceGroupDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByResourceGroupDeserialize(
  result:
    | CatalogsListByResourceGroup200Response
    | CatalogsListByResourceGroupDefaultResponse,
): Promise<CatalogListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      location: p["location"],
      tags: p["tags"],
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
            tenantId: p.properties?.["tenantId"],
            provisioningState: p.properties?.["provisioningState"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List Catalog resources by resource group */
export function listByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: CatalogsListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Catalog> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _listByResourceGroupDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: CatalogsListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | CatalogsListBySubscription200Response
  | CatalogsListBySubscriptionDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.AzureSphere/catalogs",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listBySubscriptionDeserialize(
  result:
    | CatalogsListBySubscription200Response
    | CatalogsListBySubscriptionDefaultResponse,
): Promise<CatalogListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      location: p["location"],
      tags: p["tags"],
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
            tenantId: p.properties?.["tenantId"],
            provisioningState: p.properties?.["provisioningState"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List Catalog resources by subscription ID */
export function listBySubscription(
  context: Client,
  subscriptionId: string,
  options: CatalogsListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Catalog> {
  return buildPagedAsyncIterator(
    context,
    () => _listBySubscriptionSend(context, subscriptionId, options),
    _listBySubscriptionDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _countDevicesSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogsCountDevicesOptionalParams = { requestOptions: {} },
): StreamableMethod<
  CatalogsCountDevices200Response | CatalogsCountDevicesDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/countDevices",
      subscriptionId,
      resourceGroupName,
      catalogName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _countDevicesDeserialize(
  result: CatalogsCountDevices200Response | CatalogsCountDevicesDefaultResponse,
): Promise<CountDevicesResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"],
  };
}

/** Counts devices in catalog. */
export async function countDevices(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogsCountDevicesOptionalParams = { requestOptions: {} },
): Promise<CountDevicesResponse> {
  const result = await _countDevicesSend(
    context,
    subscriptionId,
    resourceGroupName,
    catalogName,
    options,
  );
  return _countDevicesDeserialize(result);
}

export function _listDeploymentsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogsListDeploymentsOptionalParams = { requestOptions: {} },
): StreamableMethod<
  CatalogsListDeployments200Response | CatalogsListDeploymentsDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/listDeployments",
      subscriptionId,
      resourceGroupName,
      catalogName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        $filter: options?.filter,
        $top: options?.top,
        $skip: options?.skip,
        $maxpagesize: options?.maxpagesize,
      },
    });
}

export async function _listDeploymentsDeserialize(
  result:
    | CatalogsListDeployments200Response
    | CatalogsListDeploymentsDefaultResponse,
): Promise<DeploymentListResult> {
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
            deploymentId: p.properties?.["deploymentId"],
            deployedImages:
              p.properties?.["deployedImages"] === undefined
                ? p.properties?.["deployedImages"]
                : p.properties?.["deployedImages"].map((p) => ({
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
                          lastModifiedByType:
                            p.systemData?.["lastModifiedByType"],
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
                          regionalDataBoundary:
                            p.properties?.["regionalDataBoundary"],
                          uri: p.properties?.["uri"],
                          description: p.properties?.["description"],
                          componentId: p.properties?.["componentId"],
                          imageType: p.properties?.["imageType"],
                          provisioningState:
                            p.properties?.["provisioningState"],
                        },
                  })),
            deploymentDateUtc:
              p.properties?.["deploymentDateUtc"] !== undefined
                ? new Date(p.properties?.["deploymentDateUtc"])
                : undefined,
            provisioningState: p.properties?.["provisioningState"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Lists deployments for catalog. */
export function listDeployments(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogsListDeploymentsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Deployment> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listDeploymentsSend(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        options,
      ),
    _listDeploymentsDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listDeviceGroupsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  body: ListDeviceGroupsRequest,
  options: CatalogsListDeviceGroupsOptionalParams = { requestOptions: {} },
): StreamableMethod<
  CatalogsListDeviceGroups200Response | CatalogsListDeviceGroupsDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/listDeviceGroups",
      subscriptionId,
      resourceGroupName,
      catalogName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        $filter: options?.filter,
        $top: options?.top,
        $skip: options?.skip,
        $maxpagesize: options?.maxpagesize,
      },
      body: { deviceGroupName: body["deviceGroupName"] },
    });
}

export async function _listDeviceGroupsDeserialize(
  result:
    | CatalogsListDeviceGroups200Response
    | CatalogsListDeviceGroupsDefaultResponse,
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

/** List the device groups for the catalog. */
export function listDeviceGroups(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  body: ListDeviceGroupsRequest,
  options: CatalogsListDeviceGroupsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<DeviceGroup> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listDeviceGroupsSend(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        body,
        options,
      ),
    _listDeviceGroupsDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listDeviceInsightsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogsListDeviceInsightsOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | CatalogsListDeviceInsights200Response
  | CatalogsListDeviceInsightsDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/listDeviceInsights",
      subscriptionId,
      resourceGroupName,
      catalogName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        $filter: options?.filter,
        $top: options?.top,
        $skip: options?.skip,
        $maxpagesize: options?.maxpagesize,
      },
    });
}

export async function _listDeviceInsightsDeserialize(
  result:
    | CatalogsListDeviceInsights200Response
    | CatalogsListDeviceInsightsDefaultResponse,
): Promise<PagedDeviceInsight> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      deviceId: p["deviceId"],
      description: p["description"],
      startTimestampUtc: new Date(p["startTimestampUtc"]),
      endTimestampUtc: new Date(p["endTimestampUtc"]),
      eventCategory: p["eventCategory"],
      eventClass: p["eventClass"],
      eventType: p["eventType"],
      eventCount: p["eventCount"],
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Lists device insights for catalog. */
export function listDeviceInsights(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogsListDeviceInsightsOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<DeviceInsight> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listDeviceInsightsSend(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        options,
      ),
    _listDeviceInsightsDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listDevicesSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogsListDevicesOptionalParams = { requestOptions: {} },
): StreamableMethod<
  CatalogsListDevices200Response | CatalogsListDevicesDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/listDevices",
      subscriptionId,
      resourceGroupName,
      catalogName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        $filter: options?.filter,
        $top: options?.top,
        $skip: options?.skip,
        $maxpagesize: options?.maxpagesize,
      },
    });
}

export async function _listDevicesDeserialize(
  result: CatalogsListDevices200Response | CatalogsListDevicesDefaultResponse,
): Promise<DeviceListResult> {
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
            deviceId: p.properties?.["deviceId"],
            chipSku: p.properties?.["chipSku"],
            lastAvailableOsVersion: p.properties?.["lastAvailableOsVersion"],
            lastInstalledOsVersion: p.properties?.["lastInstalledOsVersion"],
            lastOsUpdateUtc:
              p.properties?.["lastOsUpdateUtc"] !== undefined
                ? new Date(p.properties?.["lastOsUpdateUtc"])
                : undefined,
            lastUpdateRequestUtc:
              p.properties?.["lastUpdateRequestUtc"] !== undefined
                ? new Date(p.properties?.["lastUpdateRequestUtc"])
                : undefined,
            provisioningState: p.properties?.["provisioningState"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** Lists devices for catalog. */
export function listDevices(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: CatalogsListDevicesOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Device> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listDevicesSend(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        options,
      ),
    _listDevicesDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _uploadImageSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  body: Image,
  options: CatalogsUploadImageOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | CatalogsUploadImage202Response
  | CatalogsUploadImageDefaultResponse
  | CatalogsUploadImageLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/uploadImage",
      subscriptionId,
      resourceGroupName,
      catalogName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !body.properties
          ? undefined
          : {
              image: body.properties?.["image"],
              imageId: body.properties?.["imageId"],
              regionalDataBoundary: body.properties?.["regionalDataBoundary"],
            },
      },
    });
}

export async function _uploadImageDeserialize(
  result:
    | CatalogsUploadImage202Response
    | CatalogsUploadImageDefaultResponse
    | CatalogsUploadImageLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as CatalogsUploadImageLogicalResponse;
  return;
}

/** Creates an image. Use this action when the image ID is unknown. */
export function uploadImage(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  body: Image,
  options: CatalogsUploadImageOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _uploadImageDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _uploadImageSend(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        body,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}
