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
 * This sample demonstrates how to Delete specified connection created by this subscription.
 *
 * @summary Delete specified connection created by this subscription.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/NetworkManagerConnectionSubscriptionDelete.json
 */
async function deleteSubscriptionNetworkManagerConnection() {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const networkManagerConnectionName = "TestNMConnection";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.subscriptionNetworkManagerConnections.delete(
    networkManagerConnectionName
  );
  console.log(result);
}

async function main() {
  deleteSubscriptionNetworkManagerConnection();
}

main().catch(console.error);