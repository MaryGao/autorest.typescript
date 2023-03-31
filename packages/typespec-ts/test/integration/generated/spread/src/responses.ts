// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";

/** The request has succeeded. */
export interface SpreadModelAsRequestBody200Response extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface SpreadModelAsRequestParameter200Response extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface SpreadAliasAsRequestBody200Response extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface SpreadAliasAsRequestParameter200Response extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface SpreadAliasWithMultipleParameters200Response
  extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface SpreadAliasNestedSpreadModelParameter200Response
  extends HttpResponse {
  status: "200";
}
