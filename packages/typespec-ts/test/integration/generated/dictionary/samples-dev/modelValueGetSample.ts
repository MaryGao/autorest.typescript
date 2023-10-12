// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createDictClient from "@msinternal/dictionary";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Get
 *
 * @summary call operation Get
 */
async function modelValueGetSample() {
  const client = createDictClient();
  const result = await client.path("/type/dictionary/model").get();
  console.log(result);
}

async function main() {
  modelValueGetSample();
}

main().catch(console.error);