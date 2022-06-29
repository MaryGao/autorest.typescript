// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createClient from "@msinternal/agrifood-data-plane";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get a specified oauthProvider resource.
 *
 * @summary Get a specified oauthProvider resource.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/OAuthProviders_Get.json
 */
async function oAuthProvidersGet() {
  const Endpoint = "{Endpoint}";
  const credential = new DefaultAzureCredential();
  const client = createClient(Endpoint, credential);
  const oauthProviderId = "JOHNDEERE";
  const result = await client
    .path("/oauth/providers/{oauthProviderId}", oauthProviderId)
    .get();
  console.log(result);
}

oAuthProvidersGet().catch(console.error);
