/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export interface ErrorModel {
  status?: number;
  message?: string;
}

export interface MyException {
  statusCode?: string;
}

export interface C {
  httpCode?: string;
}

export interface D {
  httpStatusCode?: string;
}

export interface B extends MyException {
  textStatusCode?: string;
}

/** Defines headers for HttpRedirects_head300 operation. */
export interface HttpRedirectsHead300Headers {
  /** The redirect location for this request */
  location?: "/http/success/head/200";
}

/** Defines headers for HttpRedirects_get300 operation. */
export interface HttpRedirectsGet300Headers {
  /** The redirect location for this request */
  location?: "/http/success/get/200";
}

/** Defines headers for HttpRedirects_head301 operation. */
export interface HttpRedirectsHead301Headers {
  /** The redirect location for this request */
  location?: "/http/success/head/200";
}

/** Defines headers for HttpRedirects_get301 operation. */
export interface HttpRedirectsGet301Headers {
  /** The redirect location for this request */
  location?: "/http/success/get/200";
}

/** Defines headers for HttpRedirects_put301 operation. */
export interface HttpRedirectsPut301Headers {
  /** The redirect location for this request */
  location?: "/http/failure/500";
}

/** Defines headers for HttpRedirects_head302 operation. */
export interface HttpRedirectsHead302Headers {
  /** The redirect location for this request */
  location?: "/http/success/head/200";
}

/** Defines headers for HttpRedirects_get302 operation. */
export interface HttpRedirectsGet302Headers {
  /** The redirect location for this request */
  location?: "/http/success/get/200";
}

/** Defines headers for HttpRedirects_patch302 operation. */
export interface HttpRedirectsPatch302Headers {
  /** The redirect location for this request */
  location?: "/http/failure/500";
}

/** Defines headers for HttpRedirects_post303 operation. */
export interface HttpRedirectsPost303Headers {
  /** The redirect location for this request */
  location?: "/http/success/get/200";
}

/** Defines headers for HttpRedirects_head307 operation. */
export interface HttpRedirectsHead307Headers {
  /** The redirect location for this request */
  location?: "/http/success/head/200";
}

/** Defines headers for HttpRedirects_get307 operation. */
export interface HttpRedirectsGet307Headers {
  /** The redirect location for this request */
  location?: "/http/success/get/200";
}

/** Defines headers for HttpRedirects_options307 operation. */
export interface HttpRedirectsOptions307Headers {
  /** The redirect location for this request */
  location?: "/http/success/options/200";
}

/** Defines headers for HttpRedirects_put307 operation. */
export interface HttpRedirectsPut307Headers {
  /** The redirect location for this request */
  location?: "/http/success/put/200";
}

/** Defines headers for HttpRedirects_patch307 operation. */
export interface HttpRedirectsPatch307Headers {
  /** The redirect location for this request */
  location?: "/http/success/patch/200";
}

/** Defines headers for HttpRedirects_post307 operation. */
export interface HttpRedirectsPost307Headers {
  /** The redirect location for this request */
  location?: "/http/success/post/200";
}

/** Defines headers for HttpRedirects_delete307 operation. */
export interface HttpRedirectsDelete307Headers {
  /** The redirect location for this request */
  location?: "/http/success/delete/200";
}

/** Optional parameters. */
export interface HttpFailureGetEmptyErrorOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getEmptyError operation. */
export type HttpFailureGetEmptyErrorResponse = {
  /** The parsed response body. */
  body: boolean;
};

/** Optional parameters. */
export interface HttpFailureGetNoModelErrorOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getNoModelError operation. */
export type HttpFailureGetNoModelErrorResponse = {
  /** The parsed response body. */
  body: boolean;
};

/** Optional parameters. */
export interface HttpFailureGetNoModelEmptyOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getNoModelEmpty operation. */
export type HttpFailureGetNoModelEmptyResponse = {
  /** The parsed response body. */
  body: boolean;
};

/** Optional parameters. */
export interface HttpSuccessHead200OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpSuccessGet200OptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get200 operation. */
export type HttpSuccessGet200Response = {
  /** The parsed response body. */
  body: boolean;
};

/** Optional parameters. */
export interface HttpSuccessOptions200OptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the options200 operation. */
export type HttpSuccessOptions200Response = {
  /** The parsed response body. */
  body: boolean;
};

/** Optional parameters. */
export interface HttpSuccessPut200OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpSuccessPatch200OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpSuccessPost200OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpSuccessDelete200OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpSuccessPut201OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpSuccessPost201OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpSuccessPut202OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpSuccessPatch202OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpSuccessPost202OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpSuccessDelete202OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpSuccessHead204OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpSuccessPut204OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpSuccessPatch204OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpSuccessPost204OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpSuccessDelete204OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpSuccessHead404OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpRedirectsHead300OptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the head300 operation. */
export type HttpRedirectsHead300Response = HttpRedirectsHead300Headers;

/** Optional parameters. */
export interface HttpRedirectsGet300OptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get300 operation. */
export type HttpRedirectsGet300Response = HttpRedirectsGet300Headers & {
  /** The parsed response body. */
  body: string[];
};

/** Optional parameters. */
export interface HttpRedirectsHead301OptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the head301 operation. */
export type HttpRedirectsHead301Response = HttpRedirectsHead301Headers;

/** Optional parameters. */
export interface HttpRedirectsGet301OptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get301 operation. */
export type HttpRedirectsGet301Response = HttpRedirectsGet301Headers;

/** Optional parameters. */
export interface HttpRedirectsPut301OptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the put301 operation. */
export type HttpRedirectsPut301Response = HttpRedirectsPut301Headers;

/** Optional parameters. */
export interface HttpRedirectsHead302OptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the head302 operation. */
export type HttpRedirectsHead302Response = HttpRedirectsHead302Headers;

/** Optional parameters. */
export interface HttpRedirectsGet302OptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get302 operation. */
export type HttpRedirectsGet302Response = HttpRedirectsGet302Headers;

/** Optional parameters. */
export interface HttpRedirectsPatch302OptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the patch302 operation. */
export type HttpRedirectsPatch302Response = HttpRedirectsPatch302Headers;

/** Optional parameters. */
export interface HttpRedirectsPost303OptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the post303 operation. */
export type HttpRedirectsPost303Response = HttpRedirectsPost303Headers;

/** Optional parameters. */
export interface HttpRedirectsHead307OptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the head307 operation. */
export type HttpRedirectsHead307Response = HttpRedirectsHead307Headers;

/** Optional parameters. */
export interface HttpRedirectsGet307OptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get307 operation. */
export type HttpRedirectsGet307Response = HttpRedirectsGet307Headers;

/** Optional parameters. */
export interface HttpRedirectsOptions307OptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the options307 operation. */
export type HttpRedirectsOptions307Response = HttpRedirectsOptions307Headers;

/** Optional parameters. */
export interface HttpRedirectsPut307OptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the put307 operation. */
export type HttpRedirectsPut307Response = HttpRedirectsPut307Headers;

/** Optional parameters. */
export interface HttpRedirectsPatch307OptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the patch307 operation. */
export type HttpRedirectsPatch307Response = HttpRedirectsPatch307Headers;

/** Optional parameters. */
export interface HttpRedirectsPost307OptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the post307 operation. */
export type HttpRedirectsPost307Response = HttpRedirectsPost307Headers;

/** Optional parameters. */
export interface HttpRedirectsDelete307OptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the delete307 operation. */
export type HttpRedirectsDelete307Response = HttpRedirectsDelete307Headers;

/** Optional parameters. */
export interface HttpClientFailureHead400OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpClientFailureGet400OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpClientFailureOptions400OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpClientFailurePut400OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpClientFailurePatch400OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpClientFailurePost400OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpClientFailureDelete400OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpClientFailureHead401OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpClientFailureGet402OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpClientFailureOptions403OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpClientFailureGet403OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpClientFailurePut404OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpClientFailurePatch405OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpClientFailurePost406OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpClientFailureDelete407OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpClientFailurePut409OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpClientFailureHead410OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpClientFailureGet411OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpClientFailureOptions412OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpClientFailureGet412OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpClientFailurePut413OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpClientFailurePatch414OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpClientFailurePost415OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpClientFailureGet416OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpClientFailureDelete417OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpClientFailureHead429OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpServerFailureHead501OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpServerFailureGet501OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpServerFailurePost505OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpServerFailureDelete505OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpRetryHead408OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpRetryPut500OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpRetryPatch500OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpRetryGet502OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpRetryOptions502OptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the options502 operation. */
export type HttpRetryOptions502Response = {
  /** The parsed response body. */
  body: boolean;
};

/** Optional parameters. */
export interface HttpRetryPost503OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpRetryDelete503OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpRetryPut504OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HttpRetryPatch504OptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface MultipleResponsesGet200Model204NoModelDefaultError200ValidOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get200Model204NoModelDefaultError200Valid operation. */
export type MultipleResponsesGet200Model204NoModelDefaultError200ValidResponse =
  MyException;

/** Optional parameters. */
export interface MultipleResponsesGet200Model204NoModelDefaultError204ValidOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get200Model204NoModelDefaultError204Valid operation. */
export type MultipleResponsesGet200Model204NoModelDefaultError204ValidResponse =
  MyException;

/** Optional parameters. */
export interface MultipleResponsesGet200Model204NoModelDefaultError201InvalidOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get200Model204NoModelDefaultError201Invalid operation. */
export type MultipleResponsesGet200Model204NoModelDefaultError201InvalidResponse =
  MyException;

/** Optional parameters. */
export interface MultipleResponsesGet200Model204NoModelDefaultError202NoneOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get200Model204NoModelDefaultError202None operation. */
export type MultipleResponsesGet200Model204NoModelDefaultError202NoneResponse =
  MyException;

/** Optional parameters. */
export interface MultipleResponsesGet200Model204NoModelDefaultError400ValidOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get200Model204NoModelDefaultError400Valid operation. */
export type MultipleResponsesGet200Model204NoModelDefaultError400ValidResponse =
  MyException;

/** Optional parameters. */
export interface MultipleResponsesGet200Model201ModelDefaultError200ValidOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get200Model201ModelDefaultError200Valid operation. */
export type MultipleResponsesGet200Model201ModelDefaultError200ValidResponse =
  MyException;

/** Optional parameters. */
export interface MultipleResponsesGet200Model201ModelDefaultError201ValidOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get200Model201ModelDefaultError201Valid operation. */
export type MultipleResponsesGet200Model201ModelDefaultError201ValidResponse =
  MyException;

/** Optional parameters. */
export interface MultipleResponsesGet200Model201ModelDefaultError400ValidOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get200Model201ModelDefaultError400Valid operation. */
export type MultipleResponsesGet200Model201ModelDefaultError400ValidResponse =
  MyException;

/** Optional parameters. */
export interface MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200ValidOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get200ModelA201ModelC404ModelDDefaultError200Valid operation. */
export type MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200ValidResponse =
  MyException;

/** Optional parameters. */
export interface MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201ValidOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get200ModelA201ModelC404ModelDDefaultError201Valid operation. */
export type MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201ValidResponse =
  MyException;

/** Optional parameters. */
export interface MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404ValidOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get200ModelA201ModelC404ModelDDefaultError404Valid operation. */
export type MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404ValidResponse =
  MyException;

/** Optional parameters. */
export interface MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400ValidOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get200ModelA201ModelC404ModelDDefaultError400Valid operation. */
export type MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400ValidResponse =
  MyException;

/** Optional parameters. */
export interface MultipleResponsesGet202None204NoneDefaultError202NoneOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface MultipleResponsesGet202None204NoneDefaultError204NoneOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface MultipleResponsesGet202None204NoneDefaultError400ValidOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface MultipleResponsesGet202None204NoneDefaultNone202InvalidOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface MultipleResponsesGet202None204NoneDefaultNone204NoneOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface MultipleResponsesGet202None204NoneDefaultNone400NoneOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface MultipleResponsesGet202None204NoneDefaultNone400InvalidOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface MultipleResponsesGetDefaultModelA200ValidOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDefaultModelA200Valid operation. */
export type MultipleResponsesGetDefaultModelA200ValidResponse = MyException;

/** Optional parameters. */
export interface MultipleResponsesGetDefaultModelA200NoneOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDefaultModelA200None operation. */
export type MultipleResponsesGetDefaultModelA200NoneResponse = MyException;

/** Optional parameters. */
export interface MultipleResponsesGetDefaultModelA400ValidOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface MultipleResponsesGetDefaultModelA400NoneOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface MultipleResponsesGetDefaultNone200InvalidOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface MultipleResponsesGetDefaultNone200NoneOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface MultipleResponsesGetDefaultNone400InvalidOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface MultipleResponsesGetDefaultNone400NoneOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface MultipleResponsesGet200ModelA200NoneOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get200ModelA200None operation. */
export type MultipleResponsesGet200ModelA200NoneResponse = MyException;

/** Optional parameters. */
export interface MultipleResponsesGet200ModelA200ValidOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get200ModelA200Valid operation. */
export type MultipleResponsesGet200ModelA200ValidResponse = MyException;

/** Optional parameters. */
export interface MultipleResponsesGet200ModelA200InvalidOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get200ModelA200Invalid operation. */
export type MultipleResponsesGet200ModelA200InvalidResponse = MyException;

/** Optional parameters. */
export interface MultipleResponsesGet200ModelA400NoneOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get200ModelA400None operation. */
export type MultipleResponsesGet200ModelA400NoneResponse = MyException;

/** Optional parameters. */
export interface MultipleResponsesGet200ModelA400ValidOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get200ModelA400Valid operation. */
export type MultipleResponsesGet200ModelA400ValidResponse = MyException;

/** Optional parameters. */
export interface MultipleResponsesGet200ModelA400InvalidOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get200ModelA400Invalid operation. */
export type MultipleResponsesGet200ModelA400InvalidResponse = MyException;

/** Optional parameters. */
export interface MultipleResponsesGet200ModelA202ValidOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get200ModelA202Valid operation. */
export type MultipleResponsesGet200ModelA202ValidResponse = MyException;

/** Optional parameters. */
export interface HttpInfrastructureClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
