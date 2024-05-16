// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { get, createOrUpdate, update, $delete, listByDeviceGroup, generateCapabilityImage, } from "../../api/devices/index.js";
export function getDevices(context) {
    return {
        get: (subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deviceName, options) => get(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deviceName, options),
        createOrUpdate: (subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deviceName, resource, options) => createOrUpdate(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deviceName, resource, options),
        update: (subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deviceName, properties, options) => update(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deviceName, properties, options),
        delete: (subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deviceName, options) => $delete(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deviceName, options),
        listByDeviceGroup: (subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, options) => listByDeviceGroup(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, options),
        generateCapabilityImage: (subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deviceName, body, options) => generateCapabilityImage(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deviceName, body, options),
    };
}
export function getDevicesOperations(context) {
    return {
        ...getDevices(context),
    };
}
//# sourceMappingURL=index.js.map