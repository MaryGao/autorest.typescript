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
async function bgpPeersCreateOrUpdateSample() {
  const credential = new DefaultAzureCredential();
  const client = createKubernetesRuntimeClient(credential);
  const resourceUri = "{Your resourceUri}";
  const bgpPeerName = "{Your bgpPeerName}";
  const initialResponse = await client
    .path(
      "/{resourceUri}/providers/Microsoft.KubernetesRuntime/bgpPeers/{bgpPeerName}",
      resourceUri,
      bgpPeerName,
    )
    .put({
      body: {
        properties: {
          myAsn: 123,
          peerAsn: 123,
          peerAddress: "{Your peerAddress}",
        },
      },
    });
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  bgpPeersCreateOrUpdateSample();
}

main().catch(console.error);
