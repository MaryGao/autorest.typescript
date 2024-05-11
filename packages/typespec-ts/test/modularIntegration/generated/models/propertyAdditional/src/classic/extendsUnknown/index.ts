// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { ExtendsUnknownAdditionalProperties } from "../../models/models.js";
import { get, put } from "../../api/extendsUnknown/index.js";
import {
  ExtendsUnknownGetOptionalParams,
  ExtendsUnknownPutOptionalParams,
} from "../../models/options.js";

export interface ExtendsUnknownOperations {
  get: (
    options?: ExtendsUnknownGetOptionalParams,
  ) => Promise<ExtendsUnknownAdditionalProperties>;
  put: (
    body: ExtendsUnknownAdditionalProperties,
    options?: ExtendsUnknownPutOptionalParams,
  ) => Promise<void>;
}

export function getExtendsUnknown(context: AdditionalPropertiesContext) {
  return {
    get: (options?: ExtendsUnknownGetOptionalParams) => get(context, options),
    put: (
      body: ExtendsUnknownAdditionalProperties,
      options?: ExtendsUnknownPutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getExtendsUnknownOperations(
  context: AdditionalPropertiesContext,
): ExtendsUnknownOperations {
  return {
    ...getExtendsUnknown(context),
  };
}
