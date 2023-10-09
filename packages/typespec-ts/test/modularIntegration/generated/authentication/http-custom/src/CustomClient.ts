// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { KeyCredential } from "@azure/core-auth";
import { ValidOptions, InvalidOptions } from "./models/options.js";
import {
  createCustom,
  CustomClientOptions,
  CustomContext,
  valid,
  invalid,
} from "./api/index.js";

export { CustomClientOptions } from "./api/CustomContext.js";

export class CustomClient {
  private _client: CustomContext;

  /** Illustrates clients generated with generic HTTP auth. */
  constructor(credential: KeyCredential, options: CustomClientOptions = {}) {
    this._client = createCustom(credential, options);
  }

  /** Check whether client is authenticated */
  valid(options: ValidOptions = { requestOptions: {} }): Promise<void> {
    return valid(this._client, options);
  }

  /** Check whether client is authenticated. */
  invalid(options: InvalidOptions = { requestOptions: {} }): Promise<void> {
    return invalid(this._client, options);
  }
}
