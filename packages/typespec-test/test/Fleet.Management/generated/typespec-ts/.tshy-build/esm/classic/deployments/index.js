// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { get, createOrUpdate, $delete, listByDeviceGroup, } from "../../api/deployments/index.js";
export function getDeployments(context) {
    return {
        get: (subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deploymentName, options) => get(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deploymentName, options),
        createOrUpdate: (subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deploymentName, resource, options) => createOrUpdate(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deploymentName, resource, options),
        delete: (subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deploymentName, options) => $delete(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, deploymentName, options),
        listByDeviceGroup: (subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, options) => listByDeviceGroup(context, subscriptionId, resourceGroupName, catalogName, productName, deviceGroupName, options),
    };
}
export function getDeploymentsOperations(context) {
    return {
        ...getDeployments(context),
    };
}
//# sourceMappingURL=index.js.map