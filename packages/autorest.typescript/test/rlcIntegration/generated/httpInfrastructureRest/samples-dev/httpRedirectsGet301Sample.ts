// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Get301
 *
 * @summary call operation Get301
 */
async function httpRedirectsGet301Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/redirect/301").get();
  console.log(result);
}

async function main() {
  httpRedirectsGet301Sample();
}

main().catch(console.error);