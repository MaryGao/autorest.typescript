import { PollerLike, OperationState } from "@azure/core-lro";
import { Deployment, DeploymentListResult } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { AzureSphereContext as Client, DeploymentsCreateOrUpdate200Response, DeploymentsCreateOrUpdate201Response, DeploymentsCreateOrUpdateDefaultResponse, DeploymentsCreateOrUpdateLogicalResponse, DeploymentsDelete200Response, DeploymentsDelete202Response, DeploymentsDelete204Response, DeploymentsDeleteDefaultResponse, DeploymentsDeleteLogicalResponse, DeploymentsGet200Response, DeploymentsGetDefaultResponse, DeploymentsListByDeviceGroup200Response, DeploymentsListByDeviceGroupDefaultResponse } from "../../rest/index.js";
import { StreamableMethod } from "@azure-rest/core-client";
import { DeploymentsGetOptionalParams, DeploymentsCreateOrUpdateOptionalParams, DeploymentsDeleteOptionalParams, DeploymentsListByDeviceGroupOptionalParams } from "../../models/options.js";
export declare function _getSend(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, deploymentName: string, options?: DeploymentsGetOptionalParams): StreamableMethod<DeploymentsGet200Response | DeploymentsGetDefaultResponse>;
export declare function _getDeserialize(result: DeploymentsGet200Response | DeploymentsGetDefaultResponse): Promise<Deployment>;
/** Get a Deployment. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export declare function get(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, deploymentName: string, options?: DeploymentsGetOptionalParams): Promise<Deployment>;
export declare function _createOrUpdateSend(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, deploymentName: string, resource: Deployment, options?: DeploymentsCreateOrUpdateOptionalParams): StreamableMethod<DeploymentsCreateOrUpdate200Response | DeploymentsCreateOrUpdate201Response | DeploymentsCreateOrUpdateDefaultResponse | DeploymentsCreateOrUpdateLogicalResponse>;
export declare function _createOrUpdateDeserialize(result: DeploymentsCreateOrUpdate200Response | DeploymentsCreateOrUpdate201Response | DeploymentsCreateOrUpdateDefaultResponse | DeploymentsCreateOrUpdateLogicalResponse): Promise<Deployment>;
/** Create a Deployment. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export declare function createOrUpdate(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, deploymentName: string, resource: Deployment, options?: DeploymentsCreateOrUpdateOptionalParams): PollerLike<OperationState<Deployment>, Deployment>;
export declare function _$deleteSend(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, deploymentName: string, options?: DeploymentsDeleteOptionalParams): StreamableMethod<DeploymentsDelete200Response | DeploymentsDelete202Response | DeploymentsDelete204Response | DeploymentsDeleteDefaultResponse | DeploymentsDeleteLogicalResponse>;
export declare function _$deleteDeserialize(result: DeploymentsDelete200Response | DeploymentsDelete202Response | DeploymentsDelete204Response | DeploymentsDeleteDefaultResponse | DeploymentsDeleteLogicalResponse): Promise<void>;
/** Delete a Deployment. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export declare function $delete(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, deploymentName: string, options?: DeploymentsDeleteOptionalParams): PollerLike<OperationState<void>, void>;
export declare function _listByDeviceGroupSend(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, options?: DeploymentsListByDeviceGroupOptionalParams): StreamableMethod<DeploymentsListByDeviceGroup200Response | DeploymentsListByDeviceGroupDefaultResponse>;
export declare function _listByDeviceGroupDeserialize(result: DeploymentsListByDeviceGroup200Response | DeploymentsListByDeviceGroupDefaultResponse): Promise<DeploymentListResult>;
/** List Deployment resources by DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
export declare function listByDeviceGroup(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, options?: DeploymentsListByDeviceGroupOptionalParams): PagedAsyncIterableIterator<Deployment>;
//# sourceMappingURL=index.d.ts.map