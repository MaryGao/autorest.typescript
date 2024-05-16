// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  DeviceGroup,
  DeviceGroupUpdate,
  DeviceGroupListResult,
  ClaimDevicesRequest,
  CountDevicesResponse,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  AzureSphereContext as Client,
  DeviceGroupsClaimDevices202Response,
  DeviceGroupsClaimDevicesDefaultResponse,
  DeviceGroupsClaimDevicesLogicalResponse,
  DeviceGroupsCountDevices200Response,
  DeviceGroupsCountDevicesDefaultResponse,
  DeviceGroupsCreateOrUpdate200Response,
  DeviceGroupsCreateOrUpdate201Response,
  DeviceGroupsCreateOrUpdateDefaultResponse,
  DeviceGroupsCreateOrUpdateLogicalResponse,
  DeviceGroupsDelete200Response,
  DeviceGroupsDelete202Response,
  DeviceGroupsDelete204Response,
  DeviceGroupsDeleteDefaultResponse,
  DeviceGroupsDeleteLogicalResponse,
  DeviceGroupsGet200Response,
  DeviceGroupsGetDefaultResponse,
  DeviceGroupsListByProduct200Response,
  DeviceGroupsListByProductDefaultResponse,
  DeviceGroupsUpdate200Response,
  DeviceGroupsUpdate202Response,
  DeviceGroupsUpdateDefaultResponse,
  DeviceGroupsUpdateLogicalResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  DeviceGroupsGetOptionalParams,
  DeviceGroupsCreateOrUpdateOptionalParams,
  DeviceGroupsUpdateOptionalParams,
  DeviceGroupsDeleteOptionalParams,
  DeviceGroupsListByProductOptionalParams,
  DeviceGroupsClaimDevicesOptionalParams,
  DeviceGroupsCountDevicesOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  options: DeviceGroupsGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  DeviceGroupsGet200Response | DeviceGroupsGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
      deviceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: DeviceGroupsGet200Response | DeviceGroupsGetDefaultResponse,
): Promise<DeviceGroup> {
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
          osFeedType: result.body.properties?.["osFeedType"],
          updatePolicy: result.body.properties?.["updatePolicy"],
          allowCrashDumpsCollection:
            result.body.properties?.["allowCrashDumpsCollection"],
          regionalDataBoundary:
            result.body.properties?.["regionalDataBoundary"],
          hasDeployment: result.body.properties?.["hasDeployment"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  options: DeviceGroupsGetOptionalParams = { requestOptions: {} },
): Promise<DeviceGroup> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    catalogName,
    productName,
    deviceGroupName,
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
  deviceGroupName: string,
  resource: DeviceGroup,
  options: DeviceGroupsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | DeviceGroupsCreateOrUpdate200Response
  | DeviceGroupsCreateOrUpdate201Response
  | DeviceGroupsCreateOrUpdateDefaultResponse
  | DeviceGroupsCreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
      deviceGroupName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? undefined
          : {
              description: resource.properties?.["description"],
              osFeedType: resource.properties?.["osFeedType"],
              updatePolicy: resource.properties?.["updatePolicy"],
              allowCrashDumpsCollection:
                resource.properties?.["allowCrashDumpsCollection"],
              regionalDataBoundary:
                resource.properties?.["regionalDataBoundary"],
            },
      },
    });
}

export async function _createOrUpdateDeserialize(
  result:
    | DeviceGroupsCreateOrUpdate200Response
    | DeviceGroupsCreateOrUpdate201Response
    | DeviceGroupsCreateOrUpdateDefaultResponse
    | DeviceGroupsCreateOrUpdateLogicalResponse,
): Promise<DeviceGroup> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as DeviceGroupsCreateOrUpdateLogicalResponse;
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
          osFeedType: result.body.properties?.["osFeedType"],
          updatePolicy: result.body.properties?.["updatePolicy"],
          allowCrashDumpsCollection:
            result.body.properties?.["allowCrashDumpsCollection"],
          regionalDataBoundary:
            result.body.properties?.["regionalDataBoundary"],
          hasDeployment: result.body.properties?.["hasDeployment"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Create a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export function createOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  resource: DeviceGroup,
  options: DeviceGroupsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<DeviceGroup>, DeviceGroup> {
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
        deviceGroupName,
        resource,
        options,
      ),
  }) as PollerLike<OperationState<DeviceGroup>, DeviceGroup>;
}

export function _updateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  properties: DeviceGroupUpdate,
  options: DeviceGroupsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | DeviceGroupsUpdate200Response
  | DeviceGroupsUpdate202Response
  | DeviceGroupsUpdateDefaultResponse
  | DeviceGroupsUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
      deviceGroupName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !properties.properties
          ? undefined
          : {
              description: properties.properties?.["description"],
              osFeedType: properties.properties?.["osFeedType"],
              updatePolicy: properties.properties?.["updatePolicy"],
              allowCrashDumpsCollection:
                properties.properties?.["allowCrashDumpsCollection"],
              regionalDataBoundary:
                properties.properties?.["regionalDataBoundary"],
            },
      },
    });
}

export async function _updateDeserialize(
  result:
    | DeviceGroupsUpdate200Response
    | DeviceGroupsUpdate202Response
    | DeviceGroupsUpdateDefaultResponse
    | DeviceGroupsUpdateLogicalResponse,
): Promise<DeviceGroup> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as DeviceGroupsUpdateLogicalResponse;
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
          osFeedType: result.body.properties?.["osFeedType"],
          updatePolicy: result.body.properties?.["updatePolicy"],
          allowCrashDumpsCollection:
            result.body.properties?.["allowCrashDumpsCollection"],
          regionalDataBoundary:
            result.body.properties?.["regionalDataBoundary"],
          hasDeployment: result.body.properties?.["hasDeployment"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Update a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export function update(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  properties: DeviceGroupUpdate,
  options: DeviceGroupsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<DeviceGroup>, DeviceGroup> {
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
        deviceGroupName,
        properties,
        options,
      ),
  }) as PollerLike<OperationState<DeviceGroup>, DeviceGroup>;
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  options: DeviceGroupsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | DeviceGroupsDelete200Response
  | DeviceGroupsDelete202Response
  | DeviceGroupsDelete204Response
  | DeviceGroupsDeleteDefaultResponse
  | DeviceGroupsDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
      deviceGroupName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | DeviceGroupsDelete200Response
    | DeviceGroupsDelete202Response
    | DeviceGroupsDelete204Response
    | DeviceGroupsDeleteDefaultResponse
    | DeviceGroupsDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as DeviceGroupsDeleteLogicalResponse;
  return;
}

/** Delete a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
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
  deviceGroupName: string,
  options: DeviceGroupsDeleteOptionalParams = { requestOptions: {} },
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
        deviceGroupName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _listByProductSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  options: DeviceGroupsListByProductOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | DeviceGroupsListByProduct200Response
  | DeviceGroupsListByProductDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
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

export async function _listByProductDeserialize(
  result:
    | DeviceGroupsListByProduct200Response
    | DeviceGroupsListByProductDefaultResponse,
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

/** List DeviceGroup resources by Product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
export function listByProduct(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  options: DeviceGroupsListByProductOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<DeviceGroup> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByProductSend(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        options,
      ),
    _listByProductDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _claimDevicesSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  body: ClaimDevicesRequest,
  options: DeviceGroupsClaimDevicesOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | DeviceGroupsClaimDevices202Response
  | DeviceGroupsClaimDevicesDefaultResponse
  | DeviceGroupsClaimDevicesLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/claimDevices",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
      deviceGroupName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { deviceIdentifiers: body["deviceIdentifiers"] },
    });
}

export async function _claimDevicesDeserialize(
  result:
    | DeviceGroupsClaimDevices202Response
    | DeviceGroupsClaimDevicesDefaultResponse
    | DeviceGroupsClaimDevicesLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as DeviceGroupsClaimDevicesLogicalResponse;
  return;
}

/** Bulk claims the devices. Use '.unassigned' or '.default' for the device group and product names when bulk claiming devices to a catalog only. */
export function claimDevices(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  body: ClaimDevicesRequest,
  options: DeviceGroupsClaimDevicesOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _claimDevicesDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _claimDevicesSend(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        body,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _countDevicesSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  options: DeviceGroupsCountDevicesOptionalParams = { requestOptions: {} },
): StreamableMethod<
  DeviceGroupsCountDevices200Response | DeviceGroupsCountDevicesDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/countDevices",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
      deviceGroupName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _countDevicesDeserialize(
  result:
    | DeviceGroupsCountDevices200Response
    | DeviceGroupsCountDevicesDefaultResponse,
): Promise<CountDevicesResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"],
  };
}

/** Counts devices in device group. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export async function countDevices(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  options: DeviceGroupsCountDevicesOptionalParams = { requestOptions: {} },
): Promise<CountDevicesResponse> {
  const result = await _countDevicesSend(
    context,
    subscriptionId,
    resourceGroupName,
    catalogName,
    productName,
    deviceGroupName,
    options,
  );
  return _countDevicesDeserialize(result);
}
