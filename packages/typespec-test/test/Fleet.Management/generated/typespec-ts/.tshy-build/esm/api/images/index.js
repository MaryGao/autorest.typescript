// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { getLongRunningPoller } from "../pollingHelpers.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import { isUnexpected, } from "../../rest/index.js";
import { operationOptionsToRequestParameters, createRestError, } from "@azure-rest/core-client";
export function _getSend(context, subscriptionId, resourceGroupName, catalogName, imageName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/images/{imageName}", subscriptionId, resourceGroupName, catalogName, imageName)
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
                image: result.body.properties?.["image"],
                imageId: result.body.properties?.["imageId"],
                imageName: result.body.properties?.["imageName"],
                regionalDataBoundary: result.body.properties?.["regionalDataBoundary"],
                uri: result.body.properties?.["uri"],
                description: result.body.properties?.["description"],
                componentId: result.body.properties?.["componentId"],
                imageType: result.body.properties?.["imageType"],
                provisioningState: result.body.properties?.["provisioningState"],
            },
    };
}
/** Get a Image */
export async function get(context, subscriptionId, resourceGroupName, catalogName, imageName, options = { requestOptions: {} }) {
    const result = await _getSend(context, subscriptionId, resourceGroupName, catalogName, imageName, options);
    return _getDeserialize(result);
}
export function _createOrUpdateSend(context, subscriptionId, resourceGroupName, catalogName, imageName, resource, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/images/{imageName}", subscriptionId, resourceGroupName, catalogName, imageName)
        .put({
        ...operationOptionsToRequestParameters(options),
        body: {
            properties: !resource.properties
                ? undefined
                : {
                    image: resource.properties?.["image"],
                    imageId: resource.properties?.["imageId"],
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
                image: result.body.properties?.["image"],
                imageId: result.body.properties?.["imageId"],
                imageName: result.body.properties?.["imageName"],
                regionalDataBoundary: result.body.properties?.["regionalDataBoundary"],
                uri: result.body.properties?.["uri"],
                description: result.body.properties?.["description"],
                componentId: result.body.properties?.["componentId"],
                imageType: result.body.properties?.["imageType"],
                provisioningState: result.body.properties?.["provisioningState"],
            },
    };
}
/** Create a Image */
export function createOrUpdate(context, subscriptionId, resourceGroupName, catalogName, imageName, resource, options = { requestOptions: {} }) {
    return getLongRunningPoller(context, _createOrUpdateDeserialize, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        getInitialResponse: () => _createOrUpdateSend(context, subscriptionId, resourceGroupName, catalogName, imageName, resource, options),
    });
}
export function _$deleteSend(context, subscriptionId, resourceGroupName, catalogName, imageName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/images/{imageName}", subscriptionId, resourceGroupName, catalogName, imageName)
        .delete({ ...operationOptionsToRequestParameters(options) });
}
export async function _$deleteDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    result = result;
    return;
}
/** Delete a Image */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(context, subscriptionId, resourceGroupName, catalogName, imageName, options = { requestOptions: {} }) {
    return getLongRunningPoller(context, _$deleteDeserialize, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        getInitialResponse: () => _$deleteSend(context, subscriptionId, resourceGroupName, catalogName, imageName, options),
    });
}
export function _listByCatalogSend(context, subscriptionId, resourceGroupName, catalogName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/images", subscriptionId, resourceGroupName, catalogName)
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
export async function _listByCatalogDeserialize(result) {
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
export function listByCatalog(context, subscriptionId, resourceGroupName, catalogName, options = { requestOptions: {} }) {
    return buildPagedAsyncIterator(context, () => _listByCatalogSend(context, subscriptionId, resourceGroupName, catalogName, options), _listByCatalogDeserialize, { itemName: "value", nextLinkName: "nextLink" });
}
//# sourceMappingURL=index.js.map