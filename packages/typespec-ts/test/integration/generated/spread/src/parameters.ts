// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import {
  ModelBodyParameter,
  ModelRequestParamter,
  ModelParameter,
} from "./models";

export interface SpreadModelAsRequestBodyBodyParam {
  body?: ModelBodyParameter;
}

export type SpreadModelAsRequestBodyParameters =
  SpreadModelAsRequestBodyBodyParam & RequestParameters;

export interface SpreadModelAsRequestParameterHeaders {
  "x-ms-test-header": string;
}

export interface SpreadModelAsRequestParameterBodyParam {
  body?: ModelRequestParamter;
}

export interface SpreadModelAsRequestParameterHeaderParam {
  headers: RawHttpHeadersInput & SpreadModelAsRequestParameterHeaders;
}

export type SpreadModelAsRequestParameterParameters =
  SpreadModelAsRequestParameterHeaderParam &
    SpreadModelAsRequestParameterBodyParam &
    RequestParameters;

export interface SpreadAliasAsRequestBodyBodyParam {
  body?: { name: string };
}

export type SpreadAliasAsRequestBodyParameters =
  SpreadAliasAsRequestBodyBodyParam & RequestParameters;

export interface SpreadAliasAsRequestParameterHeaders {
  "x-ms-test-header": string;
}

export interface SpreadAliasAsRequestParameterBodyParam {
  body?: { name: string };
}

export interface SpreadAliasAsRequestParameterHeaderParam {
  headers: RawHttpHeadersInput & SpreadAliasAsRequestParameterHeaders;
}

export type SpreadAliasAsRequestParameterParameters =
  SpreadAliasAsRequestParameterHeaderParam &
    SpreadAliasAsRequestParameterBodyParam &
    RequestParameters;

export interface SpreadAliasWithMultipleParametersHeaders {
  "x-ms-test-header": string;
}

export interface SpreadAliasWithMultipleParametersBodyParam {
  body?: {
    prop1: string;
    prop2: string;
    prop3: string;
    prop4: string;
    prop5: string;
    prop6: string;
  };
}

export interface SpreadAliasWithMultipleParametersHeaderParam {
  headers: RawHttpHeadersInput & SpreadAliasWithMultipleParametersHeaders;
}

export type SpreadAliasWithMultipleParametersParameters =
  SpreadAliasWithMultipleParametersHeaderParam &
    SpreadAliasWithMultipleParametersBodyParam &
    RequestParameters;

export interface SpreadAliasNestedSpreadModelParameterHeaders {
  "x-ms-test-header": string;
}

export interface SpreadAliasNestedSpreadModelParameterBodyParam {
  body?: ModelParameter;
}

export interface SpreadAliasNestedSpreadModelParameterHeaderParam {
  headers: RawHttpHeadersInput & SpreadAliasNestedSpreadModelParameterHeaders;
}

export type SpreadAliasNestedSpreadModelParameterParameters =
  SpreadAliasNestedSpreadModelParameterHeaderParam &
    SpreadAliasNestedSpreadModelParameterBodyParam &
    RequestParameters;
