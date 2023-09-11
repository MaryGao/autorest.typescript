// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Get200
 *
 * @summary call operation Get200
 */
async function httpSuccessGet200Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/success/200").get();
  console.log(result);
}

async function main() {
  httpSuccessGet200Sample();
}

main().catch(console.error);