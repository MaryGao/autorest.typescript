// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createKubernetesRuntimeClient from "@azure/arm-containerorchestratorruntime";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Get
 *
 * @summary call operation Get
 */
async function storageClassGetSample() {
  const credential = new DefaultAzureCredential();
  const client = createKubernetesRuntimeClient(credential);
  const resourceUri = "{Your resourceUri}";
  const storageClassName = "{Your storageClassName}";
  const result = await client
    .path(
      "/{resourceUri}/providers/Microsoft.KubernetesRuntime/storageClasses/{storageClassName}",
      resourceUri,
      storageClassName,
    )
    .get();
  console.log(result);
}

async function main() {
  storageClassGetSample();
}

main().catch(console.error);
