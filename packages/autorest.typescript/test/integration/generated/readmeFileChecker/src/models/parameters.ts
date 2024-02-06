import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter,
} from "@azure/core-client";
import {
  SecretSetParameters as SecretSetParametersMapper,
  SecretUpdateParameters as SecretUpdateParametersMapper,
  SecretRestoreParameters as SecretRestoreParametersMapper,
} from "../models/mappers";

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

export const value: OperationParameter = {
  parameterPath: "value",
  mapper: SecretSetParametersMapper,
};

export const tags: OperationParameter = {
  parameterPath: ["options", "tags"],
  mapper: SecretSetParametersMapper,
};

export const contentType1: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: SecretSetParametersMapper,
};

export const secretAttributes: OperationParameter = {
  parameterPath: ["options", "secretAttributes"],
  mapper: SecretSetParametersMapper,
};

export const vaultBaseUrl: OperationURLParameter = {
  parameterPath: "vaultBaseUrl",
  mapper: {
    serializedName: "vaultBaseUrl",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const secretName: OperationURLParameter = {
  parameterPath: "secretName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[0-9a-zA-Z-]+$"),
    },
    serializedName: "secret-name",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    serializedName: "api-version",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const secretName1: OperationURLParameter = {
  parameterPath: "secretName",
  mapper: {
    serializedName: "secret-name",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const contentType2: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: SecretUpdateParametersMapper,
};

export const secretAttributes1: OperationParameter = {
  parameterPath: ["options", "secretAttributes"],
  mapper: SecretUpdateParametersMapper,
};

export const tags1: OperationParameter = {
  parameterPath: ["options", "tags"],
  mapper: SecretUpdateParametersMapper,
};

export const secretVersion: OperationURLParameter = {
  parameterPath: "secretVersion",
  mapper: {
    serializedName: "secret-version",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const maxresults: OperationQueryParameter = {
  parameterPath: ["options", "maxresults"],
  mapper: {
    constraints: {
      InclusiveMaximum: 25,
      InclusiveMinimum: 1,
    },
    serializedName: "maxresults",
    type: {
      name: "Number",
    },
  },
};

export const secretBundleBackup: OperationParameter = {
  parameterPath: "secretBundleBackup",
  mapper: SecretRestoreParametersMapper,
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};
