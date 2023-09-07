// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createConfidentialLedgerClient from "@msinternal/confidential-ledger";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetUser
 *
 * @summary call operation GetUser
 */
async function getUserSample() {
  const ledgerUri = "{Your ledgerUri}";
  const credential = new DefaultAzureCredential();
  const client = createConfidentialLedgerClient(ledgerUri, credential);
  const userId = "{Your userId}";
  const result = await client.path("/app/users/{userId}", userId).get();
  console.log(result);
}

async function main() {
  getUserSample();
}

main().catch(console.error);
