/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  VaultAccessPolicyParameters,
  KeyVaultManagementClient
} from "@msinternal/keyvault-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update access policies in a key vault in the specified subscription.
 *
 * @summary Update access policies in a key vault in the specified subscription.
 * x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-06-01-preview/examples/updateAccessPoliciesAdd.json
 */
async function addAnAccessPolicyOrUpdateAnAccessPolicyWithNewPermissions() {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "sample-group";
  const vaultName = "sample-vault";
  const operationKind = "add";
  const parameters: VaultAccessPolicyParameters = {
    properties: {
      accessPolicies: [
        {
          objectId: "00000000-0000-0000-0000-000000000000",
          permissions: {
            certificates: ["get"],
            keys: ["encrypt"],
            secrets: ["get"]
          },
          tenantId: "00000000-0000-0000-0000-000000000000"
        }
      ]
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new KeyVaultManagementClient(credential, subscriptionId);
  const result = await client.vaults.updateAccessPolicy(
    resourceGroupName,
    vaultName,
    operationKind,
    parameters
  );
  console.log(result);
}

async function main() {
  addAnAccessPolicyOrUpdateAnAccessPolicyWithNewPermissions();
}

main().catch(console.error);
