// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { LoadTestServiceContext } from "../../rest/index.js";
import getClient from "../../rest/index.js";

/** Optional parameters for the client. */
export interface TestProfileAdministrationOperationsClientOptionalParams
  extends ClientOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

export { LoadTestServiceContext } from "../../rest/index.js";

export function createTestProfileAdministrationOperations(
  endpointParam: string,
  credential: TokenCredential,
  options: TestProfileAdministrationOperationsClientOptionalParams = {},
): LoadTestServiceContext {
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";

  const clientContext = getClient(endpointParam, credential, {
    ...options,
    userAgentOptions: { userAgentPrefix },
  });
  return clientContext;
}