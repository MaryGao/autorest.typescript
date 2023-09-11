// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createLRORestClient, {
  getLongRunningPoller
} from "@msinternal/lro-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Delete204Succeeded
 *
 * @summary call operation Delete204Succeeded
 */
async function lROsDelete204SucceededSample() {
  const client = createLRORestClient();
  const initialResponse = await client
    .path("/lro/delete/204/succeeded")
    .delete();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lROsDelete204SucceededSample();
}

main().catch(console.error);