import { PollerLike, OperationState } from "@azure/core-lro";
import { DeviceGroup, DeviceGroupListResult, CountDevicesResponse, Product, ProductUpdate, ProductListResult } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { AzureSphereContext as Client, ProductsCountDevices200Response, ProductsCountDevicesDefaultResponse, ProductsCreateOrUpdate200Response, ProductsCreateOrUpdate201Response, ProductsCreateOrUpdateDefaultResponse, ProductsCreateOrUpdateLogicalResponse, ProductsDelete200Response, ProductsDelete202Response, ProductsDelete204Response, ProductsDeleteDefaultResponse, ProductsDeleteLogicalResponse, ProductsGenerateDefaultDeviceGroups200Response, ProductsGenerateDefaultDeviceGroupsDefaultResponse, ProductsGet200Response, ProductsGetDefaultResponse, ProductsListByCatalog200Response, ProductsListByCatalogDefaultResponse, ProductsUpdate200Response, ProductsUpdate202Response, ProductsUpdateDefaultResponse, ProductsUpdateLogicalResponse } from "../../rest/index.js";
import { StreamableMethod } from "@azure-rest/core-client";
import { ProductsGetOptionalParams, ProductsCreateOrUpdateOptionalParams, ProductsUpdateOptionalParams, ProductsDeleteOptionalParams, ProductsListByCatalogOptionalParams, ProductsCountDevicesOptionalParams, ProductsGenerateDefaultDeviceGroupsOptionalParams } from "../../models/options.js";
export declare function _getSend(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, options?: ProductsGetOptionalParams): StreamableMethod<ProductsGet200Response | ProductsGetDefaultResponse>;
export declare function _getDeserialize(result: ProductsGet200Response | ProductsGetDefaultResponse): Promise<Product>;
/** Get a Product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
export declare function get(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, options?: ProductsGetOptionalParams): Promise<Product>;
export declare function _createOrUpdateSend(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, resource: Product, options?: ProductsCreateOrUpdateOptionalParams): StreamableMethod<ProductsCreateOrUpdate200Response | ProductsCreateOrUpdate201Response | ProductsCreateOrUpdateDefaultResponse | ProductsCreateOrUpdateLogicalResponse>;
export declare function _createOrUpdateDeserialize(result: ProductsCreateOrUpdate200Response | ProductsCreateOrUpdate201Response | ProductsCreateOrUpdateDefaultResponse | ProductsCreateOrUpdateLogicalResponse): Promise<Product>;
/** Create a Product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
export declare function createOrUpdate(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, resource: Product, options?: ProductsCreateOrUpdateOptionalParams): PollerLike<OperationState<Product>, Product>;
export declare function _updateSend(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, properties: ProductUpdate, options?: ProductsUpdateOptionalParams): StreamableMethod<ProductsUpdate200Response | ProductsUpdate202Response | ProductsUpdateDefaultResponse | ProductsUpdateLogicalResponse>;
export declare function _updateDeserialize(result: ProductsUpdate200Response | ProductsUpdate202Response | ProductsUpdateDefaultResponse | ProductsUpdateLogicalResponse): Promise<Product>;
/** Update a Product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
export declare function update(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, properties: ProductUpdate, options?: ProductsUpdateOptionalParams): PollerLike<OperationState<Product>, Product>;
export declare function _$deleteSend(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, options?: ProductsDeleteOptionalParams): StreamableMethod<ProductsDelete200Response | ProductsDelete202Response | ProductsDelete204Response | ProductsDeleteDefaultResponse | ProductsDeleteLogicalResponse>;
export declare function _$deleteDeserialize(result: ProductsDelete200Response | ProductsDelete202Response | ProductsDelete204Response | ProductsDeleteDefaultResponse | ProductsDeleteLogicalResponse): Promise<void>;
/** Delete a Product. '.default' and '.unassigned' are system defined values and cannot be used for product name' */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export declare function $delete(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, options?: ProductsDeleteOptionalParams): PollerLike<OperationState<void>, void>;
export declare function _listByCatalogSend(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, options?: ProductsListByCatalogOptionalParams): StreamableMethod<ProductsListByCatalog200Response | ProductsListByCatalogDefaultResponse>;
export declare function _listByCatalogDeserialize(result: ProductsListByCatalog200Response | ProductsListByCatalogDefaultResponse): Promise<ProductListResult>;
/** List Product resources by Catalog */
export declare function listByCatalog(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, options?: ProductsListByCatalogOptionalParams): PagedAsyncIterableIterator<Product>;
export declare function _countDevicesSend(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, options?: ProductsCountDevicesOptionalParams): StreamableMethod<ProductsCountDevices200Response | ProductsCountDevicesDefaultResponse>;
export declare function _countDevicesDeserialize(result: ProductsCountDevices200Response | ProductsCountDevicesDefaultResponse): Promise<CountDevicesResponse>;
/** Counts devices in product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
export declare function countDevices(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, options?: ProductsCountDevicesOptionalParams): Promise<CountDevicesResponse>;
export declare function _generateDefaultDeviceGroupsSend(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, options?: ProductsGenerateDefaultDeviceGroupsOptionalParams): StreamableMethod<ProductsGenerateDefaultDeviceGroups200Response | ProductsGenerateDefaultDeviceGroupsDefaultResponse>;
export declare function _generateDefaultDeviceGroupsDeserialize(result: ProductsGenerateDefaultDeviceGroups200Response | ProductsGenerateDefaultDeviceGroupsDefaultResponse): Promise<DeviceGroupListResult>;
/** Generates default device groups for the product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
export declare function generateDefaultDeviceGroups(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, options?: ProductsGenerateDefaultDeviceGroupsOptionalParams): PagedAsyncIterableIterator<DeviceGroup>;
//# sourceMappingURL=index.d.ts.map