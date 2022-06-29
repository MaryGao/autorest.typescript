// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createClient from "@msinternal/agrifood-data-plane";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get cascade delete job details for OAuth tokens for specified job ID.
 *
 * @summary Get cascade delete job details for OAuth tokens for specified job ID.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/OAuthTokens_GetCascadeDeleteJobDetails.json
 */
async function oAuthTokensGetCascadeDeleteJobDetails() {
  const Endpoint = "{Endpoint}";
  const credential = new DefaultAzureCredential();
  const client = createClient(Endpoint, credential);
  const jobId = "JOBID123";
  const result = await client.path("/oauth/tokens/remove/{jobId}", jobId).get();
  console.log(result);
}

oAuthTokensGetCascadeDeleteJobDetails().catch(console.error);
