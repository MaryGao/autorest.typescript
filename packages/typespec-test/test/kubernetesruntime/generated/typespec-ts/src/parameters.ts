// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RequestParameters } from "@azure-rest/core-client";
import {
  StorageClassResource,
  StorageClassResourceUpdate,
  LoadBalancer,
  BgpPeer,
  ServiceResource,
} from "./models.js";

export type StorageClassGetParameters = RequestParameters;

export interface StorageClassCreateOrUpdateBodyParam {
  /** Resource create parameters. */
  body: StorageClassResource;
}

export type StorageClassCreateOrUpdateParameters =
  StorageClassCreateOrUpdateBodyParam & RequestParameters;

export interface StorageClassUpdateBodyParam {
  /** The resource properties to be updated. */
  body: StorageClassResourceUpdate;
}

export type StorageClassUpdateParameters = StorageClassUpdateBodyParam &
  RequestParameters;
export type StorageClassDeleteParameters = RequestParameters;
export type StorageClassListParameters = RequestParameters;
export type OperationsListParameters = RequestParameters;
export type LoadBalancersGetParameters = RequestParameters;

export interface LoadBalancersCreateOrUpdateBodyParam {
  /** Resource create parameters. */
  body: LoadBalancer;
}

export type LoadBalancersCreateOrUpdateParameters =
  LoadBalancersCreateOrUpdateBodyParam & RequestParameters;
export type LoadBalancersDeleteParameters = RequestParameters;
export type LoadBalancersListParameters = RequestParameters;
export type BgpPeersGetParameters = RequestParameters;

export interface BgpPeersCreateOrUpdateBodyParam {
  /** Resource create parameters. */
  body: BgpPeer;
}

export type BgpPeersCreateOrUpdateParameters = BgpPeersCreateOrUpdateBodyParam &
  RequestParameters;
export type BgpPeersDeleteParameters = RequestParameters;
export type BgpPeersListParameters = RequestParameters;
export type ServicesGetParameters = RequestParameters;

export interface ServicesCreateOrUpdateBodyParam {
  /** Resource create parameters. */
  body: ServiceResource;
}

export type ServicesCreateOrUpdateParameters = ServicesCreateOrUpdateBodyParam &
  RequestParameters;
export type ServicesDeleteParameters = RequestParameters;
export type ServicesListParameters = RequestParameters;
