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
  FailoverGroup,
  FailoverGroupsListByServerOptionalParams,
  FailoverGroupsGetOptionalParams,
  FailoverGroupsGetResponse,
  FailoverGroupsCreateOrUpdateOptionalParams,
  FailoverGroupsCreateOrUpdateResponse,
  FailoverGroupsDeleteOptionalParams,
  FailoverGroupUpdate,
  FailoverGroupsUpdateOptionalParams,
  FailoverGroupsUpdateResponse,
  FailoverGroupsFailoverOptionalParams,
  FailoverGroupsFailoverResponse,
  FailoverGroupsForceFailoverAllowDataLossOptionalParams,
  FailoverGroupsForceFailoverAllowDataLossResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a FailoverGroups. */
export interface FailoverGroups {
  /**
   * Lists the failover groups in a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server containing the failover group.
   * @param options The options parameters.
   */
  listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: FailoverGroupsListByServerOptionalParams,
  ): PagedAsyncIterableIterator<FailoverGroup>;
  /**
   * Gets a failover group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server containing the failover group.
   * @param failoverGroupName The name of the failover group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    failoverGroupName: string,
    options?: FailoverGroupsGetOptionalParams,
  ): Promise<FailoverGroupsGetResponse>;
  /**
   * Creates or updates a failover group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server containing the failover group.
   * @param failoverGroupName The name of the failover group.
   * @param parameters The failover group parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    failoverGroupName: string,
    parameters: FailoverGroup,
    options?: FailoverGroupsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<FailoverGroupsCreateOrUpdateResponse>,
      FailoverGroupsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a failover group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server containing the failover group.
   * @param failoverGroupName The name of the failover group.
   * @param parameters The failover group parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    failoverGroupName: string,
    parameters: FailoverGroup,
    options?: FailoverGroupsCreateOrUpdateOptionalParams,
  ): Promise<FailoverGroupsCreateOrUpdateResponse>;
  /**
   * Deletes a failover group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server containing the failover group.
   * @param failoverGroupName The name of the failover group.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    serverName: string,
    failoverGroupName: string,
    options?: FailoverGroupsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes a failover group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server containing the failover group.
   * @param failoverGroupName The name of the failover group.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    serverName: string,
    failoverGroupName: string,
    options?: FailoverGroupsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Updates a failover group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server containing the failover group.
   * @param failoverGroupName The name of the failover group.
   * @param parameters The failover group parameters.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    serverName: string,
    failoverGroupName: string,
    parameters: FailoverGroupUpdate,
    options?: FailoverGroupsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<FailoverGroupsUpdateResponse>,
      FailoverGroupsUpdateResponse
    >
  >;
  /**
   * Updates a failover group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server containing the failover group.
   * @param failoverGroupName The name of the failover group.
   * @param parameters The failover group parameters.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    failoverGroupName: string,
    parameters: FailoverGroupUpdate,
    options?: FailoverGroupsUpdateOptionalParams,
  ): Promise<FailoverGroupsUpdateResponse>;
  /**
   * Fails over from the current primary server to this server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server containing the failover group.
   * @param failoverGroupName The name of the failover group.
   * @param options The options parameters.
   */
  beginFailover(
    resourceGroupName: string,
    serverName: string,
    failoverGroupName: string,
    options?: FailoverGroupsFailoverOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<FailoverGroupsFailoverResponse>,
      FailoverGroupsFailoverResponse
    >
  >;
  /**
   * Fails over from the current primary server to this server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server containing the failover group.
   * @param failoverGroupName The name of the failover group.
   * @param options The options parameters.
   */
  beginFailoverAndWait(
    resourceGroupName: string,
    serverName: string,
    failoverGroupName: string,
    options?: FailoverGroupsFailoverOptionalParams,
  ): Promise<FailoverGroupsFailoverResponse>;
  /**
   * Fails over from the current primary server to this server. This operation might result in data loss.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server containing the failover group.
   * @param failoverGroupName The name of the failover group.
   * @param options The options parameters.
   */
  beginForceFailoverAllowDataLoss(
    resourceGroupName: string,
    serverName: string,
    failoverGroupName: string,
    options?: FailoverGroupsForceFailoverAllowDataLossOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<FailoverGroupsForceFailoverAllowDataLossResponse>,
      FailoverGroupsForceFailoverAllowDataLossResponse
    >
  >;
  /**
   * Fails over from the current primary server to this server. This operation might result in data loss.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server containing the failover group.
   * @param failoverGroupName The name of the failover group.
   * @param options The options parameters.
   */
  beginForceFailoverAllowDataLossAndWait(
    resourceGroupName: string,
    serverName: string,
    failoverGroupName: string,
    options?: FailoverGroupsForceFailoverAllowDataLossOptionalParams,
  ): Promise<FailoverGroupsForceFailoverAllowDataLossResponse>;
}
