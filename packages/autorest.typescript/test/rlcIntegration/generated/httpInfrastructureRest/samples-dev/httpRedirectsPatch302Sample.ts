// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createHttpInfrastructureRestClient, {
  HttpRedirectsPatch302Parameters
} from "@msinternal/http-infrastructure-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Patch302
 *
 * @summary call operation Patch302
 */
async function httpRedirectsPatch302Sample() {
  const client = createHttpInfrastructureRestClient();
  const options: HttpRedirectsPatch302Parameters = {
    body: true,
    contentType: "application/json"
  };
  const result = await client.path("/http/redirect/302").patch(options);
  console.log(result);
}

async function main() {
  httpRedirectsPatch302Sample();
}

main().catch(console.error);