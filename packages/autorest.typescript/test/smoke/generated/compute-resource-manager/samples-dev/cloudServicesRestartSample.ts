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
  RoleInstances,
  CloudServicesRestartOptionalParams,
  ComputeManagementClient
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Restarts one or more role instances in a cloud service.
 *
 * @summary Restarts one or more role instances in a cloud service.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-03-01/examples/RestartCloudServiceRoleInstances.json
 */
async function restartCloudServiceRoleInstances() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "ConstosoRG";
  const cloudServiceName = "{cs-name}";
  const parameters: RoleInstances = {
    roleInstances: ["ContosoFrontend_IN_0", "ContosoBackend_IN_1"]
  };
  const options: CloudServicesRestartOptionalParams = { parameters };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.cloudServices.beginRestartAndWait(
    resourceGroupName,
    cloudServiceName,
    options
  );
  console.log(result);
}

async function main() {
  restartCloudServiceRoleInstances();
}

main().catch(console.error);
