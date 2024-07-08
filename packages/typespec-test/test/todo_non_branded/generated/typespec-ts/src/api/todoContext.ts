// Licensed under the MIT license.

import { KeyCredential } from "@typespec/ts-http-runtime";
import { ClientOptions } from "@typespec/ts-http-runtime";
import { TodoContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface TodoClientOptions extends ClientOptions {}

export { TodoContext } from "../rest/index.js";

export function createTodo(
  endpoint: string,
  credential: KeyCredential | KeyCredential,
  options: TodoClientOptions = {},
): TodoContext {
  const clientContext = getClient(endpoint, credential, options);
  return clientContext;
}
