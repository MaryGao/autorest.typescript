// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DefaultAzureCredential } from "@azure/identity";
import createKubernetesRuntimeClient, {
  paginate,
} from "@azure/arm-containerorchestratorruntime";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation List
 *
 * @summary call operation List
 */
async function loadBalancersListSample() {
  const credential = new DefaultAzureCredential();
  const client = createKubernetesRuntimeClient(credential);
  const resourceUri = "{Your resourceUri}";
  const initialResponse = await client
    .path(
      "/{resourceUri}/providers/Microsoft.KubernetesRuntime/loadBalancers",
      resourceUri,
    )
    .get();
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  loadBalancersListSample();
}

main().catch(console.error);
