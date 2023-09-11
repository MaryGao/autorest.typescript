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
 * This sample demonstrates how to call operation PostAsyncRetrySucceeded
 *
 * @summary call operation PostAsyncRetrySucceeded
 */
async function lROsCustomHeaderPostAsyncRetrySucceededSample() {
  const client = createLRORestClient();
  const initialResponse = await client
    .path("/lro/customheader/postasync/retry/succeeded")
    .post();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lROsCustomHeaderPostAsyncRetrySucceededSample();
}

main().catch(console.error);
