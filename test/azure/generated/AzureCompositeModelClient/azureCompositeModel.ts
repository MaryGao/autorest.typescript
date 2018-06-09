/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
import { AzureCompositeModelContext } from "./azureCompositeModelContext";
import * as operations from "./operations";
const WebResource = msRest.WebResource;


class AzureCompositeModel extends AzureCompositeModelContext {
  serializer = new msRest.Serializer(Mappers);

  // Operation groups
  basic: operations.BasicOperations;
  primitive: operations.Primitive;
  arrayModel: operations.ArrayModel;
  dictionary: operations.Dictionary;
  inheritance: operations.Inheritance;
  polymorphism: operations.Polymorphism;
  polymorphicrecursive: operations.Polymorphicrecursive;
  readonlyproperty: operations.Readonlyproperty;

  /**
   * @class
   * Initializes a new instance of the AzureCompositeModel class.
   * @constructor
   *
   * @param {msRest.ServiceClientCredentials} credentials - Credentials needed for the client to connect to Azure.
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - The request options. Detailed info can be found at
   * {@link https://github.github.io/fetch/#Request Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   * @param {string} [options.acceptLanguage] - The preferred language for the response.
   *
   * @param {number} [options.longRunningOperationRetryTimeout] - The retry timeout in seconds for Long Running Operations. Default value is 30.
   *
   * @param {boolean} [options.generateClientRequestId] - Whether a unique x-ms-client-request-id should be generated. When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
   *
   */
  constructor(credentials: msRest.ServiceClientCredentials, baseUri?: string, options?: msRestAzure.AzureServiceClientOptions) {
    super(credentials, baseUri, options);
    this.basic = new operations.BasicOperations(this);
    this.primitive = new operations.Primitive(this);
    this.arrayModel = new operations.ArrayModel(this);
    this.dictionary = new operations.Dictionary(this);
    this.inheritance = new operations.Inheritance(this);
    this.polymorphism = new operations.Polymorphism(this);
    this.polymorphicrecursive = new operations.Polymorphicrecursive(this);
    this.readonlyproperty = new operations.Readonlyproperty(this);
  }
  // methods on the client.

  /**
   * @summary Product Types
   *
   * The Products endpoint returns information about the Uber products offered at
   * a given location. The response includes the display name and other details
   * about each product, and lists the products in the proper display order.
   *
   * @param {string} resourceGroupName Resource Group ID.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async listWithHttpOperationResponse(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.CatalogArray>> {
    let client = this;
    let apiVersion = '2014-04-01-preview';
    // Validate
    try {
      if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
        throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
      }
      if (this.acceptLanguage !== null && this.acceptLanguage !== undefined && typeof this.acceptLanguage.valueOf() !== 'string') {
        throw new Error('this.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      const operationArguments: msRest.OperationArguments = msRest.createOperationArguments(
        {
          "this.subscriptionId": this.subscriptionId,
          resourceGroupName,
          apiVersion,
          "this.acceptLanguage": this.acceptLanguage
        },
        options);
      operationRes = await client.sendOperationRequest(
        httpRequest,
        operationArguments,
        {
          httpMethod: "GET",
          baseUrl: this.baseUri,
          path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/Microsoft.Cache/Redis",
          urlParameters: [
            {
              parameterName: "this.subscriptionId",
              mapper: {
                required: true,
                isConstant: true,
                serializedName: "subscriptionId",
                defaultValue: '123456',
                type: {
                  name: "String"
                }
              }
            },
            {
              parameterName: "resourceGroupName",
              mapper: {
                required: true,
                serializedName: "resourceGroupName",
                type: {
                  name: "String"
                }
              }
            }
          ],
          queryParameters: [
            {
              parameterName: "apiVersion",
              mapper: {
                required: true,
                isConstant: true,
                serializedName: "api-version",
                defaultValue: '2014-04-01-preview',
                type: {
                  name: "String"
                }
              }
            }
          ],
          headerParameters: [
            {
              parameterName: "this.acceptLanguage",
              mapper: {
                serializedName: "accept-language",
                defaultValue: 'en-US',
                type: {
                  name: "String"
                }
              }
            }
          ],
          serializer: this.serializer
        });
      let statusCode = operationRes.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            const resultMapper = Mappers.ErrorModel;
            error.body = this.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
      // Deserialize Response
      if (statusCode === 200) {
        let parsedResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedResponse !== null && parsedResponse !== undefined) {
            const resultMapper = Mappers.CatalogArray;
            operationRes.parsedBody = this.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.parsedBody');
          }
        } catch (error) {
          let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
          deserializationError.request = msRest.stripRequest(httpRequest);
          deserializationError.response = msRest.stripResponse(operationRes);
          return Promise.reject(deserializationError);
        }
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }
  // methods on the client.

  /**
   * @summary Create products
   *
   * Resets products.
   *
   * @param {string} subscriptionId Subscription ID.
   *
   * @param {string} resourceGroupName Resource Group ID.
   *
   * @param {AzureCompositeModelCreateOptionalParams} [options] Optional
   * Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async createWithHttpOperationResponse(subscriptionId: string, resourceGroupName: string, options?: Models.AzureCompositeModelCreateOptionalParams): Promise<msRest.HttpOperationResponse<Models.CatalogDictionary>> {
    let client = this;
    let productDictionaryOfArray = (options && options.productDictionaryOfArray !== undefined) ? options.productDictionaryOfArray : undefined;
    let apiVersion = '2014-04-01-preview';
    // Validate
    try {
      if (subscriptionId === null || subscriptionId === undefined || typeof subscriptionId.valueOf() !== 'string') {
        throw new Error('subscriptionId cannot be null or undefined and it must be of type string.');
      }
      if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
        throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
      }
      if (this.acceptLanguage !== null && this.acceptLanguage !== undefined && typeof this.acceptLanguage.valueOf() !== 'string') {
        throw new Error('this.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }
    let bodyParameter: any
    if (productDictionaryOfArray !== null && productDictionaryOfArray !== undefined) {
      bodyParameter = {};
      bodyParameter.productDictionaryOfArray = productDictionaryOfArray;
    }

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      const operationArguments: msRest.OperationArguments = msRest.createOperationArguments(
        {
          subscriptionId,
          resourceGroupName,
          apiVersion,
          "this.acceptLanguage": this.acceptLanguage,
          bodyParameter
        },
        options);
      operationRes = await client.sendOperationRequest(
        httpRequest,
        operationArguments,
        {
          httpMethod: "POST",
          baseUrl: this.baseUri,
          path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/Microsoft.Cache/Redis",
          urlParameters: [
            {
              parameterName: "subscriptionId",
              mapper: {
                required: true,
                serializedName: "subscriptionId",
                type: {
                  name: "String"
                }
              }
            },
            {
              parameterName: "resourceGroupName",
              mapper: {
                required: true,
                serializedName: "resourceGroupName",
                type: {
                  name: "String"
                }
              }
            }
          ],
          queryParameters: [
            {
              parameterName: "apiVersion",
              mapper: {
                required: true,
                isConstant: true,
                serializedName: "api-version",
                defaultValue: '2014-04-01-preview',
                type: {
                  name: "String"
                }
              }
            }
          ],
          headerParameters: [
            {
              parameterName: "this.acceptLanguage",
              mapper: {
                serializedName: "accept-language",
                defaultValue: 'en-US',
                type: {
                  name: "String"
                }
              }
            }
          ],
          requestBodyMapper: Mappers.CatalogDictionaryOfArray,
          requestBodyName: "bodyParameter",
          contentType: "application/json; charset=utf-8",
          serializer: this.serializer
        });
      let statusCode = operationRes.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            const resultMapper = Mappers.ErrorModel;
            error.body = this.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
      // Deserialize Response
      if (statusCode === 200) {
        let parsedResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedResponse !== null && parsedResponse !== undefined) {
            const resultMapper = Mappers.CatalogDictionary;
            operationRes.parsedBody = this.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.parsedBody');
          }
        } catch (error) {
          let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
          deserializationError.request = msRest.stripRequest(httpRequest);
          deserializationError.response = msRest.stripResponse(operationRes);
          return Promise.reject(deserializationError);
        }
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }
  // methods on the client.

  /**
   * @summary Update products
   *
   * Resets products.
   *
   * @param {string} subscriptionId Subscription ID.
   *
   * @param {string} resourceGroupName Resource Group ID.
   *
   * @param {AzureCompositeModelUpdateOptionalParams} [options] Optional
   * Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async updateWithHttpOperationResponse(subscriptionId: string, resourceGroupName: string, options?: Models.AzureCompositeModelUpdateOptionalParams): Promise<msRest.HttpOperationResponse<Models.CatalogArray>> {
    let client = this;
    let productArrayOfDictionary = (options && options.productArrayOfDictionary !== undefined) ? options.productArrayOfDictionary : undefined;
    let apiVersion = '2014-04-01-preview';
    // Validate
    try {
      if (subscriptionId === null || subscriptionId === undefined || typeof subscriptionId.valueOf() !== 'string') {
        throw new Error('subscriptionId cannot be null or undefined and it must be of type string.');
      }
      if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
        throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
      }
      if (this.acceptLanguage !== null && this.acceptLanguage !== undefined && typeof this.acceptLanguage.valueOf() !== 'string') {
        throw new Error('this.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }
    let bodyParameter: any
    if (productArrayOfDictionary !== null && productArrayOfDictionary !== undefined) {
      bodyParameter = {};
      bodyParameter.productArrayOfDictionary = productArrayOfDictionary;
    }

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      const operationArguments: msRest.OperationArguments = msRest.createOperationArguments(
        {
          subscriptionId,
          resourceGroupName,
          apiVersion,
          "this.acceptLanguage": this.acceptLanguage,
          bodyParameter
        },
        options);
      operationRes = await client.sendOperationRequest(
        httpRequest,
        operationArguments,
        {
          httpMethod: "PUT",
          baseUrl: this.baseUri,
          path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/Microsoft.Cache/Redis",
          urlParameters: [
            {
              parameterName: "subscriptionId",
              mapper: {
                required: true,
                serializedName: "subscriptionId",
                type: {
                  name: "String"
                }
              }
            },
            {
              parameterName: "resourceGroupName",
              mapper: {
                required: true,
                serializedName: "resourceGroupName",
                type: {
                  name: "String"
                }
              }
            }
          ],
          queryParameters: [
            {
              parameterName: "apiVersion",
              mapper: {
                required: true,
                isConstant: true,
                serializedName: "api-version",
                defaultValue: '2014-04-01-preview',
                type: {
                  name: "String"
                }
              }
            }
          ],
          headerParameters: [
            {
              parameterName: "this.acceptLanguage",
              mapper: {
                serializedName: "accept-language",
                defaultValue: 'en-US',
                type: {
                  name: "String"
                }
              }
            }
          ],
          requestBodyMapper: Mappers.CatalogArrayOfDictionary,
          requestBodyName: "bodyParameter",
          contentType: "application/json; charset=utf-8",
          serializer: this.serializer
        });
      let statusCode = operationRes.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            const resultMapper = Mappers.ErrorModel;
            error.body = this.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
      // Deserialize Response
      if (statusCode === 200) {
        let parsedResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedResponse !== null && parsedResponse !== undefined) {
            const resultMapper = Mappers.CatalogArray;
            operationRes.parsedBody = this.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.parsedBody');
          }
        } catch (error) {
          let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
          deserializationError.request = msRest.stripRequest(httpRequest);
          deserializationError.response = msRest.stripResponse(operationRes);
          return Promise.reject(deserializationError);
        }
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * @summary Product Types
   *
   * The Products endpoint returns information about the Uber products offered at
   * a given location. The response includes the display name and other details
   * about each product, and lists the products in the proper display order.
   *
   * @param {string} resourceGroupName Resource Group ID.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Models.CatalogArray} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.CatalogArray} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  list(resourceGroupName: string): Promise<Models.CatalogArray>;
  list(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.CatalogArray>;
  list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.CatalogArray>): void;
  list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CatalogArray>): void;
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.CatalogArray>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.CatalogArray>;
    if (!callback) {
      return this.listWithHttpOperationResponse(resourceGroupName, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.CatalogArray);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.listWithHttpOperationResponse(resourceGroupName, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.CatalogArray;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * @summary Create products
   *
   * Resets products.
   *
   * @param {string} subscriptionId Subscription ID.
   *
   * @param {string} resourceGroupName Resource Group ID.
   *
   * @param {AzureCompositeModelCreateOptionalParams} [options] Optional
   * Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Models.CatalogDictionary} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.CatalogDictionary} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  create(subscriptionId: string, resourceGroupName: string): Promise<Models.CatalogDictionary>;
  create(subscriptionId: string, resourceGroupName: string, options: Models.AzureCompositeModelCreateOptionalParams): Promise<Models.CatalogDictionary>;
  create(subscriptionId: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.CatalogDictionary>): void;
  create(subscriptionId: string, resourceGroupName: string, options: Models.AzureCompositeModelCreateOptionalParams, callback: msRest.ServiceCallback<Models.CatalogDictionary>): void;
  create(subscriptionId: string, resourceGroupName: string, options?: Models.AzureCompositeModelCreateOptionalParams, callback?: msRest.ServiceCallback<Models.CatalogDictionary>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.CatalogDictionary>;
    if (!callback) {
      return this.createWithHttpOperationResponse(subscriptionId, resourceGroupName, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.CatalogDictionary);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.createWithHttpOperationResponse(subscriptionId, resourceGroupName, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.CatalogDictionary;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * @summary Update products
   *
   * Resets products.
   *
   * @param {string} subscriptionId Subscription ID.
   *
   * @param {string} resourceGroupName Resource Group ID.
   *
   * @param {AzureCompositeModelUpdateOptionalParams} [options] Optional
   * Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Models.CatalogArray} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.CatalogArray} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  update(subscriptionId: string, resourceGroupName: string): Promise<Models.CatalogArray>;
  update(subscriptionId: string, resourceGroupName: string, options: Models.AzureCompositeModelUpdateOptionalParams): Promise<Models.CatalogArray>;
  update(subscriptionId: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.CatalogArray>): void;
  update(subscriptionId: string, resourceGroupName: string, options: Models.AzureCompositeModelUpdateOptionalParams, callback: msRest.ServiceCallback<Models.CatalogArray>): void;
  update(subscriptionId: string, resourceGroupName: string, options?: Models.AzureCompositeModelUpdateOptionalParams, callback?: msRest.ServiceCallback<Models.CatalogArray>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.CatalogArray>;
    if (!callback) {
      return this.updateWithHttpOperationResponse(subscriptionId, resourceGroupName, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.CatalogArray);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.updateWithHttpOperationResponse(subscriptionId, resourceGroupName, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.CatalogArray;
        return cb(err, result, data.request, data);
      });
    }
  }
}

export { AzureCompositeModel, Models as AzureCompositeModelModels, Mappers as AzureCompositeModelMappers };
