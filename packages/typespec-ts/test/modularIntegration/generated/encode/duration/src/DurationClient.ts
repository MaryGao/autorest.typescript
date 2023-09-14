// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DefaultDurationProperty,
  ISO8601DurationProperty,
  Int32SecondsDurationProperty,
  FloatSecondsDurationProperty,
  FloatSecondsDurationArrayProperty,
} from "./models/models.js";
import {
  QueryDefaultOptions,
  QueryIso8601Options,
  QueryInt32SecondsOptions,
  QueryFloatSecondsOptions,
  QueryInt32SecondsArrayOptions,
  PropertyDefaultOptions,
  PropertyIso8601Options,
  PropertyInt32SecondsOptions,
  PropertyFloatSecondsOptions,
  PropertyFloatSecondsArrayOptions,
  HeaderDefaultOptions,
  HeaderIso8601Options,
  HeaderIso8601ArrayOptions,
  HeaderInt32SecondsOptions,
  HeaderFloatSecondsOptions,
} from "./models/options.js";
import {
  createDuration,
  DurationClientOptions,
  DurationContext,
  headerDefault,
  headerIso8601,
  headerIso8601Array,
  headerInt32Seconds,
  headerFloatSeconds,
  propertyDefault,
  propertyIso8601,
  propertyInt32Seconds,
  propertyFloatSeconds,
  propertyFloatSecondsArray,
  queryDefault,
  queryIso8601,
  queryInt32Seconds,
  queryFloatSeconds,
  queryInt32SecondsArray,
} from "./api/index.js";

export { DurationClientOptions } from "./api/DurationContext.js";

export class DurationClient {
  private _client: DurationContext;

  /** Test for encode decorator on duration. */
  constructor(options: DurationClientOptions = {}) {
    this._client = createDuration(options);
  }

  query = {
    default: (input: string, options?: QueryDefaultOptions): Promise<void> => {
      return queryDefault(this._client, input, options);
    },
    iso8601: (input: string, options?: QueryIso8601Options): Promise<void> => {
      return queryIso8601(this._client, input, options);
    },
    int32Seconds: (
      input: number,
      options?: QueryInt32SecondsOptions
    ): Promise<void> => {
      return queryInt32Seconds(this._client, input, options);
    },
    floatSeconds: (
      input: number,
      options?: QueryFloatSecondsOptions
    ): Promise<void> => {
      return queryFloatSeconds(this._client, input, options);
    },
    int32SecondsArray: (
      input: number[],
      options?: QueryInt32SecondsArrayOptions
    ): Promise<void> => {
      return queryInt32SecondsArray(this._client, input, options);
    },
  };
  property = {
    default: (
      value: string,
      options?: PropertyDefaultOptions
    ): Promise<DefaultDurationProperty> => {
      return propertyDefault(this._client, value, options);
    },
    iso8601: (
      value: string,
      options?: PropertyIso8601Options
    ): Promise<ISO8601DurationProperty> => {
      return propertyIso8601(this._client, value, options);
    },
    int32Seconds: (
      value: number,
      options?: PropertyInt32SecondsOptions
    ): Promise<Int32SecondsDurationProperty> => {
      return propertyInt32Seconds(this._client, value, options);
    },
    floatSeconds: (
      value: number,
      options?: PropertyFloatSecondsOptions
    ): Promise<FloatSecondsDurationProperty> => {
      return propertyFloatSeconds(this._client, value, options);
    },
    floatSecondsArray: (
      value: number[],
      options?: PropertyFloatSecondsArrayOptions
    ): Promise<FloatSecondsDurationArrayProperty> => {
      return propertyFloatSecondsArray(this._client, value, options);
    },
  };
  header = {
    default: (
      duration: string,
      options?: HeaderDefaultOptions
    ): Promise<void> => {
      return headerDefault(this._client, duration, options);
    },
    iso8601: (
      duration: string,
      options?: HeaderIso8601Options
    ): Promise<void> => {
      return headerIso8601(this._client, duration, options);
    },
    iso8601Array: (
      duration: string[],
      options?: HeaderIso8601ArrayOptions
    ): Promise<void> => {
      return headerIso8601Array(this._client, duration, options);
    },
    int32Seconds: (
      duration: number,
      options?: HeaderInt32SecondsOptions
    ): Promise<void> => {
      return headerInt32Seconds(this._client, duration, options);
    },
    floatSeconds: (
      duration: number,
      options?: HeaderFloatSecondsOptions
    ): Promise<void> => {
      return headerFloatSeconds(this._client, duration, options);
    },
  };
}
