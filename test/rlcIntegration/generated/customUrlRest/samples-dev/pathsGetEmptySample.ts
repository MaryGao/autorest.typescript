// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createClient from "@msinternal/custom-url-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get a 200 to test a valid base uri
 *
 * @summary Get a 200 to test a valid base uri
 * x-ms-original-file: file:///C:/Users/marygao/project/autorest.typescript/node_modules/@microsoft.azure/autorest.testserver/swagger/examples/paths_getEmpty.json
 */
async function pathsGetEmpty() {
  const client = createClient();
  const result = await client.path("/customuri").get();
  console.log(result);
}

pathsGetEmpty().catch(console.error);
