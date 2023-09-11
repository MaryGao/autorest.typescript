// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createUrlRestClient from "@msinternal/url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetIntOneMillion
 *
 * @summary call operation GetIntOneMillion
 */
async function queriesGetIntOneMillionSample() {
  const client = createUrlRestClient();
  const result = await client.path("/queries/int/1000000").get();
  console.log(result);
}

async function main() {
  queriesGetIntOneMillionSample();
}

main().catch(console.error);
