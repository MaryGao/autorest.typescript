/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Int } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Parameters from "../models/parameters";
import { NonStringEnumClient } from "../nonStringEnumClient";
import {
  IntPutOptionalParams,
  IntPutResponse,
  IntGetOptionalParams,
  IntGetResponse,
} from "../models";

/** Class containing Int operations. */
export class IntImpl implements Int {
  private readonly client: NonStringEnumClient;

  /**
   * Initialize a new instance of the class Int class.
   * @param client Reference to the service client
   */
  constructor(client: NonStringEnumClient) {
    this.client = client;
  }

  /**
   * Put an int enum
   * @param options The options parameters.
   */
  put(options?: IntPutOptionalParams): Promise<IntPutResponse> {
    return this.client.sendOperationRequest({ options }, putOperationSpec);
  }

  /**
   * Get an int enum
   * @param options The options parameters.
   */
  get(options?: IntGetOptionalParams): Promise<IntGetResponse> {
    return this.client.sendOperationRequest({ options }, getOperationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer({}, /* isXml */ false);

const putOperationSpec: coreClient.OperationSpec = {
  path: "/nonStringEnums/int/put",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" } },
    },
  },
  requestBody: Parameters.input,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/nonStringEnums/int/get",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } },
    },
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
