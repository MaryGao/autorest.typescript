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
  DdosCustomPolicy,
  NetworkManagementClient,
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a DDoS custom policy.
 *
 * @summary Creates or updates a DDoS custom policy.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/DdosCustomPolicyCreate.json
 */
async function createDDoSCustomPolicy() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg1";
  const ddosCustomPolicyName = "test-ddos-custom-policy";
  const parameters: DdosCustomPolicy = { location: "centraluseuap" };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.ddosCustomPolicies.beginCreateOrUpdateAndWait(
    resourceGroupName,
    ddosCustomPolicyName,
    parameters,
  );
  console.log(result);
}

async function main() {
  createDDoSCustomPolicy();
}

main().catch(console.error);
