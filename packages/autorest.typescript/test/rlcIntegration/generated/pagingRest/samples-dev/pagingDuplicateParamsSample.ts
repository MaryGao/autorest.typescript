// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createPagingClient, {
  PagingDuplicateParamsParameters,
  paginate
} from "@msinternal/paging-service";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation DuplicateParams
 *
 * @summary call operation DuplicateParams
 */
async function pagingDuplicateParamsSample() {
  const client = createPagingClient();
  const options: PagingDuplicateParamsParameters = {
    queryParameters: { $filter: '{Your "$filter"}' }
  };
  const initialResponse = await client
    .path("/paging/multiple/duplicateParams/1")
    .get(options);
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  pagingDuplicateParamsSample();
}

main().catch(console.error);