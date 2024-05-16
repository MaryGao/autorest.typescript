// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { getLongRunningPoller } from "../pollingHelpers.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import { isUnexpected, } from "../../rest/index.js";
import { operationOptionsToRequestParameters, createRestError, } from "@azure-rest/core-client";
export function _getSend(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}", subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName)
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
                description: result.body.properties?.["description"],
                osFeedType: result.body.properties?.["osFeedType"],
                updatePolicy: result.body.properties?.["updatePolicy"],
                allowCrashDumpsCollection: result.body.properties?.["allowCrashDumpsCollection"],
                regionalDataBoundary: result.body.properties?.["regionalDataBoundary"],
                hasDeployment: result.body.properties?.["hasDeployment"],
                provisioningState: result.body.properties?.["provisioningState"],
            },
    };
}
/** Get a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export async function get(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, options = { requestOptions: {} }) {
    const result = await _getSend(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, options);
    return _getDeserialize(result);
}
export function _createOrUpdateSend(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, resource, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}", subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName)
        .put({
        ...operationOptionsToRequestParameters(options),
        body: {
            properties: !resource.properties
                ? undefined
                : {
                    description: resource.properties?.["description"],
                    osFeedType: resource.properties?.["osFeedType"],
                    updatePolicy: resource.properties?.["updatePolicy"],
                    allowCrashDumpsCollection: resource.properties?.["allowCrashDumpsCollection"],
                    regionalDataBoundary: resource.properties?.["regionalDataBoundary"],
                },
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
                description: result.body.properties?.["description"],
                osFeedType: result.body.properties?.["osFeedType"],
                updatePolicy: result.body.properties?.["updatePolicy"],
                allowCrashDumpsCollection: result.body.properties?.["allowCrashDumpsCollection"],
                regionalDataBoundary: result.body.properties?.["regionalDataBoundary"],
                hasDeployment: result.body.properties?.["hasDeployment"],
                provisioningState: result.body.properties?.["provisioningState"],
            },
    };
}
/** Create a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export function createOrUpdate(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, resource, options = { requestOptions: {} }) {
    return getLongRunningPoller(context, _createOrUpdateDeserialize, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        getInitialResponse: () => _createOrUpdateSend(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, resource, options),
    });
}
export function _updateSend(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, properties, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}", subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName)
        .patch({
        ...operationOptionsToRequestParameters(options),
        body: {
            properties: !properties.properties
                ? undefined
                : {
                    description: properties.properties?.["description"],
                    osFeedType: properties.properties?.["osFeedType"],
                    updatePolicy: properties.properties?.["updatePolicy"],
                    allowCrashDumpsCollection: properties.properties?.["allowCrashDumpsCollection"],
                    regionalDataBoundary: properties.properties?.["regionalDataBoundary"],
                },
        },
    });
}
export async function _updateDeserialize(result) {
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
                description: result.body.properties?.["description"],
                osFeedType: result.body.properties?.["osFeedType"],
                updatePolicy: result.body.properties?.["updatePolicy"],
                allowCrashDumpsCollection: result.body.properties?.["allowCrashDumpsCollection"],
                regionalDataBoundary: result.body.properties?.["regionalDataBoundary"],
                hasDeployment: result.body.properties?.["hasDeployment"],
                provisioningState: result.body.properties?.["provisioningState"],
            },
    };
}
/** Update a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export function update(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, properties, options = { requestOptions: {} }) {
    return getLongRunningPoller(context, _updateDeserialize, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        getInitialResponse: () => _updateSend(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, properties, options),
    });
}
export function _$deleteSend(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}", subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName)
        .delete({ ...operationOptionsToRequestParameters(options) });
}
export async function _$deleteDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    result = result;
    return;
}
/** Delete a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, options = { requestOptions: {} }) {
    return getLongRunningPoller(context, _$deleteDeserialize, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        getInitialResponse: () => _$deleteSend(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, options),
    });
}
export function _listByProductSend(context, subscriptionId, resourceGroupName, catalogName, productName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups", subscriptionId, resourceGroupName, catalogName, productName)
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
export async function _listByProductDeserialize(result) {
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
                    description: p.properties?.["description"],
                    osFeedType: p.properties?.["osFeedType"],
                    updatePolicy: p.properties?.["updatePolicy"],
                    allowCrashDumpsCollection: p.properties?.["allowCrashDumpsCollection"],
                    regionalDataBoundary: p.properties?.["regionalDataBoundary"],
                    hasDeployment: p.properties?.["hasDeployment"],
                    provisioningState: p.properties?.["provisioningState"],
                },
        })),
        nextLink: result.body["nextLink"],
    };
}
/** List DeviceGroup resources by Product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
export function listByProduct(context, subscriptionId, resourceGroupName, catalogName, productName, options = { requestOptions: {} }) {
    return buildPagedAsyncIterator(context, () => _listByProductSend(context, subscriptionId, resourceGroupName, catalogName, productName, options), _listByProductDeserialize, { itemName: "value", nextLinkName: "nextLink" });
}
export function _claimDevicesSend(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, body, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/claimDevices", subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName)
        .post({
        ...operationOptionsToRequestParameters(options),
        body: { deviceIdentifiers: body["deviceIdentifiers"] },
    });
}
export async function _claimDevicesDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    result = result;
    return;
}
/** Bulk claims the devices. Use '.unassigned' or '.default' for the device group and product names when bulk claiming devices to a catalog only. */
export function claimDevices(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, body, options = { requestOptions: {} }) {
    return getLongRunningPoller(context, _claimDevicesDeserialize, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        getInitialResponse: () => _claimDevicesSend(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, body, options),
    });
}
export function _countDevicesSend(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/countDevices", subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName)
        .post({ ...operationOptionsToRequestParameters(options) });
}
export async function _countDevicesDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    return {
        value: result.body["value"],
    };
}
/** Counts devices in device group. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export async function countDevices(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, options = { requestOptions: {} }) {
    const result = await _countDevicesSend(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, options);
    return _countDevicesDeserialize(result);
}
//# sourceMappingURL=index.js.map