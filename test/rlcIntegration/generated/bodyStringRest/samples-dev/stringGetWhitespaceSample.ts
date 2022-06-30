// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createClient from "@msinternal/body-string-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get string value with leading and trailing whitespace '<tab><space><space>Now is the time for all good men to come to the aid of their country<tab><space><space>'
 *
 * @summary Get string value with leading and trailing whitespace '<tab><space><space>Now is the time for all good men to come to the aid of their country<tab><space><space>'
 * x-ms-original-file: file:///C:/Users/marygao/project/autorest.typescript/node_modules/@microsoft.azure/autorest.testserver/swagger/examples/string_getWhitespace.json
 */
async function stringGetWhitespace() {
  const client = createClient();
  const result = await client.path("/string/whitespace").get();
  console.log(result);
}

stringGetWhitespace().catch(console.error);
