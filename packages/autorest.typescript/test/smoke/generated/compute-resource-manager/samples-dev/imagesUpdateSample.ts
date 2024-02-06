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
  ImageUpdate,
  ComputeManagementClient,
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update an image.
 *
 * @summary Update an image.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/compute/UpdateImage.json
 */
async function updatesTagsOfAnImage() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const imageName = "myImage";
  const parameters: ImageUpdate = {
    hyperVGeneration: "V1",
    sourceVirtualMachine: {
      id: "/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/virtualMachines/myVM",
    },
    tags: { department: "HR" },
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.images.beginUpdateAndWait(
    resourceGroupName,
    imageName,
    parameters,
  );
  console.log(result);
}

async function main() {
  updatesTagsOfAnImage();
}

main().catch(console.error);
