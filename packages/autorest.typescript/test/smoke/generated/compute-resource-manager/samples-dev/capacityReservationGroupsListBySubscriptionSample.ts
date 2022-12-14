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
  CapacityReservationGroupsListBySubscriptionOptionalParams,
  ComputeManagementClient
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists all of the capacity reservation groups in the subscription. Use the nextLink property in the response to get the next page of capacity reservation groups.
 *
 * @summary Lists all of the capacity reservation groups in the subscription. Use the nextLink property in the response to get the next page of capacity reservation groups.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/compute/ListCapacityReservationGroupsInSubscription.json
 */
async function listCapacityReservationGroupsInSubscription() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const expand = "virtualMachines/$ref";
  const options: CapacityReservationGroupsListBySubscriptionOptionalParams = {
    expand
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.capacityReservationGroups.listBySubscription(
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listCapacityReservationGroupsInSubscription();
}

main().catch(console.error);
