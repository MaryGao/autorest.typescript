// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  UserOutput,
  OperationStatusOutput,
  ResourceOperationStatusOutput
} from "./outputModels";

export interface CreateOrReplace200Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has succeeded. */
export interface CreateOrReplace200Response extends HttpResponse {
  status: "200";
  body: UserOutput;
  headers: RawHttpHeaders & CreateOrReplace200Headers;
}

/** The request has succeeded. */
export interface CreateOrReplace200LogicalResponse extends HttpResponse {
  status: "200";
  body: UserOutput;
}

export interface CreateOrReplace201Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface CreateOrReplace201Response extends HttpResponse {
  status: "201";
  body: UserOutput;
  headers: RawHttpHeaders & CreateOrReplace201Headers;
}

export interface CreateOrReplaceDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CreateOrReplaceDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & CreateOrReplaceDefaultHeaders;
}

export interface Delete202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface Delete202Response extends HttpResponse {
  status: "202";
  body: OperationStatusOutput;
  headers: RawHttpHeaders & Delete202Headers;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface Delete200LogicalResponse extends HttpResponse {
  status: "200";
  body: OperationStatusOutput;
}

export interface DeleteDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DeleteDefaultHeaders;
}

export interface Export202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface Export202Response extends HttpResponse {
  status: "202";
  body: ResourceOperationStatusOutput;
  headers: RawHttpHeaders & Export202Headers;
}

/**
 * The final response for long-running export operation
 */
export interface Export200LogicalResponse extends HttpResponse {
  status: "200";
  body: ResourceOperationStatusOutput;
}

export interface ExportDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ExportDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ExportDefaultHeaders;
}
