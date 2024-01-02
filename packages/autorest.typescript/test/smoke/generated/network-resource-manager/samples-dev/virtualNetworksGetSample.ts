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
 * This sample demonstrates how to Gets the specified virtual network by resource group.
 *
 * @summary Gets the specified virtual network by resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/VirtualNetworkGet.json
 */
async function getVirtualNetwork() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg1";
  const virtualNetworkName = "test-vnet";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualNetworks.get(
    resourceGroupName,
    virtualNetworkName,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Gets the specified virtual network by resource group.
 *
 * @summary Gets the specified virtual network by resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/VirtualNetworkGetWithSubnetDelegation.json
 */
async function getVirtualNetworkWithADelegatedSubnet() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subId";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg1";
  const virtualNetworkName = "test-vnet";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualNetworks.get(
    resourceGroupName,
    virtualNetworkName,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Gets the specified virtual network by resource group.
 *
 * @summary Gets the specified virtual network by resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/VirtualNetworkGetWithServiceAssociationLink.json
 */
async function getVirtualNetworkWithServiceAssociationLinks() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subId";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg1";
  const virtualNetworkName = "test-vnet";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualNetworks.get(
    resourceGroupName,
    virtualNetworkName,
  );
  console.log(result);
}

async function main() {
  getVirtualNetwork();
  getVirtualNetworkWithADelegatedSubnet();
  getVirtualNetworkWithServiceAssociationLinks();
}

main().catch(console.error);
