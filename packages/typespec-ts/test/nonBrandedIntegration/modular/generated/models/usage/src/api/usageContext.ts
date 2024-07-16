// Licensed under the MIT license.

import { ClientOptions } from "@typespec/ts-http-runtime";
import { UsageContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface UsageClientOptionalParams extends ClientOptions {}

export { UsageContext } from "../rest/index.js";

/** Illustrates usage of Record in different places(Operation parameters, return type or both). */
export function createUsage(
  options: UsageClientOptionalParams = {},
): UsageContext {
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";

  const clientContext = getClient({
    ...options,
    userAgentOptions: { userAgentPrefix },
  });
  return clientContext;
}
