// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { StandardContext } from "../rest/index.js";
import { ClientOptions } from "@azure-rest/core-client";
import { KeyCredential } from "@azure/core-auth";
import { TokenCredential } from "@azure/core-auth";
import getClient from "../rest/index.js";

export { StandardContext } from "../rest/index.js";

export interface StandardClientOptions extends ClientOptions {}

/** Illustrates bodies templated with Azure Core with long-running operation */
export function createStandard(
  endpoint: string,
  credential: KeyCredential | TokenCredential,
  options: StandardClientOptions = {}
): StandardContext {
  const baseUrl = endpoint;
  const clientContext = getClient(baseUrl, credential, options);
  return clientContext;
}
