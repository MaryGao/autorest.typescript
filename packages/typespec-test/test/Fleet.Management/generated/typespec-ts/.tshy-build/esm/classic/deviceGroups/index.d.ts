import { AzureSphereContext } from "../../api/azureSphereContext.js";
import { DeviceGroup, DeviceGroupUpdate, ClaimDevicesRequest, CountDevicesResponse } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { DeviceGroupsGetOptionalParams, DeviceGroupsCreateOrUpdateOptionalParams, DeviceGroupsUpdateOptionalParams, DeviceGroupsDeleteOptionalParams, DeviceGroupsListByProductOptionalParams, DeviceGroupsClaimDevicesOptionalParams, DeviceGroupsCountDevicesOptionalParams } from "../../models/options.js";
export interface DeviceGroupsOperations {
    get: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, options?: DeviceGroupsGetOptionalParams) => Promise<DeviceGroup>;
    createOrUpdate: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, resource: DeviceGroup, options?: DeviceGroupsCreateOrUpdateOptionalParams) => PollerLike<OperationState<DeviceGroup>, DeviceGroup>;
    update: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, properties: DeviceGroupUpdate, options?: DeviceGroupsUpdateOptionalParams) => PollerLike<OperationState<DeviceGroup>, DeviceGroup>;
    delete: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, options?: DeviceGroupsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
    listByProduct: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, options?: DeviceGroupsListByProductOptionalParams) => PagedAsyncIterableIterator<DeviceGroup>;
    claimDevices: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, body: ClaimDevicesRequest, options?: DeviceGroupsClaimDevicesOptionalParams) => PollerLike<OperationState<void>, void>;
    countDevices: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, options?: DeviceGroupsCountDevicesOptionalParams) => Promise<CountDevicesResponse>;
}
export declare function getDeviceGroups(context: AzureSphereContext): {
    get: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, options?: DeviceGroupsGetOptionalParams) => Promise<DeviceGroup>;
    createOrUpdate: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, resource: DeviceGroup, options?: DeviceGroupsCreateOrUpdateOptionalParams) => PollerLike<OperationState<DeviceGroup>, DeviceGroup>;
    update: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, properties: DeviceGroupUpdate, options?: DeviceGroupsUpdateOptionalParams) => PollerLike<OperationState<DeviceGroup>, DeviceGroup>;
    delete: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, options?: DeviceGroupsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
    listByProduct: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, options?: DeviceGroupsListByProductOptionalParams) => PagedAsyncIterableIterator<DeviceGroup, DeviceGroup[], import("../../models/pagingTypes.js").PageSettings>;
    claimDevices: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, body: ClaimDevicesRequest, options?: DeviceGroupsClaimDevicesOptionalParams) => PollerLike<OperationState<void>, void>;
    countDevices: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, options?: DeviceGroupsCountDevicesOptionalParams) => Promise<CountDevicesResponse>;
};
export declare function getDeviceGroupsOperations(context: AzureSphereContext): DeviceGroupsOperations;
//# sourceMappingURL=index.d.ts.map