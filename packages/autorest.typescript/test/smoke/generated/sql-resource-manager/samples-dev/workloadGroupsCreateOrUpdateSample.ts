/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  WorkloadGroup,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a workload group.
 *
 * @summary Creates or updates a workload group.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/CreateOrUpdateWorkloadGroupMax.json
 */
async function createAWorkloadGroupWithAllPropertiesSpecified() {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["RESOURCE_GROUP"] || "Default-SQL-SouthEastAsia";
  const serverName = "testsvr";
  const databaseName = "testdb";
  const workloadGroupName = "smallrc";
  const parameters: WorkloadGroup = {
    importance: "normal",
    maxResourcePercent: 100,
    maxResourcePercentPerRequest: 3,
    minResourcePercent: 0,
    minResourcePercentPerRequest: 3,
    queryExecutionTimeout: 0
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.workloadGroups.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serverName,
    databaseName,
    workloadGroupName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a workload group.
 *
 * @summary Creates or updates a workload group.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/CreateOrUpdateWorkloadGroupMin.json
 */
async function createAWorkloadGroupWithTheRequiredPropertiesSpecified() {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["RESOURCE_GROUP"] || "Default-SQL-SouthEastAsia";
  const serverName = "testsvr";
  const databaseName = "testdb";
  const workloadGroupName = "smallrc";
  const parameters: WorkloadGroup = {
    maxResourcePercent: 100,
    minResourcePercent: 0,
    minResourcePercentPerRequest: 3
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.workloadGroups.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serverName,
    databaseName,
    workloadGroupName,
    parameters
  );
  console.log(result);
}

async function main() {
  createAWorkloadGroupWithAllPropertiesSpecified();
  createAWorkloadGroupWithTheRequiredPropertiesSpecified();
}

main().catch(console.error);
