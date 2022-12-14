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
  ExpressRouteCircuitPeering,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a peering in the specified express route circuits.
 *
 * @summary Creates or updates a peering in the specified express route circuits.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/ExpressRouteCircuitPeeringCreate.json
 */
async function createExpressRouteCircuitPeerings() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg1";
  const circuitName = "circuitName";
  const peeringName = "AzurePrivatePeering";
  const peeringParameters: ExpressRouteCircuitPeering = {
    peerASN: 200,
    primaryPeerAddressPrefix: "192.168.16.252/30",
    secondaryPeerAddressPrefix: "192.168.18.252/30",
    vlanId: 200
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.expressRouteCircuitPeerings.beginCreateOrUpdateAndWait(
    resourceGroupName,
    circuitName,
    peeringName,
    peeringParameters
  );
  console.log(result);
}

async function main() {
  createExpressRouteCircuitPeerings();
}

main().catch(console.error);
