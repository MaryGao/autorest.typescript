// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createClient, { paginate } from "@msinternal/agrifood-data-plane";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Returns a paginated list of harvest data resources under a particular farm.
 *
 * @summary Returns a paginated list of harvest data resources under a particular farm.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/HarvestData_ListByFarmerId.json
 */
async function harvestDataListByFarmerId() {
  const Endpoint = "{Endpoint}";
  const credential = new DefaultAzureCredential();
  const client = createClient(Endpoint, credential);
  const farmerId = "FARMER123";
  const initialResponse = await client
    .path("/farmers/{farmerId}/harvest-data", farmerId)
    .get();
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

harvestDataListByFarmerId().catch(console.error);
