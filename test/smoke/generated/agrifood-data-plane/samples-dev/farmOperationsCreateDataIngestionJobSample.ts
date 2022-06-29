// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createClient, {
  getLongRunningPoller
} from "@msinternal/agrifood-data-plane";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create a farm operation data ingestion job.
 *
 * @summary Create a farm operation data ingestion job.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/FarmOperations_CreateDataIngestionJob.json
 */
async function farmOperationsCreateDataIngestionJob() {
  const Endpoint = "{Endpoint}";
  const credential = new DefaultAzureCredential();
  const client = createClient(Endpoint, credential);
  const jobId = "JOB123";
  const initialResponse = await client
    .path("/farm-operations/ingest-data/{jobId}", jobId)
    .put();
  const poller = getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

farmOperationsCreateDataIngestionJob().catch(console.error);
