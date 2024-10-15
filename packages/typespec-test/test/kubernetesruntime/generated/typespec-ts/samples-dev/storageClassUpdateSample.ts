// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DefaultAzureCredential } from "@azure/identity";
import createKubernetesRuntimeClient, {
  getLongRunningPoller,
} from "@azure/arm-containerorchestratorruntime";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Update
 *
 * @summary call operation Update
 */
async function storageClassUpdateSample() {
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
    .patch({
      body: {
        properties: {
          allowVolumeExpansion: "Allow",
          mountOptions: ["{Your mountOptions}"],
          accessModes: ["ReadWriteOnce"],
          dataResilience: "NotDataResilient",
          failoverSpeed: "NotAvailable",
          limitations: ["{Your limitations}"],
          performance: "Undefined",
          priority: 123,
          typeProperties: {
            backingStorageClassName: "{Your backingStorageClassName}",
            azureStorageAccountName: "{Your azureStorageAccountName}",
            azureStorageAccountKey: "{Your azureStorageAccountKey}",
            server: "{Your server}",
            share: "{Your share}",
            subDir: "{Your subDir}",
            mountPermissions: "{Your mountPermissions}",
            onDelete: "Delete",
            source: "{Your source}",
            username: "{Your username}",
            password: "{Your password}",
            domain: "{Your domain}",
          },
        },
      },
    });
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  storageClassUpdateSample();
}

main().catch(console.error);
