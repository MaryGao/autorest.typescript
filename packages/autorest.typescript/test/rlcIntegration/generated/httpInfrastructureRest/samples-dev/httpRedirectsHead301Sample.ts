// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Head301
 *
 * @summary call operation Head301
 */
async function httpRedirectsHead301Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/redirect/301").head();
  console.log(result);
}

async function main() {
  httpRedirectsHead301Sample();
}

main().catch(console.error);