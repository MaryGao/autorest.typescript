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
 * This sample demonstrates how to call operation Put200SucceededNoState
 *
 * @summary call operation Put200SucceededNoState
 */
async function lROsPut200SucceededNoStateSample() {
  const client = createLRORestClient();
  const initialResponse = await client
    .path("/lro/put/200/succeeded/nostate")
    .put();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lROsPut200SucceededNoStateSample();
}

main().catch(console.error);
