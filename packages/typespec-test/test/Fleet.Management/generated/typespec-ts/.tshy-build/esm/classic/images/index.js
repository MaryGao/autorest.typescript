// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { get, createOrUpdate, $delete, listByCatalog, } from "../../api/images/index.js";
export function getImages(context) {
    return {
        get: (subscriptionId, resourceGroupName, catalogName, imageName, options) => get(context, subscriptionId, resourceGroupName, catalogName, imageName, options),
        createOrUpdate: (subscriptionId, resourceGroupName, catalogName, imageName, resource, options) => createOrUpdate(context, subscriptionId, resourceGroupName, catalogName, imageName, resource, options),
        delete: (subscriptionId, resourceGroupName, catalogName, imageName, options) => $delete(context, subscriptionId, resourceGroupName, catalogName, imageName, options),
        listByCatalog: (subscriptionId, resourceGroupName, catalogName, options) => listByCatalog(context, subscriptionId, resourceGroupName, catalogName, options),
    };
}
export function getImagesOperations(context) {
    return {
        ...getImages(context),
    };
}
//# sourceMappingURL=index.js.map