/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Group } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SubscriptionIdApiVersionClient } from "../subscriptionIdApiVersionClient";
import {
  GroupGetSampleResourceGroupOptionalParams,
  GroupGetSampleResourceGroupResponse,
} from "../models";

/** Class containing Group operations. */
export class GroupImpl implements Group {
  private readonly client: SubscriptionIdApiVersionClient;

  /**
   * Initialize a new instance of the class Group class.
   * @param client Reference to the service client
   */
  constructor(client: SubscriptionIdApiVersionClient) {
    this.client = client;
  }

  /**
   * Provides a resouce group with name 'testgroup101' and location 'West US'.
   * @param resourceGroupName Resource Group name 'testgroup101'.
   * @param options The options parameters.
   */
  getSampleResourceGroup(
    resourceGroupName: string,
    options?: GroupGetSampleResourceGroupOptionalParams,
  ): Promise<GroupGetSampleResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      getSampleResourceGroupOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getSampleResourceGroupOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SampleResourceGroup,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
