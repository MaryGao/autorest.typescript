import { AzureSphereContext } from "../../api/azureSphereContext.js";
import { Device, DeviceUpdate, GenerateCapabilityImageRequest, SignedCapabilityImageResponse } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { DevicesGetOptionalParams, DevicesCreateOrUpdateOptionalParams, DevicesUpdateOptionalParams, DevicesDeleteOptionalParams, DevicesListByDeviceGroupOptionalParams, DevicesGenerateCapabilityImageOptionalParams } from "../../models/options.js";
export interface DevicesOperations {
    get: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, deviceName: string, options?: DevicesGetOptionalParams) => Promise<Device>;
    createOrUpdate: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, deviceName: string, resource: Device, options?: DevicesCreateOrUpdateOptionalParams) => PollerLike<OperationState<Device>, Device>;
    update: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, deviceName: string, properties: DeviceUpdate, options?: DevicesUpdateOptionalParams) => Promise<Device>;
    delete: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, deviceName: string, options?: DevicesDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
    listByDeviceGroup: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, options?: DevicesListByDeviceGroupOptionalParams) => PagedAsyncIterableIterator<Device>;
    generateCapabilityImage: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, deviceName: string, body: GenerateCapabilityImageRequest, options?: DevicesGenerateCapabilityImageOptionalParams) => PollerLike<OperationState<SignedCapabilityImageResponse>, SignedCapabilityImageResponse>;
}
export declare function getDevices(context: AzureSphereContext): {
    get: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, deviceName: string, options?: DevicesGetOptionalParams) => Promise<Device>;
    createOrUpdate: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, deviceName: string, resource: Device, options?: DevicesCreateOrUpdateOptionalParams) => PollerLike<OperationState<Device>, Device>;
    update: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, deviceName: string, properties: DeviceUpdate, options?: DevicesUpdateOptionalParams) => Promise<Device>;
    delete: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, deviceName: string, options?: DevicesDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
    listByDeviceGroup: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, options?: DevicesListByDeviceGroupOptionalParams) => PagedAsyncIterableIterator<Device, Device[], import("../../models/pagingTypes.js").PageSettings>;
    generateCapabilityImage: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, deviceName: string, body: GenerateCapabilityImageRequest, options?: DevicesGenerateCapabilityImageOptionalParams) => PollerLike<OperationState<SignedCapabilityImageResponse>, SignedCapabilityImageResponse>;
};
export declare function getDevicesOperations(context: AzureSphereContext): DevicesOperations;
//# sourceMappingURL=index.d.ts.map