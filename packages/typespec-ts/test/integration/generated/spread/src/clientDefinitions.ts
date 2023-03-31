// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  SpreadModelAsRequestBodyParameters,
  SpreadModelAsRequestParameterParameters,
  SpreadAliasAsRequestBodyParameters,
  SpreadAliasAsRequestParameterParameters,
  SpreadAliasWithMultipleParametersParameters,
  SpreadAliasNestedSpreadModelParameterParameters,
} from "./parameters";
import {
  SpreadModelAsRequestBody200Response,
  SpreadModelAsRequestParameter200Response,
  SpreadAliasAsRequestBody200Response,
  SpreadAliasAsRequestParameter200Response,
  SpreadAliasWithMultipleParameters200Response,
  SpreadAliasNestedSpreadModelParameter200Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface SpreadModelAsRequestBody {
  put(
    options?: SpreadModelAsRequestBodyParameters
  ): StreamableMethod<SpreadModelAsRequestBody200Response>;
}

export interface SpreadModelAsRequestParameter {
  put(
    options: SpreadModelAsRequestParameterParameters
  ): StreamableMethod<SpreadModelAsRequestParameter200Response>;
}

export interface SpreadAliasAsRequestBody {
  put(
    options?: SpreadAliasAsRequestBodyParameters
  ): StreamableMethod<SpreadAliasAsRequestBody200Response>;
}

export interface SpreadAliasAsRequestParameter {
  put(
    options: SpreadAliasAsRequestParameterParameters
  ): StreamableMethod<SpreadAliasAsRequestParameter200Response>;
}

export interface SpreadAliasWithMultipleParameters {
  put(
    options: SpreadAliasWithMultipleParametersParameters
  ): StreamableMethod<SpreadAliasWithMultipleParameters200Response>;
}

export interface SpreadAliasNestedSpreadModelParameter {
  put(
    options: SpreadAliasNestedSpreadModelParameterParameters
  ): StreamableMethod<SpreadAliasNestedSpreadModelParameter200Response>;
}

export interface Routes {
  /** Resource for '/spread/model/request-body' has methods for the following verbs: put */
  (path: "/spread/model/request-body"): SpreadModelAsRequestBody;
  /** Resource for '/spread/model/request-parameter/\{id\}' has methods for the following verbs: put */
  (
    path: "/spread/model/request-parameter/{id}",
    id: string
  ): SpreadModelAsRequestParameter;
  /** Resource for '/spread/alias/request-body' has methods for the following verbs: put */
  (path: "/spread/alias/request-body"): SpreadAliasAsRequestBody;
  /** Resource for '/spread/alias/request-parameter/\{id\}' has methods for the following verbs: put */
  (
    path: "/spread/alias/request-parameter/{id}",
    id: string
  ): SpreadAliasAsRequestParameter;
  /** Resource for '/spread/alias/multiple-parameters/\{id\}' has methods for the following verbs: put */
  (
    path: "/spread/alias/multiple-parameters/{id}",
    id: string
  ): SpreadAliasWithMultipleParameters;
  /** Resource for '/spread/alias/nested-spread-parameter/\{id\}' has methods for the following verbs: put */
  (
    path: "/spread/alias/nested-spread-parameter/{id}",
    id: string
  ): SpreadAliasNestedSpreadModelParameter;
}

export type SpreadClient = Client & {
  path: Routes;
};
