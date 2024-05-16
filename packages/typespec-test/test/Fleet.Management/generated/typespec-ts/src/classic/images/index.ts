// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzureSphereContext } from "../../api/azureSphereContext.js";
import { Image } from "../../models/models.js";
import {
  get,
  createOrUpdate,
  $delete,
  listByCatalog,
} from "../../api/images/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  ImagesGetOptionalParams,
  ImagesCreateOrUpdateOptionalParams,
  ImagesDeleteOptionalParams,
  ImagesListByCatalogOptionalParams,
} from "../../models/options.js";

export interface ImagesOperations {
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    imageName: string,
    options?: ImagesGetOptionalParams,
  ) => Promise<Image>;
  createOrUpdate: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    imageName: string,
    resource: Image,
    options?: ImagesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Image>, Image>;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    imageName: string,
    options?: ImagesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  listByCatalog: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    options?: ImagesListByCatalogOptionalParams,
  ) => PagedAsyncIterableIterator<Image>;
}

export function getImages(context: AzureSphereContext) {
  return {
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      imageName: string,
      options?: ImagesGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        imageName,
        options,
      ),
    createOrUpdate: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      imageName: string,
      resource: Image,
      options?: ImagesCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        imageName,
        resource,
        options,
      ),
    delete: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      imageName: string,
      options?: ImagesDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        imageName,
        options,
      ),
    listByCatalog: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      options?: ImagesListByCatalogOptionalParams,
    ) =>
      listByCatalog(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        options,
      ),
  };
}

export function getImagesOperations(
  context: AzureSphereContext,
): ImagesOperations {
  return {
    ...getImages(context),
  };
}
