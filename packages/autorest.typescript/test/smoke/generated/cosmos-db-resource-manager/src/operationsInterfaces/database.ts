/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Metric,
  DatabaseListMetricsOptionalParams,
  Usage,
  DatabaseListUsagesOptionalParams,
  MetricDefinition,
  DatabaseListMetricDefinitionsOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Database. */
export interface Database {
  /**
   * Retrieves the metrics determined by the given filter for the given database account and database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   *               parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   *               names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param options The options parameters.
   */
  listMetrics(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    filter: string,
    options?: DatabaseListMetricsOptionalParams,
  ): PagedAsyncIterableIterator<Metric>;
  /**
   * Retrieves the usages (most recent data) for the given database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param options The options parameters.
   */
  listUsages(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    options?: DatabaseListUsagesOptionalParams,
  ): PagedAsyncIterableIterator<Usage>;
  /**
   * Retrieves metric definitions for the given database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param options The options parameters.
   */
  listMetricDefinitions(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    options?: DatabaseListMetricDefinitionsOptionalParams,
  ): PagedAsyncIterableIterator<MetricDefinition>;
}
