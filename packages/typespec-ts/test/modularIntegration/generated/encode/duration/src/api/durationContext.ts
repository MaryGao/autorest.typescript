// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { DurationContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface DurationClientOptionalParams extends ClientOptions {}

export { DurationContext } from "../rest/index.js";

/** Test for encode decorator on duration. */
export function createDuration(
  options: DurationClientOptionalParams = {},
): DurationContext {
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
