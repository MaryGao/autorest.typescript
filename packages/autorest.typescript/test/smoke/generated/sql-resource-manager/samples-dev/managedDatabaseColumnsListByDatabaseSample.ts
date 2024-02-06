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
  ManagedDatabaseColumnsListByDatabaseOptionalParams,
  SqlManagementClient,
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List managed database columns
 *
 * @summary List managed database columns
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/ManagedColumnsListByDatabaseMax.json
 */
async function filterManagedDatabaseColumns() {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myRG";
  const managedInstanceName = "serverName";
  const databaseName = "myDatabase";
  const schema = ["dbo"];
  const table = ["customer", "address"];
  const column = ["username"];
  const orderBy = ["schema asc", "table", "column desc"];
  const options: ManagedDatabaseColumnsListByDatabaseOptionalParams = {
    schema,
    table,
    column,
    orderBy,
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.managedDatabaseColumns.listByDatabase(
    resourceGroupName,
    managedInstanceName,
    databaseName,
    options,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to List managed database columns
 *
 * @summary List managed database columns
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/ManagedColumnsListByDatabaseMin.json
 */
async function listManagedDatabaseColumns() {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myRG";
  const managedInstanceName = "serverName";
  const databaseName = "myDatabase";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.managedDatabaseColumns.listByDatabase(
    resourceGroupName,
    managedInstanceName,
    databaseName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  filterManagedDatabaseColumns();
  listManagedDatabaseColumns();
}

main().catch(console.error);
