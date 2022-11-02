import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { IotConnectors } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { HealthCareApisClient } from "../healthCareApisClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  IotConnector,
  IotConnectorsListByWorkspaceNextOptionalParams,
  IotConnectorsListByWorkspaceOptionalParams,
  IotConnectorsListByWorkspaceResponse,
  IotConnectorsGetOptionalParams,
  IotConnectorsGetResponse,
  IotConnectorsCreateOrUpdateOptionalParams,
  IotConnectorsCreateOrUpdateResponse,
  IotConnectorPatchResource,
  IotConnectorsUpdateOptionalParams,
  IotConnectorsUpdateResponse,
  IotConnectorsDeleteOptionalParams,
  IotConnectorsListByWorkspaceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing IotConnectors operations. */
export class IotConnectorsImpl implements IotConnectors {
  private readonly client: HealthCareApisClient;

  /**
   * Initialize a new instance of the class IotConnectors class.
   * @param client Reference to the service client
   */
  constructor(client: HealthCareApisClient) {
    this.client = client;
  }

  /**
   * Lists all IoT Connectors for the given workspace
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param options The options parameters.
   */
  public listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: IotConnectorsListByWorkspaceOptionalParams
  ): PagedAsyncIterableIterator<IotConnector> {
    const iter = this.listByWorkspacePagingAll(
      resourceGroupName,
      workspaceName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByWorkspacePagingPage(
          resourceGroupName,
          workspaceName,
          options,
          settings
        );
      }
    };
  }

  private async *listByWorkspacePagingPage(
    resourceGroupName: string,
    workspaceName: string,
    options?: IotConnectorsListByWorkspaceOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<IotConnector[]> {
    let result: IotConnectorsListByWorkspaceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByWorkspace(
        resourceGroupName,
        workspaceName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByWorkspaceNext(
        resourceGroupName,
        workspaceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByWorkspacePagingAll(
    resourceGroupName: string,
    workspaceName: string,
    options?: IotConnectorsListByWorkspaceOptionalParams
  ): AsyncIterableIterator<IotConnector> {
    for await (const page of this.listByWorkspacePagingPage(
      resourceGroupName,
      workspaceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all IoT Connectors for the given workspace
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param options The options parameters.
   */
  private _listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: IotConnectorsListByWorkspaceOptionalParams
  ): Promise<IotConnectorsListByWorkspaceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      listByWorkspaceOperationSpec
    );
  }

  /**
   * Gets the properties of the specified IoT Connector.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param iotConnectorName The name of IoT Connector resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    iotConnectorName: string,
    options?: IotConnectorsGetOptionalParams
  ): Promise<IotConnectorsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, iotConnectorName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates an IoT Connector resource with the specified parameters.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param iotConnectorName The name of IoT Connector resource.
   * @param iotConnector The parameters for creating or updating an IoT Connectors resource.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    iotConnectorName: string,
    iotConnector: IotConnector,
    options?: IotConnectorsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<IotConnectorsCreateOrUpdateResponse>,
      IotConnectorsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<IotConnectorsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        workspaceName,
        iotConnectorName,
        iotConnector,
        options
      },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates an IoT Connector resource with the specified parameters.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param iotConnectorName The name of IoT Connector resource.
   * @param iotConnector The parameters for creating or updating an IoT Connectors resource.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    iotConnectorName: string,
    iotConnector: IotConnector,
    options?: IotConnectorsCreateOrUpdateOptionalParams
  ): Promise<IotConnectorsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      workspaceName,
      iotConnectorName,
      iotConnector,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Patch an IoT Connector.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param iotConnectorName The name of IoT Connector resource.
   * @param workspaceName The name of workspace resource.
   * @param iotConnectorPatchResource The parameters for updating an IoT Connector.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    iotConnectorName: string,
    workspaceName: string,
    iotConnectorPatchResource: IotConnectorPatchResource,
    options?: IotConnectorsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<IotConnectorsUpdateResponse>,
      IotConnectorsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<IotConnectorsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        iotConnectorName,
        workspaceName,
        iotConnectorPatchResource,
        options
      },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Patch an IoT Connector.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param iotConnectorName The name of IoT Connector resource.
   * @param workspaceName The name of workspace resource.
   * @param iotConnectorPatchResource The parameters for updating an IoT Connector.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    iotConnectorName: string,
    workspaceName: string,
    iotConnectorPatchResource: IotConnectorPatchResource,
    options?: IotConnectorsUpdateOptionalParams
  ): Promise<IotConnectorsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      iotConnectorName,
      workspaceName,
      iotConnectorPatchResource,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes an IoT Connector.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param iotConnectorName The name of IoT Connector resource.
   * @param workspaceName The name of workspace resource.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    iotConnectorName: string,
    workspaceName: string,
    options?: IotConnectorsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, iotConnectorName, workspaceName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes an IoT Connector.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param iotConnectorName The name of IoT Connector resource.
   * @param workspaceName The name of workspace resource.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    iotConnectorName: string,
    workspaceName: string,
    options?: IotConnectorsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      iotConnectorName,
      workspaceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByWorkspaceNext
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param nextLink The nextLink from the previous successful call to the ListByWorkspace method.
   * @param options The options parameters.
   */
  private _listByWorkspaceNext(
    resourceGroupName: string,
    workspaceName: string,
    nextLink: string,
    options?: IotConnectorsListByWorkspaceNextOptionalParams
  ): Promise<IotConnectorsListByWorkspaceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, nextLink, options },
      listByWorkspaceNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByWorkspaceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/iotconnectors",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IotConnectorCollection
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/iotconnectors/{iotConnectorName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IotConnector
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.iotConnectorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/iotconnectors/{iotConnectorName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.IotConnector
    },
    201: {
      bodyMapper: Mappers.IotConnector
    },
    202: {
      bodyMapper: Mappers.IotConnector
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  requestBody: Parameters.iotConnector,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.iotConnectorName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/iotconnectors/{iotConnectorName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.IotConnector
    },
    201: {
      bodyMapper: Mappers.IotConnector
    },
    202: {
      bodyMapper: Mappers.IotConnector
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  requestBody: Parameters.iotConnectorPatchResource,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.iotConnectorName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/iotconnectors/{iotConnectorName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.iotConnectorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByWorkspaceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IotConnectorCollection
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
