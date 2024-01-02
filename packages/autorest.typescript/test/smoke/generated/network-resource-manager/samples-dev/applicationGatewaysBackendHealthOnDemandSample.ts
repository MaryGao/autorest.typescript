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
  ApplicationGatewayOnDemandProbe,
  NetworkManagementClient,
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets the backend health for given combination of backend pool and http setting of the specified application gateway in a resource group.
 *
 * @summary Gets the backend health for given combination of backend pool and http setting of the specified application gateway in a resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/ApplicationGatewayBackendHealthTest.json
 */
async function testBackendHealth() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg1";
  const applicationGatewayName = "appgw";
  const probeRequest: ApplicationGatewayOnDemandProbe = {
    path: "/",
    backendAddressPool: {
      id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/backendaddressPools/MFAnalyticsPool",
    },
    backendHttpSettings: {
      id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/backendHttpSettingsCollection/MFPoolSettings",
    },
    pickHostNameFromBackendHttpSettings: true,
    timeout: 30,
    protocol: "Http",
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result =
    await client.applicationGateways.beginBackendHealthOnDemandAndWait(
      resourceGroupName,
      applicationGatewayName,
      probeRequest,
    );
  console.log(result);
}

async function main() {
  testBackendHealth();
}

main().catch(console.error);
