// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient, {
  HttpSuccessDelete202Parameters
} from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Delete202
 *
 * @summary call operation Delete202
 */
async function httpSuccessDelete202Sample() {
  const client = createHttpInfrastructureRestClient();
  const options: HttpSuccessDelete202Parameters = {
    body: true,
    contentType: "application/json"
  };
  const result = await client.path("/http/success/202").delete(options);
  console.log(result);
}

async function main() {
  httpSuccessDelete202Sample();
}

main().catch(console.error);