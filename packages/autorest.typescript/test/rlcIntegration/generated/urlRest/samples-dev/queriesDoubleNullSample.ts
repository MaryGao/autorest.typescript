// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation DoubleNull
 *
 * @summary call operation DoubleNull
 */
async function queriesDoubleNullSample() {
  const client = createUrlRestClient();
  const result = await client.path("/queries/double/null").get();
  console.log(result);
}

async function main() {
  queriesDoubleNullSample();
}

main().catch(console.error);
