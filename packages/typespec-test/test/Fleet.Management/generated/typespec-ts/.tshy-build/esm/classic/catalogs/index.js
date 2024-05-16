// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { get, createOrUpdate, update, $delete, listByResourceGroup, listBySubscription, countDevices, listDeployments, listDeviceGroups, listDeviceInsights, listDevices, uploadImage, } from "../../api/catalogs/index.js";
export function getCatalogs(context) {
    return {
        get: (subscriptionId, resourceGroupName, catalogName, options) => get(context, subscriptionId, resourceGroupName, catalogName, options),
        createOrUpdate: (subscriptionId, resourceGroupName, catalogName, resource, options) => createOrUpdate(context, subscriptionId, resourceGroupName, catalogName, resource, options),
        update: (subscriptionId, resourceGroupName, catalogName, properties, options) => update(context, subscriptionId, resourceGroupName, catalogName, properties, options),
        delete: (subscriptionId, resourceGroupName, catalogName, options) => $delete(context, subscriptionId, resourceGroupName, catalogName, options),
        listByResourceGroup: (subscriptionId, resourceGroupName, options) => listByResourceGroup(context, subscriptionId, resourceGroupName, options),
        listBySubscription: (subscriptionId, options) => listBySubscription(context, subscriptionId, options),
        countDevices: (subscriptionId, resourceGroupName, catalogName, options) => countDevices(context, subscriptionId, resourceGroupName, catalogName, options),
        listDeployments: (subscriptionId, resourceGroupName, catalogName, options) => listDeployments(context, subscriptionId, resourceGroupName, catalogName, options),
        listDeviceGroups: (subscriptionId, resourceGroupName, catalogName, body, options) => listDeviceGroups(context, subscriptionId, resourceGroupName, catalogName, body, options),
        listDeviceInsights: (subscriptionId, resourceGroupName, catalogName, options) => listDeviceInsights(context, subscriptionId, resourceGroupName, catalogName, options),
        listDevices: (subscriptionId, resourceGroupName, catalogName, options) => listDevices(context, subscriptionId, resourceGroupName, catalogName, options),
        uploadImage: (subscriptionId, resourceGroupName, catalogName, body, options) => uploadImage(context, subscriptionId, resourceGroupName, catalogName, body, options),
    };
}
export function getCatalogsOperations(context) {
    return {
        ...getCatalogs(context),
    };
}
//# sourceMappingURL=index.js.map