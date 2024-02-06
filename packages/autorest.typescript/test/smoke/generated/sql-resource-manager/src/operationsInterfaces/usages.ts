/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Usage, UsagesListByInstancePoolOptionalParams } from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Usages. */
export interface Usages {
  /**
   * Gets all instance pool usage metrics
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param instancePoolName The name of the instance pool to be retrieved.
   * @param options The options parameters.
   */
  listByInstancePool(
    resourceGroupName: string,
    instancePoolName: string,
    options?: UsagesListByInstancePoolOptionalParams,
  ): PagedAsyncIterableIterator<Usage>;
}
