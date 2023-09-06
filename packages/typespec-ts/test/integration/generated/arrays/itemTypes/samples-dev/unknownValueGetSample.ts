// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createArrayItemTypesClient from "@msinternal/array-itemtypes";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation Get
 *
 * @summary call operation Get
 */
async function unknownValueGetSample() {
  const client = createArrayItemTypesClient();
  const result = await client.path("/type/array/unknown").get();
  console.log(result);
}

async function main() {
  unknownValueGetSample();
}

main().catch(console.error);
