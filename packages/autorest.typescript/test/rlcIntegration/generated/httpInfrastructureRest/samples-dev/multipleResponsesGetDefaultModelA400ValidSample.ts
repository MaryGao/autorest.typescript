// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetDefaultModelA400Valid
 *
 * @summary call operation GetDefaultModelA400Valid
 */
async function multipleResponsesGetDefaultModelA400ValidSample() {
  const client = createHttpInfrastructureRestClient();
  const result = await client
    .path("/http/payloads/default/A/response/400/valid")
    .get();
  console.log(result);
}

async function main() {
  multipleResponsesGetDefaultModelA400ValidSample();
}

main().catch(console.error);