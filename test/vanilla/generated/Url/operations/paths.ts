/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "../models";
import * as Mappers from "../models/pathsMappers";
import * as Parameters from "../models/parameters";
import { AutoRestUrlTestServiceContext } from "../autoRestUrlTestServiceContext";

/** Class representing a Paths. */
export class Paths {
  private readonly client: AutoRestUrlTestServiceContext;

  /**
   * Create a Paths.
   * @param {AutoRestUrlTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestUrlTestServiceContext) {
    this.client = client;
  }

  /**
   * Get true Boolean value on path
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  getBooleanTrue(options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  getBooleanTrue(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getBooleanTrue(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  getBooleanTrue(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getBooleanTrueOperationSpec,
      callback);
  }

  /**
   * Get false Boolean value on path
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  getBooleanFalse(options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  getBooleanFalse(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getBooleanFalse(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  getBooleanFalse(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getBooleanFalseOperationSpec,
      callback);
  }

  /**
   * Get '1000000' integer value
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  getIntOneMillion(options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  getIntOneMillion(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getIntOneMillion(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  getIntOneMillion(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getIntOneMillionOperationSpec,
      callback);
  }

  /**
   * Get '-1000000' integer value
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  getIntNegativeOneMillion(options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  getIntNegativeOneMillion(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getIntNegativeOneMillion(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  getIntNegativeOneMillion(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getIntNegativeOneMillionOperationSpec,
      callback);
  }

  /**
   * Get '10000000000' 64 bit integer value
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  getTenBillion(options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  getTenBillion(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getTenBillion(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  getTenBillion(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getTenBillionOperationSpec,
      callback);
  }

  /**
   * Get '-10000000000' 64 bit integer value
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  getNegativeTenBillion(options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  getNegativeTenBillion(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getNegativeTenBillion(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  getNegativeTenBillion(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getNegativeTenBillionOperationSpec,
      callback);
  }

  /**
   * Get '1.034E+20' numeric value
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  floatScientificPositive(options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  floatScientificPositive(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  floatScientificPositive(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  floatScientificPositive(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      floatScientificPositiveOperationSpec,
      callback);
  }

  /**
   * Get '-1.034E-20' numeric value
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  floatScientificNegative(options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  floatScientificNegative(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  floatScientificNegative(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  floatScientificNegative(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      floatScientificNegativeOperationSpec,
      callback);
  }

  /**
   * Get '9999999.999' numeric value
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  doubleDecimalPositive(options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  doubleDecimalPositive(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  doubleDecimalPositive(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  doubleDecimalPositive(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      doubleDecimalPositiveOperationSpec,
      callback);
  }

  /**
   * Get '-9999999.999' numeric value
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  doubleDecimalNegative(options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  doubleDecimalNegative(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  doubleDecimalNegative(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  doubleDecimalNegative(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      doubleDecimalNegativeOperationSpec,
      callback);
  }

  /**
   * Get '啊齄丂狛狜隣郎隣兀﨩' multi-byte string value
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  stringUnicode(options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  stringUnicode(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  stringUnicode(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  stringUnicode(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      stringUnicodeOperationSpec,
      callback);
  }

  /**
   * Get 'begin!*'();:@ &=+$,/?#[]end
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  stringUrlEncoded(options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  stringUrlEncoded(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  stringUrlEncoded(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  stringUrlEncoded(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      stringUrlEncodedOperationSpec,
      callback);
  }

  /**
   * Get ''
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  stringEmpty(options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  stringEmpty(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  stringEmpty(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  stringEmpty(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      stringEmptyOperationSpec,
      callback);
  }

  /**
   * Get null (should throw)
   * @param stringPath null string value
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  stringNull(stringPath: string, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param stringPath null string value
   * @param callback The callback
   */
  stringNull(stringPath: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param stringPath null string value
   * @param options The optional parameters
   * @param callback The callback
   */
  stringNull(stringPath: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  stringNull(stringPath: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        stringPath,
        options
      },
      stringNullOperationSpec,
      callback);
  }

  /**
   * Get using uri with 'green color' in path parameter
   * @param enumPath send the value green. Possible values include: 'red color', 'green color', 'blue
   * color'
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  enumValid(enumPath: Models.UriColor, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param enumPath send the value green. Possible values include: 'red color', 'green color', 'blue
   * color'
   * @param callback The callback
   */
  enumValid(enumPath: Models.UriColor, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param enumPath send the value green. Possible values include: 'red color', 'green color', 'blue
   * color'
   * @param options The optional parameters
   * @param callback The callback
   */
  enumValid(enumPath: Models.UriColor, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  enumValid(enumPath: Models.UriColor, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        enumPath,
        options
      },
      enumValidOperationSpec,
      callback);
  }

  /**
   * Get null (should throw on the client before the request is sent on wire)
   * @param enumPath send null should throw. Possible values include: 'red color', 'green color',
   * 'blue color'
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  enumNull(enumPath: Models.UriColor, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param enumPath send null should throw. Possible values include: 'red color', 'green color',
   * 'blue color'
   * @param callback The callback
   */
  enumNull(enumPath: Models.UriColor, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param enumPath send null should throw. Possible values include: 'red color', 'green color',
   * 'blue color'
   * @param options The optional parameters
   * @param callback The callback
   */
  enumNull(enumPath: Models.UriColor, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  enumNull(enumPath: Models.UriColor, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        enumPath,
        options
      },
      enumNullOperationSpec,
      callback);
  }

  /**
   * Get '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array
   * @param bytePath '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  byteMultiByte(bytePath: Uint8Array, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param bytePath '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array
   * @param callback The callback
   */
  byteMultiByte(bytePath: Uint8Array, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param bytePath '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array
   * @param options The optional parameters
   * @param callback The callback
   */
  byteMultiByte(bytePath: Uint8Array, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  byteMultiByte(bytePath: Uint8Array, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        bytePath,
        options
      },
      byteMultiByteOperationSpec,
      callback);
  }

  /**
   * Get '' as byte array
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  byteEmpty(options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  byteEmpty(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  byteEmpty(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  byteEmpty(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      byteEmptyOperationSpec,
      callback);
  }

  /**
   * Get null as byte array (should throw)
   * @param bytePath null as byte array (should throw)
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  byteNull(bytePath: Uint8Array, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param bytePath null as byte array (should throw)
   * @param callback The callback
   */
  byteNull(bytePath: Uint8Array, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param bytePath null as byte array (should throw)
   * @param options The optional parameters
   * @param callback The callback
   */
  byteNull(bytePath: Uint8Array, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  byteNull(bytePath: Uint8Array, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        bytePath,
        options
      },
      byteNullOperationSpec,
      callback);
  }

  /**
   * Get '2012-01-01' as date
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  dateValid(options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  dateValid(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  dateValid(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  dateValid(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      dateValidOperationSpec,
      callback);
  }

  /**
   * Get null as date - this should throw or be unusable on the client side, depending on date
   * representation
   * @param datePath null as date (should throw)
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  dateNull(datePath: Date | string, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param datePath null as date (should throw)
   * @param callback The callback
   */
  dateNull(datePath: Date | string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param datePath null as date (should throw)
   * @param options The optional parameters
   * @param callback The callback
   */
  dateNull(datePath: Date | string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  dateNull(datePath: Date | string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        datePath,
        options
      },
      dateNullOperationSpec,
      callback);
  }

  /**
   * Get '2012-01-01T01:01:01Z' as date-time
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  dateTimeValid(options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  dateTimeValid(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  dateTimeValid(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  dateTimeValid(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      dateTimeValidOperationSpec,
      callback);
  }

  /**
   * Get null as date-time, should be disallowed or throw depending on representation of date-time
   * @param dateTimePath null as date-time
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  dateTimeNull(dateTimePath: Date | string, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param dateTimePath null as date-time
   * @param callback The callback
   */
  dateTimeNull(dateTimePath: Date | string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param dateTimePath null as date-time
   * @param options The optional parameters
   * @param callback The callback
   */
  dateTimeNull(dateTimePath: Date | string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  dateTimeNull(dateTimePath: Date | string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        dateTimePath,
        options
      },
      dateTimeNullOperationSpec,
      callback);
  }

  /**
   * Get 'lorem' encoded value as 'bG9yZW0' (base64url)
   * @param base64UrlPath base64url encoded value
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  base64Url(base64UrlPath: Uint8Array, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param base64UrlPath base64url encoded value
   * @param callback The callback
   */
  base64Url(base64UrlPath: Uint8Array, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param base64UrlPath base64url encoded value
   * @param options The optional parameters
   * @param callback The callback
   */
  base64Url(base64UrlPath: Uint8Array, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  base64Url(base64UrlPath: Uint8Array, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        base64UrlPath,
        options
      },
      base64UrlOperationSpec,
      callback);
  }

  /**
   * Get an array of string ['ArrayPath1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the
   * csv-array format
   * @param arrayPath an array of string ['ArrayPath1', 'begin!*'();:@ &=+$,/?#[]end' , null, '']
   * using the csv-array format
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  arrayCsvInPath(arrayPath: string[], options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param arrayPath an array of string ['ArrayPath1', 'begin!*'();:@ &=+$,/?#[]end' , null, '']
   * using the csv-array format
   * @param callback The callback
   */
  arrayCsvInPath(arrayPath: string[], callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param arrayPath an array of string ['ArrayPath1', 'begin!*'();:@ &=+$,/?#[]end' , null, '']
   * using the csv-array format
   * @param options The optional parameters
   * @param callback The callback
   */
  arrayCsvInPath(arrayPath: string[], options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  arrayCsvInPath(arrayPath: string[], options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        arrayPath,
        options
      },
      arrayCsvInPathOperationSpec,
      callback);
  }

  /**
   * Get the date 2016-04-13 encoded value as '1460505600' (Unix time)
   * @param unixTimeUrlPath Unix time encoded value
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  unixTimeUrl(unixTimeUrlPath: Date | string, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param unixTimeUrlPath Unix time encoded value
   * @param callback The callback
   */
  unixTimeUrl(unixTimeUrlPath: Date | string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param unixTimeUrlPath Unix time encoded value
   * @param options The optional parameters
   * @param callback The callback
   */
  unixTimeUrl(unixTimeUrlPath: Date | string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  unixTimeUrl(unixTimeUrlPath: Date | string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        unixTimeUrlPath,
        options
      },
      unixTimeUrlOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers);
const getBooleanTrueOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "paths/bool/true/{boolPath}",
  urlParameters: [
    Parameters.boolPath0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getBooleanFalseOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "paths/bool/false/{boolPath}",
  urlParameters: [
    Parameters.boolPath1
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getIntOneMillionOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "paths/int/1000000/{intPath}",
  urlParameters: [
    Parameters.intPath0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getIntNegativeOneMillionOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "paths/int/-1000000/{intPath}",
  urlParameters: [
    Parameters.intPath1
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getTenBillionOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "paths/long/10000000000/{longPath}",
  urlParameters: [
    Parameters.longPath0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getNegativeTenBillionOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "paths/long/-10000000000/{longPath}",
  urlParameters: [
    Parameters.longPath1
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const floatScientificPositiveOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "paths/float/1.034E+20/{floatPath}",
  urlParameters: [
    Parameters.floatPath0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const floatScientificNegativeOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "paths/float/-1.034E-20/{floatPath}",
  urlParameters: [
    Parameters.floatPath1
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const doubleDecimalPositiveOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "paths/double/9999999.999/{doublePath}",
  urlParameters: [
    Parameters.doublePath0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const doubleDecimalNegativeOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "paths/double/-9999999.999/{doublePath}",
  urlParameters: [
    Parameters.doublePath1
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const stringUnicodeOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "paths/string/unicode/{stringPath}",
  urlParameters: [
    Parameters.stringPath0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const stringUrlEncodedOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "paths/string/begin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend/{stringPath}",
  urlParameters: [
    Parameters.stringPath1
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const stringEmptyOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "paths/string/empty/{stringPath}",
  urlParameters: [
    Parameters.stringPath2
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const stringNullOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "paths/string/null/{stringPath}",
  urlParameters: [
    Parameters.stringPath3
  ],
  responses: {
    400: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const enumValidOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "paths/enum/green%20color/{enumPath}",
  urlParameters: [
    Parameters.enumPath
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const enumNullOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "paths/string/null/{enumPath}",
  urlParameters: [
    Parameters.enumPath
  ],
  responses: {
    400: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const byteMultiByteOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "paths/byte/multibyte/{bytePath}",
  urlParameters: [
    Parameters.bytePath0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const byteEmptyOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "paths/byte/empty/{bytePath}",
  urlParameters: [
    Parameters.bytePath1
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const byteNullOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "paths/byte/null/{bytePath}",
  urlParameters: [
    Parameters.bytePath0
  ],
  responses: {
    400: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const dateValidOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "paths/date/2012-01-01/{datePath}",
  urlParameters: [
    Parameters.datePath0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const dateNullOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "paths/date/null/{datePath}",
  urlParameters: [
    Parameters.datePath1
  ],
  responses: {
    400: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const dateTimeValidOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "paths/datetime/2012-01-01T01%3A01%3A01Z/{dateTimePath}",
  urlParameters: [
    Parameters.dateTimePath0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const dateTimeNullOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "paths/datetime/null/{dateTimePath}",
  urlParameters: [
    Parameters.dateTimePath1
  ],
  responses: {
    400: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const base64UrlOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "paths/string/bG9yZW0/{base64UrlPath}",
  urlParameters: [
    Parameters.base64UrlPath
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const arrayCsvInPathOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "paths/array/ArrayPath1%2cbegin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend%2c%2c/{arrayPath}",
  urlParameters: [
    Parameters.arrayPath
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const unixTimeUrlOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "paths/int/1460505600/{unixTimeUrlPath}",
  urlParameters: [
    Parameters.unixTimeUrlPath
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
