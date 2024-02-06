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
  AvailabilitySetsListBySubscriptionOptionalParams,
  ComputeManagementClient,
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists all availability sets in a subscription.
 *
 * @summary Lists all availability sets in a subscription.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/compute/ListAvailabilitySetsInASubscription.json
 */
async function listAvailabilitySetsInASubscription() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscriptionId}";
  const expand = "virtualMachines\\$ref";
  const options: AvailabilitySetsListBySubscriptionOptionalParams = { expand };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.availabilitySets.listBySubscription(options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listAvailabilitySetsInASubscription();
}

main().catch(console.error);
