// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createKubernetesRuntimeClient from "@azure/arm-containerorchestratorruntime";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation CreateOrUpdate
 *
 * @summary call operation CreateOrUpdate
 */
async function servicesCreateOrUpdateSample() {
  const credential = new DefaultAzureCredential();
  const client = createKubernetesRuntimeClient(credential);
  const resourceUri = "{Your resourceUri}";
  const serviceName = "{Your serviceName}";
  const result = await client
    .path(
      "/{resourceUri}/providers/Microsoft.KubernetesRuntime/services/{serviceName}",
      resourceUri,
      serviceName,
    )
    .put({ body: { properties: {} } });
  console.log(result);
}

async function main() {
  servicesCreateOrUpdateSample();
}

main().catch(console.error);
