/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ComputeManagementClient } from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List gallery Application Versions in a gallery Application Definition.
 *
 * @summary List gallery Application Versions in a gallery Application Definition.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/gallery/ListGalleryApplicationVersionsInAGalleryApplication.json
 */
async function listGalleryApplicationVersionsInAGalleryApplicationDefinition() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "myResourceGroup";
  const galleryName = "myGalleryName";
  const galleryApplicationName = "myGalleryApplicationName";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.galleryApplicationVersions.listByGalleryApplication(
    resourceGroupName,
    galleryName,
    galleryApplicationName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listGalleryApplicationVersionsInAGalleryApplicationDefinition();
}

main().catch(console.error);
