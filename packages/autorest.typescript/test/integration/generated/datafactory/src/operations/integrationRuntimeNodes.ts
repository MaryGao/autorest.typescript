import { IntegrationRuntimeNodes } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DataFactoryClient } from "../dataFactoryClient";
import {
  IntegrationRuntimeNodesGetOptionalParams,
  IntegrationRuntimeNodesGetResponse,
  IntegrationRuntimeNodesDeleteOptionalParams,
  UpdateIntegrationRuntimeNodeRequest,
  IntegrationRuntimeNodesUpdateOptionalParams,
  IntegrationRuntimeNodesUpdateResponse,
  IntegrationRuntimeNodesGetIpAddressOptionalParams,
  IntegrationRuntimeNodesGetIpAddressResponse,
} from "../models";

/** Class containing IntegrationRuntimeNodes operations. */
export class IntegrationRuntimeNodesImpl implements IntegrationRuntimeNodes {
  private readonly client: DataFactoryClient;

  /**
   * Initialize a new instance of the class IntegrationRuntimeNodes class.
   * @param client Reference to the service client
   */
  constructor(client: DataFactoryClient) {
    this.client = client;
  }

  /**
   * Gets a self-hosted integration runtime node.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param nodeName The integration runtime node name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    factoryName: string,
    integrationRuntimeName: string,
    nodeName: string,
    options?: IntegrationRuntimeNodesGetOptionalParams,
  ): Promise<IntegrationRuntimeNodesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        integrationRuntimeName,
        nodeName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Deletes a self-hosted integration runtime node.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param nodeName The integration runtime node name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    factoryName: string,
    integrationRuntimeName: string,
    nodeName: string,
    options?: IntegrationRuntimeNodesDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        integrationRuntimeName,
        nodeName,
        options,
      },
      deleteOperationSpec,
    );
  }

  /**
   * Updates a self-hosted integration runtime node.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param nodeName The integration runtime node name.
   * @param updateIntegrationRuntimeNodeRequest The parameters for updating an integration runtime node.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    factoryName: string,
    integrationRuntimeName: string,
    nodeName: string,
    updateIntegrationRuntimeNodeRequest: UpdateIntegrationRuntimeNodeRequest,
    options?: IntegrationRuntimeNodesUpdateOptionalParams,
  ): Promise<IntegrationRuntimeNodesUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        integrationRuntimeName,
        nodeName,
        updateIntegrationRuntimeNodeRequest,
        options,
      },
      updateOperationSpec,
    );
  }

  /**
   * Get the IP address of self-hosted integration runtime node.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param nodeName The integration runtime node name.
   * @param options The options parameters.
   */
  getIpAddress(
    resourceGroupName: string,
    factoryName: string,
    integrationRuntimeName: string,
    nodeName: string,
    options?: IntegrationRuntimeNodesGetIpAddressOptionalParams,
  ): Promise<IntegrationRuntimeNodesGetIpAddressResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        integrationRuntimeName,
        nodeName,
        options,
      },
      getIpAddressOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/nodes/{nodeName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SelfHostedIntegrationRuntimeNode,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.integrationRuntimeName,
    Parameters.nodeName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/nodes/{nodeName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.integrationRuntimeName,
    Parameters.nodeName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/nodes/{nodeName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.SelfHostedIntegrationRuntimeNode,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.updateIntegrationRuntimeNodeRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.integrationRuntimeName,
    Parameters.nodeName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getIpAddressOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/nodes/{nodeName}/ipAddress",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationRuntimeNodeIpAddress,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.integrationRuntimeName,
    Parameters.nodeName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
