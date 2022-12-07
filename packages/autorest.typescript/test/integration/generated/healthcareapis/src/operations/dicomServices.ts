import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { DicomServices } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { HealthCareApisClient } from "../healthCareApisClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  DicomService,
  DicomServicesListByWorkspaceNextOptionalParams,
  DicomServicesListByWorkspaceOptionalParams,
  DicomServicesListByWorkspaceResponse,
  DicomServicesGetOptionalParams,
  DicomServicesGetResponse,
  DicomServicesCreateOrUpdateOptionalParams,
  DicomServicesCreateOrUpdateResponse,
  DicomServicePatchResource,
  DicomServicesUpdateOptionalParams,
  DicomServicesUpdateResponse,
  DicomServicesDeleteOptionalParams,
  DicomServicesListByWorkspaceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DicomServices operations. */
export class DicomServicesImpl implements DicomServices {
  private readonly client: HealthCareApisClient;

  /**
   * Initialize a new instance of the class DicomServices class.
   * @param client Reference to the service client
   */
  constructor(client: HealthCareApisClient) {
    this.client = client;
  }

  /**
   * Lists all DICOM Services for the given workspace
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param options The options parameters.
   */
  public listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: DicomServicesListByWorkspaceOptionalParams
  ): PagedAsyncIterableIterator<DicomService> {
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
    options?: DicomServicesListByWorkspaceOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DicomService[]> {
    let result: DicomServicesListByWorkspaceResponse;
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
    options?: DicomServicesListByWorkspaceOptionalParams
  ): AsyncIterableIterator<DicomService> {
    for await (const page of this.listByWorkspacePagingPage(
      resourceGroupName,
      workspaceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all DICOM Services for the given workspace
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param options The options parameters.
   */
  private _listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: DicomServicesListByWorkspaceOptionalParams
  ): Promise<DicomServicesListByWorkspaceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      listByWorkspaceOperationSpec
    );
  }

  /**
   * Gets the properties of the specified DICOM Service.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param dicomServiceName The name of DICOM Service resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    dicomServiceName: string,
    options?: DicomServicesGetOptionalParams
  ): Promise<DicomServicesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, dicomServiceName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a DICOM Service resource with the specified parameters.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param dicomServiceName The name of DICOM Service resource.
   * @param dicomservice The parameters for creating or updating a Dicom Service resource.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    dicomServiceName: string,
    dicomservice: DicomService,
    options?: DicomServicesCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<DicomServicesCreateOrUpdateResponse>,
      DicomServicesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DicomServicesCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
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

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        workspaceName,
        dicomServiceName,
        dicomservice,
        options
      },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      DicomServicesCreateOrUpdateResponse,
      OperationState<DicomServicesCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });

    return poller;
  }

  /**
   * Creates or updates a DICOM Service resource with the specified parameters.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param dicomServiceName The name of DICOM Service resource.
   * @param dicomservice The parameters for creating or updating a Dicom Service resource.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    dicomServiceName: string,
    dicomservice: DicomService,
    options?: DicomServicesCreateOrUpdateOptionalParams
  ): Promise<DicomServicesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      workspaceName,
      dicomServiceName,
      dicomservice,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Patch DICOM Service details.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param dicomServiceName The name of DICOM Service resource.
   * @param workspaceName The name of workspace resource.
   * @param dicomservicePatchResource The parameters for updating a Dicom Service.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    dicomServiceName: string,
    workspaceName: string,
    dicomservicePatchResource: DicomServicePatchResource,
    options?: DicomServicesUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<DicomServicesUpdateResponse>,
      DicomServicesUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DicomServicesUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
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

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        dicomServiceName,
        workspaceName,
        dicomservicePatchResource,
        options
      },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      DicomServicesUpdateResponse,
      OperationState<DicomServicesUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });

    return poller;
  }

  /**
   * Patch DICOM Service details.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param dicomServiceName The name of DICOM Service resource.
   * @param workspaceName The name of workspace resource.
   * @param dicomservicePatchResource The parameters for updating a Dicom Service.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    dicomServiceName: string,
    workspaceName: string,
    dicomservicePatchResource: DicomServicePatchResource,
    options?: DicomServicesUpdateOptionalParams
  ): Promise<DicomServicesUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      dicomServiceName,
      workspaceName,
      dicomservicePatchResource,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a DICOM Service.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param dicomServiceName The name of DICOM Service resource.
   * @param workspaceName The name of workspace resource.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    dicomServiceName: string,
    workspaceName: string,
    options?: DicomServicesDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
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

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, dicomServiceName, workspaceName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });

    return poller;
  }

  /**
   * Deletes a DICOM Service.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param dicomServiceName The name of DICOM Service resource.
   * @param workspaceName The name of workspace resource.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    dicomServiceName: string,
    workspaceName: string,
    options?: DicomServicesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      dicomServiceName,
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
    options?: DicomServicesListByWorkspaceNextOptionalParams
  ): Promise<DicomServicesListByWorkspaceNextResponse> {
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/dicomservices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DicomServiceCollection
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/dicomservices/{dicomServiceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DicomService
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
    Parameters.dicomServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/dicomservices/{dicomServiceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DicomService
    },
    201: {
      bodyMapper: Mappers.DicomService
    },
    202: {
      bodyMapper: Mappers.DicomService
    },
    204: {
      bodyMapper: Mappers.DicomService
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  requestBody: Parameters.dicomservice,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.dicomServiceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/dicomservices/{dicomServiceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DicomService
    },
    201: {
      bodyMapper: Mappers.DicomService
    },
    202: {
      bodyMapper: Mappers.DicomService
    },
    204: {
      bodyMapper: Mappers.DicomService
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  requestBody: Parameters.dicomservicePatchResource,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.dicomServiceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/dicomservices/{dicomServiceName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
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
    Parameters.dicomServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByWorkspaceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DicomServiceCollection
    },
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
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
