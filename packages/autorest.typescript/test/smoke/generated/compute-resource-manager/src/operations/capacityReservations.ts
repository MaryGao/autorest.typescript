/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { CapacityReservations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClient } from "../computeManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  CapacityReservation,
  CapacityReservationsListByCapacityReservationGroupNextOptionalParams,
  CapacityReservationsListByCapacityReservationGroupOptionalParams,
  CapacityReservationsListByCapacityReservationGroupResponse,
  CapacityReservationsCreateOrUpdateOptionalParams,
  CapacityReservationsCreateOrUpdateResponse,
  CapacityReservationUpdate,
  CapacityReservationsUpdateOptionalParams,
  CapacityReservationsUpdateResponse,
  CapacityReservationsDeleteOptionalParams,
  CapacityReservationsGetOptionalParams,
  CapacityReservationsGetResponse,
  CapacityReservationsListByCapacityReservationGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing CapacityReservations operations. */
export class CapacityReservationsImpl implements CapacityReservations {
  private readonly client: ComputeManagementClient;

  /**
   * Initialize a new instance of the class CapacityReservations class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClient) {
    this.client = client;
  }

  /**
   * Lists all of the capacity reservations in the specified capacity reservation group. Use the nextLink
   * property in the response to get the next page of capacity reservations.
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param options The options parameters.
   */
  public listByCapacityReservationGroup(
    resourceGroupName: string,
    capacityReservationGroupName: string,
    options?: CapacityReservationsListByCapacityReservationGroupOptionalParams
  ): PagedAsyncIterableIterator<CapacityReservation> {
    const iter = this.listByCapacityReservationGroupPagingAll(
      resourceGroupName,
      capacityReservationGroupName,
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
        return this.listByCapacityReservationGroupPagingPage(
          resourceGroupName,
          capacityReservationGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByCapacityReservationGroupPagingPage(
    resourceGroupName: string,
    capacityReservationGroupName: string,
    options?: CapacityReservationsListByCapacityReservationGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<CapacityReservation[]> {
    let result: CapacityReservationsListByCapacityReservationGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByCapacityReservationGroup(
        resourceGroupName,
        capacityReservationGroupName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByCapacityReservationGroupNext(
        resourceGroupName,
        capacityReservationGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByCapacityReservationGroupPagingAll(
    resourceGroupName: string,
    capacityReservationGroupName: string,
    options?: CapacityReservationsListByCapacityReservationGroupOptionalParams
  ): AsyncIterableIterator<CapacityReservation> {
    for await (const page of this.listByCapacityReservationGroupPagingPage(
      resourceGroupName,
      capacityReservationGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * The operation to create or update a capacity reservation. Please note some properties can be set
   * only during capacity reservation creation. Please refer to https://aka.ms/CapacityReservation for
   * more details.
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param capacityReservationName The name of the capacity reservation.
   * @param parameters Parameters supplied to the Create capacity reservation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    capacityReservationGroupName: string,
    capacityReservationName: string,
    parameters: CapacityReservation,
    options?: CapacityReservationsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<CapacityReservationsCreateOrUpdateResponse>,
      CapacityReservationsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<CapacityReservationsCreateOrUpdateResponse> => {
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
        capacityReservationGroupName,
        capacityReservationName,
        parameters,
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
   * The operation to create or update a capacity reservation. Please note some properties can be set
   * only during capacity reservation creation. Please refer to https://aka.ms/CapacityReservation for
   * more details.
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param capacityReservationName The name of the capacity reservation.
   * @param parameters Parameters supplied to the Create capacity reservation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    capacityReservationGroupName: string,
    capacityReservationName: string,
    parameters: CapacityReservation,
    options?: CapacityReservationsCreateOrUpdateOptionalParams
  ): Promise<CapacityReservationsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      capacityReservationGroupName,
      capacityReservationName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to update a capacity reservation.
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param capacityReservationName The name of the capacity reservation.
   * @param parameters Parameters supplied to the Update capacity reservation operation.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    capacityReservationGroupName: string,
    capacityReservationName: string,
    parameters: CapacityReservationUpdate,
    options?: CapacityReservationsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<CapacityReservationsUpdateResponse>,
      CapacityReservationsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<CapacityReservationsUpdateResponse> => {
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
        capacityReservationGroupName,
        capacityReservationName,
        parameters,
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
   * The operation to update a capacity reservation.
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param capacityReservationName The name of the capacity reservation.
   * @param parameters Parameters supplied to the Update capacity reservation operation.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    capacityReservationGroupName: string,
    capacityReservationName: string,
    parameters: CapacityReservationUpdate,
    options?: CapacityReservationsUpdateOptionalParams
  ): Promise<CapacityReservationsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      capacityReservationGroupName,
      capacityReservationName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to delete a capacity reservation. This operation is allowed only when all the
   * associated resources are disassociated from the capacity reservation. Please refer to
   * https://aka.ms/CapacityReservation for more details.
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param capacityReservationName The name of the capacity reservation.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    capacityReservationGroupName: string,
    capacityReservationName: string,
    options?: CapacityReservationsDeleteOptionalParams
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
        capacityReservationGroupName,
        capacityReservationName,
        options
      },
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
   * The operation to delete a capacity reservation. This operation is allowed only when all the
   * associated resources are disassociated from the capacity reservation. Please refer to
   * https://aka.ms/CapacityReservation for more details.
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param capacityReservationName The name of the capacity reservation.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    capacityReservationGroupName: string,
    capacityReservationName: string,
    options?: CapacityReservationsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      capacityReservationGroupName,
      capacityReservationName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation that retrieves information about the capacity reservation.
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param capacityReservationName The name of the capacity reservation.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    capacityReservationGroupName: string,
    capacityReservationName: string,
    options?: CapacityReservationsGetOptionalParams
  ): Promise<CapacityReservationsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        capacityReservationGroupName,
        capacityReservationName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Lists all of the capacity reservations in the specified capacity reservation group. Use the nextLink
   * property in the response to get the next page of capacity reservations.
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param options The options parameters.
   */
  private _listByCapacityReservationGroup(
    resourceGroupName: string,
    capacityReservationGroupName: string,
    options?: CapacityReservationsListByCapacityReservationGroupOptionalParams
  ): Promise<CapacityReservationsListByCapacityReservationGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, capacityReservationGroupName, options },
      listByCapacityReservationGroupOperationSpec
    );
  }

  /**
   * ListByCapacityReservationGroupNext
   * @param resourceGroupName The name of the resource group.
   * @param capacityReservationGroupName The name of the capacity reservation group.
   * @param nextLink The nextLink from the previous successful call to the ListByCapacityReservationGroup
   *                 method.
   * @param options The options parameters.
   */
  private _listByCapacityReservationGroupNext(
    resourceGroupName: string,
    capacityReservationGroupName: string,
    nextLink: string,
    options?: CapacityReservationsListByCapacityReservationGroupNextOptionalParams
  ): Promise<CapacityReservationsListByCapacityReservationGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, capacityReservationGroupName, nextLink, options },
      listByCapacityReservationGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups/{capacityReservationGroupName}/capacityReservations/{capacityReservationName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.CapacityReservation
    },
    201: {
      bodyMapper: Mappers.CapacityReservation
    },
    202: {
      bodyMapper: Mappers.CapacityReservation
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters26,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.capacityReservationGroupName,
    Parameters.capacityReservationName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups/{capacityReservationGroupName}/capacityReservations/{capacityReservationName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.CapacityReservation
    },
    201: {
      bodyMapper: Mappers.CapacityReservation
    },
    202: {
      bodyMapper: Mappers.CapacityReservation
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters27,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.capacityReservationGroupName,
    Parameters.capacityReservationName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups/{capacityReservationGroupName}/capacityReservations/{capacityReservationName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.capacityReservationGroupName,
    Parameters.capacityReservationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups/{capacityReservationGroupName}/capacityReservations/{capacityReservationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CapacityReservation
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand6],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.capacityReservationGroupName,
    Parameters.capacityReservationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByCapacityReservationGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/capacityReservationGroups/{capacityReservationGroupName}/capacityReservations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CapacityReservationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.capacityReservationGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByCapacityReservationGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CapacityReservationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.capacityReservationGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
