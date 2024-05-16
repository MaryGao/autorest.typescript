import { AzureSphereContext } from "../../api/azureSphereContext.js";
import { Device, Deployment, Image, DeviceGroup, CountDevicesResponse, Catalog, CatalogUpdate, ListDeviceGroupsRequest, DeviceInsight } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { CatalogsGetOptionalParams, CatalogsCreateOrUpdateOptionalParams, CatalogsUpdateOptionalParams, CatalogsDeleteOptionalParams, CatalogsListByResourceGroupOptionalParams, CatalogsListBySubscriptionOptionalParams, CatalogsCountDevicesOptionalParams, CatalogsListDeploymentsOptionalParams, CatalogsListDeviceGroupsOptionalParams, CatalogsListDeviceInsightsOptionalParams, CatalogsListDevicesOptionalParams, CatalogsUploadImageOptionalParams } from "../../models/options.js";
export interface CatalogsOperations {
    get: (subscriptionId: string, resourceGroupName: string, catalogName: string, options?: CatalogsGetOptionalParams) => Promise<Catalog>;
    createOrUpdate: (subscriptionId: string, resourceGroupName: string, catalogName: string, resource: Catalog, options?: CatalogsCreateOrUpdateOptionalParams) => PollerLike<OperationState<Catalog>, Catalog>;
    update: (subscriptionId: string, resourceGroupName: string, catalogName: string, properties: CatalogUpdate, options?: CatalogsUpdateOptionalParams) => Promise<Catalog>;
    delete: (subscriptionId: string, resourceGroupName: string, catalogName: string, options?: CatalogsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
    listByResourceGroup: (subscriptionId: string, resourceGroupName: string, options?: CatalogsListByResourceGroupOptionalParams) => PagedAsyncIterableIterator<Catalog>;
    listBySubscription: (subscriptionId: string, options?: CatalogsListBySubscriptionOptionalParams) => PagedAsyncIterableIterator<Catalog>;
    countDevices: (subscriptionId: string, resourceGroupName: string, catalogName: string, options?: CatalogsCountDevicesOptionalParams) => Promise<CountDevicesResponse>;
    listDeployments: (subscriptionId: string, resourceGroupName: string, catalogName: string, options?: CatalogsListDeploymentsOptionalParams) => PagedAsyncIterableIterator<Deployment>;
    listDeviceGroups: (subscriptionId: string, resourceGroupName: string, catalogName: string, body: ListDeviceGroupsRequest, options?: CatalogsListDeviceGroupsOptionalParams) => PagedAsyncIterableIterator<DeviceGroup>;
    listDeviceInsights: (subscriptionId: string, resourceGroupName: string, catalogName: string, options?: CatalogsListDeviceInsightsOptionalParams) => PagedAsyncIterableIterator<DeviceInsight>;
    listDevices: (subscriptionId: string, resourceGroupName: string, catalogName: string, options?: CatalogsListDevicesOptionalParams) => PagedAsyncIterableIterator<Device>;
    uploadImage: (subscriptionId: string, resourceGroupName: string, catalogName: string, body: Image, options?: CatalogsUploadImageOptionalParams) => PollerLike<OperationState<void>, void>;
}
export declare function getCatalogs(context: AzureSphereContext): {
    get: (subscriptionId: string, resourceGroupName: string, catalogName: string, options?: CatalogsGetOptionalParams) => Promise<Catalog>;
    createOrUpdate: (subscriptionId: string, resourceGroupName: string, catalogName: string, resource: Catalog, options?: CatalogsCreateOrUpdateOptionalParams) => PollerLike<OperationState<Catalog>, Catalog>;
    update: (subscriptionId: string, resourceGroupName: string, catalogName: string, properties: CatalogUpdate, options?: CatalogsUpdateOptionalParams) => Promise<Catalog>;
    delete: (subscriptionId: string, resourceGroupName: string, catalogName: string, options?: CatalogsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
    listByResourceGroup: (subscriptionId: string, resourceGroupName: string, options?: CatalogsListByResourceGroupOptionalParams) => PagedAsyncIterableIterator<Catalog, Catalog[], import("../../models/pagingTypes.js").PageSettings>;
    listBySubscription: (subscriptionId: string, options?: CatalogsListBySubscriptionOptionalParams) => PagedAsyncIterableIterator<Catalog, Catalog[], import("../../models/pagingTypes.js").PageSettings>;
    countDevices: (subscriptionId: string, resourceGroupName: string, catalogName: string, options?: CatalogsCountDevicesOptionalParams) => Promise<CountDevicesResponse>;
    listDeployments: (subscriptionId: string, resourceGroupName: string, catalogName: string, options?: CatalogsListDeploymentsOptionalParams) => PagedAsyncIterableIterator<Deployment, Deployment[], import("../../models/pagingTypes.js").PageSettings>;
    listDeviceGroups: (subscriptionId: string, resourceGroupName: string, catalogName: string, body: ListDeviceGroupsRequest, options?: CatalogsListDeviceGroupsOptionalParams) => PagedAsyncIterableIterator<DeviceGroup, DeviceGroup[], import("../../models/pagingTypes.js").PageSettings>;
    listDeviceInsights: (subscriptionId: string, resourceGroupName: string, catalogName: string, options?: CatalogsListDeviceInsightsOptionalParams) => PagedAsyncIterableIterator<DeviceInsight, DeviceInsight[], import("../../models/pagingTypes.js").PageSettings>;
    listDevices: (subscriptionId: string, resourceGroupName: string, catalogName: string, options?: CatalogsListDevicesOptionalParams) => PagedAsyncIterableIterator<Device, Device[], import("../../models/pagingTypes.js").PageSettings>;
    uploadImage: (subscriptionId: string, resourceGroupName: string, catalogName: string, body: Image, options?: CatalogsUploadImageOptionalParams) => PollerLike<OperationState<void>, void>;
};
export declare function getCatalogsOperations(context: AzureSphereContext): CatalogsOperations;
//# sourceMappingURL=index.d.ts.map