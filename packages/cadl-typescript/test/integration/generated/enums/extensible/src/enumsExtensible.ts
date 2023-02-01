// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { EnumsExtensibleClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `EnumsExtensibleClient`
 *
 */
export default function createClient(
  options: ClientOptions = {}
): EnumsExtensibleClient {
  const baseUrl = options.baseUrl ?? `http://localhost:3000`;
  options.apiVersion = options.apiVersion ?? "1.0.0";
  const userAgentInfo = `azsdk-js-extensible-enums-rest/1.0.0`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix,
    },
  };

  const client = getClient(baseUrl, options) as EnumsExtensibleClient;

  return client;
}
