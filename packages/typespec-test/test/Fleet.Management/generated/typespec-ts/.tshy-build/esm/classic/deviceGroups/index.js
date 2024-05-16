// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { get, createOrUpdate, update, $delete, listByProduct, claimDevices, countDevices, } from "../../api/deviceGroups/index.js";
export function getDeviceGroups(context) {
    return {
        get: (subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, options) => get(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, options),
        createOrUpdate: (subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, resource, options) => createOrUpdate(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, resource, options),
        update: (subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, properties, options) => update(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, properties, options),
        delete: (subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, options) => $delete(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, options),
        listByProduct: (subscriptionId, resourceGroupName, catalogName, productName, options) => listByProduct(context, subscriptionId, resourceGroupName, catalogName, productName, options),
        claimDevices: (subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, body, options) => claimDevices(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, body, options),
        countDevices: (subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, options) => countDevices(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, options),
    };
}
export function getDeviceGroupsOperations(context) {
    return {
        ...getDeviceGroups(context),
    };
}
//# sourceMappingURL=index.js.map