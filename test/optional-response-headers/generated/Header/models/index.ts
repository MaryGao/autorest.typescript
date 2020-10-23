/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ServiceClientOptions } from "@azure/core-http";
import * as coreHttp from "@azure/core-http";

/**
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  status?: number;
  message?: string;
}

/**
 * An interface representing AutoRestSwaggerBATHeaderServiceOptions.
 */
export interface AutoRestSwaggerBATHeaderServiceOptions extends ServiceClientOptions {
  baseUri?: string;
}

/**
 * Optional Parameters.
 */
export interface HeaderParamStringOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * Send a post request with header values "The quick brown fox jumps over the lazy dog" or null
   * or ""
   */
  value?: string;
}

/**
 * Optional Parameters.
 */
export interface HeaderParamDatetimeRfc1123OptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * Send a post request with header values "Wed, 01 Jan 2010 12:34:56 GMT" or "Mon, 01 Jan 0001
   * 00:00:00 GMT"
   */
  value?: Date;
}

/**
 * Optional Parameters.
 */
export interface HeaderParamEnumOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * Send a post request with header values 'GREY'. Possible values include: 'White', 'black',
   * 'GREY'
   */
  value?: GreyscaleColors;
}

/**
 * Defines headers for responseExistingKey operation.
 */
export interface HeaderResponseExistingKeyHeaders {
  /**
   * response with header value "User-Agent": "overwrite"
   */
  userAgent?: string;
}

/**
 * Defines headers for responseProtectedKey operation.
 */
export interface HeaderResponseProtectedKeyHeaders {
  /**
   * response with header value "Content-Type": "text/html"
   */
  contentType?: string;
}

/**
 * Defines headers for responseInteger operation.
 */
export interface HeaderResponseIntegerHeaders {
  /**
   * response with header value "value": 1 or -2
   */
  value?: number;
}

/**
 * Defines headers for responseLong operation.
 */
export interface HeaderResponseLongHeaders {
  /**
   * response with header value "value": 105 or -2
   */
  value?: number;
}

/**
 * Defines headers for responseFloat operation.
 */
export interface HeaderResponseFloatHeaders {
  /**
   * response with header value "value": 0.07 or -3.0
   */
  value?: number;
}

/**
 * Defines headers for responseDouble operation.
 */
export interface HeaderResponseDoubleHeaders {
  /**
   * response with header value "value": 7e120 or -3.0
   */
  value?: number;
}

/**
 * Defines headers for responseBool operation.
 */
export interface HeaderResponseBoolHeaders {
  /**
   * response with header value "value": true or false
   */
  value?: boolean;
}

/**
 * Defines headers for responseString operation.
 */
export interface HeaderResponseStringHeaders {
  /**
   * response with header values "The quick brown fox jumps over the lazy dog" or null or ""
   */
  value?: string;
}

/**
 * Defines headers for responseDate operation.
 */
export interface HeaderResponseDateHeaders {
  /**
   * response with header values "2010-01-01" or "0001-01-01"
   */
  value?: Date;
}

/**
 * Defines headers for responseDatetime operation.
 */
export interface HeaderResponseDatetimeHeaders {
  /**
   * response with header values "2010-01-01T12:34:56Z" or "0001-01-01T00:00:00Z"
   */
  value?: Date;
}

/**
 * Defines headers for responseDatetimeRfc1123 operation.
 */
export interface HeaderResponseDatetimeRfc1123Headers {
  /**
   * response with header values "Wed, 01 Jan 2010 12:34:56 GMT" or "Mon, 01 Jan 0001 00:00:00 GMT"
   */
  value?: Date;
}

/**
 * Defines headers for responseDuration operation.
 */
export interface HeaderResponseDurationHeaders {
  /**
   * response with header values "P123DT22H14M12.011S"
   */
  value?: string;
}

/**
 * Defines headers for responseByte operation.
 */
export interface HeaderResponseByteHeaders {
  /**
   * response with header values "啊齄丂狛狜隣郎隣兀﨩"
   */
  value?: Uint8Array;
}

/**
 * Defines headers for responseEnum operation.
 */
export interface HeaderResponseEnumHeaders {
  /**
   * response with header values "GREY" or null. Possible values include: 'White', 'black', 'GREY'
   */
  value?: GreyscaleColors;
}

/**
 * Defines values for GreyscaleColors.
 * Possible values include: 'White', 'black', 'GREY'
 * @readonly
 * @enum {string}
 */
export type GreyscaleColors = 'White' | 'black' | 'GREY';

/**
 * Contains response data for the responseExistingKey operation.
 */
export type HeaderResponseExistingKeyResponse = HeaderResponseExistingKeyHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: HeaderResponseExistingKeyHeaders;
    };
};

/**
 * Contains response data for the responseProtectedKey operation.
 */
export type HeaderResponseProtectedKeyResponse = HeaderResponseProtectedKeyHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: HeaderResponseProtectedKeyHeaders;
    };
};

/**
 * Contains response data for the responseInteger operation.
 */
export type HeaderResponseIntegerResponse = HeaderResponseIntegerHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: HeaderResponseIntegerHeaders;
    };
};

/**
 * Contains response data for the responseLong operation.
 */
export type HeaderResponseLongResponse = HeaderResponseLongHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: HeaderResponseLongHeaders;
    };
};

/**
 * Contains response data for the responseFloat operation.
 */
export type HeaderResponseFloatResponse = HeaderResponseFloatHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: HeaderResponseFloatHeaders;
    };
};

/**
 * Contains response data for the responseDouble operation.
 */
export type HeaderResponseDoubleResponse = HeaderResponseDoubleHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: HeaderResponseDoubleHeaders;
    };
};

/**
 * Contains response data for the responseBool operation.
 */
export type HeaderResponseBoolResponse = HeaderResponseBoolHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: HeaderResponseBoolHeaders;
    };
};

/**
 * Contains response data for the responseString operation.
 */
export type HeaderResponseStringResponse = HeaderResponseStringHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: HeaderResponseStringHeaders;
    };
};

/**
 * Contains response data for the responseDate operation.
 */
export type HeaderResponseDateResponse = HeaderResponseDateHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: HeaderResponseDateHeaders;
    };
};

/**
 * Contains response data for the responseDatetime operation.
 */
export type HeaderResponseDatetimeResponse = HeaderResponseDatetimeHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: HeaderResponseDatetimeHeaders;
    };
};

/**
 * Contains response data for the responseDatetimeRfc1123 operation.
 */
export type HeaderResponseDatetimeRfc1123Response = HeaderResponseDatetimeRfc1123Headers & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: HeaderResponseDatetimeRfc1123Headers;
    };
};

/**
 * Contains response data for the responseDuration operation.
 */
export type HeaderResponseDurationResponse = HeaderResponseDurationHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: HeaderResponseDurationHeaders;
    };
};

/**
 * Contains response data for the responseByte operation.
 */
export type HeaderResponseByteResponse = HeaderResponseByteHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: HeaderResponseByteHeaders;
    };
};

/**
 * Contains response data for the responseEnum operation.
 */
export type HeaderResponseEnumResponse = HeaderResponseEnumHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: HeaderResponseEnumHeaders;
    };
};
