/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  MhsmPrivateEndpointConnection,
  MhsmPrivateEndpointConnectionsListByResourceOptionalParams,
  MhsmPrivateEndpointConnectionsGetOptionalParams,
  MhsmPrivateEndpointConnectionsGetResponse,
  MhsmPrivateEndpointConnectionsPutOptionalParams,
  MhsmPrivateEndpointConnectionsPutResponse,
  MhsmPrivateEndpointConnectionsDeleteOptionalParams,
  MhsmPrivateEndpointConnectionsDeleteResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a MhsmPrivateEndpointConnections. */
export interface MhsmPrivateEndpointConnections {
  /**
   * The List operation gets information about the private endpoint connections associated with the
   * managed HSM Pool.
   * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
   * @param name Name of the managed HSM Pool
   * @param options The options parameters.
   */
  listByResource(
    resourceGroupName: string,
    name: string,
    options?: MhsmPrivateEndpointConnectionsListByResourceOptionalParams,
  ): PagedAsyncIterableIterator<MhsmPrivateEndpointConnection>;
  /**
   * Gets the specified private endpoint connection associated with the managed HSM Pool.
   * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
   * @param name Name of the managed HSM Pool
   * @param privateEndpointConnectionName Name of the private endpoint connection associated with the
   *                                      managed hsm pool.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    name: string,
    privateEndpointConnectionName: string,
    options?: MhsmPrivateEndpointConnectionsGetOptionalParams,
  ): Promise<MhsmPrivateEndpointConnectionsGetResponse>;
  /**
   * Updates the specified private endpoint connection associated with the managed hsm pool.
   * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
   * @param name Name of the managed HSM Pool
   * @param privateEndpointConnectionName Name of the private endpoint connection associated with the
   *                                      managed hsm pool.
   * @param properties The intended state of private endpoint connection.
   * @param options The options parameters.
   */
  put(
    resourceGroupName: string,
    name: string,
    privateEndpointConnectionName: string,
    properties: MhsmPrivateEndpointConnection,
    options?: MhsmPrivateEndpointConnectionsPutOptionalParams,
  ): Promise<MhsmPrivateEndpointConnectionsPutResponse>;
  /**
   * Deletes the specified private endpoint connection associated with the managed hsm pool.
   * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
   * @param name Name of the managed HSM Pool
   * @param privateEndpointConnectionName Name of the private endpoint connection associated with the
   *                                      managed hsm pool.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    name: string,
    privateEndpointConnectionName: string,
    options?: MhsmPrivateEndpointConnectionsDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<MhsmPrivateEndpointConnectionsDeleteResponse>,
      MhsmPrivateEndpointConnectionsDeleteResponse
    >
  >;
  /**
   * Deletes the specified private endpoint connection associated with the managed hsm pool.
   * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
   * @param name Name of the managed HSM Pool
   * @param privateEndpointConnectionName Name of the private endpoint connection associated with the
   *                                      managed hsm pool.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    name: string,
    privateEndpointConnectionName: string,
    options?: MhsmPrivateEndpointConnectionsDeleteOptionalParams,
  ): Promise<MhsmPrivateEndpointConnectionsDeleteResponse>;
}
