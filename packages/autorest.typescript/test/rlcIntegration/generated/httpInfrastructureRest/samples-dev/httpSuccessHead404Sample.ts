// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Head404
 *
 * @summary call operation Head404
 */
async function httpSuccessHead404Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/success/404").head();
  console.log(result);
}

async function main() {
  httpSuccessHead404Sample();
}

main().catch(console.error);