// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzureSphereContext } from "../../api/azureSphereContext.js";
import {
  Device,
  Deployment,
  Image,
  DeviceGroup,
  CountDevicesResponse,
  Catalog,
  CatalogUpdate,
  ListDeviceGroupsRequest,
  DeviceInsight,
} from "../../models/models.js";
import {
  get,
  createOrUpdate,
  update,
  $delete,
  listByResourceGroup,
  listBySubscription,
  countDevices,
  listDeployments,
  listDeviceGroups,
  listDeviceInsights,
  listDevices,
  uploadImage,
} from "../../api/catalogs/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  CatalogsGetOptionalParams,
  CatalogsCreateOrUpdateOptionalParams,
  CatalogsUpdateOptionalParams,
  CatalogsDeleteOptionalParams,
  CatalogsListByResourceGroupOptionalParams,
  CatalogsListBySubscriptionOptionalParams,
  CatalogsCountDevicesOptionalParams,
  CatalogsListDeploymentsOptionalParams,
  CatalogsListDeviceGroupsOptionalParams,
  CatalogsListDeviceInsightsOptionalParams,
  CatalogsListDevicesOptionalParams,
  CatalogsUploadImageOptionalParams,
} from "../../models/options.js";

export interface CatalogsOperations {
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    options?: CatalogsGetOptionalParams,
  ) => Promise<Catalog>;
  createOrUpdate: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    resource: Catalog,
    options?: CatalogsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Catalog>, Catalog>;
  update: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    properties: CatalogUpdate,
    options?: CatalogsUpdateOptionalParams,
  ) => Promise<Catalog>;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    options?: CatalogsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  listByResourceGroup: (
    subscriptionId: string,
    resourceGroupName: string,
    options?: CatalogsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Catalog>;
  listBySubscription: (
    subscriptionId: string,
    options?: CatalogsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<Catalog>;
  countDevices: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    options?: CatalogsCountDevicesOptionalParams,
  ) => Promise<CountDevicesResponse>;
  listDeployments: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    options?: CatalogsListDeploymentsOptionalParams,
  ) => PagedAsyncIterableIterator<Deployment>;
  listDeviceGroups: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    body: ListDeviceGroupsRequest,
    options?: CatalogsListDeviceGroupsOptionalParams,
  ) => PagedAsyncIterableIterator<DeviceGroup>;
  listDeviceInsights: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    options?: CatalogsListDeviceInsightsOptionalParams,
  ) => PagedAsyncIterableIterator<DeviceInsight>;
  listDevices: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    options?: CatalogsListDevicesOptionalParams,
  ) => PagedAsyncIterableIterator<Device>;
  uploadImage: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    body: Image,
    options?: CatalogsUploadImageOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getCatalogs(context: AzureSphereContext) {
  return {
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      options?: CatalogsGetOptionalParams,
    ) => get(context, subscriptionId, resourceGroupName, catalogName, options),
    createOrUpdate: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      resource: Catalog,
      options?: CatalogsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        resource,
        options,
      ),
    update: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      properties: CatalogUpdate,
      options?: CatalogsUpdateOptionalParams,
    ) =>
      update(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        properties,
        options,
      ),
    delete: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      options?: CatalogsDeleteOptionalParams,
    ) =>
      $delete(context, subscriptionId, resourceGroupName, catalogName, options),
    listByResourceGroup: (
      subscriptionId: string,
      resourceGroupName: string,
      options?: CatalogsListByResourceGroupOptionalParams,
    ) =>
      listByResourceGroup(context, subscriptionId, resourceGroupName, options),
    listBySubscription: (
      subscriptionId: string,
      options?: CatalogsListBySubscriptionOptionalParams,
    ) => listBySubscription(context, subscriptionId, options),
    countDevices: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      options?: CatalogsCountDevicesOptionalParams,
    ) =>
      countDevices(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        options,
      ),
    listDeployments: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      options?: CatalogsListDeploymentsOptionalParams,
    ) =>
      listDeployments(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        options,
      ),
    listDeviceGroups: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      body: ListDeviceGroupsRequest,
      options?: CatalogsListDeviceGroupsOptionalParams,
    ) =>
      listDeviceGroups(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        body,
        options,
      ),
    listDeviceInsights: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      options?: CatalogsListDeviceInsightsOptionalParams,
    ) =>
      listDeviceInsights(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        options,
      ),
    listDevices: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      options?: CatalogsListDevicesOptionalParams,
    ) =>
      listDevices(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        options,
      ),
    uploadImage: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      body: Image,
      options?: CatalogsUploadImageOptionalParams,
    ) =>
      uploadImage(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        body,
        options,
      ),
  };
}

export function getCatalogsOperations(
  context: AzureSphereContext,
): CatalogsOperations {
  return {
    ...getCatalogs(context),
  };
}
