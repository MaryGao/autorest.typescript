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
async function bgpPeersGetSample() {
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
    .get();
  console.log(result);
}

async function main() {
  bgpPeersGetSample();
}

main().catch(console.error);
