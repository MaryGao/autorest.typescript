/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Array } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BodyComplexClient } from "../bodyComplexClient";
import {
  ArrayGetValidOptionalParams,
  ArrayGetValidResponse,
  ArrayWrapper,
  ArrayPutValidOptionalParams,
  ArrayGetEmptyOptionalParams,
  ArrayGetEmptyResponse,
  ArrayPutEmptyOptionalParams,
  ArrayGetNotProvidedOptionalParams,
  ArrayGetNotProvidedResponse,
} from "../models";

/** Class containing Array operations. */
export class ArrayImpl implements Array {
  private readonly client: BodyComplexClient;

  /**
   * Initialize a new instance of the class Array class.
   * @param client Reference to the service client
   */
  constructor(client: BodyComplexClient) {
    this.client = client;
  }

  /**
   * Get complex types with array property
   * @param options The options parameters.
   */
  getValid(
    options?: ArrayGetValidOptionalParams,
  ): Promise<ArrayGetValidResponse> {
    return this.client.sendOperationRequest({ options }, getValidOperationSpec);
  }

  /**
   * Put complex types with array property
   * @param complexBody Please put an array with 4 items: "1, 2, 3, 4", "", null, "&S#$(*Y", "The quick
   *                    brown fox jumps over the lazy dog"
   * @param options The options parameters.
   */
  putValid(
    complexBody: ArrayWrapper,
    options?: ArrayPutValidOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { complexBody, options },
      putValidOperationSpec,
    );
  }

  /**
   * Get complex types with array property which is empty
   * @param options The options parameters.
   */
  getEmpty(
    options?: ArrayGetEmptyOptionalParams,
  ): Promise<ArrayGetEmptyResponse> {
    return this.client.sendOperationRequest({ options }, getEmptyOperationSpec);
  }

  /**
   * Put complex types with array property which is empty
   * @param complexBody Please put an empty array
   * @param options The options parameters.
   */
  putEmpty(
    complexBody: ArrayWrapper,
    options?: ArrayPutEmptyOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { complexBody, options },
      putEmptyOperationSpec,
    );
  }

  /**
   * Get complex types with array property while server doesn't provide a response payload
   * @param options The options parameters.
   */
  getNotProvided(
    options?: ArrayGetNotProvidedOptionalParams,
  ): Promise<ArrayGetNotProvidedResponse> {
    return this.client.sendOperationRequest(
      { options },
      getNotProvidedOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getValidOperationSpec: coreClient.OperationSpec = {
  path: "/complex/array/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ArrayWrapper,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const putValidOperationSpec: coreClient.OperationSpec = {
  path: "/complex/array/valid",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  requestBody: Parameters.complexBody12,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getEmptyOperationSpec: coreClient.OperationSpec = {
  path: "/complex/array/empty",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ArrayWrapper,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const putEmptyOperationSpec: coreClient.OperationSpec = {
  path: "/complex/array/empty",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  requestBody: Parameters.complexBody12,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getNotProvidedOperationSpec: coreClient.OperationSpec = {
  path: "/complex/array/notprovided",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ArrayWrapper,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
