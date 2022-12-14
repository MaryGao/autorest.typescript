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
 * This sample demonstrates how to Fetches the details of a ExpressRoute gateway in a resource group.
 *
 * @summary Fetches the details of a ExpressRoute gateway in a resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/ExpressRouteGatewayGet.json
 */
async function expressRouteGatewayGet() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["RESOURCE_GROUP"] || "resourceGroupName";
  const expressRouteGatewayName = "expressRouteGatewayName";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.expressRouteGateways.get(
    resourceGroupName,
    expressRouteGatewayName
  );
  console.log(result);
}

async function main() {
  expressRouteGatewayGet();
}

main().catch(console.error);
