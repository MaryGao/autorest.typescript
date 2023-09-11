// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient, {
  HttpSuccessPost202Parameters
} from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Post202
 *
 * @summary call operation Post202
 */
async function httpSuccessPost202Sample() {
  const client = createHttpInfrastructureRestClient();
  const options: HttpSuccessPost202Parameters = {
    body: true,
    contentType: "application/json"
  };
  const result = await client.path("/http/success/202").post(options);
  console.log(result);
}

async function main() {
  httpSuccessPost202Sample();
}

main().catch(console.error);