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
 * This sample demonstrates how to Deletes the specified private endpoint.
 *
 * @summary Deletes the specified private endpoint.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/PrivateEndpointDelete.json
 */
async function deletePrivateEndpoint() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subId";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg1";
  const privateEndpointName = "testPe";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.privateEndpoints.beginDeleteAndWait(
    resourceGroupName,
    privateEndpointName
  );
  console.log(result);
}

async function main() {
  deletePrivateEndpoint();
}

main().catch(console.error);
