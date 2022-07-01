// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createBodyStringRestClient, {
  StringPutMbcsParameters
} from "@msinternal/body-string-rest";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Set string value mbcs '啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€'
 *
 * @summary Set string value mbcs '啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€'
 * x-ms-original-file: file:///C:/Users/marygao/project/autorest.typescript/node_modules/@microsoft.azure/autorest.testserver/swagger/examples/string_putMbcs.json
 */
async function stringPutMbcs() {
  const client = createClient();
  const options: StringPutMbcsParameters = {
    body:
      "啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€"
  };
  const result = await client.path("/string/mbcs").put(options);
  console.log(result);
}

stringPutMbcs().catch(console.error);
