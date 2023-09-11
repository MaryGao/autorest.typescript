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
 * This sample demonstrates how to call operation Put200UpdatingSucceeded204
 *
 * @summary call operation Put200UpdatingSucceeded204
 */
async function lROsPut200UpdatingSucceeded204Sample() {
  const client = createLRORestClient();
  const initialResponse = await client
    .path("/lro/put/200/updating/succeeded/200")
    .put();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lROsPut200UpdatingSucceeded204Sample();
}

main().catch(console.error);
