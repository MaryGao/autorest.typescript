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
async function loadBalancersCreateOrUpdateSample() {
  const credential = new DefaultAzureCredential();
  const client = createKubernetesRuntimeClient(credential);
  const resourceUri = "{Your resourceUri}";
  const loadBalancerName = "{Your loadBalancerName}";
  const initialResponse = await client
    .path(
      "/{resourceUri}/providers/Microsoft.KubernetesRuntime/loadBalancers/{loadBalancerName}",
      resourceUri,
      loadBalancerName,
    )
    .put({
      body: {
        properties: {
          addresses: ["{Your addresses}"],
          serviceSelector: { key: "{Your serviceSelector}" },
          advertiseMode: "ARP",
          bgpPeers: ["{Your bgpPeers}"],
        },
      },
    });
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  loadBalancersCreateOrUpdateSample();
}

main().catch(console.error);
