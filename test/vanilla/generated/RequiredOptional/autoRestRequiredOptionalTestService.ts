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
import { AutoRestRequiredOptionalTestServiceContext } from "./autoRestRequiredOptionalTestServiceContext";

class AutoRestRequiredOptionalTestService extends AutoRestRequiredOptionalTestServiceContext {
  // Operation groups
  implicit: operations.Implicit;
  explicit: operations.Explicit;

  /**
   * Initializes a new instance of the AutoRestRequiredOptionalTestService class.
   * @param requiredGlobalPath number of items to skip
   * @param requiredGlobalQuery number of items to skip
   * @param [options] The parameter options
   */
  constructor(requiredGlobalPath: string | TokenCredential, requiredGlobalQuery: string | TokenCredential, options?: Models.AutoRestRequiredOptionalTestServiceOptions) {
    super(requiredGlobalPath, requiredGlobalQuery, options);
    this.implicit = new operations.Implicit(this);
    this.explicit = new operations.Explicit(this);
  }
}

// Operation Specifications

export {
  AutoRestRequiredOptionalTestService,
  AutoRestRequiredOptionalTestServiceContext,
  Models as AutoRestRequiredOptionalTestServiceModels,
  Mappers as AutoRestRequiredOptionalTestServiceMappers
};
export * from "./operations";
