// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createBodyStringRestClient, {
  StringPutBase64UrlEncodedParameters
} from "@msinternal/body-string-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Put value that is base64url encoded
 *
 * @summary Put value that is base64url encoded
 * x-ms-original-file: /@microsoft.azure/autorest.testserver/swagger/examples/string_putBase64UrlEncoded.json
 */
async function stringPutBase64UrlEncoded() {
  const client = createBodyStringRestClient();
  const options: StringPutBase64UrlEncodedParameters = {
    body: "YSBzdHJpbmcgdGhhdCBnZXRzIGVuY29kZWQgd2l0aCBiYXNlNjR1cmw"
  };
  const result = await client.path("/string/base64UrlEncoding").put(options);
  console.log(result);
}

async function main() {
  stringPutBase64UrlEncoded();
}

main().catch(console.error);
