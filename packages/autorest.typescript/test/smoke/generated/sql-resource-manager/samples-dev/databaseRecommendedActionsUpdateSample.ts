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
  RecommendedAction,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Updates a database recommended action.
 *
 * @summary Updates a database recommended action.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/DatabaseRecommendedActionUpdate.json
 */
async function updateDatabaseRecommendedAction() {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["RESOURCE_GROUP"] || "workloadinsight-demos";
  const serverName = "misosisvr";
  const databaseName = "IndexAdvisor_test_3";
  const advisorName = "CreateIndex";
  const recommendedActionName = "IR_[CRM]_[DataPoints]_4821CD2F9510D98184BB";
  const parameters: RecommendedAction = { state: { currentValue: "Pending" } };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.databaseRecommendedActions.update(
    resourceGroupName,
    serverName,
    databaseName,
    advisorName,
    recommendedActionName,
    parameters
  );
  console.log(result);
}

async function main() {
  updateDatabaseRecommendedAction();
}

main().catch(console.error);
