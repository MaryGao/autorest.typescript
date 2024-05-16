// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { getLongRunningPoller } from "../pollingHelpers.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import { isUnexpected, } from "../../rest/index.js";
import { operationOptionsToRequestParameters, createRestError, } from "@azure-rest/core-client";
export function _getSend(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deploymentName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/deployments/{deploymentName}", subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deploymentName)
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
                deploymentId: result.body.properties?.["deploymentId"],
                deployedImages: result.body.properties?.["deployedImages"] === undefined
                    ? result.body.properties?.["deployedImages"]
                    : result.body.properties?.["deployedImages"].map((p) => ({
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
                deploymentDateUtc: result.body.properties?.["deploymentDateUtc"] !== undefined
                    ? new Date(result.body.properties?.["deploymentDateUtc"])
                    : undefined,
                provisioningState: result.body.properties?.["provisioningState"],
            },
    };
}
/** Get a Deployment. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export async function get(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deploymentName, options = { requestOptions: {} }) {
    const result = await _getSend(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deploymentName, options);
    return _getDeserialize(result);
}
export function _createOrUpdateSend(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deploymentName, resource, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/deployments/{deploymentName}", subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deploymentName)
        .put({
        ...operationOptionsToRequestParameters(options),
        body: {
            properties: !resource.properties
                ? undefined
                : {
                    deploymentId: resource.properties?.["deploymentId"],
                    deployedImages: resource.properties?.["deployedImages"] === undefined
                        ? resource.properties?.["deployedImages"]
                        : resource.properties?.["deployedImages"].map((p) => ({
                            properties: !p.properties
                                ? undefined
                                : {
                                    image: p.properties?.["image"],
                                    imageId: p.properties?.["imageId"],
                                    regionalDataBoundary: p.properties?.["regionalDataBoundary"],
                                },
                        })),
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
                deploymentId: result.body.properties?.["deploymentId"],
                deployedImages: result.body.properties?.["deployedImages"] === undefined
                    ? result.body.properties?.["deployedImages"]
                    : result.body.properties?.["deployedImages"].map((p) => ({
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
                deploymentDateUtc: result.body.properties?.["deploymentDateUtc"] !== undefined
                    ? new Date(result.body.properties?.["deploymentDateUtc"])
                    : undefined,
                provisioningState: result.body.properties?.["provisioningState"],
            },
    };
}
/** Create a Deployment. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export function createOrUpdate(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deploymentName, resource, options = { requestOptions: {} }) {
    return getLongRunningPoller(context, _createOrUpdateDeserialize, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        getInitialResponse: () => _createOrUpdateSend(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deploymentName, resource, options),
    });
}
export function _$deleteSend(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deploymentName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/deployments/{deploymentName}", subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deploymentName)
        .delete({ ...operationOptionsToRequestParameters(options) });
}
export async function _$deleteDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    result = result;
    return;
}
/** Delete a Deployment. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deploymentName, options = { requestOptions: {} }) {
    return getLongRunningPoller(context, _$deleteDeserialize, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        getInitialResponse: () => _$deleteSend(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deploymentName, options),
    });
}
export function _listByDeviceGroupSend(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/deployments", subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName)
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
/** List Deployment resources by DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export function listByDeviceGroup(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, options = { requestOptions: {} }) {
    return buildPagedAsyncIterator(context, () => _listByDeviceGroupSend(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, options), _listByDeviceGroupDeserialize, { itemName: "value", nextLinkName: "nextLink" });
}
//# sourceMappingURL=index.js.map