// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzureSphereContext } from "../../api/azureSphereContext.js";
import {
  DeviceGroup,
  DeviceGroupUpdate,
  ClaimDevicesRequest,
  CountDevicesResponse,
} from "../../models/models.js";
import {
  get,
  createOrUpdate,
  update,
  $delete,
  listByProduct,
  claimDevices,
  countDevices,
} from "../../api/deviceGroups/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  DeviceGroupsGetOptionalParams,
  DeviceGroupsCreateOrUpdateOptionalParams,
  DeviceGroupsUpdateOptionalParams,
  DeviceGroupsDeleteOptionalParams,
  DeviceGroupsListByProductOptionalParams,
  DeviceGroupsClaimDevicesOptionalParams,
  DeviceGroupsCountDevicesOptionalParams,
} from "../../models/options.js";

export interface DeviceGroupsOperations {
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    options?: DeviceGroupsGetOptionalParams,
  ) => Promise<DeviceGroup>;
  createOrUpdate: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    resource: DeviceGroup,
    options?: DeviceGroupsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<DeviceGroup>, DeviceGroup>;
  update: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    properties: DeviceGroupUpdate,
    options?: DeviceGroupsUpdateOptionalParams,
  ) => PollerLike<OperationState<DeviceGroup>, DeviceGroup>;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    options?: DeviceGroupsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  listByProduct: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    options?: DeviceGroupsListByProductOptionalParams,
  ) => PagedAsyncIterableIterator<DeviceGroup>;
  claimDevices: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    body: ClaimDevicesRequest,
    options?: DeviceGroupsClaimDevicesOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  countDevices: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    options?: DeviceGroupsCountDevicesOptionalParams,
  ) => Promise<CountDevicesResponse>;
}

export function getDeviceGroups(context: AzureSphereContext) {
  return {
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      options?: DeviceGroupsGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        options,
      ),
    createOrUpdate: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      resource: DeviceGroup,
      options?: DeviceGroupsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        resource,
        options,
      ),
    update: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      properties: DeviceGroupUpdate,
      options?: DeviceGroupsUpdateOptionalParams,
    ) =>
      update(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        properties,
        options,
      ),
    delete: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      options?: DeviceGroupsDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        options,
      ),
    listByProduct: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      options?: DeviceGroupsListByProductOptionalParams,
    ) =>
      listByProduct(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        options,
      ),
    claimDevices: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      body: ClaimDevicesRequest,
      options?: DeviceGroupsClaimDevicesOptionalParams,
    ) =>
      claimDevices(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        body,
        options,
      ),
    countDevices: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      options?: DeviceGroupsCountDevicesOptionalParams,
    ) =>
      countDevices(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        options,
      ),
  };
}

export function getDeviceGroupsOperations(
  context: AzureSphereContext,
): DeviceGroupsOperations {
  return {
    ...getDeviceGroups(context),
  };
}
