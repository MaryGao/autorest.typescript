import { PollerLike, OperationState } from "@azure/core-lro";
import { Image, ImageListResult } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { AzureSphereContext as Client, ImagesCreateOrUpdate200Response, ImagesCreateOrUpdate201Response, ImagesCreateOrUpdateDefaultResponse, ImagesCreateOrUpdateLogicalResponse, ImagesDelete200Response, ImagesDelete202Response, ImagesDelete204Response, ImagesDeleteDefaultResponse, ImagesDeleteLogicalResponse, ImagesGet200Response, ImagesGetDefaultResponse, ImagesListByCatalog200Response, ImagesListByCatalogDefaultResponse } from "../../rest/index.js";
import { StreamableMethod } from "@azure-rest/core-client";
import { ImagesGetOptionalParams, ImagesCreateOrUpdateOptionalParams, ImagesDeleteOptionalParams, ImagesListByCatalogOptionalParams } from "../../models/options.js";
export declare function _getSend(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, imageName: string, options?: ImagesGetOptionalParams): StreamableMethod<ImagesGet200Response | ImagesGetDefaultResponse>;
export declare function _getDeserialize(result: ImagesGet200Response | ImagesGetDefaultResponse): Promise<Image>;
/** Get a Image */
export declare function get(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, imageName: string, options?: ImagesGetOptionalParams): Promise<Image>;
export declare function _createOrUpdateSend(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, imageName: string, resource: Image, options?: ImagesCreateOrUpdateOptionalParams): StreamableMethod<ImagesCreateOrUpdate200Response | ImagesCreateOrUpdate201Response | ImagesCreateOrUpdateDefaultResponse | ImagesCreateOrUpdateLogicalResponse>;
export declare function _createOrUpdateDeserialize(result: ImagesCreateOrUpdate200Response | ImagesCreateOrUpdate201Response | ImagesCreateOrUpdateDefaultResponse | ImagesCreateOrUpdateLogicalResponse): Promise<Image>;
/** Create a Image */
export declare function createOrUpdate(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, imageName: string, resource: Image, options?: ImagesCreateOrUpdateOptionalParams): PollerLike<OperationState<Image>, Image>;
export declare function _$deleteSend(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, imageName: string, options?: ImagesDeleteOptionalParams): StreamableMethod<ImagesDelete200Response | ImagesDelete202Response | ImagesDelete204Response | ImagesDeleteDefaultResponse | ImagesDeleteLogicalResponse>;
export declare function _$deleteDeserialize(result: ImagesDelete200Response | ImagesDelete202Response | ImagesDelete204Response | ImagesDeleteDefaultResponse | ImagesDeleteLogicalResponse): Promise<void>;
/** Delete a Image */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export declare function $delete(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, imageName: string, options?: ImagesDeleteOptionalParams): PollerLike<OperationState<void>, void>;
export declare function _listByCatalogSend(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, options?: ImagesListByCatalogOptionalParams): StreamableMethod<ImagesListByCatalog200Response | ImagesListByCatalogDefaultResponse>;
export declare function _listByCatalogDeserialize(result: ImagesListByCatalog200Response | ImagesListByCatalogDefaultResponse): Promise<ImageListResult>;
/** List Image resources by Catalog */
export declare function listByCatalog(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, options?: ImagesListByCatalogOptionalParams): PagedAsyncIterableIterator<Image>;
//# sourceMappingURL=index.d.ts.map