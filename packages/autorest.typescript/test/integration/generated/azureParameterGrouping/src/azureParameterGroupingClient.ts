/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import { ParameterGroupingImpl } from "./operations";
import { ParameterGrouping } from "./operationsInterfaces";
import { AzureParameterGroupingClientOptionalParams } from "./models";

export class AzureParameterGroupingClient extends coreClient.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the AzureParameterGroupingClient class.
   * @param options The parameter options
   */
  constructor(options?: AzureParameterGroupingClientOptionalParams) {
    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: AzureParameterGroupingClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-azure-parameter-grouping/1.0.0-preview1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      endpoint: options.endpoint ?? options.baseUri ?? "http://localhost:3000"
    };
    super(optionsWithDefaults);

    // Assigning values to Constant parameters
    this.$host = options.$host || "http://localhost:3000";
    this.parameterGrouping = new ParameterGroupingImpl(this);
  }

  parameterGrouping: ParameterGrouping;
}
