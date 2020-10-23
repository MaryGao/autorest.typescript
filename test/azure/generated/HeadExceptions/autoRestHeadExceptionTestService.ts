/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { AutoRestHeadExceptionTestServiceContext } from "./autoRestHeadExceptionTestServiceContext";


class AutoRestHeadExceptionTestService extends AutoRestHeadExceptionTestServiceContext {
  // Operation groups
  headException: operations.HeadException;

  /**
   * Initializes a new instance of the AutoRestHeadExceptionTestService class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param [options] The parameter options
   */
  constructor(credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials, options?: Models.AutoRestHeadExceptionTestServiceOptions) {
    super(credentials, options);
    this.headException = new operations.HeadException(this);
  }
}

// Operation Specifications

export {
  AutoRestHeadExceptionTestService,
  AutoRestHeadExceptionTestServiceContext,
  Models as AutoRestHeadExceptionTestServiceModels,
  Mappers as AutoRestHeadExceptionTestServiceMappers
};
export * from "./operations";
