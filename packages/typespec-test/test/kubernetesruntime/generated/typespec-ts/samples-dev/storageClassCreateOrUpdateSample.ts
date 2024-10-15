// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DefaultAzureCredential } from "@azure/identity";
import createKubernetesRuntimeClient, {
  getLongRunningPoller,
} from "@azure/arm-containerorchestratorruntime";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation CreateOrUpdate
 *
 * @summary call operation CreateOrUpdate
 */
async function storageClassCreateOrUpdateSample() {
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
    .put({
      body: {
        properties: {
          allowVolumeExpansion: "Allow",
          mountOptions: ["{Your mountOptions}"],
          provisioner: "{Your provisioner}",
          volumeBindingMode: "Immediate",
          accessModes: ["ReadWriteOnce"],
          dataResilience: "NotDataResilient",
          failoverSpeed: "NotAvailable",
          limitations: ["{Your limitations}"],
          performance: "Undefined",
          priority: 123,
          typeProperties: { type: "Native" },
        },
      },
    });
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  storageClassCreateOrUpdateSample();
}

main().catch(console.error);
