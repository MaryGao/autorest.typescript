/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { TenantIdDescription, TenantsListOptionalParams } from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Tenants. */
export interface Tenants {
  /**
   * Gets the tenants for your account.
   * @param options The options parameters.
   */
  list(
    options?: TenantsListOptionalParams,
  ): PagedAsyncIterableIterator<TenantIdDescription>;
}
