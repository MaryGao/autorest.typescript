/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { AutoRestDurationTestServiceContext } from "./autoRestDurationTestServiceContext";

class AutoRestDurationTestService extends AutoRestDurationTestServiceContext {
  // Operation groups
  duration: operations.Duration;

  /**
   * Initializes a new instance of the AutoRestDurationTestService class.
   * @param [options] The parameter options
   */
  constructor(options?: Models.AutoRestDurationTestServiceOptions) {
    super(options);
    this.duration = new operations.Duration(this);
  }
}

// Operation Specifications

export {
  AutoRestDurationTestService,
  AutoRestDurationTestServiceContext,
  Models as AutoRestDurationTestServiceModels,
  Mappers as AutoRestDurationTestServiceMappers
};
export * from "./operations";
