// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger";
import { ServiceClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `ServiceClient`
 * @param clientParam - Possible values: default, multi-client, renamed-operation, two-operation-group
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  clientParam: string,
  options: ClientOptions = {}
): ServiceClient {
  const baseUrl =
    options.baseUrl ?? `http://localhost:3000/client/structure/${clientParam}`;
  options.apiVersion = options.apiVersion ?? "1.0.0";
  const userAgentInfo = `azsdk-js-client-structure-twoopgroup-rest/1.0.0`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix,
    },
    loggingOptions: {
      logger: options.loggingOptions?.logger ?? logger.info,
    },
  };

  const client = getClient(baseUrl, options) as ServiceClient;

  return client;
}