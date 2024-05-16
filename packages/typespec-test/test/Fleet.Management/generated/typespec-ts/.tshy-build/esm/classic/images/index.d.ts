import { AzureSphereContext } from "../../api/azureSphereContext.js";
import { Image } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { ImagesGetOptionalParams, ImagesCreateOrUpdateOptionalParams, ImagesDeleteOptionalParams, ImagesListByCatalogOptionalParams } from "../../models/options.js";
export interface ImagesOperations {
    get: (subscriptionId: string, resourceGroupName: string, catalogName: string, imageName: string, options?: ImagesGetOptionalParams) => Promise<Image>;
    createOrUpdate: (subscriptionId: string, resourceGroupName: string, catalogName: string, imageName: string, resource: Image, options?: ImagesCreateOrUpdateOptionalParams) => PollerLike<OperationState<Image>, Image>;
    delete: (subscriptionId: string, resourceGroupName: string, catalogName: string, imageName: string, options?: ImagesDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
    listByCatalog: (subscriptionId: string, resourceGroupName: string, catalogName: string, options?: ImagesListByCatalogOptionalParams) => PagedAsyncIterableIterator<Image>;
}
export declare function getImages(context: AzureSphereContext): {
    get: (subscriptionId: string, resourceGroupName: string, catalogName: string, imageName: string, options?: ImagesGetOptionalParams) => Promise<Image>;
    createOrUpdate: (subscriptionId: string, resourceGroupName: string, catalogName: string, imageName: string, resource: Image, options?: ImagesCreateOrUpdateOptionalParams) => PollerLike<OperationState<Image>, Image>;
    delete: (subscriptionId: string, resourceGroupName: string, catalogName: string, imageName: string, options?: ImagesDeleteOptionalParams) => PollerLike<OperationState<void>, void>;
    listByCatalog: (subscriptionId: string, resourceGroupName: string, catalogName: string, options?: ImagesListByCatalogOptionalParams) => PagedAsyncIterableIterator<Image, Image[], import("../../models/pagingTypes.js").PageSettings>;
};
export declare function getImagesOperations(context: AzureSphereContext): ImagesOperations;
//# sourceMappingURL=index.d.ts.map