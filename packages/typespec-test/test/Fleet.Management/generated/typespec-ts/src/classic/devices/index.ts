// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzureSphereContext } from "../../api/azureSphereContext.js";
import {
  Device,
  DeviceUpdate,
  GenerateCapabilityImageRequest,
  SignedCapabilityImageResponse,
} from "../../models/models.js";
import {
  get,
  createOrUpdate,
  update,
  $delete,
  listByDeviceGroup,
  generateCapabilityImage,
} from "../../api/devices/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  DevicesGetOptionalParams,
  DevicesCreateOrUpdateOptionalParams,
  DevicesUpdateOptionalParams,
  DevicesDeleteOptionalParams,
  DevicesListByDeviceGroupOptionalParams,
  DevicesGenerateCapabilityImageOptionalParams,
} from "../../models/options.js";

export interface DevicesOperations {
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    deviceName: string,
    options?: DevicesGetOptionalParams,
  ) => Promise<Device>;
  createOrUpdate: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    deviceName: string,
    resource: Device,
    options?: DevicesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Device>, Device>;
  update: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    deviceName: string,
    properties: DeviceUpdate,
    options?: DevicesUpdateOptionalParams,
  ) => Promise<Device>;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    deviceName: string,
    options?: DevicesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  listByDeviceGroup: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    options?: DevicesListByDeviceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Device>;
  generateCapabilityImage: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    deviceName: string,
    body: GenerateCapabilityImageRequest,
    options?: DevicesGenerateCapabilityImageOptionalParams,
  ) => PollerLike<
    OperationState<SignedCapabilityImageResponse>,
    SignedCapabilityImageResponse
  >;
}

export function getDevices(context: AzureSphereContext) {
  return {
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      deviceName: string,
      options?: DevicesGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        deviceName,
        options,
      ),
    createOrUpdate: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      deviceName: string,
      resource: Device,
      options?: DevicesCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        deviceName,
        resource,
        options,
      ),
    update: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      deviceName: string,
      properties: DeviceUpdate,
      options?: DevicesUpdateOptionalParams,
    ) =>
      update(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        deviceName,
        properties,
        options,
      ),
    delete: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      deviceName: string,
      options?: DevicesDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        deviceName,
        options,
      ),
    listByDeviceGroup: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      options?: DevicesListByDeviceGroupOptionalParams,
    ) =>
      listByDeviceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        options,
      ),
    generateCapabilityImage: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      deviceName: string,
      body: GenerateCapabilityImageRequest,
      options?: DevicesGenerateCapabilityImageOptionalParams,
    ) =>
      generateCapabilityImage(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        deviceName,
        body,
        options,
      ),
  };
}

export function getDevicesOperations(
  context: AzureSphereContext,
): DevicesOperations {
  return {
    ...getDevices(context),
  };
}
