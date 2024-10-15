// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  StorageClassGetParameters,
  StorageClassCreateOrUpdateParameters,
  StorageClassUpdateParameters,
  StorageClassDeleteParameters,
  StorageClassListParameters,
  OperationsListParameters,
  LoadBalancersGetParameters,
  LoadBalancersCreateOrUpdateParameters,
  LoadBalancersDeleteParameters,
  LoadBalancersListParameters,
  BgpPeersGetParameters,
  BgpPeersCreateOrUpdateParameters,
  BgpPeersDeleteParameters,
  BgpPeersListParameters,
  ServicesGetParameters,
  ServicesCreateOrUpdateParameters,
  ServicesDeleteParameters,
  ServicesListParameters,
} from "./parameters.js";
import {
  StorageClassGet200Response,
  StorageClassGetDefaultResponse,
  StorageClassCreateOrUpdate200Response,
  StorageClassCreateOrUpdate201Response,
  StorageClassCreateOrUpdateDefaultResponse,
  StorageClassUpdate200Response,
  StorageClassUpdate202Response,
  StorageClassUpdateDefaultResponse,
  StorageClassDelete202Response,
  StorageClassDelete204Response,
  StorageClassDeleteDefaultResponse,
  StorageClassList200Response,
  StorageClassListDefaultResponse,
  OperationsList200Response,
  OperationsListDefaultResponse,
  LoadBalancersGet200Response,
  LoadBalancersGetDefaultResponse,
  LoadBalancersCreateOrUpdate200Response,
  LoadBalancersCreateOrUpdate201Response,
  LoadBalancersCreateOrUpdateDefaultResponse,
  LoadBalancersDelete200Response,
  LoadBalancersDelete204Response,
  LoadBalancersDeleteDefaultResponse,
  LoadBalancersList200Response,
  LoadBalancersListDefaultResponse,
  BgpPeersGet200Response,
  BgpPeersGetDefaultResponse,
  BgpPeersCreateOrUpdate200Response,
  BgpPeersCreateOrUpdate201Response,
  BgpPeersCreateOrUpdateDefaultResponse,
  BgpPeersDelete200Response,
  BgpPeersDelete204Response,
  BgpPeersDeleteDefaultResponse,
  BgpPeersList200Response,
  BgpPeersListDefaultResponse,
  ServicesGet200Response,
  ServicesGetDefaultResponse,
  ServicesCreateOrUpdate200Response,
  ServicesCreateOrUpdate201Response,
  ServicesCreateOrUpdateDefaultResponse,
  ServicesDelete200Response,
  ServicesDelete204Response,
  ServicesDeleteDefaultResponse,
  ServicesList200Response,
  ServicesListDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface StorageClassGet {
  /** Get a StorageClassResource */
  get(
    options?: StorageClassGetParameters,
  ): StreamableMethod<
    StorageClassGet200Response | StorageClassGetDefaultResponse
  >;
  /** Create a StorageClassResource */
  put(
    options: StorageClassCreateOrUpdateParameters,
  ): StreamableMethod<
    | StorageClassCreateOrUpdate200Response
    | StorageClassCreateOrUpdate201Response
    | StorageClassCreateOrUpdateDefaultResponse
  >;
  /** Update a StorageClassResource */
  patch(
    options: StorageClassUpdateParameters,
  ): StreamableMethod<
    | StorageClassUpdate200Response
    | StorageClassUpdate202Response
    | StorageClassUpdateDefaultResponse
  >;
  /** Delete a StorageClassResource */
  delete(
    options?: StorageClassDeleteParameters,
  ): StreamableMethod<
    | StorageClassDelete202Response
    | StorageClassDelete204Response
    | StorageClassDeleteDefaultResponse
  >;
}

export interface StorageClassList {
  /** List StorageClassResource resources by parent */
  get(
    options?: StorageClassListParameters,
  ): StreamableMethod<
    StorageClassList200Response | StorageClassListDefaultResponse
  >;
}

export interface OperationsList {
  /** List the operations for the provider */
  get(
    options?: OperationsListParameters,
  ): StreamableMethod<
    OperationsList200Response | OperationsListDefaultResponse
  >;
}

export interface LoadBalancersGet {
  /** Get a LoadBalancer */
  get(
    options?: LoadBalancersGetParameters,
  ): StreamableMethod<
    LoadBalancersGet200Response | LoadBalancersGetDefaultResponse
  >;
  /** Create a LoadBalancer */
  put(
    options: LoadBalancersCreateOrUpdateParameters,
  ): StreamableMethod<
    | LoadBalancersCreateOrUpdate200Response
    | LoadBalancersCreateOrUpdate201Response
    | LoadBalancersCreateOrUpdateDefaultResponse
  >;
  /** Delete a LoadBalancer */
  delete(
    options?: LoadBalancersDeleteParameters,
  ): StreamableMethod<
    | LoadBalancersDelete200Response
    | LoadBalancersDelete204Response
    | LoadBalancersDeleteDefaultResponse
  >;
}

export interface LoadBalancersList {
  /** List LoadBalancer resources by parent */
  get(
    options?: LoadBalancersListParameters,
  ): StreamableMethod<
    LoadBalancersList200Response | LoadBalancersListDefaultResponse
  >;
}

export interface BgpPeersGet {
  /** Get a BgpPeer */
  get(
    options?: BgpPeersGetParameters,
  ): StreamableMethod<BgpPeersGet200Response | BgpPeersGetDefaultResponse>;
  /** Create a BgpPeer */
  put(
    options: BgpPeersCreateOrUpdateParameters,
  ): StreamableMethod<
    | BgpPeersCreateOrUpdate200Response
    | BgpPeersCreateOrUpdate201Response
    | BgpPeersCreateOrUpdateDefaultResponse
  >;
  /** Delete a BgpPeer */
  delete(
    options?: BgpPeersDeleteParameters,
  ): StreamableMethod<
    | BgpPeersDelete200Response
    | BgpPeersDelete204Response
    | BgpPeersDeleteDefaultResponse
  >;
}

export interface BgpPeersList {
  /** List BgpPeer resources by parent */
  get(
    options?: BgpPeersListParameters,
  ): StreamableMethod<BgpPeersList200Response | BgpPeersListDefaultResponse>;
}

export interface ServicesGet {
  /** Get a ServiceResource */
  get(
    options?: ServicesGetParameters,
  ): StreamableMethod<ServicesGet200Response | ServicesGetDefaultResponse>;
  /** Create a ServiceResource */
  put(
    options: ServicesCreateOrUpdateParameters,
  ): StreamableMethod<
    | ServicesCreateOrUpdate200Response
    | ServicesCreateOrUpdate201Response
    | ServicesCreateOrUpdateDefaultResponse
  >;
  /** Delete a ServiceResource */
  delete(
    options?: ServicesDeleteParameters,
  ): StreamableMethod<
    | ServicesDelete200Response
    | ServicesDelete204Response
    | ServicesDeleteDefaultResponse
  >;
}

export interface ServicesList {
  /** List ServiceResource resources by parent */
  get(
    options?: ServicesListParameters,
  ): StreamableMethod<ServicesList200Response | ServicesListDefaultResponse>;
}

export interface Routes {
  /** Resource for '/\{resourceUri\}/providers/Microsoft.KubernetesRuntime/storageClasses/\{storageClassName\}' has methods for the following verbs: get, put, patch, delete */
  (
    path: "/{resourceUri}/providers/Microsoft.KubernetesRuntime/storageClasses/{storageClassName}",
    resourceUri: string,
    storageClassName: string,
  ): StorageClassGet;
  /** Resource for '/\{resourceUri\}/providers/Microsoft.KubernetesRuntime/storageClasses' has methods for the following verbs: get */
  (
    path: "/{resourceUri}/providers/Microsoft.KubernetesRuntime/storageClasses",
    resourceUri: string,
  ): StorageClassList;
  /** Resource for '/providers/Microsoft.KubernetesRuntime/operations' has methods for the following verbs: get */
  (path: "/providers/Microsoft.KubernetesRuntime/operations"): OperationsList;
  /** Resource for '/\{resourceUri\}/providers/Microsoft.KubernetesRuntime/loadBalancers/\{loadBalancerName\}' has methods for the following verbs: get, put, delete */
  (
    path: "/{resourceUri}/providers/Microsoft.KubernetesRuntime/loadBalancers/{loadBalancerName}",
    resourceUri: string,
    loadBalancerName: string,
  ): LoadBalancersGet;
  /** Resource for '/\{resourceUri\}/providers/Microsoft.KubernetesRuntime/loadBalancers' has methods for the following verbs: get */
  (
    path: "/{resourceUri}/providers/Microsoft.KubernetesRuntime/loadBalancers",
    resourceUri: string,
  ): LoadBalancersList;
  /** Resource for '/\{resourceUri\}/providers/Microsoft.KubernetesRuntime/bgpPeers/\{bgpPeerName\}' has methods for the following verbs: get, put, delete */
  (
    path: "/{resourceUri}/providers/Microsoft.KubernetesRuntime/bgpPeers/{bgpPeerName}",
    resourceUri: string,
    bgpPeerName: string,
  ): BgpPeersGet;
  /** Resource for '/\{resourceUri\}/providers/Microsoft.KubernetesRuntime/bgpPeers' has methods for the following verbs: get */
  (
    path: "/{resourceUri}/providers/Microsoft.KubernetesRuntime/bgpPeers",
    resourceUri: string,
  ): BgpPeersList;
  /** Resource for '/\{resourceUri\}/providers/Microsoft.KubernetesRuntime/services/\{serviceName\}' has methods for the following verbs: get, put, delete */
  (
    path: "/{resourceUri}/providers/Microsoft.KubernetesRuntime/services/{serviceName}",
    resourceUri: string,
    serviceName: string,
  ): ServicesGet;
  /** Resource for '/\{resourceUri\}/providers/Microsoft.KubernetesRuntime/services' has methods for the following verbs: get */
  (
    path: "/{resourceUri}/providers/Microsoft.KubernetesRuntime/services",
    resourceUri: string,
  ): ServicesList;
}

export type KubernetesRuntimeClient = Client & {
  path: Routes;
};
