import { AzureSphereContext } from "../../api/azureSphereContext.js";
import { Deployment } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { DeploymentsGetOptionalParams, DeploymentsCreateOrUpdateOptionalParams, DeploymentsDeleteOptionalParams, DeploymentsListByDeviceGroupOptionalParams } from "../../models/options.js";
export interface DeploymentsOperations {
    get: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, deploymentName: string, options?: DeploymentsGetOptionalParams) => Promise<Deployment>;
    createOrUpdate: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, deploymentName: string, resource: Deployment, options?: DeploymentsCreateOrUpdateOptionalParams) => PollerLike<OperationState<Deployment>, Deployment>;
    delete: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, deploymentName: string, options?: DeploymentsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
    listByDeviceGroup: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, options?: DeploymentsListByDeviceGroupOptionalParams) => PagedAsyncIterableIterator<Deployment>;
}
export declare function getDeployments(context: AzureSphereContext): {
    get: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, deploymentName: string, options?: DeploymentsGetOptionalParams) => Promise<Deployment>;
    createOrUpdate: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, deploymentName: string, resource: Deployment, options?: DeploymentsCreateOrUpdateOptionalParams) => PollerLike<OperationState<Deployment>, Deployment>;
    delete: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, deploymentName: string, options?: DeploymentsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
    listByDeviceGroup: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, options?: DeploymentsListByDeviceGroupOptionalParams) => PagedAsyncIterableIterator<Deployment, Deployment[], import("../../models/pagingTypes.js").PageSettings>;
};
export declare function getDeploymentsOperations(context: AzureSphereContext): DeploymentsOperations;
//# sourceMappingURL=index.d.ts.map