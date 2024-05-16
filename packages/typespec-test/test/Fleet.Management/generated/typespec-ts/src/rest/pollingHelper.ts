// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Client, HttpResponse } from "@azure-rest/core-client";
import { AbortSignalLike } from "@azure/abort-controller";
import {
  CancelOnProgress,
  CreateHttpPollerOptions,
  LongRunningOperation,
  OperationResponse,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import {
  CatalogsCreateOrUpdate200Response,
  CatalogsCreateOrUpdate201Response,
  CatalogsCreateOrUpdateDefaultResponse,
  CatalogsCreateOrUpdateLogicalResponse,
  CatalogsDelete200Response,
  CatalogsDelete202Response,
  CatalogsDelete204Response,
  CatalogsDeleteDefaultResponse,
  CatalogsDeleteLogicalResponse,
  CatalogsUploadImage202Response,
  CatalogsUploadImageDefaultResponse,
  CatalogsUploadImageLogicalResponse,
  ImagesCreateOrUpdate200Response,
  ImagesCreateOrUpdate201Response,
  ImagesCreateOrUpdateDefaultResponse,
  ImagesCreateOrUpdateLogicalResponse,
  ImagesDelete200Response,
  ImagesDelete202Response,
  ImagesDelete204Response,
  ImagesDeleteDefaultResponse,
  ImagesDeleteLogicalResponse,
  ProductsCreateOrUpdate200Response,
  ProductsCreateOrUpdate201Response,
  ProductsCreateOrUpdateDefaultResponse,
  ProductsCreateOrUpdateLogicalResponse,
  ProductsUpdate200Response,
  ProductsUpdate202Response,
  ProductsUpdateDefaultResponse,
  ProductsUpdateLogicalResponse,
  ProductsDelete200Response,
  ProductsDelete202Response,
  ProductsDelete204Response,
  ProductsDeleteDefaultResponse,
  ProductsDeleteLogicalResponse,
  DeviceGroupsCreateOrUpdate200Response,
  DeviceGroupsCreateOrUpdate201Response,
  DeviceGroupsCreateOrUpdateDefaultResponse,
  DeviceGroupsCreateOrUpdateLogicalResponse,
  DeviceGroupsUpdate200Response,
  DeviceGroupsUpdate202Response,
  DeviceGroupsUpdateDefaultResponse,
  DeviceGroupsUpdateLogicalResponse,
  DeviceGroupsDelete200Response,
  DeviceGroupsDelete202Response,
  DeviceGroupsDelete204Response,
  DeviceGroupsDeleteDefaultResponse,
  DeviceGroupsDeleteLogicalResponse,
  DeviceGroupsClaimDevices202Response,
  DeviceGroupsClaimDevicesDefaultResponse,
  DeviceGroupsClaimDevicesLogicalResponse,
  DeploymentsCreateOrUpdate200Response,
  DeploymentsCreateOrUpdate201Response,
  DeploymentsCreateOrUpdateDefaultResponse,
  DeploymentsCreateOrUpdateLogicalResponse,
  DeploymentsDelete200Response,
  DeploymentsDelete202Response,
  DeploymentsDelete204Response,
  DeploymentsDeleteDefaultResponse,
  DeploymentsDeleteLogicalResponse,
  DevicesCreateOrUpdate200Response,
  DevicesCreateOrUpdate201Response,
  DevicesCreateOrUpdateDefaultResponse,
  DevicesCreateOrUpdateLogicalResponse,
  DevicesDelete200Response,
  DevicesDelete202Response,
  DevicesDelete204Response,
  DevicesDeleteDefaultResponse,
  DevicesDeleteLogicalResponse,
  DevicesGenerateCapabilityImage200Response,
  DevicesGenerateCapabilityImage202Response,
  DevicesGenerateCapabilityImageDefaultResponse,
  DevicesGenerateCapabilityImageLogicalResponse,
} from "./responses.js";

/**
 * A simple poller that can be used to poll a long running operation.
 */
export interface SimplePollerLike<
  TState extends OperationState<TResult>,
  TResult,
> {
  /**
   * Returns true if the poller has finished polling.
   */
  isDone(): boolean;
  /**
   * Returns true if the poller is stopped.
   */
  isStopped(): boolean;
  /**
   * Returns the state of the operation.
   */
  getOperationState(): TState;
  /**
   * Returns the result value of the operation,
   * regardless of the state of the poller.
   * It can return undefined or an incomplete form of the final TResult value
   * depending on the implementation.
   */
  getResult(): TResult | undefined;
  /**
   * Returns a promise that will resolve once a single polling request finishes.
   * It does this by calling the update method of the Poller's operation.
   */
  poll(options?: { abortSignal?: AbortSignalLike }): Promise<TState>;
  /**
   * Returns a promise that will resolve once the underlying operation is completed.
   */
  pollUntilDone(pollOptions?: {
    abortSignal?: AbortSignalLike;
  }): Promise<TResult>;
  /**
   * Invokes the provided callback after each polling is completed,
   * sending the current state of the poller's operation.
   *
   * It returns a method that can be used to stop receiving updates on the given callback function.
   */
  onProgress(callback: (state: TState) => void): CancelOnProgress;

  /**
   * Returns a promise that could be used for serialized version of the poller's operation
   * by invoking the operation's serialize method.
   */
  serialize(): Promise<string>;

  /**
   * Wait the poller to be submitted.
   */
  submitted(): Promise<void>;

  /**
   * Returns a string representation of the poller's operation. Similar to serialize but returns a string.
   * @deprecated Use serialize() instead.
   */
  toString(): string;

  /**
   * Stops the poller from continuing to poll. Please note this will only stop the client-side polling
   * @deprecated Use abortSignal to stop polling instead.
   */
  stopPolling(): void;
}

/**
 * Helper function that builds a Poller object to help polling a long running operation.
 * @param client - Client to use for sending the request to get additional pages.
 * @param initialResponse - The initial response.
 * @param options - Options to set a resume state or custom polling interval.
 * @returns - A poller object to poll for operation state updates and eventually get the final response.
 */
export async function getLongRunningPoller<
  TResult extends
    | CatalogsCreateOrUpdateLogicalResponse
    | CatalogsCreateOrUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | CatalogsCreateOrUpdate200Response
    | CatalogsCreateOrUpdate201Response
    | CatalogsCreateOrUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends CatalogsDeleteLogicalResponse | CatalogsDeleteDefaultResponse,
>(
  client: Client,
  initialResponse:
    | CatalogsDelete200Response
    | CatalogsDelete202Response
    | CatalogsDelete204Response
    | CatalogsDeleteDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | CatalogsUploadImageLogicalResponse
    | CatalogsUploadImageDefaultResponse,
>(
  client: Client,
  initialResponse:
    | CatalogsUploadImage202Response
    | CatalogsUploadImageDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | ImagesCreateOrUpdateLogicalResponse
    | ImagesCreateOrUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | ImagesCreateOrUpdate200Response
    | ImagesCreateOrUpdate201Response
    | ImagesCreateOrUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends ImagesDeleteLogicalResponse | ImagesDeleteDefaultResponse,
>(
  client: Client,
  initialResponse:
    | ImagesDelete200Response
    | ImagesDelete202Response
    | ImagesDelete204Response
    | ImagesDeleteDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | ProductsCreateOrUpdateLogicalResponse
    | ProductsCreateOrUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | ProductsCreateOrUpdate200Response
    | ProductsCreateOrUpdate201Response
    | ProductsCreateOrUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends ProductsUpdateLogicalResponse | ProductsUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | ProductsUpdate200Response
    | ProductsUpdate202Response
    | ProductsUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends ProductsDeleteLogicalResponse | ProductsDeleteDefaultResponse,
>(
  client: Client,
  initialResponse:
    | ProductsDelete200Response
    | ProductsDelete202Response
    | ProductsDelete204Response
    | ProductsDeleteDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | DeviceGroupsCreateOrUpdateLogicalResponse
    | DeviceGroupsCreateOrUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | DeviceGroupsCreateOrUpdate200Response
    | DeviceGroupsCreateOrUpdate201Response
    | DeviceGroupsCreateOrUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | DeviceGroupsUpdateLogicalResponse
    | DeviceGroupsUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | DeviceGroupsUpdate200Response
    | DeviceGroupsUpdate202Response
    | DeviceGroupsUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | DeviceGroupsDeleteLogicalResponse
    | DeviceGroupsDeleteDefaultResponse,
>(
  client: Client,
  initialResponse:
    | DeviceGroupsDelete200Response
    | DeviceGroupsDelete202Response
    | DeviceGroupsDelete204Response
    | DeviceGroupsDeleteDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | DeviceGroupsClaimDevicesLogicalResponse
    | DeviceGroupsClaimDevicesDefaultResponse,
>(
  client: Client,
  initialResponse:
    | DeviceGroupsClaimDevices202Response
    | DeviceGroupsClaimDevicesDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | DeploymentsCreateOrUpdateLogicalResponse
    | DeploymentsCreateOrUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | DeploymentsCreateOrUpdate200Response
    | DeploymentsCreateOrUpdate201Response
    | DeploymentsCreateOrUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | DeploymentsDeleteLogicalResponse
    | DeploymentsDeleteDefaultResponse,
>(
  client: Client,
  initialResponse:
    | DeploymentsDelete200Response
    | DeploymentsDelete202Response
    | DeploymentsDelete204Response
    | DeploymentsDeleteDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | DevicesCreateOrUpdateLogicalResponse
    | DevicesCreateOrUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | DevicesCreateOrUpdate200Response
    | DevicesCreateOrUpdate201Response
    | DevicesCreateOrUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends DevicesDeleteLogicalResponse | DevicesDeleteDefaultResponse,
>(
  client: Client,
  initialResponse:
    | DevicesDelete200Response
    | DevicesDelete202Response
    | DevicesDelete204Response
    | DevicesDeleteDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | DevicesGenerateCapabilityImageLogicalResponse
    | DevicesGenerateCapabilityImageDefaultResponse,
>(
  client: Client,
  initialResponse:
    | DevicesGenerateCapabilityImage200Response
    | DevicesGenerateCapabilityImage202Response
    | DevicesGenerateCapabilityImageDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<TResult extends HttpResponse>(
  client: Client,
  initialResponse: TResult,
  options: CreateHttpPollerOptions<TResult, OperationState<TResult>> = {},
): Promise<SimplePollerLike<OperationState<TResult>, TResult>> {
  const abortController = new AbortController();
  const poller: LongRunningOperation<TResult> = {
    sendInitialRequest: async () => {
      // In the case of Rest Clients we are building the LRO poller object from a response that's the reason
      // we are not triggering the initial request here, just extracting the information from the
      // response we were provided.
      return getLroResponse(initialResponse);
    },
    sendPollRequest: async (
      path,
      options?: { abortSignal?: AbortSignalLike },
    ) => {
      // This is the callback that is going to be called to poll the service
      // to get the latest status. We use the client provided and the polling path
      // which is an opaque URL provided by caller, the service sends this in one of the following headers: operation-location, azure-asyncoperation or location
      // depending on the lro pattern that the service implements. If non is provided we default to the initial path.
      function abortListener(): void {
        abortController.abort();
      }
      const inputAbortSignal = options?.abortSignal;
      const abortSignal = abortController.signal;
      if (inputAbortSignal?.aborted) {
        abortController.abort();
      } else if (!abortSignal.aborted) {
        inputAbortSignal?.addEventListener("abort", abortListener, {
          once: true,
        });
      }
      let response;
      try {
        response = await client
          .pathUnchecked(path ?? initialResponse.request.url)
          .get({ abortSignal });
      } finally {
        inputAbortSignal?.removeEventListener("abort", abortListener);
      }
      const lroResponse = getLroResponse(response as TResult);
      lroResponse.rawResponse.headers["x-ms-original-url"] =
        initialResponse.request.url;
      return lroResponse;
    },
  };

  options.resolveOnUnsuccessful = options.resolveOnUnsuccessful ?? true;
  const httpPoller = createHttpPoller(poller, options);
  const simplePoller: SimplePollerLike<OperationState<TResult>, TResult> = {
    isDone() {
      return httpPoller.isDone;
    },
    isStopped() {
      return httpPoller.isStopped;
    },
    getOperationState() {
      if (!httpPoller.operationState) {
        throw new Error(
          "Operation state is not available. The poller may not have been started and you could await submitted() before calling getOperationState().",
        );
      }
      return httpPoller.operationState;
    },
    getResult() {
      return httpPoller.result;
    },
    toString() {
      if (!httpPoller.operationState) {
        throw new Error(
          "Operation state is not available. The poller may not have been started and you could await submitted() before calling getOperationState().",
        );
      }
      return JSON.stringify({
        state: httpPoller.operationState,
      });
    },
    stopPolling() {
      abortController.abort();
    },
    onProgress: httpPoller.onProgress,
    poll: httpPoller.poll,
    pollUntilDone: httpPoller.pollUntilDone,
    serialize: httpPoller.serialize,
    submitted: httpPoller.submitted,
  };
  return simplePoller;
}

/**
 * Converts a Rest Client response to a response that the LRO implementation understands
 * @param response - a rest client http response
 * @returns - An LRO response that the LRO implementation understands
 */
function getLroResponse<TResult extends HttpResponse>(
  response: TResult,
): OperationResponse<TResult> {
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
