// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DefaultAzureCredential } from "@azure/identity";
import createKubernetesRuntimeClient, {
  getLongRunningPoller,
} from "@azure/arm-containerorchestratorruntime";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Delete
 *
 * @summary call operation Delete
 */
async function storageClassDeleteSample() {
  const credential = new DefaultAzureCredential();
  const client = createKubernetesRuntimeClient(credential);
  const resourceUri = "{Your resourceUri}";
  const storageClassName = "{Your storageClassName}";
  const initialResponse = await client
    .path(
      "/{resourceUri}/providers/Microsoft.KubernetesRuntime/storageClasses/{storageClassName}",
      resourceUri,
      storageClassName,
    )
    .delete();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  storageClassDeleteSample();
}

main().catch(console.error);
