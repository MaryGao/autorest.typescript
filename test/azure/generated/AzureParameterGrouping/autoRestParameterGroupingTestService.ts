/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { AutoRestParameterGroupingTestServiceContext } from "./autoRestParameterGroupingTestServiceContext";


class AutoRestParameterGroupingTestService extends AutoRestParameterGroupingTestServiceContext {
  // Operation groups
  parameterGrouping: operations.ParameterGrouping;

  /**
   * Initializes a new instance of the AutoRestParameterGroupingTestService class.
   * @param credentials Credentials needed for the client to connect to Azure. The simplest
   * TokenCredential credential can be obtained as follows:
   * ```js
   * const { DefaultAzureCredential } = require("@azure/identity");
   * const credential = new DefaultAzureCredential();
   * ```
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials | TokenCredential, options?: Models.AutoRestParameterGroupingTestServiceOptions) {
    super(credentials, options);
    this.parameterGrouping = new operations.ParameterGrouping(this);
  }
}

// Operation Specifications

export {
  AutoRestParameterGroupingTestService,
  AutoRestParameterGroupingTestServiceContext,
  Models as AutoRestParameterGroupingTestServiceModels,
  Mappers as AutoRestParameterGroupingTestServiceMappers
};
export * from "./operations";
