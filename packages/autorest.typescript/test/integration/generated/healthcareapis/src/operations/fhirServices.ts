import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { FhirServices } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { HealthCareApisClient } from "../healthCareApisClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  FhirService,
  FhirServicesListByWorkspaceNextOptionalParams,
  FhirServicesListByWorkspaceOptionalParams,
  FhirServicesListByWorkspaceResponse,
  FhirServicesGetOptionalParams,
  FhirServicesGetResponse,
  FhirServicesCreateOrUpdateOptionalParams,
  FhirServicesCreateOrUpdateResponse,
  FhirServicePatchResource,
  FhirServicesUpdateOptionalParams,
  FhirServicesUpdateResponse,
  FhirServicesDeleteOptionalParams,
  FhirServicesListByWorkspaceNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing FhirServices operations. */
export class FhirServicesImpl implements FhirServices {
  private readonly client: HealthCareApisClient;

  /**
   * Initialize a new instance of the class FhirServices class.
   * @param client Reference to the service client
   */
  constructor(client: HealthCareApisClient) {
    this.client = client;
  }

  /**
   * Lists all FHIR Services for the given workspace
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param options The options parameters.
   */
  public listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: FhirServicesListByWorkspaceOptionalParams,
  ): PagedAsyncIterableIterator<FhirService> {
    const iter = this.listByWorkspacePagingAll(
      resourceGroupName,
      workspaceName,
      options,
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
          settings,
        );
      },
    };
  }

  private async *listByWorkspacePagingPage(
    resourceGroupName: string,
    workspaceName: string,
    options?: FhirServicesListByWorkspaceOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<FhirService[]> {
    let result: FhirServicesListByWorkspaceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByWorkspace(
        resourceGroupName,
        workspaceName,
        options,
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
        options,
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
    options?: FhirServicesListByWorkspaceOptionalParams,
  ): AsyncIterableIterator<FhirService> {
    for await (const page of this.listByWorkspacePagingPage(
      resourceGroupName,
      workspaceName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists all FHIR Services for the given workspace
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param options The options parameters.
   */
  private _listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: FhirServicesListByWorkspaceOptionalParams,
  ): Promise<FhirServicesListByWorkspaceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      listByWorkspaceOperationSpec,
    );
  }

  /**
   * Gets the properties of the specified FHIR Service.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param fhirServiceName The name of FHIR Service resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    fhirServiceName: string,
    options?: FhirServicesGetOptionalParams,
  ): Promise<FhirServicesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, fhirServiceName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates a FHIR Service resource with the specified parameters.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param fhirServiceName The name of FHIR Service resource.
   * @param fhirservice The parameters for creating or updating a Fhir Service resource.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    fhirServiceName: string,
    fhirservice: FhirService,
    options?: FhirServicesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<FhirServicesCreateOrUpdateResponse>,
      FhirServicesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<FhirServicesCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        workspaceName,
        fhirServiceName,
        fhirservice,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      FhirServicesCreateOrUpdateResponse,
      OperationState<FhirServicesCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a FHIR Service resource with the specified parameters.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param fhirServiceName The name of FHIR Service resource.
   * @param fhirservice The parameters for creating or updating a Fhir Service resource.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    fhirServiceName: string,
    fhirservice: FhirService,
    options?: FhirServicesCreateOrUpdateOptionalParams,
  ): Promise<FhirServicesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      workspaceName,
      fhirServiceName,
      fhirservice,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Patch FHIR Service details.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param fhirServiceName The name of FHIR Service resource.
   * @param workspaceName The name of workspace resource.
   * @param fhirservicePatchResource The parameters for updating a Fhir Service.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    fhirServiceName: string,
    workspaceName: string,
    fhirservicePatchResource: FhirServicePatchResource,
    options?: FhirServicesUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<FhirServicesUpdateResponse>,
      FhirServicesUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<FhirServicesUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        fhirServiceName,
        workspaceName,
        fhirservicePatchResource,
        options,
      },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      FhirServicesUpdateResponse,
      OperationState<FhirServicesUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Patch FHIR Service details.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param fhirServiceName The name of FHIR Service resource.
   * @param workspaceName The name of workspace resource.
   * @param fhirservicePatchResource The parameters for updating a Fhir Service.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    fhirServiceName: string,
    workspaceName: string,
    fhirservicePatchResource: FhirServicePatchResource,
    options?: FhirServicesUpdateOptionalParams,
  ): Promise<FhirServicesUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      fhirServiceName,
      workspaceName,
      fhirservicePatchResource,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a FHIR Service.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param fhirServiceName The name of FHIR Service resource.
   * @param workspaceName The name of workspace resource.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    fhirServiceName: string,
    workspaceName: string,
    options?: FhirServicesDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, fhirServiceName, workspaceName, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes a FHIR Service.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param fhirServiceName The name of FHIR Service resource.
   * @param workspaceName The name of workspace resource.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    fhirServiceName: string,
    workspaceName: string,
    options?: FhirServicesDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      fhirServiceName,
      workspaceName,
      options,
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
    options?: FhirServicesListByWorkspaceNextOptionalParams,
  ): Promise<FhirServicesListByWorkspaceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, nextLink, options },
      listByWorkspaceNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByWorkspaceOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/fhirservices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FhirServiceCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorDetails,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/fhirservices/{fhirServiceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FhirService,
    },
    default: {
      bodyMapper: Mappers.ErrorDetails,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.fhirServiceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/fhirservices/{fhirServiceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.FhirService,
    },
    201: {
      bodyMapper: Mappers.FhirService,
    },
    202: {
      bodyMapper: Mappers.FhirService,
    },
    204: {
      bodyMapper: Mappers.FhirService,
    },
    default: {
      bodyMapper: Mappers.ErrorDetails,
    },
  },
  requestBody: Parameters.fhirservice,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.fhirServiceName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/fhirservices/{fhirServiceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.FhirService,
    },
    201: {
      bodyMapper: Mappers.FhirService,
    },
    202: {
      bodyMapper: Mappers.FhirService,
    },
    204: {
      bodyMapper: Mappers.FhirService,
    },
    default: {
      bodyMapper: Mappers.ErrorDetails,
    },
  },
  requestBody: Parameters.fhirservicePatchResource,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.fhirServiceName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/workspaces/{workspaceName}/fhirservices/{fhirServiceName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.fhirServiceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByWorkspaceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FhirServiceCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorDetails,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.workspaceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
