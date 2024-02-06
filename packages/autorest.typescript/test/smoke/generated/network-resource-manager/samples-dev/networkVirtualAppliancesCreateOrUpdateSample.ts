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
  NetworkVirtualAppliance,
  NetworkManagementClient,
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates the specified Network Virtual Appliance.
 *
 * @summary Creates or updates the specified Network Virtual Appliance.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/NetworkVirtualAppliancePut.json
 */
async function createNetworkVirtualAppliance() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg1";
  const networkVirtualApplianceName = "nva";
  const parameters: NetworkVirtualAppliance = {
    bootStrapConfigurationBlobs: [
      "https://csrncvhdstorage1.blob.core.windows.net/csrncvhdstoragecont/csrbootstrapconfig",
    ],
    cloudInitConfigurationBlobs: [
      "https://csrncvhdstorage1.blob.core.windows.net/csrncvhdstoragecont/csrcloudinitconfig",
    ],
    identity: {
      type: "UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/subid/resourcegroups/rg1/providers/MicrosoftManagedIdentity/userAssignedIdentities/identity1":
          {},
      },
    },
    location: "West US",
    nvaSku: {
      bundledScaleUnit: "1",
      marketPlaceVersion: "12.1",
      vendor: "Cisco SDWAN",
    },
    tags: { key1: "value1" },
    virtualApplianceAsn: 10000,
    virtualHub: {
      id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/hub1",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result =
    await client.networkVirtualAppliances.beginCreateOrUpdateAndWait(
      resourceGroupName,
      networkVirtualApplianceName,
      parameters,
    );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates the specified Network Virtual Appliance.
 *
 * @summary Creates or updates the specified Network Virtual Appliance.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/NetworkVirtualApplianceSaaSPut.json
 */
async function createSaaSNetworkVirtualAppliance() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg1";
  const networkVirtualApplianceName = "nva";
  const parameters: NetworkVirtualAppliance = {
    delegation: { serviceName: "PaloAltoNetworks.Cloudngfw/firewalls" },
    location: "West US",
    tags: { key1: "value1" },
    virtualHub: {
      id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/hub1",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result =
    await client.networkVirtualAppliances.beginCreateOrUpdateAndWait(
      resourceGroupName,
      networkVirtualApplianceName,
      parameters,
    );
  console.log(result);
}

async function main() {
  createNetworkVirtualAppliance();
  createSaaSNetworkVirtualAppliance();
}

main().catch(console.error);
