// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzureSphereContext } from "../../api/azureSphereContext.js";
import {
  DeviceGroup,
  CountDevicesResponse,
  Product,
  ProductUpdate,
} from "../../models/models.js";
import {
  get,
  createOrUpdate,
  update,
  $delete,
  listByCatalog,
  countDevices,
  generateDefaultDeviceGroups,
} from "../../api/products/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  ProductsGetOptionalParams,
  ProductsCreateOrUpdateOptionalParams,
  ProductsUpdateOptionalParams,
  ProductsDeleteOptionalParams,
  ProductsListByCatalogOptionalParams,
  ProductsCountDevicesOptionalParams,
  ProductsGenerateDefaultDeviceGroupsOptionalParams,
} from "../../models/options.js";

export interface ProductsOperations {
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    options?: ProductsGetOptionalParams,
  ) => Promise<Product>;
  createOrUpdate: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    resource: Product,
    options?: ProductsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Product>, Product>;
  update: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    properties: ProductUpdate,
    options?: ProductsUpdateOptionalParams,
  ) => PollerLike<OperationState<Product>, Product>;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    options?: ProductsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  listByCatalog: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    options?: ProductsListByCatalogOptionalParams,
  ) => PagedAsyncIterableIterator<Product>;
  countDevices: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    options?: ProductsCountDevicesOptionalParams,
  ) => Promise<CountDevicesResponse>;
  generateDefaultDeviceGroups: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    options?: ProductsGenerateDefaultDeviceGroupsOptionalParams,
  ) => PagedAsyncIterableIterator<DeviceGroup>;
}

export function getProducts(context: AzureSphereContext) {
  return {
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      options?: ProductsGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        options,
      ),
    createOrUpdate: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      resource: Product,
      options?: ProductsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        resource,
        options,
      ),
    update: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      properties: ProductUpdate,
      options?: ProductsUpdateOptionalParams,
    ) =>
      update(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        properties,
        options,
      ),
    delete: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      options?: ProductsDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        options,
      ),
    listByCatalog: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      options?: ProductsListByCatalogOptionalParams,
    ) =>
      listByCatalog(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        options,
      ),
    countDevices: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      options?: ProductsCountDevicesOptionalParams,
    ) =>
      countDevices(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        options,
      ),
    generateDefaultDeviceGroups: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      options?: ProductsGenerateDefaultDeviceGroupsOptionalParams,
    ) =>
      generateDefaultDeviceGroups(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        options,
      ),
  };
}

export function getProductsOperations(
  context: AzureSphereContext,
): ProductsOperations {
  return {
    ...getProducts(context),
  };
}
