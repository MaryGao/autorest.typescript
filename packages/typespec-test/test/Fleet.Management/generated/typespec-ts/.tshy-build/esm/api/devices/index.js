// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { getLongRunningPoller } from "../pollingHelpers.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import { isUnexpected, } from "../../rest/index.js";
import { operationOptionsToRequestParameters, createRestError, } from "@azure-rest/core-client";
export function _getSend(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deviceName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices/{deviceName}", subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deviceName)
        .get({ ...operationOptionsToRequestParameters(options) });
}
export async function _getDeserialize(result) {
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
                createdAt: result.body.systemData?.["createdAt"] !== undefined
                    ? new Date(result.body.systemData?.["createdAt"])
                    : undefined,
                lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
                lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
                lastModifiedAt: result.body.systemData?.["lastModifiedAt"] !== undefined
                    ? new Date(result.body.systemData?.["lastModifiedAt"])
                    : undefined,
            },
        properties: !result.body.properties
            ? undefined
            : {
                deviceId: result.body.properties?.["deviceId"],
                chipSku: result.body.properties?.["chipSku"],
                lastAvailableOsVersion: result.body.properties?.["lastAvailableOsVersion"],
                lastInstalledOsVersion: result.body.properties?.["lastInstalledOsVersion"],
                lastOsUpdateUtc: result.body.properties?.["lastOsUpdateUtc"] !== undefined
                    ? new Date(result.body.properties?.["lastOsUpdateUtc"])
                    : undefined,
                lastUpdateRequestUtc: result.body.properties?.["lastUpdateRequestUtc"] !== undefined
                    ? new Date(result.body.properties?.["lastUpdateRequestUtc"])
                    : undefined,
                provisioningState: result.body.properties?.["provisioningState"],
            },
    };
}
/** Get a Device. Use '.unassigned' or '.default' for the device group and product names when a device does not belong to a device group and product. */
export async function get(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deviceName, options = { requestOptions: {} }) {
    const result = await _getSend(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deviceName, options);
    return _getDeserialize(result);
}
export function _createOrUpdateSend(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deviceName, resource, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices/{deviceName}", subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deviceName)
        .put({
        ...operationOptionsToRequestParameters(options),
        body: {
            properties: !resource.properties
                ? undefined
                : { deviceId: resource.properties?.["deviceId"] },
        },
    });
}
export async function _createOrUpdateDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    result = result;
    return {
        id: result.body["id"],
        type: result.body["type"],
        systemData: !result.body.systemData
            ? undefined
            : {
                createdBy: result.body.systemData?.["createdBy"],
                createdByType: result.body.systemData?.["createdByType"],
                createdAt: result.body.systemData?.["createdAt"] !== undefined
                    ? new Date(result.body.systemData?.["createdAt"])
                    : undefined,
                lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
                lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
                lastModifiedAt: result.body.systemData?.["lastModifiedAt"] !== undefined
                    ? new Date(result.body.systemData?.["lastModifiedAt"])
                    : undefined,
            },
        properties: !result.body.properties
            ? undefined
            : {
                deviceId: result.body.properties?.["deviceId"],
                chipSku: result.body.properties?.["chipSku"],
                lastAvailableOsVersion: result.body.properties?.["lastAvailableOsVersion"],
                lastInstalledOsVersion: result.body.properties?.["lastInstalledOsVersion"],
                lastOsUpdateUtc: result.body.properties?.["lastOsUpdateUtc"] !== undefined
                    ? new Date(result.body.properties?.["lastOsUpdateUtc"])
                    : undefined,
                lastUpdateRequestUtc: result.body.properties?.["lastUpdateRequestUtc"] !== undefined
                    ? new Date(result.body.properties?.["lastUpdateRequestUtc"])
                    : undefined,
                provisioningState: result.body.properties?.["provisioningState"],
            },
    };
}
/** Create a Device. Use '.unassigned' or '.default' for the device group and product names to claim a device to the catalog only. */
export function createOrUpdate(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deviceName, resource, options = { requestOptions: {} }) {
    return getLongRunningPoller(context, _createOrUpdateDeserialize, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        getInitialResponse: () => _createOrUpdateSend(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deviceName, resource, options),
    });
}
export function _updateSend(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deviceName, properties, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices/{deviceName}", subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deviceName)
        .patch({
        ...operationOptionsToRequestParameters(options),
        body: {
            properties: !properties.properties
                ? undefined
                : { deviceGroupId: properties.properties?.["deviceGroupId"] },
        },
    });
}
export async function _updateDeserialize(result) {
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
                createdAt: result.body.systemData?.["createdAt"] !== undefined
                    ? new Date(result.body.systemData?.["createdAt"])
                    : undefined,
                lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
                lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
                lastModifiedAt: result.body.systemData?.["lastModifiedAt"] !== undefined
                    ? new Date(result.body.systemData?.["lastModifiedAt"])
                    : undefined,
            },
        properties: !result.body.properties
            ? undefined
            : {
                deviceId: result.body.properties?.["deviceId"],
                chipSku: result.body.properties?.["chipSku"],
                lastAvailableOsVersion: result.body.properties?.["lastAvailableOsVersion"],
                lastInstalledOsVersion: result.body.properties?.["lastInstalledOsVersion"],
                lastOsUpdateUtc: result.body.properties?.["lastOsUpdateUtc"] !== undefined
                    ? new Date(result.body.properties?.["lastOsUpdateUtc"])
                    : undefined,
                lastUpdateRequestUtc: result.body.properties?.["lastUpdateRequestUtc"] !== undefined
                    ? new Date(result.body.properties?.["lastUpdateRequestUtc"])
                    : undefined,
                provisioningState: result.body.properties?.["provisioningState"],
            },
    };
}
/** Update a Device. Use '.unassigned' or '.default' for the device group and product names to move a device to the catalog level. */
export async function update(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deviceName, properties, options = { requestOptions: {} }) {
    const result = await _updateSend(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deviceName, properties, options);
    return _updateDeserialize(result);
}
export function _$deleteSend(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deviceName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices/{deviceName}", subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deviceName)
        .delete({ ...operationOptionsToRequestParameters(options) });
}
export async function _$deleteDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    result = result;
    return;
}
/** Delete a Device */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deviceName, options = { requestOptions: {} }) {
    return getLongRunningPoller(context, _$deleteDeserialize, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        getInitialResponse: () => _$deleteSend(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deviceName, options),
    });
}
export function _listByDeviceGroupSend(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices", subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName)
        .get({ ...operationOptionsToRequestParameters(options) });
}
export async function _listByDeviceGroupDeserialize(result) {
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
                    createdAt: p.systemData?.["createdAt"] !== undefined
                        ? new Date(p.systemData?.["createdAt"])
                        : undefined,
                    lastModifiedBy: p.systemData?.["lastModifiedBy"],
                    lastModifiedByType: p.systemData?.["lastModifiedByType"],
                    lastModifiedAt: p.systemData?.["lastModifiedAt"] !== undefined
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
                    lastOsUpdateUtc: p.properties?.["lastOsUpdateUtc"] !== undefined
                        ? new Date(p.properties?.["lastOsUpdateUtc"])
                        : undefined,
                    lastUpdateRequestUtc: p.properties?.["lastUpdateRequestUtc"] !== undefined
                        ? new Date(p.properties?.["lastUpdateRequestUtc"])
                        : undefined,
                    provisioningState: p.properties?.["provisioningState"],
                },
        })),
        nextLink: result.body["nextLink"],
    };
}
/** List Device resources by DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export function listByDeviceGroup(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, options = { requestOptions: {} }) {
    return buildPagedAsyncIterator(context, () => _listByDeviceGroupSend(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, options), _listByDeviceGroupDeserialize, { itemName: "value", nextLinkName: "nextLink" });
}
export function _generateCapabilityImageSend(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deviceName, body, options = {
    requestOptions: {},
}) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices/{deviceName}/generateCapabilityImage", subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deviceName)
        .post({
        ...operationOptionsToRequestParameters(options),
        body: { capabilities: body["capabilities"] },
    });
}
export async function _generateCapabilityImageDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    result = result;
    return {
        image: result.body["image"],
    };
}
/** Generates the capability image for the device. Use '.unassigned' or '.default' for the device group and product names to generate the image for a device that does not belong to a specific device group and product. */
export function generateCapabilityImage(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deviceName, body, options = {
    requestOptions: {},
}) {
    return getLongRunningPoller(context, _generateCapabilityImageDeserialize, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        getInitialResponse: () => _generateCapabilityImageSend(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deviceName, body, options),
    });
}
//# sourceMappingURL=index.js.map