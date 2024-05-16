// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzureSphereContext } from "../../api/azureSphereContext.js";
import { Deployment } from "../../models/models.js";
import {
  get,
  createOrUpdate,
  $delete,
  listByDeviceGroup,
} from "../../api/deployments/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  DeploymentsGetOptionalParams,
  DeploymentsCreateOrUpdateOptionalParams,
  DeploymentsDeleteOptionalParams,
  DeploymentsListByDeviceGroupOptionalParams,
} from "../../models/options.js";

export interface DeploymentsOperations {
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    deploymentName: string,
    options?: DeploymentsGetOptionalParams,
  ) => Promise<Deployment>;
  createOrUpdate: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    deploymentName: string,
    resource: Deployment,
    options?: DeploymentsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Deployment>, Deployment>;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    deploymentName: string,
    options?: DeploymentsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  listByDeviceGroup: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    productName: string,
    deviceGroupName: string,
    options?: DeploymentsListByDeviceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Deployment>;
}

export function getDeployments(context: AzureSphereContext) {
  return {
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      deploymentName: string,
      options?: DeploymentsGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        deploymentName,
        options,
      ),
    createOrUpdate: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      deploymentName: string,
      resource: Deployment,
      options?: DeploymentsCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        deploymentName,
        resource,
        options,
      ),
    delete: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      deploymentName: string,
      options?: DeploymentsDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        productName,
        deviceGroupName,
        deploymentName,
        options,
      ),
    listByDeviceGroup: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      productName: string,
      deviceGroupName: string,
      options?: DeploymentsListByDeviceGroupOptionalParams,
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
  };
}

export function getDeploymentsOperations(
  context: AzureSphereContext,
): DeploymentsOperations {
  return {
    ...getDeployments(context),
  };
}
