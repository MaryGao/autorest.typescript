// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createKubernetesRuntimeClient from "@azure/arm-containerorchestratorruntime";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Delete
 *
 * @summary call operation Delete
 */
async function bgpPeersDeleteSample() {
  const credential = new DefaultAzureCredential();
  const client = createKubernetesRuntimeClient(credential);
  const resourceUri = "{Your resourceUri}";
  const bgpPeerName = "{Your bgpPeerName}";
  const result = await client
    .path(
      "/{resourceUri}/providers/Microsoft.KubernetesRuntime/bgpPeers/{bgpPeerName}",
      resourceUri,
      bgpPeerName,
    )
    .delete();
  console.log(result);
}

async function main() {
  bgpPeersDeleteSample();
}

main().catch(console.error);
