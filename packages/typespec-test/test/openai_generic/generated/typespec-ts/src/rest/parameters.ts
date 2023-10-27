// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@typespec/ts-http-runtime";
import {
  CreateTranscriptionRequest,
  CreateTranslationRequest,
  CreateChatCompletionRequest,
  CreateFineTuningJobRequest,
  CreateCompletionRequest,
  CreateEditRequest,
  CreateEmbeddingRequest,
  CreateFileRequest,
  CreateFineTuneRequest,
  CreateImageRequest,
  CreateImageEditRequest,
  CreateImageVariationRequest,
  CreateModerationRequest,
} from "./models.js";

export interface CreateTranscriptionBodyParam {
  body: CreateTranscriptionRequest;
}

export interface CreateTranscriptionMediaTypesParam {
  contentType: "multipart/form-data";
}

export type CreateTranscriptionParameters = CreateTranscriptionMediaTypesParam &
  CreateTranscriptionBodyParam &
  RequestParameters;

export interface CreateTranslationBodyParam {
  body: CreateTranslationRequest;
}

export interface CreateTranslationMediaTypesParam {
  contentType: "multipart/form-data";
}

export type CreateTranslationParameters = CreateTranslationMediaTypesParam &
  CreateTranslationBodyParam &
  RequestParameters;

export interface CreateChatCompletionBodyParam {
  body?: CreateChatCompletionRequest;
}

export type CreateChatCompletionParameters = CreateChatCompletionBodyParam &
  RequestParameters;

export interface CreateFineTuningJobBodyParam {
  body: CreateFineTuningJobRequest;
}

export type CreateFineTuningJobParameters = CreateFineTuningJobBodyParam &
  RequestParameters;

export interface ListPaginatedFineTuningJobsQueryParamProperties {
  /** Identifier for the last job from the previous pagination request. */
  after?: string;
  /** Number of fine-tuning jobs to retrieve. */
  limit?: number;
}

export interface ListPaginatedFineTuningJobsQueryParam {
  queryParameters?: ListPaginatedFineTuningJobsQueryParamProperties;
}

export type ListPaginatedFineTuningJobsParameters =
  ListPaginatedFineTuningJobsQueryParam & RequestParameters;
export type RetrieveFineTuningJobParameters = RequestParameters;

export interface ListFineTuningEventsQueryParamProperties {
  /** Identifier for the last event from the previous pagination request. */
  after?: string;
  /** Number of events to retrieve. */
  limit?: number;
}

export interface ListFineTuningEventsQueryParam {
  queryParameters?: ListFineTuningEventsQueryParamProperties;
}

export type ListFineTuningEventsParameters = ListFineTuningEventsQueryParam &
  RequestParameters;
export type CancelFineTuningJobParameters = RequestParameters;

export interface CreateCompletionBodyParam {
  body?: CreateCompletionRequest;
}

export type CreateCompletionParameters = CreateCompletionBodyParam &
  RequestParameters;

export interface CreateEditBodyParam {
  body: CreateEditRequest;
}

export type CreateEditParameters = CreateEditBodyParam & RequestParameters;

export interface CreateEmbeddingBodyParam {
  body: CreateEmbeddingRequest;
}

export type CreateEmbeddingParameters = CreateEmbeddingBodyParam &
  RequestParameters;
export type ListFilesParameters = RequestParameters;

export interface CreateFileBodyParam {
  body: CreateFileRequest;
}

export interface CreateFileMediaTypesParam {
  contentType: "multipart/form-data";
}

export type CreateFileParameters = CreateFileMediaTypesParam &
  CreateFileBodyParam &
  RequestParameters;
export type RetrieveFileParameters = RequestParameters;
export type DeleteFileParameters = RequestParameters;
export type DownloadFileParameters = RequestParameters;

export interface CreateFineTuneBodyParam {
  body: CreateFineTuneRequest;
}

export type CreateFineTuneParameters = CreateFineTuneBodyParam &
  RequestParameters;
export type ListFineTunesParameters = RequestParameters;
export type RetrieveFineTuneParameters = RequestParameters;

export interface ListFineTuneEventsQueryParamProperties {
  /**
   * Whether to stream events for the fine-tune job. If set to true, events will be sent as
   * data-only
   * [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format)
   * as they become available. The stream will terminate with a `data: [DONE]` message when the
   * job is finished (succeeded, cancelled, or failed).
   *
   * If set to false, only events generated so far will be returned.
   */
  stream?: boolean;
}

export interface ListFineTuneEventsQueryParam {
  queryParameters?: ListFineTuneEventsQueryParamProperties;
}

export type ListFineTuneEventsParameters = ListFineTuneEventsQueryParam &
  RequestParameters;
export type CancelFineTuneParameters = RequestParameters;
export type ListModelsParameters = RequestParameters;
export type RetrieveParameters = RequestParameters;
export type DeleteParameters = RequestParameters;

export interface CreateImageBodyParam {
  body: CreateImageRequest;
}

export type CreateImageParameters = CreateImageBodyParam & RequestParameters;

export interface CreateImageEditBodyParam {
  body: CreateImageEditRequest;
}

export interface CreateImageEditMediaTypesParam {
  contentType: "multipart/form-data";
}

export type CreateImageEditParameters = CreateImageEditMediaTypesParam &
  CreateImageEditBodyParam &
  RequestParameters;

export interface CreateImageVariationBodyParam {
  body: CreateImageVariationRequest;
}

export interface CreateImageVariationMediaTypesParam {
  contentType: "multipart/form-data";
}

export type CreateImageVariationParameters =
  CreateImageVariationMediaTypesParam &
    CreateImageVariationBodyParam &
    RequestParameters;

export interface CreateModerationBodyParam {
  body: CreateModerationRequest;
}

export type CreateModerationParameters = CreateModerationBodyParam &
  RequestParameters;
