/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists all available request headers.
 *
 * @summary Lists all available request headers.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/ApplicationGatewayAvailableRequestHeadersGet.json
 */
async function getAvailableRequestHeaders() {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "72f988bf-86f1-41af-91ab-2d7cd0dddd4";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.applicationGateways.listAvailableRequestHeaders();
  console.log(result);
}

async function main() {
  getAvailableRequestHeaders();
}

main().catch(console.error);
