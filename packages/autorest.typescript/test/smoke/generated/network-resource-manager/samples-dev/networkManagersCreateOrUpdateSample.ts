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
  NetworkManager,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a Network Manager.
 *
 * @summary Creates or updates a Network Manager.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/NetworkManagerPut.json
 */
async function putNetworkManager() {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg1";
  const networkManagerName = "TestNetworkManager";
  const parameters: NetworkManager = {
    description: "My Test Network Manager",
    networkManagerScopeAccesses: ["Connectivity"],
    networkManagerScopes: {
      managementGroups: ["/Microsoft.Management/testmg"],
      subscriptions: ["/subscriptions/00000000-0000-0000-0000-000000000000"]
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.networkManagers.createOrUpdate(
    resourceGroupName,
    networkManagerName,
    parameters
  );
  console.log(result);
}

async function main() {
  putNetworkManager();
}

main().catch(console.error);
