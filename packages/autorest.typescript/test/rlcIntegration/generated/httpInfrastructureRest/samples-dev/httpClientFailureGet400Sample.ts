// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Get400
 *
 * @summary call operation Get400
 */
async function httpClientFailureGet400Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/failure/client/400").get();
  console.log(result);
}

async function main() {
  httpClientFailureGet400Sample();
}

main().catch(console.error);
