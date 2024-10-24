/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  XMsClientRequestIdGetOptionalParams,
  XMsClientRequestIdParamGetOptionalParams
} from "../models";

/** Interface representing a XMsClientRequestId. */
export interface XMsClientRequestId {
  /**
   * Get method that overwrites x-ms-client-request header with value
   * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   * @param options The options parameters.
   */
  get(options?: XMsClientRequestIdGetOptionalParams): Promise<void>;
  /**
   * Get method that overwrites x-ms-client-request header with value
   * 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   * @param xMsClientRequestId This should appear as a method parameter, use value
   *                           '9C4D50EE-2D56-4CD3-8152-34347DC9F2B0'
   * @param options The options parameters.
   */
  paramGet(
    xMsClientRequestId: string,
    options?: XMsClientRequestIdParamGetOptionalParams
  ): Promise<void>;
}
