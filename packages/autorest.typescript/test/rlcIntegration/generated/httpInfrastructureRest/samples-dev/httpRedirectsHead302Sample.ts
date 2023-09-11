// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Head302
 *
 * @summary call operation Head302
 */
async function httpRedirectsHead302Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/redirect/302").head();
  console.log(result);
}

async function main() {
  httpRedirectsHead302Sample();
}

main().catch(console.error);