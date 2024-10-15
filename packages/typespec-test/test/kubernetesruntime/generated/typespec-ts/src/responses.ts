// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
import {
  StorageClassResourceOutput,
  ErrorResponseOutput,
  StorageClassResourceListResultOutput,
  OperationListResultOutput,
  LoadBalancerOutput,
  LoadBalancerListResultOutput,
  BgpPeerOutput,
  BgpPeerListResultOutput,
  ServiceResourceOutput,
  ServiceResourceListResultOutput,
} from "./outputModels.js";

/** Azure operation completed successfully. */
export interface StorageClassGet200Response extends HttpResponse {
  status: "200";
  body: StorageClassResourceOutput;
}

export interface StorageClassGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'StorageClassResource' update operation succeeded */
export interface StorageClassCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: StorageClassResourceOutput;
}

export interface StorageClassCreateOrUpdate201Headers {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource 'StorageClassResource' create operation succeeded */
export interface StorageClassCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: StorageClassResourceOutput;
  headers: RawHttpHeaders & StorageClassCreateOrUpdate201Headers;
}

export interface StorageClassCreateOrUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running createOrUpdate operation */
export interface StorageClassCreateOrUpdateLogicalResponse
  extends HttpResponse {
  status: "200";
  body: StorageClassResourceOutput;
}

/** Azure operation completed successfully. */
export interface StorageClassUpdate200Response extends HttpResponse {
  status: "200";
  body: StorageClassResourceOutput;
}

export interface StorageClassUpdate202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource update request accepted. */
export interface StorageClassUpdate202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & StorageClassUpdate202Headers;
}

export interface StorageClassUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running update operation */
export interface StorageClassUpdateLogicalResponse extends HttpResponse {
  status: "200";
  body: StorageClassResourceOutput;
}

export interface StorageClassDelete202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource deletion accepted. */
export interface StorageClassDelete202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & StorageClassDelete202Headers;
}

/** Resource does not exist. */
export interface StorageClassDelete204Response extends HttpResponse {
  status: "204";
}

export interface StorageClassDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running delete operation */
export interface StorageClassDeleteLogicalResponse extends HttpResponse {
  status: "200";
}

/** Azure operation completed successfully. */
export interface StorageClassList200Response extends HttpResponse {
  status: "200";
  body: StorageClassResourceListResultOutput;
}

export interface StorageClassListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface OperationsList200Response extends HttpResponse {
  status: "200";
  body: OperationListResultOutput;
}

export interface OperationsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface LoadBalancersGet200Response extends HttpResponse {
  status: "200";
  body: LoadBalancerOutput;
}

export interface LoadBalancersGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'LoadBalancer' update operation succeeded */
export interface LoadBalancersCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: LoadBalancerOutput;
}

export interface LoadBalancersCreateOrUpdate201Headers {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource 'LoadBalancer' create operation succeeded */
export interface LoadBalancersCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: LoadBalancerOutput;
  headers: RawHttpHeaders & LoadBalancersCreateOrUpdate201Headers;
}

export interface LoadBalancersCreateOrUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running createOrUpdate operation */
export interface LoadBalancersCreateOrUpdateLogicalResponse
  extends HttpResponse {
  status: "200";
  body: LoadBalancerOutput;
}

/** Resource deleted successfully. */
export interface LoadBalancersDelete200Response extends HttpResponse {
  status: "200";
}

/** Resource does not exist. */
export interface LoadBalancersDelete204Response extends HttpResponse {
  status: "204";
}

export interface LoadBalancersDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface LoadBalancersList200Response extends HttpResponse {
  status: "200";
  body: LoadBalancerListResultOutput;
}

export interface LoadBalancersListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface BgpPeersGet200Response extends HttpResponse {
  status: "200";
  body: BgpPeerOutput;
}

export interface BgpPeersGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'BgpPeer' update operation succeeded */
export interface BgpPeersCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: BgpPeerOutput;
}

export interface BgpPeersCreateOrUpdate201Headers {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource 'BgpPeer' create operation succeeded */
export interface BgpPeersCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: BgpPeerOutput;
  headers: RawHttpHeaders & BgpPeersCreateOrUpdate201Headers;
}

export interface BgpPeersCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running createOrUpdate operation */
export interface BgpPeersCreateOrUpdateLogicalResponse extends HttpResponse {
  status: "200";
  body: BgpPeerOutput;
}

/** Resource deleted successfully. */
export interface BgpPeersDelete200Response extends HttpResponse {
  status: "200";
}

/** Resource does not exist. */
export interface BgpPeersDelete204Response extends HttpResponse {
  status: "204";
}

export interface BgpPeersDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface BgpPeersList200Response extends HttpResponse {
  status: "200";
  body: BgpPeerListResultOutput;
}

export interface BgpPeersListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface ServicesGet200Response extends HttpResponse {
  status: "200";
  body: ServiceResourceOutput;
}

export interface ServicesGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'ServiceResource' update operation succeeded */
export interface ServicesCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: ServiceResourceOutput;
}

/** Resource 'ServiceResource' create operation succeeded */
export interface ServicesCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: ServiceResourceOutput;
}

export interface ServicesCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource deleted successfully. */
export interface ServicesDelete200Response extends HttpResponse {
  status: "200";
}

/** Resource does not exist. */
export interface ServicesDelete204Response extends HttpResponse {
  status: "204";
}

export interface ServicesDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface ServicesList200Response extends HttpResponse {
  status: "200";
  body: ServiceResourceListResultOutput;
}

export interface ServicesListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
