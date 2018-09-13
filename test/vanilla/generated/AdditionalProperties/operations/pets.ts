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
import * as Mappers from "../models/petsMappers";
import { AdditionalPropertiesClientContext } from "../additionalPropertiesClientContext";

/** Class representing a Pets. */
export class Pets {
  private readonly client: AdditionalPropertiesClientContext;

  /**
   * Create a Pets.
   * @param {AdditionalPropertiesClientContext} client Reference to the service client.
   */
  constructor(client: AdditionalPropertiesClientContext) {
    this.client = client;
  }

  /**
   * Create a Pet which contains more properties than what is defined.
   *
   * @param {PetAPTrue} createParameters
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  createAPTrue(createParameters: Models.PetAPTrue): Promise<Models.PetsCreateAPTrueResponse>;
  createAPTrue(createParameters: Models.PetAPTrue, options: msRest.RequestOptionsBase): Promise<Models.PetsCreateAPTrueResponse>;
  createAPTrue(createParameters: Models.PetAPTrue, callback: msRest.ServiceCallback<Models.PetAPTrue>): void;
  createAPTrue(createParameters: Models.PetAPTrue, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PetAPTrue>): void;
  createAPTrue(createParameters: Models.PetAPTrue, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.PetAPTrue>): Promise<Models.PetsCreateAPTrueResponse> {
    return this.client.sendOperationRequest(
      {
        createParameters,
        options
      },
      createAPTrueOperationSpec,
      callback) as Promise<Models.PetsCreateAPTrueResponse>;
  }

  /**
   * Create a CatAPTrue which contains more properties than what is defined.
   *
   * @param {CatAPTrue} createParameters
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  createCatAPTrue(createParameters: Models.CatAPTrue): Promise<Models.PetsCreateCatAPTrueResponse>;
  createCatAPTrue(createParameters: Models.CatAPTrue, options: msRest.RequestOptionsBase): Promise<Models.PetsCreateCatAPTrueResponse>;
  createCatAPTrue(createParameters: Models.CatAPTrue, callback: msRest.ServiceCallback<Models.CatAPTrue>): void;
  createCatAPTrue(createParameters: Models.CatAPTrue, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CatAPTrue>): void;
  createCatAPTrue(createParameters: Models.CatAPTrue, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.CatAPTrue>): Promise<Models.PetsCreateCatAPTrueResponse> {
    return this.client.sendOperationRequest(
      {
        createParameters,
        options
      },
      createCatAPTrueOperationSpec,
      callback) as Promise<Models.PetsCreateCatAPTrueResponse>;
  }

  /**
   * Create a Pet which contains more properties than what is defined.
   *
   * @param {PetAPObject} createParameters
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  createAPObject(createParameters: Models.PetAPObject): Promise<Models.PetsCreateAPObjectResponse>;
  createAPObject(createParameters: Models.PetAPObject, options: msRest.RequestOptionsBase): Promise<Models.PetsCreateAPObjectResponse>;
  createAPObject(createParameters: Models.PetAPObject, callback: msRest.ServiceCallback<Models.PetAPObject>): void;
  createAPObject(createParameters: Models.PetAPObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PetAPObject>): void;
  createAPObject(createParameters: Models.PetAPObject, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.PetAPObject>): Promise<Models.PetsCreateAPObjectResponse> {
    return this.client.sendOperationRequest(
      {
        createParameters,
        options
      },
      createAPObjectOperationSpec,
      callback) as Promise<Models.PetsCreateAPObjectResponse>;
  }

  /**
   * Create a Pet which contains more properties than what is defined.
   *
   * @param {PetAPString} createParameters
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  createAPString(createParameters: Models.PetAPString): Promise<Models.PetsCreateAPStringResponse>;
  createAPString(createParameters: Models.PetAPString, options: msRest.RequestOptionsBase): Promise<Models.PetsCreateAPStringResponse>;
  createAPString(createParameters: Models.PetAPString, callback: msRest.ServiceCallback<Models.PetAPString>): void;
  createAPString(createParameters: Models.PetAPString, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PetAPString>): void;
  createAPString(createParameters: Models.PetAPString, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.PetAPString>): Promise<Models.PetsCreateAPStringResponse> {
    return this.client.sendOperationRequest(
      {
        createParameters,
        options
      },
      createAPStringOperationSpec,
      callback) as Promise<Models.PetsCreateAPStringResponse>;
  }

  /**
   * Create a Pet which contains more properties than what is defined.
   *
   * @param {PetAPInProperties} createParameters
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  createAPInProperties(createParameters: Models.PetAPInProperties): Promise<Models.PetsCreateAPInPropertiesResponse>;
  createAPInProperties(createParameters: Models.PetAPInProperties, options: msRest.RequestOptionsBase): Promise<Models.PetsCreateAPInPropertiesResponse>;
  createAPInProperties(createParameters: Models.PetAPInProperties, callback: msRest.ServiceCallback<Models.PetAPInProperties>): void;
  createAPInProperties(createParameters: Models.PetAPInProperties, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PetAPInProperties>): void;
  createAPInProperties(createParameters: Models.PetAPInProperties, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.PetAPInProperties>): Promise<Models.PetsCreateAPInPropertiesResponse> {
    return this.client.sendOperationRequest(
      {
        createParameters,
        options
      },
      createAPInPropertiesOperationSpec,
      callback) as Promise<Models.PetsCreateAPInPropertiesResponse>;
  }

  /**
   * Create a Pet which contains more properties than what is defined.
   *
   * @param {PetAPInPropertiesWithAPString} createParameters
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  createAPInPropertiesWithAPString(createParameters: Models.PetAPInPropertiesWithAPString): Promise<Models.PetsCreateAPInPropertiesWithAPStringResponse>;
  createAPInPropertiesWithAPString(createParameters: Models.PetAPInPropertiesWithAPString, options: msRest.RequestOptionsBase): Promise<Models.PetsCreateAPInPropertiesWithAPStringResponse>;
  createAPInPropertiesWithAPString(createParameters: Models.PetAPInPropertiesWithAPString, callback: msRest.ServiceCallback<Models.PetAPInPropertiesWithAPString>): void;
  createAPInPropertiesWithAPString(createParameters: Models.PetAPInPropertiesWithAPString, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PetAPInPropertiesWithAPString>): void;
  createAPInPropertiesWithAPString(createParameters: Models.PetAPInPropertiesWithAPString, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.PetAPInPropertiesWithAPString>): Promise<Models.PetsCreateAPInPropertiesWithAPStringResponse> {
    return this.client.sendOperationRequest(
      {
        createParameters,
        options
      },
      createAPInPropertiesWithAPStringOperationSpec,
      callback) as Promise<Models.PetsCreateAPInPropertiesWithAPStringResponse>;
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createAPTrueOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "additionalProperties/true",
  requestBody: {
    parameterPath: "createParameters",
    mapper: {
      ...Mappers.PetAPTrue,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PetAPTrue
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const createCatAPTrueOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "additionalProperties/true-subclass",
  requestBody: {
    parameterPath: "createParameters",
    mapper: {
      ...Mappers.CatAPTrue,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CatAPTrue
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const createAPObjectOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "additionalProperties/type/object",
  requestBody: {
    parameterPath: "createParameters",
    mapper: {
      ...Mappers.PetAPObject,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PetAPObject
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const createAPStringOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "additionalProperties/type/string",
  requestBody: {
    parameterPath: "createParameters",
    mapper: {
      ...Mappers.PetAPString,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PetAPString
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const createAPInPropertiesOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "additionalProperties/in/properties",
  requestBody: {
    parameterPath: "createParameters",
    mapper: {
      ...Mappers.PetAPInProperties,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PetAPInProperties
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const createAPInPropertiesWithAPStringOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "additionalProperties/in/properties/with/additionalProperties/string",
  requestBody: {
    parameterPath: "createParameters",
    mapper: {
      ...Mappers.PetAPInPropertiesWithAPString,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PetAPInPropertiesWithAPString
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
