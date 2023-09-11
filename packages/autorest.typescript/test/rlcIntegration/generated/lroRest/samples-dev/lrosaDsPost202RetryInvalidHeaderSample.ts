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
 * This sample demonstrates how to call operation Post202RetryInvalidHeader
 *
 * @summary call operation Post202RetryInvalidHeader
 */
async function lrosaDsPost202RetryInvalidHeaderSample() {
  const client = createLRORestClient();
  const initialResponse = await client
    .path("/lro/error/post/202/retry/invalidheader")
    .post();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

async function main() {
  lrosaDsPost202RetryInvalidHeaderSample();
}

main().catch(console.error);
