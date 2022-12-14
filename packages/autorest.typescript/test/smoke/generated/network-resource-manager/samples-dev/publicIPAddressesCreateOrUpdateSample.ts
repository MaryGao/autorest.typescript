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
  PublicIPAddress,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a static or dynamic public IP address.
 *
 * @summary Creates or updates a static or dynamic public IP address.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/PublicIpAddressCreateDns.json
 */
async function createPublicIPAddressDns() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg1";
  const publicIpAddressName = "test-ip";
  const parameters: PublicIPAddress = {
    dnsSettings: { domainNameLabel: "dnslbl" },
    location: "eastus"
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.publicIPAddresses.beginCreateOrUpdateAndWait(
    resourceGroupName,
    publicIpAddressName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a static or dynamic public IP address.
 *
 * @summary Creates or updates a static or dynamic public IP address.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/PublicIpAddressCreateCustomizedValues.json
 */
async function createPublicIPAddressAllocationMethod() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg1";
  const publicIpAddressName = "test-ip";
  const parameters: PublicIPAddress = {
    idleTimeoutInMinutes: 10,
    location: "eastus",
    publicIPAddressVersion: "IPv4",
    publicIPAllocationMethod: "Static",
    sku: { name: "Standard", tier: "Global" }
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.publicIPAddresses.beginCreateOrUpdateAndWait(
    resourceGroupName,
    publicIpAddressName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a static or dynamic public IP address.
 *
 * @summary Creates or updates a static or dynamic public IP address.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/PublicIpAddressCreateDefaults.json
 */
async function createPublicIPAddressDefaults() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg1";
  const publicIpAddressName = "test-ip";
  const parameters: PublicIPAddress = { location: "eastus" };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.publicIPAddresses.beginCreateOrUpdateAndWait(
    resourceGroupName,
    publicIpAddressName,
    parameters
  );
  console.log(result);
}

async function main() {
  createPublicIPAddressDns();
  createPublicIPAddressAllocationMethod();
  createPublicIPAddressDefaults();
}

main().catch(console.error);
