// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createLRORestClient, {
  LrosaDsPutAsyncRelativeRetryInvalidJsonPollingParameters,
  getLongRunningPoller
} from "@msinternal/lro-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation PutAsyncRelativeRetryInvalidJsonPolling
 *
 * @summary call operation PutAsyncRelativeRetryInvalidJsonPolling
 */
async function lrosaDsPutAsyncRelativeRetryInvalidJsonPollingSample() {
  const client = createLRORestClient();
  const options: LrosaDsPutAsyncRelativeRetryInvalidJsonPollingParameters = {
    body: {
      properties: { provisioningState: '{Your "provisioningState"}' },
      tags: { key: '{Your "tags"}' },
      location: '{Your "location"}'
    },
    contentType: "application/json"
  };
  const initialResponse = await client
    .path("/lro/error/putasync/retry/invalidjsonpolling")
    .put(options);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lrosaDsPutAsyncRelativeRetryInvalidJsonPollingSample();
}

main().catch(console.error);