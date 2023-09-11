// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Get403
 *
 * @summary call operation Get403
 */
async function httpClientFailureGet403Sample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client.path("/http/failure/client/403").get();
  console.log(result);
}

async function main() {
  httpClientFailureGet403Sample();
}

main().catch(console.error);
