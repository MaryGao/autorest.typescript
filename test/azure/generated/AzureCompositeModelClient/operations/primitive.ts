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
import * as Mappers from "../models/primitiveMappers";
import * as Parameters from "../models/parameters";
import { AzureCompositeModelContext } from "../azureCompositeModelContext";

/** Class representing a Primitive. */
export class Primitive {
  private readonly client: AzureCompositeModelContext;

  /**
   * Create a Primitive.
   * @param {AzureCompositeModelContext} client Reference to the service client.
   */
  constructor(client: AzureCompositeModelContext) {
    this.client = client;
  }

  /**
   * Get complex types with integer properties
   * @param [options] The optional parameters
   * @returns Promise<Models.PrimitiveGetIntResponse>
   */
  getInt(options?: coreHttp.RequestOptionsBase): Promise<Models.PrimitiveGetIntResponse>;
  /**
   * @param callback The callback
   */
  getInt(callback: coreHttp.ServiceCallback<Models.IntWrapper>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getInt(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.IntWrapper>): void;
  getInt(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.IntWrapper>, callback?: coreHttp.ServiceCallback<Models.IntWrapper>): Promise<Models.PrimitiveGetIntResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getIntOperationSpec,
      callback) as Promise<Models.PrimitiveGetIntResponse>;
  }

  /**
   * Put complex types with integer properties
   * @param complexBody Please put -1 and 2
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  putInt(complexBody: Models.IntWrapper, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param complexBody Please put -1 and 2
   * @param callback The callback
   */
  putInt(complexBody: Models.IntWrapper, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param complexBody Please put -1 and 2
   * @param options The optional parameters
   * @param callback The callback
   */
  putInt(complexBody: Models.IntWrapper, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  putInt(complexBody: Models.IntWrapper, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        complexBody,
        options
      },
      putIntOperationSpec,
      callback);
  }

  /**
   * Get complex types with long properties
   * @param [options] The optional parameters
   * @returns Promise<Models.PrimitiveGetLongResponse>
   */
  getLong(options?: coreHttp.RequestOptionsBase): Promise<Models.PrimitiveGetLongResponse>;
  /**
   * @param callback The callback
   */
  getLong(callback: coreHttp.ServiceCallback<Models.LongWrapper>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getLong(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.LongWrapper>): void;
  getLong(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.LongWrapper>, callback?: coreHttp.ServiceCallback<Models.LongWrapper>): Promise<Models.PrimitiveGetLongResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getLongOperationSpec,
      callback) as Promise<Models.PrimitiveGetLongResponse>;
  }

  /**
   * Put complex types with long properties
   * @param complexBody Please put 1099511627775 and -999511627788
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  putLong(complexBody: Models.LongWrapper, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param complexBody Please put 1099511627775 and -999511627788
   * @param callback The callback
   */
  putLong(complexBody: Models.LongWrapper, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param complexBody Please put 1099511627775 and -999511627788
   * @param options The optional parameters
   * @param callback The callback
   */
  putLong(complexBody: Models.LongWrapper, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  putLong(complexBody: Models.LongWrapper, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        complexBody,
        options
      },
      putLongOperationSpec,
      callback);
  }

  /**
   * Get complex types with float properties
   * @param [options] The optional parameters
   * @returns Promise<Models.PrimitiveGetFloatResponse>
   */
  getFloat(options?: coreHttp.RequestOptionsBase): Promise<Models.PrimitiveGetFloatResponse>;
  /**
   * @param callback The callback
   */
  getFloat(callback: coreHttp.ServiceCallback<Models.FloatWrapper>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getFloat(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.FloatWrapper>): void;
  getFloat(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.FloatWrapper>, callback?: coreHttp.ServiceCallback<Models.FloatWrapper>): Promise<Models.PrimitiveGetFloatResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getFloatOperationSpec,
      callback) as Promise<Models.PrimitiveGetFloatResponse>;
  }

  /**
   * Put complex types with float properties
   * @param complexBody Please put 1.05 and -0.003
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  putFloat(complexBody: Models.FloatWrapper, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param complexBody Please put 1.05 and -0.003
   * @param callback The callback
   */
  putFloat(complexBody: Models.FloatWrapper, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param complexBody Please put 1.05 and -0.003
   * @param options The optional parameters
   * @param callback The callback
   */
  putFloat(complexBody: Models.FloatWrapper, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  putFloat(complexBody: Models.FloatWrapper, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        complexBody,
        options
      },
      putFloatOperationSpec,
      callback);
  }

  /**
   * Get complex types with double properties
   * @param [options] The optional parameters
   * @returns Promise<Models.PrimitiveGetDoubleResponse>
   */
  getDouble(options?: coreHttp.RequestOptionsBase): Promise<Models.PrimitiveGetDoubleResponse>;
  /**
   * @param callback The callback
   */
  getDouble(callback: coreHttp.ServiceCallback<Models.DoubleWrapper>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getDouble(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.DoubleWrapper>): void;
  getDouble(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.DoubleWrapper>, callback?: coreHttp.ServiceCallback<Models.DoubleWrapper>): Promise<Models.PrimitiveGetDoubleResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getDoubleOperationSpec,
      callback) as Promise<Models.PrimitiveGetDoubleResponse>;
  }

  /**
   * Put complex types with double properties
   * @param complexBody Please put 3e-100 and
   * -0.000000000000000000000000000000000000000000000000000000005
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  putDouble(complexBody: Models.DoubleWrapper, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param complexBody Please put 3e-100 and
   * -0.000000000000000000000000000000000000000000000000000000005
   * @param callback The callback
   */
  putDouble(complexBody: Models.DoubleWrapper, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param complexBody Please put 3e-100 and
   * -0.000000000000000000000000000000000000000000000000000000005
   * @param options The optional parameters
   * @param callback The callback
   */
  putDouble(complexBody: Models.DoubleWrapper, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  putDouble(complexBody: Models.DoubleWrapper, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        complexBody,
        options
      },
      putDoubleOperationSpec,
      callback);
  }

  /**
   * Get complex types with bool properties
   * @param [options] The optional parameters
   * @returns Promise<Models.PrimitiveGetBoolResponse>
   */
  getBool(options?: coreHttp.RequestOptionsBase): Promise<Models.PrimitiveGetBoolResponse>;
  /**
   * @param callback The callback
   */
  getBool(callback: coreHttp.ServiceCallback<Models.BooleanWrapper>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getBool(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.BooleanWrapper>): void;
  getBool(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.BooleanWrapper>, callback?: coreHttp.ServiceCallback<Models.BooleanWrapper>): Promise<Models.PrimitiveGetBoolResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getBoolOperationSpec,
      callback) as Promise<Models.PrimitiveGetBoolResponse>;
  }

  /**
   * Put complex types with bool properties
   * @param complexBody Please put true and false
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  putBool(complexBody: Models.BooleanWrapper, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param complexBody Please put true and false
   * @param callback The callback
   */
  putBool(complexBody: Models.BooleanWrapper, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param complexBody Please put true and false
   * @param options The optional parameters
   * @param callback The callback
   */
  putBool(complexBody: Models.BooleanWrapper, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  putBool(complexBody: Models.BooleanWrapper, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        complexBody,
        options
      },
      putBoolOperationSpec,
      callback);
  }

  /**
   * Get complex types with string properties
   * @param [options] The optional parameters
   * @returns Promise<Models.PrimitiveGetStringResponse>
   */
  getString(options?: coreHttp.RequestOptionsBase): Promise<Models.PrimitiveGetStringResponse>;
  /**
   * @param callback The callback
   */
  getString(callback: coreHttp.ServiceCallback<Models.StringWrapper>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getString(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.StringWrapper>): void;
  getString(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.StringWrapper>, callback?: coreHttp.ServiceCallback<Models.StringWrapper>): Promise<Models.PrimitiveGetStringResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getStringOperationSpec,
      callback) as Promise<Models.PrimitiveGetStringResponse>;
  }

  /**
   * Put complex types with string properties
   * @param complexBody Please put 'goodrequest', '', and null
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  putString(complexBody: Models.StringWrapper, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param complexBody Please put 'goodrequest', '', and null
   * @param callback The callback
   */
  putString(complexBody: Models.StringWrapper, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param complexBody Please put 'goodrequest', '', and null
   * @param options The optional parameters
   * @param callback The callback
   */
  putString(complexBody: Models.StringWrapper, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  putString(complexBody: Models.StringWrapper, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        complexBody,
        options
      },
      putStringOperationSpec,
      callback);
  }

  /**
   * Get complex types with date properties
   * @param [options] The optional parameters
   * @returns Promise<Models.PrimitiveGetDateResponse>
   */
  getDate(options?: coreHttp.RequestOptionsBase): Promise<Models.PrimitiveGetDateResponse>;
  /**
   * @param callback The callback
   */
  getDate(callback: coreHttp.ServiceCallback<Models.DateWrapper>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getDate(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.DateWrapper>): void;
  getDate(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.DateWrapper>, callback?: coreHttp.ServiceCallback<Models.DateWrapper>): Promise<Models.PrimitiveGetDateResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getDateOperationSpec,
      callback) as Promise<Models.PrimitiveGetDateResponse>;
  }

  /**
   * Put complex types with date properties
   * @param complexBody Please put '0001-01-01' and '2016-02-29'
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  putDate(complexBody: Models.DateWrapper, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param complexBody Please put '0001-01-01' and '2016-02-29'
   * @param callback The callback
   */
  putDate(complexBody: Models.DateWrapper, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param complexBody Please put '0001-01-01' and '2016-02-29'
   * @param options The optional parameters
   * @param callback The callback
   */
  putDate(complexBody: Models.DateWrapper, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  putDate(complexBody: Models.DateWrapper, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        complexBody,
        options
      },
      putDateOperationSpec,
      callback);
  }

  /**
   * Get complex types with datetime properties
   * @param [options] The optional parameters
   * @returns Promise<Models.PrimitiveGetDateTimeResponse>
   */
  getDateTime(options?: coreHttp.RequestOptionsBase): Promise<Models.PrimitiveGetDateTimeResponse>;
  /**
   * @param callback The callback
   */
  getDateTime(callback: coreHttp.ServiceCallback<Models.DatetimeWrapper>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getDateTime(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.DatetimeWrapper>): void;
  getDateTime(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.DatetimeWrapper>, callback?: coreHttp.ServiceCallback<Models.DatetimeWrapper>): Promise<Models.PrimitiveGetDateTimeResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getDateTimeOperationSpec,
      callback) as Promise<Models.PrimitiveGetDateTimeResponse>;
  }

  /**
   * Put complex types with datetime properties
   * @param complexBody Please put '0001-01-01T12:00:00-04:00' and '2015-05-18T11:38:00-08:00'
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  putDateTime(complexBody: Models.DatetimeWrapper, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param complexBody Please put '0001-01-01T12:00:00-04:00' and '2015-05-18T11:38:00-08:00'
   * @param callback The callback
   */
  putDateTime(complexBody: Models.DatetimeWrapper, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param complexBody Please put '0001-01-01T12:00:00-04:00' and '2015-05-18T11:38:00-08:00'
   * @param options The optional parameters
   * @param callback The callback
   */
  putDateTime(complexBody: Models.DatetimeWrapper, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  putDateTime(complexBody: Models.DatetimeWrapper, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        complexBody,
        options
      },
      putDateTimeOperationSpec,
      callback);
  }

  /**
   * Get complex types with datetimeRfc1123 properties
   * @param [options] The optional parameters
   * @returns Promise<Models.PrimitiveGetDateTimeRfc1123Response>
   */
  getDateTimeRfc1123(options?: coreHttp.RequestOptionsBase): Promise<Models.PrimitiveGetDateTimeRfc1123Response>;
  /**
   * @param callback The callback
   */
  getDateTimeRfc1123(callback: coreHttp.ServiceCallback<Models.Datetimerfc1123Wrapper>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getDateTimeRfc1123(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.Datetimerfc1123Wrapper>): void;
  getDateTimeRfc1123(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.Datetimerfc1123Wrapper>, callback?: coreHttp.ServiceCallback<Models.Datetimerfc1123Wrapper>): Promise<Models.PrimitiveGetDateTimeRfc1123Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getDateTimeRfc1123OperationSpec,
      callback) as Promise<Models.PrimitiveGetDateTimeRfc1123Response>;
  }

  /**
   * Put complex types with datetimeRfc1123 properties
   * @param complexBody Please put 'Mon, 01 Jan 0001 12:00:00 GMT' and 'Mon, 18 May 2015 11:38:00
   * GMT'
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  putDateTimeRfc1123(complexBody: Models.Datetimerfc1123Wrapper, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param complexBody Please put 'Mon, 01 Jan 0001 12:00:00 GMT' and 'Mon, 18 May 2015 11:38:00
   * GMT'
   * @param callback The callback
   */
  putDateTimeRfc1123(complexBody: Models.Datetimerfc1123Wrapper, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param complexBody Please put 'Mon, 01 Jan 0001 12:00:00 GMT' and 'Mon, 18 May 2015 11:38:00
   * GMT'
   * @param options The optional parameters
   * @param callback The callback
   */
  putDateTimeRfc1123(complexBody: Models.Datetimerfc1123Wrapper, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  putDateTimeRfc1123(complexBody: Models.Datetimerfc1123Wrapper, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        complexBody,
        options
      },
      putDateTimeRfc1123OperationSpec,
      callback);
  }

  /**
   * Get complex types with duration properties
   * @param [options] The optional parameters
   * @returns Promise<Models.PrimitiveGetDurationResponse>
   */
  getDuration(options?: coreHttp.RequestOptionsBase): Promise<Models.PrimitiveGetDurationResponse>;
  /**
   * @param callback The callback
   */
  getDuration(callback: coreHttp.ServiceCallback<Models.DurationWrapper>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getDuration(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.DurationWrapper>): void;
  getDuration(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.DurationWrapper>, callback?: coreHttp.ServiceCallback<Models.DurationWrapper>): Promise<Models.PrimitiveGetDurationResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getDurationOperationSpec,
      callback) as Promise<Models.PrimitiveGetDurationResponse>;
  }

  /**
   * Put complex types with duration properties
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  putDuration(options?: Models.PrimitivePutDurationOptionalParams): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  putDuration(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  putDuration(options: Models.PrimitivePutDurationOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  putDuration(options?: Models.PrimitivePutDurationOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      putDurationOperationSpec,
      callback);
  }

  /**
   * Get complex types with byte properties
   * @param [options] The optional parameters
   * @returns Promise<Models.PrimitiveGetByteResponse>
   */
  getByte(options?: coreHttp.RequestOptionsBase): Promise<Models.PrimitiveGetByteResponse>;
  /**
   * @param callback The callback
   */
  getByte(callback: coreHttp.ServiceCallback<Models.ByteWrapper>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getByte(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.ByteWrapper>): void;
  getByte(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.ByteWrapper>, callback?: coreHttp.ServiceCallback<Models.ByteWrapper>): Promise<Models.PrimitiveGetByteResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getByteOperationSpec,
      callback) as Promise<Models.PrimitiveGetByteResponse>;
  }

  /**
   * Put complex types with byte properties
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  putByte(options?: Models.PrimitivePutByteOptionalParams): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  putByte(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  putByte(options: Models.PrimitivePutByteOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  putByte(options?: Models.PrimitivePutByteOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      putByteOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers);
const getIntOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "complex/primitive/integer",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.IntWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putIntOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/primitive/integer",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "complexBody",
    mapper: {
      ...Mappers.IntWrapper,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getLongOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "complex/primitive/long",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.LongWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putLongOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/primitive/long",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "complexBody",
    mapper: {
      ...Mappers.LongWrapper,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getFloatOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "complex/primitive/float",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FloatWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putFloatOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/primitive/float",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "complexBody",
    mapper: {
      ...Mappers.FloatWrapper,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getDoubleOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "complex/primitive/double",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DoubleWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putDoubleOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/primitive/double",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "complexBody",
    mapper: {
      ...Mappers.DoubleWrapper,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getBoolOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "complex/primitive/bool",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BooleanWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putBoolOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/primitive/bool",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "complexBody",
    mapper: {
      ...Mappers.BooleanWrapper,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getStringOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "complex/primitive/string",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.StringWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putStringOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/primitive/string",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "complexBody",
    mapper: {
      ...Mappers.StringWrapper,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getDateOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "complex/primitive/date",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DateWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putDateOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/primitive/date",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "complexBody",
    mapper: {
      ...Mappers.DateWrapper,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getDateTimeOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "complex/primitive/datetime",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DatetimeWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putDateTimeOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/primitive/datetime",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "complexBody",
    mapper: {
      ...Mappers.DatetimeWrapper,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getDateTimeRfc1123OperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "complex/primitive/datetimerfc1123",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Datetimerfc1123Wrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putDateTimeRfc1123OperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/primitive/datetimerfc1123",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "complexBody",
    mapper: {
      ...Mappers.Datetimerfc1123Wrapper,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getDurationOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "complex/primitive/duration",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DurationWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putDurationOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/primitive/duration",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      field: [
        "options",
        "field"
      ]
    },
    mapper: {
      ...Mappers.DurationWrapper,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getByteOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "complex/primitive/byte",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ByteWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putByteOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/primitive/byte",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      field: [
        "options",
        "field"
      ]
    },
    mapper: {
      ...Mappers.ByteWrapper,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
