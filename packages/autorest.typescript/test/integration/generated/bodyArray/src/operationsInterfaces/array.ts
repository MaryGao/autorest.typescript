/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  ArrayGetNullOptionalParams,
  ArrayGetNullResponse,
  ArrayGetInvalidOptionalParams,
  ArrayGetInvalidResponse,
  ArrayGetEmptyOptionalParams,
  ArrayGetEmptyResponse,
  ArrayPutEmptyOptionalParams,
  ArrayGetBooleanTfftOptionalParams,
  ArrayGetBooleanTfftResponse,
  ArrayPutBooleanTfftOptionalParams,
  ArrayGetBooleanInvalidNullOptionalParams,
  ArrayGetBooleanInvalidNullResponse,
  ArrayGetBooleanInvalidStringOptionalParams,
  ArrayGetBooleanInvalidStringResponse,
  ArrayGetIntegerValidOptionalParams,
  ArrayGetIntegerValidResponse,
  ArrayPutIntegerValidOptionalParams,
  ArrayGetIntInvalidNullOptionalParams,
  ArrayGetIntInvalidNullResponse,
  ArrayGetIntInvalidStringOptionalParams,
  ArrayGetIntInvalidStringResponse,
  ArrayGetLongValidOptionalParams,
  ArrayGetLongValidResponse,
  ArrayPutLongValidOptionalParams,
  ArrayGetLongInvalidNullOptionalParams,
  ArrayGetLongInvalidNullResponse,
  ArrayGetLongInvalidStringOptionalParams,
  ArrayGetLongInvalidStringResponse,
  ArrayGetFloatValidOptionalParams,
  ArrayGetFloatValidResponse,
  ArrayPutFloatValidOptionalParams,
  ArrayGetFloatInvalidNullOptionalParams,
  ArrayGetFloatInvalidNullResponse,
  ArrayGetFloatInvalidStringOptionalParams,
  ArrayGetFloatInvalidStringResponse,
  ArrayGetDoubleValidOptionalParams,
  ArrayGetDoubleValidResponse,
  ArrayPutDoubleValidOptionalParams,
  ArrayGetDoubleInvalidNullOptionalParams,
  ArrayGetDoubleInvalidNullResponse,
  ArrayGetDoubleInvalidStringOptionalParams,
  ArrayGetDoubleInvalidStringResponse,
  ArrayGetStringValidOptionalParams,
  ArrayGetStringValidResponse,
  ArrayPutStringValidOptionalParams,
  ArrayGetEnumValidOptionalParams,
  ArrayGetEnumValidResponse,
  FooEnum,
  ArrayPutEnumValidOptionalParams,
  ArrayGetStringEnumValidOptionalParams,
  ArrayGetStringEnumValidResponse,
  Enum1,
  ArrayPutStringEnumValidOptionalParams,
  ArrayGetStringWithNullOptionalParams,
  ArrayGetStringWithNullResponse,
  ArrayGetStringWithInvalidOptionalParams,
  ArrayGetStringWithInvalidResponse,
  ArrayGetUuidValidOptionalParams,
  ArrayGetUuidValidResponse,
  ArrayPutUuidValidOptionalParams,
  ArrayGetUuidInvalidCharsOptionalParams,
  ArrayGetUuidInvalidCharsResponse,
  ArrayGetDateValidOptionalParams,
  ArrayGetDateValidResponse,
  ArrayPutDateValidOptionalParams,
  ArrayGetDateInvalidNullOptionalParams,
  ArrayGetDateInvalidNullResponse,
  ArrayGetDateInvalidCharsOptionalParams,
  ArrayGetDateInvalidCharsResponse,
  ArrayGetDateTimeValidOptionalParams,
  ArrayGetDateTimeValidResponse,
  ArrayPutDateTimeValidOptionalParams,
  ArrayGetDateTimeInvalidNullOptionalParams,
  ArrayGetDateTimeInvalidNullResponse,
  ArrayGetDateTimeInvalidCharsOptionalParams,
  ArrayGetDateTimeInvalidCharsResponse,
  ArrayGetDateTimeRfc1123ValidOptionalParams,
  ArrayGetDateTimeRfc1123ValidResponse,
  ArrayPutDateTimeRfc1123ValidOptionalParams,
  ArrayGetDurationValidOptionalParams,
  ArrayGetDurationValidResponse,
  ArrayPutDurationValidOptionalParams,
  ArrayGetByteValidOptionalParams,
  ArrayGetByteValidResponse,
  ArrayPutByteValidOptionalParams,
  ArrayGetByteInvalidNullOptionalParams,
  ArrayGetByteInvalidNullResponse,
  ArrayGetBase64UrlOptionalParams,
  ArrayGetBase64UrlResponse,
  ArrayGetComplexNullOptionalParams,
  ArrayGetComplexNullResponse,
  ArrayGetComplexEmptyOptionalParams,
  ArrayGetComplexEmptyResponse,
  ArrayGetComplexItemNullOptionalParams,
  ArrayGetComplexItemNullResponse,
  ArrayGetComplexItemEmptyOptionalParams,
  ArrayGetComplexItemEmptyResponse,
  ArrayGetComplexValidOptionalParams,
  ArrayGetComplexValidResponse,
  Product,
  ArrayPutComplexValidOptionalParams,
  ArrayGetArrayNullOptionalParams,
  ArrayGetArrayNullResponse,
  ArrayGetArrayEmptyOptionalParams,
  ArrayGetArrayEmptyResponse,
  ArrayGetArrayItemNullOptionalParams,
  ArrayGetArrayItemNullResponse,
  ArrayGetArrayItemEmptyOptionalParams,
  ArrayGetArrayItemEmptyResponse,
  ArrayGetArrayValidOptionalParams,
  ArrayGetArrayValidResponse,
  ArrayPutArrayValidOptionalParams,
  ArrayGetDictionaryNullOptionalParams,
  ArrayGetDictionaryNullResponse,
  ArrayGetDictionaryEmptyOptionalParams,
  ArrayGetDictionaryEmptyResponse,
  ArrayGetDictionaryItemNullOptionalParams,
  ArrayGetDictionaryItemNullResponse,
  ArrayGetDictionaryItemEmptyOptionalParams,
  ArrayGetDictionaryItemEmptyResponse,
  ArrayGetDictionaryValidOptionalParams,
  ArrayGetDictionaryValidResponse,
  ArrayPutDictionaryValidOptionalParams,
} from "../models";

/** Interface representing a Array. */
export interface Array {
  /**
   * Get null array value
   * @param options The options parameters.
   */
  getNull(options?: ArrayGetNullOptionalParams): Promise<ArrayGetNullResponse>;
  /**
   * Get invalid array [1, 2, 3
   * @param options The options parameters.
   */
  getInvalid(
    options?: ArrayGetInvalidOptionalParams,
  ): Promise<ArrayGetInvalidResponse>;
  /**
   * Get empty array value []
   * @param options The options parameters.
   */
  getEmpty(
    options?: ArrayGetEmptyOptionalParams,
  ): Promise<ArrayGetEmptyResponse>;
  /**
   * Set array value empty []
   * @param arrayBody The empty array value []
   * @param options The options parameters.
   */
  putEmpty(
    arrayBody: string[],
    options?: ArrayPutEmptyOptionalParams,
  ): Promise<void>;
  /**
   * Get boolean array value [true, false, false, true]
   * @param options The options parameters.
   */
  getBooleanTfft(
    options?: ArrayGetBooleanTfftOptionalParams,
  ): Promise<ArrayGetBooleanTfftResponse>;
  /**
   * Set array value empty [true, false, false, true]
   * @param arrayBody The array value [true, false, false, true]
   * @param options The options parameters.
   */
  putBooleanTfft(
    arrayBody: boolean[],
    options?: ArrayPutBooleanTfftOptionalParams,
  ): Promise<void>;
  /**
   * Get boolean array value [true, null, false]
   * @param options The options parameters.
   */
  getBooleanInvalidNull(
    options?: ArrayGetBooleanInvalidNullOptionalParams,
  ): Promise<ArrayGetBooleanInvalidNullResponse>;
  /**
   * Get boolean array value [true, 'boolean', false]
   * @param options The options parameters.
   */
  getBooleanInvalidString(
    options?: ArrayGetBooleanInvalidStringOptionalParams,
  ): Promise<ArrayGetBooleanInvalidStringResponse>;
  /**
   * Get integer array value [1, -1, 3, 300]
   * @param options The options parameters.
   */
  getIntegerValid(
    options?: ArrayGetIntegerValidOptionalParams,
  ): Promise<ArrayGetIntegerValidResponse>;
  /**
   * Set array value empty [1, -1, 3, 300]
   * @param arrayBody The array value [1, -1, 3, 300]
   * @param options The options parameters.
   */
  putIntegerValid(
    arrayBody: number[],
    options?: ArrayPutIntegerValidOptionalParams,
  ): Promise<void>;
  /**
   * Get integer array value [1, null, 0]
   * @param options The options parameters.
   */
  getIntInvalidNull(
    options?: ArrayGetIntInvalidNullOptionalParams,
  ): Promise<ArrayGetIntInvalidNullResponse>;
  /**
   * Get integer array value [1, 'integer', 0]
   * @param options The options parameters.
   */
  getIntInvalidString(
    options?: ArrayGetIntInvalidStringOptionalParams,
  ): Promise<ArrayGetIntInvalidStringResponse>;
  /**
   * Get integer array value [1, -1, 3, 300]
   * @param options The options parameters.
   */
  getLongValid(
    options?: ArrayGetLongValidOptionalParams,
  ): Promise<ArrayGetLongValidResponse>;
  /**
   * Set array value empty [1, -1, 3, 300]
   * @param arrayBody The array value [1, -1, 3, 300]
   * @param options The options parameters.
   */
  putLongValid(
    arrayBody: number[],
    options?: ArrayPutLongValidOptionalParams,
  ): Promise<void>;
  /**
   * Get long array value [1, null, 0]
   * @param options The options parameters.
   */
  getLongInvalidNull(
    options?: ArrayGetLongInvalidNullOptionalParams,
  ): Promise<ArrayGetLongInvalidNullResponse>;
  /**
   * Get long array value [1, 'integer', 0]
   * @param options The options parameters.
   */
  getLongInvalidString(
    options?: ArrayGetLongInvalidStringOptionalParams,
  ): Promise<ArrayGetLongInvalidStringResponse>;
  /**
   * Get float array value [0, -0.01, 1.2e20]
   * @param options The options parameters.
   */
  getFloatValid(
    options?: ArrayGetFloatValidOptionalParams,
  ): Promise<ArrayGetFloatValidResponse>;
  /**
   * Set array value [0, -0.01, 1.2e20]
   * @param arrayBody The array value [0, -0.01, 1.2e20]
   * @param options The options parameters.
   */
  putFloatValid(
    arrayBody: number[],
    options?: ArrayPutFloatValidOptionalParams,
  ): Promise<void>;
  /**
   * Get float array value [0.0, null, -1.2e20]
   * @param options The options parameters.
   */
  getFloatInvalidNull(
    options?: ArrayGetFloatInvalidNullOptionalParams,
  ): Promise<ArrayGetFloatInvalidNullResponse>;
  /**
   * Get boolean array value [1.0, 'number', 0.0]
   * @param options The options parameters.
   */
  getFloatInvalidString(
    options?: ArrayGetFloatInvalidStringOptionalParams,
  ): Promise<ArrayGetFloatInvalidStringResponse>;
  /**
   * Get float array value [0, -0.01, 1.2e20]
   * @param options The options parameters.
   */
  getDoubleValid(
    options?: ArrayGetDoubleValidOptionalParams,
  ): Promise<ArrayGetDoubleValidResponse>;
  /**
   * Set array value [0, -0.01, 1.2e20]
   * @param arrayBody The array value [0, -0.01, 1.2e20]
   * @param options The options parameters.
   */
  putDoubleValid(
    arrayBody: number[],
    options?: ArrayPutDoubleValidOptionalParams,
  ): Promise<void>;
  /**
   * Get float array value [0.0, null, -1.2e20]
   * @param options The options parameters.
   */
  getDoubleInvalidNull(
    options?: ArrayGetDoubleInvalidNullOptionalParams,
  ): Promise<ArrayGetDoubleInvalidNullResponse>;
  /**
   * Get boolean array value [1.0, 'number', 0.0]
   * @param options The options parameters.
   */
  getDoubleInvalidString(
    options?: ArrayGetDoubleInvalidStringOptionalParams,
  ): Promise<ArrayGetDoubleInvalidStringResponse>;
  /**
   * Get string array value ['foo1', 'foo2', 'foo3']
   * @param options The options parameters.
   */
  getStringValid(
    options?: ArrayGetStringValidOptionalParams,
  ): Promise<ArrayGetStringValidResponse>;
  /**
   * Set array value ['foo1', 'foo2', 'foo3']
   * @param arrayBody The array value ['foo1', 'foo2', 'foo3']
   * @param options The options parameters.
   */
  putStringValid(
    arrayBody: string[],
    options?: ArrayPutStringValidOptionalParams,
  ): Promise<void>;
  /**
   * Get enum array value ['foo1', 'foo2', 'foo3']
   * @param options The options parameters.
   */
  getEnumValid(
    options?: ArrayGetEnumValidOptionalParams,
  ): Promise<ArrayGetEnumValidResponse>;
  /**
   * Set array value ['foo1', 'foo2', 'foo3']
   * @param arrayBody The array value ['foo1', 'foo2', 'foo3']
   * @param options The options parameters.
   */
  putEnumValid(
    arrayBody: FooEnum[],
    options?: ArrayPutEnumValidOptionalParams,
  ): Promise<void>;
  /**
   * Get enum array value ['foo1', 'foo2', 'foo3']
   * @param options The options parameters.
   */
  getStringEnumValid(
    options?: ArrayGetStringEnumValidOptionalParams,
  ): Promise<ArrayGetStringEnumValidResponse>;
  /**
   * Set array value ['foo1', 'foo2', 'foo3']
   * @param arrayBody The array value ['foo1', 'foo2', 'foo3']
   * @param options The options parameters.
   */
  putStringEnumValid(
    arrayBody: Enum1[],
    options?: ArrayPutStringEnumValidOptionalParams,
  ): Promise<void>;
  /**
   * Get string array value ['foo', null, 'foo2']
   * @param options The options parameters.
   */
  getStringWithNull(
    options?: ArrayGetStringWithNullOptionalParams,
  ): Promise<ArrayGetStringWithNullResponse>;
  /**
   * Get string array value ['foo', 123, 'foo2']
   * @param options The options parameters.
   */
  getStringWithInvalid(
    options?: ArrayGetStringWithInvalidOptionalParams,
  ): Promise<ArrayGetStringWithInvalidResponse>;
  /**
   * Get uuid array value ['6dcc7237-45fe-45c4-8a6b-3a8a3f625652',
   * 'd1399005-30f7-40d6-8da6-dd7c89ad34db', 'f42f6aa1-a5bc-4ddf-907e-5f915de43205']
   * @param options The options parameters.
   */
  getUuidValid(
    options?: ArrayGetUuidValidOptionalParams,
  ): Promise<ArrayGetUuidValidResponse>;
  /**
   * Set array value  ['6dcc7237-45fe-45c4-8a6b-3a8a3f625652', 'd1399005-30f7-40d6-8da6-dd7c89ad34db',
   * 'f42f6aa1-a5bc-4ddf-907e-5f915de43205']
   * @param arrayBody The array value ['6dcc7237-45fe-45c4-8a6b-3a8a3f625652',
   *                  'd1399005-30f7-40d6-8da6-dd7c89ad34db', 'f42f6aa1-a5bc-4ddf-907e-5f915de43205']
   * @param options The options parameters.
   */
  putUuidValid(
    arrayBody: string[],
    options?: ArrayPutUuidValidOptionalParams,
  ): Promise<void>;
  /**
   * Get uuid array value ['6dcc7237-45fe-45c4-8a6b-3a8a3f625652', 'foo']
   * @param options The options parameters.
   */
  getUuidInvalidChars(
    options?: ArrayGetUuidInvalidCharsOptionalParams,
  ): Promise<ArrayGetUuidInvalidCharsResponse>;
  /**
   * Get integer array value ['2000-12-01', '1980-01-02', '1492-10-12']
   * @param options The options parameters.
   */
  getDateValid(
    options?: ArrayGetDateValidOptionalParams,
  ): Promise<ArrayGetDateValidResponse>;
  /**
   * Set array value  ['2000-12-01', '1980-01-02', '1492-10-12']
   * @param arrayBody The array value ['2000-12-01', '1980-01-02', '1492-10-12']
   * @param options The options parameters.
   */
  putDateValid(
    arrayBody: Date[],
    options?: ArrayPutDateValidOptionalParams,
  ): Promise<void>;
  /**
   * Get date array value ['2012-01-01', null, '1776-07-04']
   * @param options The options parameters.
   */
  getDateInvalidNull(
    options?: ArrayGetDateInvalidNullOptionalParams,
  ): Promise<ArrayGetDateInvalidNullResponse>;
  /**
   * Get date array value ['2011-03-22', 'date']
   * @param options The options parameters.
   */
  getDateInvalidChars(
    options?: ArrayGetDateInvalidCharsOptionalParams,
  ): Promise<ArrayGetDateInvalidCharsResponse>;
  /**
   * Get date-time array value ['2000-12-01t00:00:01z', '1980-01-02T00:11:35+01:00',
   * '1492-10-12T10:15:01-08:00']
   * @param options The options parameters.
   */
  getDateTimeValid(
    options?: ArrayGetDateTimeValidOptionalParams,
  ): Promise<ArrayGetDateTimeValidResponse>;
  /**
   * Set array value  ['2000-12-01t00:00:01z', '1980-01-02T00:11:35+01:00', '1492-10-12T10:15:01-08:00']
   * @param arrayBody The array value ['2000-12-01t00:00:01z', '1980-01-02T00:11:35+01:00',
   *                  '1492-10-12T10:15:01-08:00']
   * @param options The options parameters.
   */
  putDateTimeValid(
    arrayBody: Date[],
    options?: ArrayPutDateTimeValidOptionalParams,
  ): Promise<void>;
  /**
   * Get date array value ['2000-12-01t00:00:01z', null]
   * @param options The options parameters.
   */
  getDateTimeInvalidNull(
    options?: ArrayGetDateTimeInvalidNullOptionalParams,
  ): Promise<ArrayGetDateTimeInvalidNullResponse>;
  /**
   * Get date array value ['2000-12-01t00:00:01z', 'date-time']
   * @param options The options parameters.
   */
  getDateTimeInvalidChars(
    options?: ArrayGetDateTimeInvalidCharsOptionalParams,
  ): Promise<ArrayGetDateTimeInvalidCharsResponse>;
  /**
   * Get date-time array value ['Fri, 01 Dec 2000 00:00:01 GMT', 'Wed, 02 Jan 1980 00:11:35 GMT', 'Wed,
   * 12 Oct 1492 10:15:01 GMT']
   * @param options The options parameters.
   */
  getDateTimeRfc1123Valid(
    options?: ArrayGetDateTimeRfc1123ValidOptionalParams,
  ): Promise<ArrayGetDateTimeRfc1123ValidResponse>;
  /**
   * Set array value  ['Fri, 01 Dec 2000 00:00:01 GMT', 'Wed, 02 Jan 1980 00:11:35 GMT', 'Wed, 12 Oct
   * 1492 10:15:01 GMT']
   * @param arrayBody The array value ['Fri, 01 Dec 2000 00:00:01 GMT', 'Wed, 02 Jan 1980 00:11:35 GMT',
   *                  'Wed, 12 Oct 1492 10:15:01 GMT']
   * @param options The options parameters.
   */
  putDateTimeRfc1123Valid(
    arrayBody: Date[],
    options?: ArrayPutDateTimeRfc1123ValidOptionalParams,
  ): Promise<void>;
  /**
   * Get duration array value ['P123DT22H14M12.011S', 'P5DT1H0M0S']
   * @param options The options parameters.
   */
  getDurationValid(
    options?: ArrayGetDurationValidOptionalParams,
  ): Promise<ArrayGetDurationValidResponse>;
  /**
   * Set array value  ['P123DT22H14M12.011S', 'P5DT1H0M0S']
   * @param arrayBody The array value ['P123DT22H14M12.011S', 'P5DT1H0M0S']
   * @param options The options parameters.
   */
  putDurationValid(
    arrayBody: string[],
    options?: ArrayPutDurationValidOptionalParams,
  ): Promise<void>;
  /**
   * Get byte array value [hex(FF FF FF FA), hex(01 02 03), hex (25, 29, 43)] with each item encoded in
   * base64
   * @param options The options parameters.
   */
  getByteValid(
    options?: ArrayGetByteValidOptionalParams,
  ): Promise<ArrayGetByteValidResponse>;
  /**
   * Put the array value [hex(FF FF FF FA), hex(01 02 03), hex (25, 29, 43)] with each elementencoded in
   * base 64
   * @param arrayBody The array value [hex(FF FF FF FA), hex(01 02 03), hex (25, 29, 43)] with each
   *                  elementencoded in base 64
   * @param options The options parameters.
   */
  putByteValid(
    arrayBody: Uint8Array[],
    options?: ArrayPutByteValidOptionalParams,
  ): Promise<void>;
  /**
   * Get byte array value [hex(AB, AC, AD), null] with the first item base64 encoded
   * @param options The options parameters.
   */
  getByteInvalidNull(
    options?: ArrayGetByteInvalidNullOptionalParams,
  ): Promise<ArrayGetByteInvalidNullResponse>;
  /**
   * Get array value ['a string that gets encoded with base64url', 'test string' 'Lorem ipsum'] with the
   * items base64url encoded
   * @param options The options parameters.
   */
  getBase64Url(
    options?: ArrayGetBase64UrlOptionalParams,
  ): Promise<ArrayGetBase64UrlResponse>;
  /**
   * Get array of complex type null value
   * @param options The options parameters.
   */
  getComplexNull(
    options?: ArrayGetComplexNullOptionalParams,
  ): Promise<ArrayGetComplexNullResponse>;
  /**
   * Get empty array of complex type []
   * @param options The options parameters.
   */
  getComplexEmpty(
    options?: ArrayGetComplexEmptyOptionalParams,
  ): Promise<ArrayGetComplexEmptyResponse>;
  /**
   * Get array of complex type with null item [{'integer': 1 'string': '2'}, null, {'integer': 5,
   * 'string': '6'}]
   * @param options The options parameters.
   */
  getComplexItemNull(
    options?: ArrayGetComplexItemNullOptionalParams,
  ): Promise<ArrayGetComplexItemNullResponse>;
  /**
   * Get array of complex type with empty item [{'integer': 1 'string': '2'}, {}, {'integer': 5,
   * 'string': '6'}]
   * @param options The options parameters.
   */
  getComplexItemEmpty(
    options?: ArrayGetComplexItemEmptyOptionalParams,
  ): Promise<ArrayGetComplexItemEmptyResponse>;
  /**
   * Get array of complex type with [{'integer': 1 'string': '2'}, {'integer': 3, 'string': '4'},
   * {'integer': 5, 'string': '6'}]
   * @param options The options parameters.
   */
  getComplexValid(
    options?: ArrayGetComplexValidOptionalParams,
  ): Promise<ArrayGetComplexValidResponse>;
  /**
   * Put an array of complex type with values [{'integer': 1 'string': '2'}, {'integer': 3, 'string':
   * '4'}, {'integer': 5, 'string': '6'}]
   * @param arrayBody array of complex type with [{'integer': 1 'string': '2'}, {'integer': 3, 'string':
   *                  '4'}, {'integer': 5, 'string': '6'}]
   * @param options The options parameters.
   */
  putComplexValid(
    arrayBody: Product[],
    options?: ArrayPutComplexValidOptionalParams,
  ): Promise<void>;
  /**
   * Get a null array
   * @param options The options parameters.
   */
  getArrayNull(
    options?: ArrayGetArrayNullOptionalParams,
  ): Promise<ArrayGetArrayNullResponse>;
  /**
   * Get an empty array []
   * @param options The options parameters.
   */
  getArrayEmpty(
    options?: ArrayGetArrayEmptyOptionalParams,
  ): Promise<ArrayGetArrayEmptyResponse>;
  /**
   * Get an array of array of strings [['1', '2', '3'], null, ['7', '8', '9']]
   * @param options The options parameters.
   */
  getArrayItemNull(
    options?: ArrayGetArrayItemNullOptionalParams,
  ): Promise<ArrayGetArrayItemNullResponse>;
  /**
   * Get an array of array of strings [['1', '2', '3'], [], ['7', '8', '9']]
   * @param options The options parameters.
   */
  getArrayItemEmpty(
    options?: ArrayGetArrayItemEmptyOptionalParams,
  ): Promise<ArrayGetArrayItemEmptyResponse>;
  /**
   * Get an array of array of strings [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']]
   * @param options The options parameters.
   */
  getArrayValid(
    options?: ArrayGetArrayValidOptionalParams,
  ): Promise<ArrayGetArrayValidResponse>;
  /**
   * Put An array of array of strings [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']]
   * @param arrayBody An array of array of strings [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']]
   * @param options The options parameters.
   */
  putArrayValid(
    arrayBody: string[][],
    options?: ArrayPutArrayValidOptionalParams,
  ): Promise<void>;
  /**
   * Get an array of Dictionaries with value null
   * @param options The options parameters.
   */
  getDictionaryNull(
    options?: ArrayGetDictionaryNullOptionalParams,
  ): Promise<ArrayGetDictionaryNullResponse>;
  /**
   * Get an array of Dictionaries of type <string, string> with value []
   * @param options The options parameters.
   */
  getDictionaryEmpty(
    options?: ArrayGetDictionaryEmptyOptionalParams,
  ): Promise<ArrayGetDictionaryEmptyResponse>;
  /**
   * Get an array of Dictionaries of type <string, string> with value [{'1': 'one', '2': 'two', '3':
   * 'three'}, null, {'7': 'seven', '8': 'eight', '9': 'nine'}]
   * @param options The options parameters.
   */
  getDictionaryItemNull(
    options?: ArrayGetDictionaryItemNullOptionalParams,
  ): Promise<ArrayGetDictionaryItemNullResponse>;
  /**
   * Get an array of Dictionaries of type <string, string> with value [{'1': 'one', '2': 'two', '3':
   * 'three'}, {}, {'7': 'seven', '8': 'eight', '9': 'nine'}]
   * @param options The options parameters.
   */
  getDictionaryItemEmpty(
    options?: ArrayGetDictionaryItemEmptyOptionalParams,
  ): Promise<ArrayGetDictionaryItemEmptyResponse>;
  /**
   * Get an array of Dictionaries of type <string, string> with value [{'1': 'one', '2': 'two', '3':
   * 'three'}, {'4': 'four', '5': 'five', '6': 'six'}, {'7': 'seven', '8': 'eight', '9': 'nine'}]
   * @param options The options parameters.
   */
  getDictionaryValid(
    options?: ArrayGetDictionaryValidOptionalParams,
  ): Promise<ArrayGetDictionaryValidResponse>;
  /**
   * Get an array of Dictionaries of type <string, string> with value [{'1': 'one', '2': 'two', '3':
   * 'three'}, {'4': 'four', '5': 'five', '6': 'six'}, {'7': 'seven', '8': 'eight', '9': 'nine'}]
   * @param arrayBody An array of Dictionaries of type <string, string> with value [{'1': 'one', '2':
   *                  'two', '3': 'three'}, {'4': 'four', '5': 'five', '6': 'six'}, {'7': 'seven', '8': 'eight', '9':
   *                  'nine'}]
   * @param options The options parameters.
   */
  putDictionaryValid(
    arrayBody: { [propertyName: string]: string }[],
    options?: ArrayPutDictionaryValidOptionalParams,
  ): Promise<void>;
}
