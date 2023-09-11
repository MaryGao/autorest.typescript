// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Get202None204NoneDefaultNone400Invalid
 *
 * @summary call operation Get202None204NoneDefaultNone400Invalid
 */
async function multipleResponsesGet202None204NoneDefaultNone400InvalidSample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client
    .path("/http/payloads/202/none/204/none/default/none/response/400/invalid")
    .get();
  console.log(result);
}

async function main() {
  multipleResponsesGet202None204NoneDefaultNone400InvalidSample();
}

main().catch(console.error);