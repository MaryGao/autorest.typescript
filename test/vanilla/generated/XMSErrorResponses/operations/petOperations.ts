/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/petOperationsMappers";
import * as Parameters from "../models/parameters";
import { XMSErrorResponseExtensionsContext } from "../xMSErrorResponseExtensionsContext";

/** Class representing a PetOperations. */
export class PetOperations {
  private readonly client: XMSErrorResponseExtensionsContext;

  /**
   * Create a PetOperations.
   * @param {XMSErrorResponseExtensionsContext} client Reference to the service client.
   */
  constructor(client: XMSErrorResponseExtensionsContext) {
    this.client = client;
  }

  /**
   * Gets pets by id.
   * @param petId pet id
   * @param [options] The optional parameters
   * @returns Promise<Models.PetGetPetByIdResponse>
   */
  getPetById(petId: string, options?: msRest.RequestOptionsBase): Promise<Models.PetGetPetByIdResponse>;
  /**
   * @param petId pet id
   * @param callback The callback
   */
  getPetById(petId: string, callback: msRest.ServiceCallback<Models.Pet>): void;
  /**
   * @param petId pet id
   * @param options The optional parameters
   * @param callback The callback
   */
  getPetById(petId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Pet>): void;
  getPetById(petId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Pet>): Promise<Models.PetGetPetByIdResponse> {
    return this.client.sendOperationRequest(
      {
        petId,
        options
      },
      getPetByIdOperationSpec,
      callback) as Promise<Models.PetGetPetByIdResponse>;
  }

  /**
   * Asks pet to do something
   * @param whatAction what action the pet should do
   * @param [options] The optional parameters
   * @returns Promise<Models.PetDoSomethingResponse>
   */
  doSomething(whatAction: string, options?: msRest.RequestOptionsBase): Promise<Models.PetDoSomethingResponse>;
  /**
   * @param whatAction what action the pet should do
   * @param callback The callback
   */
  doSomething(whatAction: string, callback: msRest.ServiceCallback<Models.PetAction>): void;
  /**
   * @param whatAction what action the pet should do
   * @param options The optional parameters
   * @param callback The callback
   */
  doSomething(whatAction: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PetAction>): void;
  doSomething(whatAction: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.PetAction>): Promise<Models.PetDoSomethingResponse> {
    return this.client.sendOperationRequest(
      {
        whatAction,
        options
      },
      doSomethingOperationSpec,
      callback) as Promise<Models.PetDoSomethingResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getPetByIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "errorStatusCodes/Pets/{petId}/GetPet",
  urlParameters: [
    Parameters.petId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Pet
    },
    202: {},
    400: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "String"
        }
      }
    },
    404: {
      bodyMapper: Mappers.NotFoundErrorBase
    },
    501: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Number"
        }
      }
    },
    default: {}
  },
  serializer
};

const doSomethingOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "errorStatusCodes/Pets/doSomething/{whatAction}",
  urlParameters: [
    Parameters.whatAction
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PetAction
    },
    500: {
      bodyMapper: Mappers.PetActionError
    },
    default: {
      bodyMapper: Mappers.PetActionError
    }
  },
  serializer
};
