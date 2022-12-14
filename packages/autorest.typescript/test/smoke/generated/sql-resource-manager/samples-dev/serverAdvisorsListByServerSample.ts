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
  ServerAdvisorsListByServerOptionalParams,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets a list of server advisors.
 *
 * @summary Gets a list of server advisors.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/ServerAdvisorList.json
 */
async function listOfServerAdvisors() {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["RESOURCE_GROUP"] || "workloadinsight-demos";
  const serverName = "misosisvr";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.serverAdvisors.listByServer(
    resourceGroupName,
    serverName
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Gets a list of server advisors.
 *
 * @summary Gets a list of server advisors.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/ServerRecommendedActionListExpand.json
 */
async function listOfServerRecommendedActionsForAllAdvisors() {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["RESOURCE_GROUP"] || "workloadinsight-demos";
  const serverName = "misosisvr";
  const expand = "recommendedActions";
  const options: ServerAdvisorsListByServerOptionalParams = { expand };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.serverAdvisors.listByServer(
    resourceGroupName,
    serverName,
    options
  );
  console.log(result);
}

async function main() {
  listOfServerAdvisors();
  listOfServerRecommendedActionsForAllAdvisors();
}

main().catch(console.error);
