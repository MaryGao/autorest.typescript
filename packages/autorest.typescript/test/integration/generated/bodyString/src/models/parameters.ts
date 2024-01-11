/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { OperationParameter, OperationURLParameter } from "@azure/core-client";
import { RefColorConstant as RefColorConstantMapper } from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String",
    },
  },
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String",
    },
  },
};

export const stringBody: OperationParameter = {
  parameterPath: ["options", "stringBody"],
  mapper: {
    serializedName: "stringBody",
    type: {
      name: "String",
    },
  },
};

export const stringBody1: OperationParameter = {
  parameterPath: "stringBody",
  mapper: {
    defaultValue: "",
    isConstant: true,
    serializedName: "stringBody",
    type: {
      name: "String",
    },
  },
};

export const stringBody2: OperationParameter = {
  parameterPath: "stringBody",
  mapper: {
    defaultValue:
      "啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€",
    isConstant: true,
    serializedName: "stringBody",
    type: {
      name: "String",
    },
  },
};

export const stringBody3: OperationParameter = {
  parameterPath: "stringBody",
  mapper: {
    defaultValue:
      "    Now is the time for all good men to come to the aid of their country    ",
    isConstant: true,
    serializedName: "stringBody",
    type: {
      name: "String",
    },
  },
};

export const stringBody4: OperationParameter = {
  parameterPath: "stringBody",
  mapper: {
    serializedName: "stringBody",
    required: true,
    type: {
      name: "Base64Url",
    },
  },
};

export const stringBody5: OperationParameter = {
  parameterPath: "stringBody",
  mapper: {
    serializedName: "stringBody",
    required: true,
    type: {
      name: "Enum",
      allowedValues: ["red color", "green-color", "blue_color"],
    },
  },
};

export const enumStringBody: OperationParameter = {
  parameterPath: "enumStringBody",
  mapper: {
    serializedName: "enumStringBody",
    required: true,
    type: {
      name: "Enum",
      allowedValues: ["red color", "green-color", "blue_color"],
    },
  },
};

export const enumStringBody1: OperationParameter = {
  parameterPath: "enumStringBody",
  mapper: RefColorConstantMapper,
};
