import { PollerLike, OperationState } from "@azure/core-lro";
import { Device, DeviceListResult, Deployment, Image, DeploymentListResult, DeviceGroup, DeviceGroupListResult, CountDevicesResponse, Catalog, CatalogUpdate, CatalogListResult, ListDeviceGroupsRequest, PagedDeviceInsight, DeviceInsight } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { AzureSphereContext as Client, CatalogsCountDevices200Response, CatalogsCountDevicesDefaultResponse, CatalogsCreateOrUpdate200Response, CatalogsCreateOrUpdate201Response, CatalogsCreateOrUpdateDefaultResponse, CatalogsCreateOrUpdateLogicalResponse, CatalogsDelete200Response, CatalogsDelete202Response, CatalogsDelete204Response, CatalogsDeleteDefaultResponse, CatalogsDeleteLogicalResponse, CatalogsGet200Response, CatalogsGetDefaultResponse, CatalogsListByResourceGroup200Response, CatalogsListByResourceGroupDefaultResponse, CatalogsListBySubscription200Response, CatalogsListBySubscriptionDefaultResponse, CatalogsListDeployments200Response, CatalogsListDeploymentsDefaultResponse, CatalogsListDeviceGroups200Response, CatalogsListDeviceGroupsDefaultResponse, CatalogsListDeviceInsights200Response, CatalogsListDeviceInsightsDefaultResponse, CatalogsListDevices200Response, CatalogsListDevicesDefaultResponse, CatalogsUpdate200Response, CatalogsUpdateDefaultResponse, CatalogsUploadImage202Response, CatalogsUploadImageDefaultResponse, CatalogsUploadImageLogicalResponse } from "../../rest/index.js";
import { StreamableMethod } from "@azure-rest/core-client";
import { CatalogsGetOptionalParams, CatalogsCreateOrUpdateOptionalParams, CatalogsUpdateOptionalParams, CatalogsDeleteOptionalParams, CatalogsListByResourceGroupOptionalParams, CatalogsListBySubscriptionOptionalParams, CatalogsCountDevicesOptionalParams, CatalogsListDeploymentsOptionalParams, CatalogsListDeviceGroupsOptionalParams, CatalogsListDeviceInsightsOptionalParams, CatalogsListDevicesOptionalParams, CatalogsUploadImageOptionalParams } from "../../models/options.js";
export declare function _getSend(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, options?: CatalogsGetOptionalParams): StreamableMethod<CatalogsGet200Response | CatalogsGetDefaultResponse>;
export declare function _getDeserialize(result: CatalogsGet200Response | CatalogsGetDefaultResponse): Promise<Catalog>;
/** Get a Catalog */
export declare function get(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, options?: CatalogsGetOptionalParams): Promise<Catalog>;
export declare function _createOrUpdateSend(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, resource: Catalog, options?: CatalogsCreateOrUpdateOptionalParams): StreamableMethod<CatalogsCreateOrUpdate200Response | CatalogsCreateOrUpdate201Response | CatalogsCreateOrUpdateDefaultResponse | CatalogsCreateOrUpdateLogicalResponse>;
export declare function _createOrUpdateDeserialize(result: CatalogsCreateOrUpdate200Response | CatalogsCreateOrUpdate201Response | CatalogsCreateOrUpdateDefaultResponse | CatalogsCreateOrUpdateLogicalResponse): Promise<Catalog>;
/** Create a Catalog */
export declare function createOrUpdate(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, resource: Catalog, options?: CatalogsCreateOrUpdateOptionalParams): PollerLike<OperationState<Catalog>, Catalog>;
export declare function _updateSend(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, properties: CatalogUpdate, options?: CatalogsUpdateOptionalParams): StreamableMethod<CatalogsUpdate200Response | CatalogsUpdateDefaultResponse>;
export declare function _updateDeserialize(result: CatalogsUpdate200Response | CatalogsUpdateDefaultResponse): Promise<Catalog>;
/** Update a Catalog */
export declare function update(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, properties: CatalogUpdate, options?: CatalogsUpdateOptionalParams): Promise<Catalog>;
export declare function _$deleteSend(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, options?: CatalogsDeleteOptionalParams): StreamableMethod<CatalogsDelete200Response | CatalogsDelete202Response | CatalogsDelete204Response | CatalogsDeleteDefaultResponse | CatalogsDeleteLogicalResponse>;
export declare function _$deleteDeserialize(result: CatalogsDelete200Response | CatalogsDelete202Response | CatalogsDelete204Response | CatalogsDeleteDefaultResponse | CatalogsDeleteLogicalResponse): Promise<void>;
/** Delete a Catalog */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export declare function $delete(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, options?: CatalogsDeleteOptionalParams): PollerLike<OperationState<void>, void>;
export declare function _listByResourceGroupSend(context: Client, subscriptionId: string, resourceGroupName: string, options?: CatalogsListByResourceGroupOptionalParams): StreamableMethod<CatalogsListByResourceGroup200Response | CatalogsListByResourceGroupDefaultResponse>;
export declare function _listByResourceGroupDeserialize(result: CatalogsListByResourceGroup200Response | CatalogsListByResourceGroupDefaultResponse): Promise<CatalogListResult>;
/** List Catalog resources by resource group */
export declare function listByResourceGroup(context: Client, subscriptionId: string, resourceGroupName: string, options?: CatalogsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<Catalog>;
export declare function _listBySubscriptionSend(context: Client, subscriptionId: string, options?: CatalogsListBySubscriptionOptionalParams): StreamableMethod<CatalogsListBySubscription200Response | CatalogsListBySubscriptionDefaultResponse>;
export declare function _listBySubscriptionDeserialize(result: CatalogsListBySubscription200Response | CatalogsListBySubscriptionDefaultResponse): Promise<CatalogListResult>;
/** List Catalog resources by subscription ID */
export declare function listBySubscription(context: Client, subscriptionId: string, options?: CatalogsListBySubscriptionOptionalParams): PagedAsyncIterableIterator<Catalog>;
export declare function _countDevicesSend(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, options?: CatalogsCountDevicesOptionalParams): StreamableMethod<CatalogsCountDevices200Response | CatalogsCountDevicesDefaultResponse>;
export declare function _countDevicesDeserialize(result: CatalogsCountDevices200Response | CatalogsCountDevicesDefaultResponse): Promise<CountDevicesResponse>;
/** Counts devices in catalog. */
export declare function countDevices(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, options?: CatalogsCountDevicesOptionalParams): Promise<CountDevicesResponse>;
export declare function _listDeploymentsSend(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, options?: CatalogsListDeploymentsOptionalParams): StreamableMethod<CatalogsListDeployments200Response | CatalogsListDeploymentsDefaultResponse>;
export declare function _listDeploymentsDeserialize(result: CatalogsListDeployments200Response | CatalogsListDeploymentsDefaultResponse): Promise<DeploymentListResult>;
/** Lists deployments for catalog. */
export declare function listDeployments(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, options?: CatalogsListDeploymentsOptionalParams): PagedAsyncIterableIterator<Deployment>;
export declare function _listDeviceGroupsSend(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, body: ListDeviceGroupsRequest, options?: CatalogsListDeviceGroupsOptionalParams): StreamableMethod<CatalogsListDeviceGroups200Response | CatalogsListDeviceGroupsDefaultResponse>;
export declare function _listDeviceGroupsDeserialize(result: CatalogsListDeviceGroups200Response | CatalogsListDeviceGroupsDefaultResponse): Promise<DeviceGroupListResult>;
/** List the device groups for the catalog. */
export declare function listDeviceGroups(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, body: ListDeviceGroupsRequest, options?: CatalogsListDeviceGroupsOptionalParams): PagedAsyncIterableIterator<DeviceGroup>;
export declare function _listDeviceInsightsSend(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, options?: CatalogsListDeviceInsightsOptionalParams): StreamableMethod<CatalogsListDeviceInsights200Response | CatalogsListDeviceInsightsDefaultResponse>;
export declare function _listDeviceInsightsDeserialize(result: CatalogsListDeviceInsights200Response | CatalogsListDeviceInsightsDefaultResponse): Promise<PagedDeviceInsight>;
/** Lists device insights for catalog. */
export declare function listDeviceInsights(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, options?: CatalogsListDeviceInsightsOptionalParams): PagedAsyncIterableIterator<DeviceInsight>;
export declare function _listDevicesSend(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, options?: CatalogsListDevicesOptionalParams): StreamableMethod<CatalogsListDevices200Response | CatalogsListDevicesDefaultResponse>;
export declare function _listDevicesDeserialize(result: CatalogsListDevices200Response | CatalogsListDevicesDefaultResponse): Promise<DeviceListResult>;
/** Lists devices for catalog. */
export declare function listDevices(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, options?: CatalogsListDevicesOptionalParams): PagedAsyncIterableIterator<Device>;
export declare function _uploadImageSend(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, body: Image, options?: CatalogsUploadImageOptionalParams): StreamableMethod<CatalogsUploadImage202Response | CatalogsUploadImageDefaultResponse | CatalogsUploadImageLogicalResponse>;
export declare function _uploadImageDeserialize(result: CatalogsUploadImage202Response | CatalogsUploadImageDefaultResponse | CatalogsUploadImageLogicalResponse): Promise<void>;
/** Creates an image. Use this action when the image ID is unknown. */
export declare function uploadImage(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, body: Image, options?: CatalogsUploadImageOptionalParams): PollerLike<OperationState<void>, void>;
//# sourceMappingURL=index.d.ts.map