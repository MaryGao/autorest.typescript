/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const contentType: coreHttp.OperationParameter = {
  parameterPath: "contentType",
  mapper: {
    required: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};
export const scenario: coreHttp.OperationParameter = {
  parameterPath: "scenario",
  mapper: {
    required: true,
    serializedName: "scenario",
    type: {
      name: "String"
    }
  }
};
export const userAgent: coreHttp.OperationParameter = {
  parameterPath: "userAgent",
  mapper: {
    required: true,
    serializedName: "User-Agent",
    type: {
      name: "String"
    }
  }
};
export const value0: coreHttp.OperationParameter = {
  parameterPath: "value",
  mapper: {
    required: true,
    serializedName: "value",
    type: {
      name: "Number"
    }
  }
};
export const value1: coreHttp.OperationParameter = {
  parameterPath: "value",
  mapper: {
    required: true,
    serializedName: "value",
    type: {
      name: "Boolean"
    }
  }
};
export const value2: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "value"
  ],
  mapper: {
    serializedName: "value",
    type: {
      name: "String"
    }
  }
};
export const value3: coreHttp.OperationParameter = {
  parameterPath: "value",
  mapper: {
    required: true,
    serializedName: "value",
    type: {
      name: "Date"
    }
  }
};
export const value4: coreHttp.OperationParameter = {
  parameterPath: "value",
  mapper: {
    required: true,
    serializedName: "value",
    type: {
      name: "DateTime"
    }
  }
};
export const value5: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "value"
  ],
  mapper: {
    serializedName: "value",
    type: {
      name: "DateTimeRfc1123"
    }
  }
};
export const value6: coreHttp.OperationParameter = {
  parameterPath: "value",
  mapper: {
    required: true,
    serializedName: "value",
    type: {
      name: "TimeSpan"
    }
  }
};
export const value7: coreHttp.OperationParameter = {
  parameterPath: "value",
  mapper: {
    required: true,
    serializedName: "value",
    type: {
      name: "ByteArray"
    }
  }
};
export const value8: coreHttp.OperationParameter = {
  parameterPath: [
    "options",
    "value"
  ],
  mapper: {
    serializedName: "value",
    type: {
      name: "Enum",
      allowedValues: [
        "White",
        "black",
        "GREY"
      ]
    }
  }
};
