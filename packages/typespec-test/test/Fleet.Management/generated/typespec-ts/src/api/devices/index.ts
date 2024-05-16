// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  Device,
  DeviceUpdate,
  DeviceListResult,
  GenerateCapabilityImageRequest,
  SignedCapabilityImageResponse,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  AzureSphereContext as Client,
  DevicesCreateOrUpdate200Response,
  DevicesCreateOrUpdate201Response,
  DevicesCreateOrUpdateDefaultResponse,
  DevicesCreateOrUpdateLogicalResponse,
  DevicesDelete200Response,
  DevicesDelete202Response,
  DevicesDelete204Response,
  DevicesDeleteDefaultResponse,
  DevicesDeleteLogicalResponse,
  DevicesGenerateCapabilityImage200Response,
  DevicesGenerateCapabilityImage202Response,
  DevicesGenerateCapabilityImageDefaultResponse,
  DevicesGenerateCapabilityImageLogicalResponse,
  DevicesGet200Response,
  DevicesGetDefaultResponse,
  DevicesListByDeviceGroup200Response,
  DevicesListByDeviceGroupDefaultResponse,
  DevicesUpdate200Response,
  DevicesUpdate202Response,
  DevicesUpdateDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  DevicesGetOptionalParams,
  DevicesCreateOrUpdateOptionalParams,
  DevicesUpdateOptionalParams,
  DevicesDeleteOptionalParams,
  DevicesListByDeviceGroupOptionalParams,
  DevicesGenerateCapabilityImageOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deviceName: string,
  options: DevicesGetOptionalParams = { requestOptions: {} },
): StreamableMethod<DevicesGet200Response | DevicesGetDefaultResponse> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices/{deviceName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
      deviceGroupName,
      deviceName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: DevicesGet200Response | DevicesGetDefaultResponse,
): Promise<Device> {
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
          deviceId: result.body.properties?.["deviceId"],
          chipSku: result.body.properties?.["chipSku"],
          lastAvailableOsVersion:
            result.body.properties?.["lastAvailableOsVersion"],
          lastInstalledOsVersion:
            result.body.properties?.["lastInstalledOsVersion"],
          lastOsUpdateUtc:
            result.body.properties?.["lastOsUpdateUtc"] !== undefined
              ? new Date(result.body.properties?.["lastOsUpdateUtc"])
              : undefined,
          lastUpdateRequestUtc:
            result.body.properties?.["lastUpdateRequestUtc"] !== undefined
              ? new Date(result.body.properties?.["lastUpdateRequestUtc"])
              : undefined,
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a Device. Use '.unassigned' or '.default' for the device group and product names when a device does not belong to a device group and product. */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deviceName: string,
  options: DevicesGetOptionalParams = { requestOptions: {} },
): Promise<Device> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    catalogName,
    productName,
    deviceGroupName,
    deviceName,
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
  deviceName: string,
  resource: Device,
  options: DevicesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | DevicesCreateOrUpdate200Response
  | DevicesCreateOrUpdate201Response
  | DevicesCreateOrUpdateDefaultResponse
  | DevicesCreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices/{deviceName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
      deviceGroupName,
      deviceName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? undefined
          : { deviceId: resource.properties?.["deviceId"] },
      },
    });
}

export async function _createOrUpdateDeserialize(
  result:
    | DevicesCreateOrUpdate200Response
    | DevicesCreateOrUpdate201Response
    | DevicesCreateOrUpdateDefaultResponse
    | DevicesCreateOrUpdateLogicalResponse,
): Promise<Device> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as DevicesCreateOrUpdateLogicalResponse;
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
          deviceId: result.body.properties?.["deviceId"],
          chipSku: result.body.properties?.["chipSku"],
          lastAvailableOsVersion:
            result.body.properties?.["lastAvailableOsVersion"],
          lastInstalledOsVersion:
            result.body.properties?.["lastInstalledOsVersion"],
          lastOsUpdateUtc:
            result.body.properties?.["lastOsUpdateUtc"] !== undefined
              ? new Date(result.body.properties?.["lastOsUpdateUtc"])
              : undefined,
          lastUpdateRequestUtc:
            result.body.properties?.["lastUpdateRequestUtc"] !== undefined
              ? new Date(result.body.properties?.["lastUpdateRequestUtc"])
              : undefined,
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Create a Device. Use '.unassigned' or '.default' for the device group and product names to claim a device to the catalog only. */
export function createOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deviceName: string,
  resource: Device,
  options: DevicesCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Device>, Device> {
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
        deviceName,
        resource,
        options,
      ),
  }) as PollerLike<OperationState<Device>, Device>;
}

export function _updateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deviceName: string,
  properties: DeviceUpdate,
  options: DevicesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | DevicesUpdate200Response
  | DevicesUpdate202Response
  | DevicesUpdateDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices/{deviceName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
      deviceGroupName,
      deviceName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !properties.properties
          ? undefined
          : { deviceGroupId: properties.properties?.["deviceGroupId"] },
      },
    });
}

export async function _updateDeserialize(
  result:
    | DevicesUpdate200Response
    | DevicesUpdate202Response
    | DevicesUpdateDefaultResponse,
): Promise<Device> {
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
          deviceId: result.body.properties?.["deviceId"],
          chipSku: result.body.properties?.["chipSku"],
          lastAvailableOsVersion:
            result.body.properties?.["lastAvailableOsVersion"],
          lastInstalledOsVersion:
            result.body.properties?.["lastInstalledOsVersion"],
          lastOsUpdateUtc:
            result.body.properties?.["lastOsUpdateUtc"] !== undefined
              ? new Date(result.body.properties?.["lastOsUpdateUtc"])
              : undefined,
          lastUpdateRequestUtc:
            result.body.properties?.["lastUpdateRequestUtc"] !== undefined
              ? new Date(result.body.properties?.["lastUpdateRequestUtc"])
              : undefined,
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Update a Device. Use '.unassigned' or '.default' for the device group and product names to move a device to the catalog level. */
export async function update(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deviceName: string,
  properties: DeviceUpdate,
  options: DevicesUpdateOptionalParams = { requestOptions: {} },
): Promise<Device> {
  const result = await _updateSend(
    context,
    subscriptionId,
    resourceGroupName,
    catalogName,
    productName,
    deviceGroupName,
    deviceName,
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
  productName: string,
  deviceGroupName: string,
  deviceName: string,
  options: DevicesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | DevicesDelete200Response
  | DevicesDelete202Response
  | DevicesDelete204Response
  | DevicesDeleteDefaultResponse
  | DevicesDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices/{deviceName}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
      deviceGroupName,
      deviceName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | DevicesDelete200Response
    | DevicesDelete202Response
    | DevicesDelete204Response
    | DevicesDeleteDefaultResponse
    | DevicesDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as DevicesDeleteLogicalResponse;
  return;
}

/** Delete a Device */
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
  deviceName: string,
  options: DevicesDeleteOptionalParams = { requestOptions: {} },
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
        deviceName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _listByDeviceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  options: DevicesListByDeviceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod<
  DevicesListByDeviceGroup200Response | DevicesListByDeviceGroupDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
      deviceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByDeviceGroupDeserialize(
  result:
    | DevicesListByDeviceGroup200Response
    | DevicesListByDeviceGroupDefaultResponse,
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

/** List Device resources by DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export function listByDeviceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  options: DevicesListByDeviceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Device> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByDeviceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        options,
      ),
    _listByDeviceGroupDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _generateCapabilityImageSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deviceName: string,
  body: GenerateCapabilityImageRequest,
  options: DevicesGenerateCapabilityImageOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | DevicesGenerateCapabilityImage200Response
  | DevicesGenerateCapabilityImage202Response
  | DevicesGenerateCapabilityImageDefaultResponse
  | DevicesGenerateCapabilityImageLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices/{deviceName}/generateCapabilityImage",
      subscriptionId,
      resourceGroupName,
      catalogName,
      productName,
      deviceGroupName,
      deviceName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { capabilities: body["capabilities"] },
    });
}

export async function _generateCapabilityImageDeserialize(
  result:
    | DevicesGenerateCapabilityImage200Response
    | DevicesGenerateCapabilityImage202Response
    | DevicesGenerateCapabilityImageDefaultResponse
    | DevicesGenerateCapabilityImageLogicalResponse,
): Promise<SignedCapabilityImageResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as DevicesGenerateCapabilityImageLogicalResponse;
  return {
    image: result.body["image"],
  };
}

/** Generates the capability image for the device. Use '.unassigned' or '.default' for the device group and product names to generate the image for a device that does not belong to a specific device group and product. */
export function generateCapabilityImage(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  productName: string,
  deviceGroupName: string,
  deviceName: string,
  body: GenerateCapabilityImageRequest,
  options: DevicesGenerateCapabilityImageOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<SignedCapabilityImageResponse>,
  SignedCapabilityImageResponse
> {
  return getLongRunningPoller(context, _generateCapabilityImageDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _generateCapabilityImageSend(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        deviceName,
        body,
        options,
      ),
  }) as PollerLike<
    OperationState<SignedCapabilityImageResponse>,
    SignedCapabilityImageResponse
  >;
}
