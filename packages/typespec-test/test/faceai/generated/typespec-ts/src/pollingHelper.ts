// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Client, HttpResponse } from "@azure-rest/core-client";
import {
  CreateHttpPollerOptions,
  LongRunningOperation,
  LroResponse,
  OperationState,
  SimplePollerLike,
  createHttpPoller,
} from "@azure/core-lro";
import {
  TrainLargeFaceList202Response,
  TrainLargeFaceListLogicalResponse,
  TrainLargeFaceListDefaultResponse,
  TrainPersonGroup202Response,
  TrainPersonGroupLogicalResponse,
  TrainPersonGroupDefaultResponse,
  TrainLargePersonGroup202Response,
  TrainLargePersonGroupLogicalResponse,
  TrainLargePersonGroupDefaultResponse,
  CreatePerson202Response,
  CreatePersonLogicalResponse,
  CreatePersonDefaultResponse,
  DeletePerson202Response,
  DeletePersonLogicalResponse,
  DeletePersonDefaultResponse,
  AddPersonFace202Response,
  AddPersonFaceLogicalResponse,
  AddPersonFaceDefaultResponse,
  DeletePersonFace202Response,
  DeletePersonFaceLogicalResponse,
  DeletePersonFaceDefaultResponse,
  CreateDynamicPersonGroupWithPerson202Response,
  CreateDynamicPersonGroupWithPersonLogicalResponse,
  CreateDynamicPersonGroupWithPersonDefaultResponse,
  DeleteDynamicPersonGroup202Response,
  DeleteDynamicPersonGroupLogicalResponse,
  DeleteDynamicPersonGroupDefaultResponse,
  UpdateDynamicPersonGroupWithPersonChanges202Response,
  UpdateDynamicPersonGroupWithPersonChangesLogicalResponse,
  UpdateDynamicPersonGroupWithPersonChangesDefaultResponse,
} from "./responses.js";
/**
 * Helper function that builds a Poller object to help polling a long running operation.
 * @param client - Client to use for sending the request to get additional pages.
 * @param initialResponse - The initial response.
 * @param options - Options to set a resume state or custom polling interval.
 * @returns - A poller object to poll for operation state updates and eventually get the final response.
 */
export async function getLongRunningPoller<
  TResult extends
    | TrainLargeFaceListLogicalResponse
    | TrainLargeFaceListDefaultResponse,
>(
  client: Client,
  initialResponse:
    | TrainLargeFaceList202Response
    | TrainLargeFaceListLogicalResponse
    | TrainLargeFaceListDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | TrainPersonGroupLogicalResponse
    | TrainPersonGroupDefaultResponse,
>(
  client: Client,
  initialResponse:
    | TrainPersonGroup202Response
    | TrainPersonGroupLogicalResponse
    | TrainPersonGroupDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | TrainLargePersonGroupLogicalResponse
    | TrainLargePersonGroupDefaultResponse,
>(
  client: Client,
  initialResponse:
    | TrainLargePersonGroup202Response
    | TrainLargePersonGroupLogicalResponse
    | TrainLargePersonGroupDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends CreatePersonLogicalResponse | CreatePersonDefaultResponse,
>(
  client: Client,
  initialResponse:
    | CreatePerson202Response
    | CreatePersonLogicalResponse
    | CreatePersonDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends DeletePersonLogicalResponse | DeletePersonDefaultResponse,
>(
  client: Client,
  initialResponse:
    | DeletePerson202Response
    | DeletePersonLogicalResponse
    | DeletePersonDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends AddPersonFaceLogicalResponse | AddPersonFaceDefaultResponse,
>(
  client: Client,
  initialResponse:
    | AddPersonFace202Response
    | AddPersonFaceLogicalResponse
    | AddPersonFaceDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | DeletePersonFaceLogicalResponse
    | DeletePersonFaceDefaultResponse,
>(
  client: Client,
  initialResponse:
    | DeletePersonFace202Response
    | DeletePersonFaceLogicalResponse
    | DeletePersonFaceDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | CreateDynamicPersonGroupWithPersonLogicalResponse
    | CreateDynamicPersonGroupWithPersonDefaultResponse,
>(
  client: Client,
  initialResponse:
    | CreateDynamicPersonGroupWithPerson202Response
    | CreateDynamicPersonGroupWithPersonLogicalResponse
    | CreateDynamicPersonGroupWithPersonDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | DeleteDynamicPersonGroupLogicalResponse
    | DeleteDynamicPersonGroupDefaultResponse,
>(
  client: Client,
  initialResponse:
    | DeleteDynamicPersonGroup202Response
    | DeleteDynamicPersonGroupLogicalResponse
    | DeleteDynamicPersonGroupDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | UpdateDynamicPersonGroupWithPersonChangesLogicalResponse
    | UpdateDynamicPersonGroupWithPersonChangesDefaultResponse,
>(
  client: Client,
  initialResponse:
    | UpdateDynamicPersonGroupWithPersonChanges202Response
    | UpdateDynamicPersonGroupWithPersonChangesLogicalResponse
    | UpdateDynamicPersonGroupWithPersonChangesDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<TResult extends HttpResponse>(
  client: Client,
  initialResponse: TResult,
  options: CreateHttpPollerOptions<TResult, OperationState<TResult>> = {},
): Promise<SimplePollerLike<OperationState<TResult>, TResult>> {
  const poller: LongRunningOperation<TResult> = {
    requestMethod: initialResponse.request.method,
    requestPath: initialResponse.request.url,
    sendInitialRequest: async () => {
      // In the case of Rest Clients we are building the LRO poller object from a response that's the reason
      // we are not triggering the initial request here, just extracting the information from the
      // response we were provided.
      return getLroResponse(initialResponse);
    },
    sendPollRequest: async (path) => {
      // This is the callback that is going to be called to poll the service
      // to get the latest status. We use the client provided and the polling path
      // which is an opaque URL provided by caller, the service sends this in one of the following headers: operation-location, azure-asyncoperation or location
      // depending on the lro pattern that the service implements. If non is provided we default to the initial path.
      const response = await client
        .pathUnchecked(path ?? initialResponse.request.url)
        .get();
      const lroResponse = getLroResponse(response as TResult);
      lroResponse.rawResponse.headers["x-ms-original-url"] =
        initialResponse.request.url;
      return lroResponse;
    },
  };

  options.resolveOnUnsuccessful = options.resolveOnUnsuccessful ?? true;
  return createHttpPoller(poller, options);
}

/**
 * Converts a Rest Client response to a response that the LRO implementation understands
 * @param response - a rest client http response
 * @returns - An LRO response that the LRO implementation understands
 */
function getLroResponse<TResult extends HttpResponse>(
  response: TResult,
): LroResponse<TResult> {
  if (Number.isNaN(response.status)) {
    throw new TypeError(
      `Status code of the response is not a number. Value: ${response.status}`,
    );
  }

  return {
    flatResponse: response,
    rawResponse: {
      ...response,
      statusCode: Number.parseInt(response.status),
      body: response.body,
    },
  };
}
