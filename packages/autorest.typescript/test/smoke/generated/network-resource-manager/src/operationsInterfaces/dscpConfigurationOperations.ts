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
  DscpConfiguration,
  DscpConfigurationListOptionalParams,
  DscpConfigurationListAllOptionalParams,
  DscpConfigurationCreateOrUpdateOptionalParams,
  DscpConfigurationCreateOrUpdateResponse,
  DscpConfigurationDeleteOptionalParams,
  DscpConfigurationGetOptionalParams,
  DscpConfigurationGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DscpConfigurationOperations. */
export interface DscpConfigurationOperations {
  /**
   * Gets a DSCP Configuration.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    options?: DscpConfigurationListOptionalParams
  ): PagedAsyncIterableIterator<DscpConfiguration>;
  /**
   * Gets all dscp configurations in a subscription.
   * @param options The options parameters.
   */
  listAll(
    options?: DscpConfigurationListAllOptionalParams
  ): PagedAsyncIterableIterator<DscpConfiguration>;
  /**
   * Creates or updates a DSCP Configuration.
   * @param resourceGroupName The name of the resource group.
   * @param dscpConfigurationName The name of the resource.
   * @param parameters Parameters supplied to the create or update dscp configuration operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    dscpConfigurationName: string,
    parameters: DscpConfiguration,
    options?: DscpConfigurationCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<DscpConfigurationCreateOrUpdateResponse>,
      DscpConfigurationCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a DSCP Configuration.
   * @param resourceGroupName The name of the resource group.
   * @param dscpConfigurationName The name of the resource.
   * @param parameters Parameters supplied to the create or update dscp configuration operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    dscpConfigurationName: string,
    parameters: DscpConfiguration,
    options?: DscpConfigurationCreateOrUpdateOptionalParams
  ): Promise<DscpConfigurationCreateOrUpdateResponse>;
  /**
   * Deletes a DSCP Configuration.
   * @param resourceGroupName The name of the resource group.
   * @param dscpConfigurationName The name of the resource.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    dscpConfigurationName: string,
    options?: DscpConfigurationDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes a DSCP Configuration.
   * @param resourceGroupName The name of the resource group.
   * @param dscpConfigurationName The name of the resource.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    dscpConfigurationName: string,
    options?: DscpConfigurationDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets a DSCP Configuration.
   * @param resourceGroupName The name of the resource group.
   * @param dscpConfigurationName The name of the resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    dscpConfigurationName: string,
    options?: DscpConfigurationGetOptionalParams
  ): Promise<DscpConfigurationGetResponse>;
}
