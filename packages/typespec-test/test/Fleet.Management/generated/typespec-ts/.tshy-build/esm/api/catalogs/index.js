// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { getLongRunningPoller } from "../pollingHelpers.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import { isUnexpected, } from "../../rest/index.js";
import { operationOptionsToRequestParameters, createRestError, } from "@azure-rest/core-client";
export function _getSend(context, subscriptionId, resourceGroupName, catalogName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}", subscriptionId, resourceGroupName, catalogName)
        .get({ ...operationOptionsToRequestParameters(options) });
}
export async function _getDeserialize(result) {
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
                tenantId: result.body.properties?.["tenantId"],
                provisioningState: result.body.properties?.["provisioningState"],
            },
    };
}
/** Get a Catalog */
export async function get(context, subscriptionId, resourceGroupName, catalogName, options = { requestOptions: {} }) {
    const result = await _getSend(context, subscriptionId, resourceGroupName, catalogName, options);
    return _getDeserialize(result);
}
export function _createOrUpdateSend(context, subscriptionId, resourceGroupName, catalogName, resource, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}", subscriptionId, resourceGroupName, catalogName)
        .put({
        ...operationOptionsToRequestParameters(options),
        body: {
            location: resource["location"],
            tags: resource["tags"],
            properties: !resource.properties ? undefined : {},
        },
    });
}
export async function _createOrUpdateDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    result = result;
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
                tenantId: result.body.properties?.["tenantId"],
                provisioningState: result.body.properties?.["provisioningState"],
            },
    };
}
/** Create a Catalog */
export function createOrUpdate(context, subscriptionId, resourceGroupName, catalogName, resource, options = { requestOptions: {} }) {
    return getLongRunningPoller(context, _createOrUpdateDeserialize, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        getInitialResponse: () => _createOrUpdateSend(context, subscriptionId, resourceGroupName, catalogName, resource, options),
    });
}
export function _updateSend(context, subscriptionId, resourceGroupName, catalogName, properties, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}", subscriptionId, resourceGroupName, catalogName)
        .patch({
        ...operationOptionsToRequestParameters(options),
        body: { tags: properties["tags"] },
    });
}
export async function _updateDeserialize(result) {
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
                tenantId: result.body.properties?.["tenantId"],
                provisioningState: result.body.properties?.["provisioningState"],
            },
    };
}
/** Update a Catalog */
export async function update(context, subscriptionId, resourceGroupName, catalogName, properties, options = { requestOptions: {} }) {
    const result = await _updateSend(context, subscriptionId, resourceGroupName, catalogName, properties, options);
    return _updateDeserialize(result);
}
export function _$deleteSend(context, subscriptionId, resourceGroupName, catalogName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}", subscriptionId, resourceGroupName, catalogName)
        .delete({ ...operationOptionsToRequestParameters(options) });
}
export async function _$deleteDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    result = result;
    return;
}
/** Delete a Catalog */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(context, subscriptionId, resourceGroupName, catalogName, options = { requestOptions: {} }) {
    return getLongRunningPoller(context, _$deleteDeserialize, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        getInitialResponse: () => _$deleteSend(context, subscriptionId, resourceGroupName, catalogName, options),
    });
}
export function _listByResourceGroupSend(context, subscriptionId, resourceGroupName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs", subscriptionId, resourceGroupName)
        .get({ ...operationOptionsToRequestParameters(options) });
}
export async function _listByResourceGroupDeserialize(result) {
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
                    tenantId: p.properties?.["tenantId"],
                    provisioningState: p.properties?.["provisioningState"],
                },
        })),
        nextLink: result.body["nextLink"],
    };
}
/** List Catalog resources by resource group */
export function listByResourceGroup(context, subscriptionId, resourceGroupName, options = { requestOptions: {} }) {
    return buildPagedAsyncIterator(context, () => _listByResourceGroupSend(context, subscriptionId, resourceGroupName, options), _listByResourceGroupDeserialize, { itemName: "value", nextLinkName: "nextLink" });
}
export function _listBySubscriptionSend(context, subscriptionId, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/providers/Microsoft.AzureSphere/catalogs", subscriptionId)
        .get({ ...operationOptionsToRequestParameters(options) });
}
export async function _listBySubscriptionDeserialize(result) {
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
                    tenantId: p.properties?.["tenantId"],
                    provisioningState: p.properties?.["provisioningState"],
                },
        })),
        nextLink: result.body["nextLink"],
    };
}
/** List Catalog resources by subscription ID */
export function listBySubscription(context, subscriptionId, options = { requestOptions: {} }) {
    return buildPagedAsyncIterator(context, () => _listBySubscriptionSend(context, subscriptionId, options), _listBySubscriptionDeserialize, { itemName: "value", nextLinkName: "nextLink" });
}
export function _countDevicesSend(context, subscriptionId, resourceGroupName, catalogName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/countDevices", subscriptionId, resourceGroupName, catalogName)
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
/** Counts devices in catalog. */
export async function countDevices(context, subscriptionId, resourceGroupName, catalogName, options = { requestOptions: {} }) {
    const result = await _countDevicesSend(context, subscriptionId, resourceGroupName, catalogName, options);
    return _countDevicesDeserialize(result);
}
export function _listDeploymentsSend(context, subscriptionId, resourceGroupName, catalogName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/listDeployments", subscriptionId, resourceGroupName, catalogName)
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
export async function _listDeploymentsDeserialize(result) {
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
                    deploymentId: p.properties?.["deploymentId"],
                    deployedImages: p.properties?.["deployedImages"] === undefined
                        ? p.properties?.["deployedImages"]
                        : p.properties?.["deployedImages"].map((p) => ({
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
                    deploymentDateUtc: p.properties?.["deploymentDateUtc"] !== undefined
                        ? new Date(p.properties?.["deploymentDateUtc"])
                        : undefined,
                    provisioningState: p.properties?.["provisioningState"],
                },
        })),
        nextLink: result.body["nextLink"],
    };
}
/** Lists deployments for catalog. */
export function listDeployments(context, subscriptionId, resourceGroupName, catalogName, options = { requestOptions: {} }) {
    return buildPagedAsyncIterator(context, () => _listDeploymentsSend(context, subscriptionId, resourceGroupName, catalogName, options), _listDeploymentsDeserialize, { itemName: "value", nextLinkName: "nextLink" });
}
export function _listDeviceGroupsSend(context, subscriptionId, resourceGroupName, catalogName, body, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/listDeviceGroups", subscriptionId, resourceGroupName, catalogName)
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
export async function _listDeviceGroupsDeserialize(result) {
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
/** List the device groups for the catalog. */
export function listDeviceGroups(context, subscriptionId, resourceGroupName, catalogName, body, options = { requestOptions: {} }) {
    return buildPagedAsyncIterator(context, () => _listDeviceGroupsSend(context, subscriptionId, resourceGroupName, catalogName, body, options), _listDeviceGroupsDeserialize, { itemName: "value", nextLinkName: "nextLink" });
}
export function _listDeviceInsightsSend(context, subscriptionId, resourceGroupName, catalogName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/listDeviceInsights", subscriptionId, resourceGroupName, catalogName)
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
export async function _listDeviceInsightsDeserialize(result) {
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
export function listDeviceInsights(context, subscriptionId, resourceGroupName, catalogName, options = { requestOptions: {} }) {
    return buildPagedAsyncIterator(context, () => _listDeviceInsightsSend(context, subscriptionId, resourceGroupName, catalogName, options), _listDeviceInsightsDeserialize, { itemName: "value", nextLinkName: "nextLink" });
}
export function _listDevicesSend(context, subscriptionId, resourceGroupName, catalogName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/listDevices", subscriptionId, resourceGroupName, catalogName)
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
export async function _listDevicesDeserialize(result) {
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
/** Lists devices for catalog. */
export function listDevices(context, subscriptionId, resourceGroupName, catalogName, options = { requestOptions: {} }) {
    return buildPagedAsyncIterator(context, () => _listDevicesSend(context, subscriptionId, resourceGroupName, catalogName, options), _listDevicesDeserialize, { itemName: "value", nextLinkName: "nextLink" });
}
export function _uploadImageSend(context, subscriptionId, resourceGroupName, catalogName, body, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/uploadImage", subscriptionId, resourceGroupName, catalogName)
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
export async function _uploadImageDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    result = result;
    return;
}
/** Creates an image. Use this action when the image ID is unknown. */
export function uploadImage(context, subscriptionId, resourceGroupName, catalogName, body, options = { requestOptions: {} }) {
    return getLongRunningPoller(context, _uploadImageDeserialize, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        getInitialResponse: () => _uploadImageSend(context, subscriptionId, resourceGroupName, catalogName, body, options),
    });
}
//# sourceMappingURL=index.js.map