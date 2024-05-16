import { AzureSphereContext } from "../../api/azureSphereContext.js";
import { DeviceGroup, CountDevicesResponse, Product, ProductUpdate } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { ProductsGetOptionalParams, ProductsCreateOrUpdateOptionalParams, ProductsUpdateOptionalParams, ProductsDeleteOptionalParams, ProductsListByCatalogOptionalParams, ProductsCountDevicesOptionalParams, ProductsGenerateDefaultDeviceGroupsOptionalParams } from "../../models/options.js";
export interface ProductsOperations {
    get: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, options?: ProductsGetOptionalParams) => Promise<Product>;
    createOrUpdate: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, resource: Product, options?: ProductsCreateOrUpdateOptionalParams) => PollerLike<OperationState<Product>, Product>;
    update: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, properties: ProductUpdate, options?: ProductsUpdateOptionalParams) => PollerLike<OperationState<Product>, Product>;
    delete: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, options?: ProductsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
    listByCatalog: (subscriptionId: string, resourceGroupName: string, catalogName: string, options?: ProductsListByCatalogOptionalParams) => PagedAsyncIterableIterator<Product>;
    countDevices: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, options?: ProductsCountDevicesOptionalParams) => Promise<CountDevicesResponse>;
    generateDefaultDeviceGroups: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, options?: ProductsGenerateDefaultDeviceGroupsOptionalParams) => PagedAsyncIterableIterator<DeviceGroup>;
}
export declare function getProducts(context: AzureSphereContext): {
    get: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, options?: ProductsGetOptionalParams) => Promise<Product>;
    createOrUpdate: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, resource: Product, options?: ProductsCreateOrUpdateOptionalParams) => PollerLike<OperationState<Product>, Product>;
    update: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, properties: ProductUpdate, options?: ProductsUpdateOptionalParams) => PollerLike<OperationState<Product>, Product>;
    delete: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, options?: ProductsDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
    listByCatalog: (subscriptionId: string, resourceGroupName: string, catalogName: string, options?: ProductsListByCatalogOptionalParams) => PagedAsyncIterableIterator<Product, Product[], import("../../models/pagingTypes.js").PageSettings>;
    countDevices: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, options?: ProductsCountDevicesOptionalParams) => Promise<CountDevicesResponse>;
    generateDefaultDeviceGroups: (subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, options?: ProductsGenerateDefaultDeviceGroupsOptionalParams) => PagedAsyncIterableIterator<DeviceGroup, DeviceGroup[], import("../../models/pagingTypes.js").PageSettings>;
};
export declare function getProductsOperations(context: AzureSphereContext): ProductsOperations;
//# sourceMappingURL=index.d.ts.map