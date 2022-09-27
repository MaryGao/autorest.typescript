/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  WorkloadGroup,
  WorkloadGroupsListByDatabaseOptionalParams,
  WorkloadGroupsGetOptionalParams,
  WorkloadGroupsGetResponse,
  WorkloadGroupsCreateOrUpdateOptionalParams,
  WorkloadGroupsCreateOrUpdateResponse,
  WorkloadGroupsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a WorkloadGroups. */
export interface WorkloadGroups {
  /**
   * Gets the list of workload groups
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  listByDatabase(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: WorkloadGroupsListByDatabaseOptionalParams
  ): PagedAsyncIterableIterator<WorkloadGroup>;
  /**
   * Gets a workload group
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param workloadGroupName The name of the workload group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    workloadGroupName: string,
    options?: WorkloadGroupsGetOptionalParams
  ): Promise<WorkloadGroupsGetResponse>;
  /**
   * Creates or updates a workload group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param workloadGroupName The name of the workload group.
   * @param parameters The requested workload group state.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    workloadGroupName: string,
    parameters: WorkloadGroup,
    options?: WorkloadGroupsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<WorkloadGroupsCreateOrUpdateResponse>,
      WorkloadGroupsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a workload group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param workloadGroupName The name of the workload group.
   * @param parameters The requested workload group state.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    workloadGroupName: string,
    parameters: WorkloadGroup,
    options?: WorkloadGroupsCreateOrUpdateOptionalParams
  ): Promise<WorkloadGroupsCreateOrUpdateResponse>;
  /**
   * Deletes a workload group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param workloadGroupName The name of the workload group to delete.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    workloadGroupName: string,
    options?: WorkloadGroupsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes a workload group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param workloadGroupName The name of the workload group to delete.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    workloadGroupName: string,
    options?: WorkloadGroupsDeleteOptionalParams
  ): Promise<void>;
}
