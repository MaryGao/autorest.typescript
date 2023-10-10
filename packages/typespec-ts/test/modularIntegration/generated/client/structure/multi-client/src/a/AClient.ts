// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { ClientType } from "./models/models.js";
import {
  RenamedOneOptions,
  RenamedThreeOptions,
  RenamedFiveOptions,
} from "./models/options.js";
import {
  createA,
  AClientOptions,
  ServiceContext,
  renamedOne,
  renamedThree,
  renamedFive,
} from "./api/index.js";

export { AClientOptions } from "./api/AContext.js";

export class AClient {
  private _client: ServiceContext;
  public readonly pipeline: Pipeline;

  constructor(
    endpoint: string,
    this.pipeline = this._client.pipeline;
    options: AClientOptions = {}
  ) {
    this._client = createA(endpoint, client, options);
  }

  renamedOne(
    options: RenamedOneOptions = { requestOptions: {} }
  ): Promise<void> {
    return renamedOne(this._client, options);
  }

  renamedThree(
    options: RenamedThreeOptions = { requestOptions: {} }
  ): Promise<void> {
    return renamedThree(this._client, options);
  }

  renamedFive(
    options: RenamedFiveOptions = { requestOptions: {} }
  ): Promise<void> {
    return renamedFive(this._client, options);
  }
}
