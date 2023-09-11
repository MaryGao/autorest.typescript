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
 * This sample demonstrates how to call operation PostAsyncRelativeRetryNoPayload
 *
 * @summary call operation PostAsyncRelativeRetryNoPayload
 */
async function lrosaDsPostAsyncRelativeRetryNoPayloadSample() {
  const client = createLRORestClient();
  const initialResponse = await client
    .path("/lro/error/postasync/retry/nopayload")
    .post();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lrosaDsPostAsyncRelativeRetryNoPayloadSample();
}

main().catch(console.error);
