// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { get, createOrUpdate, update, $delete, listByCatalog, countDevices, generateDefaultDeviceGroups, } from "../../api/products/index.js";
export function getProducts(context) {
    return {
        get: (subscriptionId, resourceGroupName, catalogName, productName, options) => get(context, subscriptionId, resourceGroupName, catalogName, productName, options),
        createOrUpdate: (subscriptionId, resourceGroupName, catalogName, productName, resource, options) => createOrUpdate(context, subscriptionId, resourceGroupName, catalogName, productName, resource, options),
        update: (subscriptionId, resourceGroupName, catalogName, productName, properties, options) => update(context, subscriptionId, resourceGroupName, catalogName, productName, properties, options),
        delete: (subscriptionId, resourceGroupName, catalogName, productName, options) => $delete(context, subscriptionId, resourceGroupName, catalogName, productName, options),
        listByCatalog: (subscriptionId, resourceGroupName, catalogName, options) => listByCatalog(context, subscriptionId, resourceGroupName, catalogName, options),
        countDevices: (subscriptionId, resourceGroupName, catalogName, productName, options) => countDevices(context, subscriptionId, resourceGroupName, catalogName, productName, options),
        generateDefaultDeviceGroups: (subscriptionId, resourceGroupName, catalogName, productName, options) => generateDefaultDeviceGroups(context, subscriptionId, resourceGroupName, catalogName, productName, options),
    };
}
export function getProductsOperations(context) {
    return {
        ...getProducts(context),
    };
}
//# sourceMappingURL=index.js.map