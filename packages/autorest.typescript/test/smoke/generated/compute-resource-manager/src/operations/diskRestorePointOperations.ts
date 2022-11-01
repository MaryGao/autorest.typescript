/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { DiskRestorePointOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClient } from "../computeManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  DiskRestorePoint,
  DiskRestorePointListByRestorePointNextOptionalParams,
  DiskRestorePointListByRestorePointOptionalParams,
  DiskRestorePointListByRestorePointResponse,
  DiskRestorePointGetOptionalParams,
  DiskRestorePointGetResponse,
  GrantAccessData,
  DiskRestorePointGrantAccessOptionalParams,
  DiskRestorePointGrantAccessResponse,
  DiskRestorePointRevokeAccessOptionalParams,
  DiskRestorePointListByRestorePointNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DiskRestorePointOperations operations. */
export class DiskRestorePointOperationsImpl
  implements DiskRestorePointOperations {
  private readonly client: ComputeManagementClient;

  /**
   * Initialize a new instance of the class DiskRestorePointOperations class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClient) {
    this.client = client;
  }

  /**
   * Lists diskRestorePoints under a vmRestorePoint.
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the restore point collection that the disk restore
   *                                   point belongs.
   * @param vmRestorePointName The name of the vm restore point that the disk disk restore point belongs.
   * @param options The options parameters.
   */
  public listByRestorePoint(
    resourceGroupName: string,
    restorePointCollectionName: string,
    vmRestorePointName: string,
    options?: DiskRestorePointListByRestorePointOptionalParams
  ): PagedAsyncIterableIterator<DiskRestorePoint> {
    const iter = this.listByRestorePointPagingAll(
      resourceGroupName,
      restorePointCollectionName,
      vmRestorePointName,
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
        return this.listByRestorePointPagingPage(
          resourceGroupName,
          restorePointCollectionName,
          vmRestorePointName,
          options,
          settings
        );
      }
    };
  }

  private async *listByRestorePointPagingPage(
    resourceGroupName: string,
    restorePointCollectionName: string,
    vmRestorePointName: string,
    options?: DiskRestorePointListByRestorePointOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DiskRestorePoint[]> {
    let result: DiskRestorePointListByRestorePointResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByRestorePoint(
        resourceGroupName,
        restorePointCollectionName,
        vmRestorePointName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByRestorePointNext(
        resourceGroupName,
        restorePointCollectionName,
        vmRestorePointName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByRestorePointPagingAll(
    resourceGroupName: string,
    restorePointCollectionName: string,
    vmRestorePointName: string,
    options?: DiskRestorePointListByRestorePointOptionalParams
  ): AsyncIterableIterator<DiskRestorePoint> {
    for await (const page of this.listByRestorePointPagingPage(
      resourceGroupName,
      restorePointCollectionName,
      vmRestorePointName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get disk restorePoint resource
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the restore point collection that the disk restore
   *                                   point belongs.
   * @param vmRestorePointName The name of the vm restore point that the disk disk restore point belongs.
   * @param diskRestorePointName The name of the disk restore point created.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    restorePointCollectionName: string,
    vmRestorePointName: string,
    diskRestorePointName: string,
    options?: DiskRestorePointGetOptionalParams
  ): Promise<DiskRestorePointGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        restorePointCollectionName,
        vmRestorePointName,
        diskRestorePointName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Lists diskRestorePoints under a vmRestorePoint.
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the restore point collection that the disk restore
   *                                   point belongs.
   * @param vmRestorePointName The name of the vm restore point that the disk disk restore point belongs.
   * @param options The options parameters.
   */
  private _listByRestorePoint(
    resourceGroupName: string,
    restorePointCollectionName: string,
    vmRestorePointName: string,
    options?: DiskRestorePointListByRestorePointOptionalParams
  ): Promise<DiskRestorePointListByRestorePointResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        restorePointCollectionName,
        vmRestorePointName,
        options
      },
      listByRestorePointOperationSpec
    );
  }

  /**
   * Grants access to a diskRestorePoint.
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the restore point collection that the disk restore
   *                                   point belongs.
   * @param vmRestorePointName The name of the vm restore point that the disk disk restore point belongs.
   * @param diskRestorePointName The name of the disk restore point created.
   * @param grantAccessData Access data object supplied in the body of the get disk access operation.
   * @param options The options parameters.
   */
  async beginGrantAccess(
    resourceGroupName: string,
    restorePointCollectionName: string,
    vmRestorePointName: string,
    diskRestorePointName: string,
    grantAccessData: GrantAccessData,
    options?: DiskRestorePointGrantAccessOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DiskRestorePointGrantAccessResponse>,
      DiskRestorePointGrantAccessResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DiskRestorePointGrantAccessResponse> => {
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
        restorePointCollectionName,
        vmRestorePointName,
        diskRestorePointName,
        grantAccessData,
        options
      },
      grantAccessOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Grants access to a diskRestorePoint.
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the restore point collection that the disk restore
   *                                   point belongs.
   * @param vmRestorePointName The name of the vm restore point that the disk disk restore point belongs.
   * @param diskRestorePointName The name of the disk restore point created.
   * @param grantAccessData Access data object supplied in the body of the get disk access operation.
   * @param options The options parameters.
   */
  async beginGrantAccessAndWait(
    resourceGroupName: string,
    restorePointCollectionName: string,
    vmRestorePointName: string,
    diskRestorePointName: string,
    grantAccessData: GrantAccessData,
    options?: DiskRestorePointGrantAccessOptionalParams
  ): Promise<DiskRestorePointGrantAccessResponse> {
    const poller = await this.beginGrantAccess(
      resourceGroupName,
      restorePointCollectionName,
      vmRestorePointName,
      diskRestorePointName,
      grantAccessData,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Revokes access to a diskRestorePoint.
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the restore point collection that the disk restore
   *                                   point belongs.
   * @param vmRestorePointName The name of the vm restore point that the disk disk restore point belongs.
   * @param diskRestorePointName The name of the disk restore point created.
   * @param options The options parameters.
   */
  async beginRevokeAccess(
    resourceGroupName: string,
    restorePointCollectionName: string,
    vmRestorePointName: string,
    diskRestorePointName: string,
    options?: DiskRestorePointRevokeAccessOptionalParams
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
      {
        resourceGroupName,
        restorePointCollectionName,
        vmRestorePointName,
        diskRestorePointName,
        options
      },
      revokeAccessOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Revokes access to a diskRestorePoint.
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the restore point collection that the disk restore
   *                                   point belongs.
   * @param vmRestorePointName The name of the vm restore point that the disk disk restore point belongs.
   * @param diskRestorePointName The name of the disk restore point created.
   * @param options The options parameters.
   */
  async beginRevokeAccessAndWait(
    resourceGroupName: string,
    restorePointCollectionName: string,
    vmRestorePointName: string,
    diskRestorePointName: string,
    options?: DiskRestorePointRevokeAccessOptionalParams
  ): Promise<void> {
    const poller = await this.beginRevokeAccess(
      resourceGroupName,
      restorePointCollectionName,
      vmRestorePointName,
      diskRestorePointName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByRestorePointNext
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the restore point collection that the disk restore
   *                                   point belongs.
   * @param vmRestorePointName The name of the vm restore point that the disk disk restore point belongs.
   * @param nextLink The nextLink from the previous successful call to the ListByRestorePoint method.
   * @param options The options parameters.
   */
  private _listByRestorePointNext(
    resourceGroupName: string,
    restorePointCollectionName: string,
    vmRestorePointName: string,
    nextLink: string,
    options?: DiskRestorePointListByRestorePointNextOptionalParams
  ): Promise<DiskRestorePointListByRestorePointNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        restorePointCollectionName,
        vmRestorePointName,
        nextLink,
        options
      },
      listByRestorePointNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections/{restorePointCollectionName}/restorePoints/{vmRestorePointName}/diskRestorePoints/{diskRestorePointName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DiskRestorePoint
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.restorePointCollectionName,
    Parameters.vmRestorePointName,
    Parameters.diskRestorePointName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByRestorePointOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections/{restorePointCollectionName}/restorePoints/{vmRestorePointName}/diskRestorePoints",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DiskRestorePointList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.restorePointCollectionName,
    Parameters.vmRestorePointName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const grantAccessOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections/{restorePointCollectionName}/restorePoints/{vmRestorePointName}/diskRestorePoints/{diskRestorePointName}/beginGetAccess",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AccessUri
    },
    201: {
      bodyMapper: Mappers.AccessUri
    },
    202: {
      bodyMapper: Mappers.AccessUri
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.grantAccessData,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.restorePointCollectionName,
    Parameters.vmRestorePointName,
    Parameters.diskRestorePointName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const revokeAccessOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections/{restorePointCollectionName}/restorePoints/{vmRestorePointName}/diskRestorePoints/{diskRestorePointName}/endGetAccess",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.restorePointCollectionName,
    Parameters.vmRestorePointName,
    Parameters.diskRestorePointName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByRestorePointNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DiskRestorePointList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.restorePointCollectionName,
    Parameters.vmRestorePointName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
