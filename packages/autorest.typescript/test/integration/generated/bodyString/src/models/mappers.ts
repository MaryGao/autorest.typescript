/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const ErrorModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "Number",
        },
      },
      message: {
        serializedName: "message",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const RefColorConstant: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RefColorConstant",
    modelProperties: {
      colorConstant: {
        defaultValue: "green-color",
        isConstant: true,
        serializedName: "ColorConstant",
        type: {
          name: "String",
        },
      },
      field1: {
        serializedName: "field1",
        type: {
          name: "String",
        },
      },
    },
  },
};
