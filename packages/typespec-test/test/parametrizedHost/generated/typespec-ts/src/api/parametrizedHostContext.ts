// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { logger } from "../logger.js";
import { Client, ClientOptions, getClient } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";

export interface ParametrizedHostContext extends Client {}

/** Optional parameters for the client. */
export interface ParametrizedHostClientOptionalParams extends ClientOptions {
  host?: string;
  subdomain?: string;
  sufix?: string;
}

export function createParametrizedHost(
  credential: TokenCredential,
  apiVersion: string,
  options: ParametrizedHostClientOptionalParams = {},
): ParametrizedHostContext {
  const host = options.host ?? "one";
  const subdomain = options.subdomain ?? "two";
  const sufix = options.sufix ?? "three";
  const endpointUrl =
    options.endpoint ?? options.baseUrl ?? `${host}.${subdomain}.${sufix}.com`;

  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";
  const { apiVersion: _, ...updatedOptions } = {
    ...options,
    userAgentOptions: { userAgentPrefix },
    loggingOptions: { logger: options.loggingOptions?.logger ?? logger.info },
    credentials: {
      scopes: options.credentials?.scopes ?? [
        "https://parametrized-host.azure.com/.default",
      ],
    },
  };
  const clientContext = getClient(endpointUrl, credential, updatedOptions);
  clientContext.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  clientContext.pipeline.addPolicy({
    name: "ClientApiVersionPolicy",
    sendRequest: (req, next) => {
      // Use the apiVersion defined in request url directly
      // Append one if there is no apiVersion and we have one at client options
      const url = new URL(req.url);
      if (!url.searchParams.get("api-version")) {
        req.url = `${req.url}${
          Array.from(url.searchParams.keys()).length > 0 ? "&" : "?"
        }api-version=${apiVersion}`;
      }

      return next(req);
    },
  });
  return clientContext;
}
