// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createClient from "@msinternal/agrifood-data-plane";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get a cascade delete job for specified farmer.
 *
 * @summary Get a cascade delete job for specified farmer.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/Farmers_GetCascadeDeleteJobDetails.json
 */
async function farmersGetCascadeDeleteJobDetails() {
  const Endpoint = "{Endpoint}";
  const credential = new DefaultAzureCredential();
  const client = createClient(Endpoint, credential);
  const jobId = "JOB123";
  const result = await client
    .path("/farmers/cascade-delete/{jobId}", jobId)
    .get();
  console.log(result);
}

farmersGetCascadeDeleteJobDetails().catch(console.error);
