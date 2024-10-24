/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  BasicDef as BasicDefMapper,
  IntWrapper as IntWrapperMapper,
  LongWrapper as LongWrapperMapper,
  FloatWrapper as FloatWrapperMapper,
  DoubleWrapper as DoubleWrapperMapper,
  BooleanWrapper as BooleanWrapperMapper,
  StringWrapper as StringWrapperMapper,
  DateWrapper as DateWrapperMapper,
  DatetimeWrapper as DatetimeWrapperMapper,
  Datetimerfc1123Wrapper as Datetimerfc1123WrapperMapper,
  DurationWrapper as DurationWrapperMapper,
  ByteWrapper as ByteWrapperMapper,
  ArrayWrapper as ArrayWrapperMapper,
  DictionaryWrapper as DictionaryWrapperMapper,
  Siamese as SiameseMapper,
  Fish as FishMapper,
  Salmon as SalmonMapper,
  ReadonlyObj as ReadonlyObjMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const complexBody: OperationParameter = {
  parameterPath: "complexBody",
  mapper: BasicDefMapper
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2016-02-29",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const complexBody1: OperationParameter = {
  parameterPath: "complexBody",
  mapper: IntWrapperMapper
};

export const complexBody2: OperationParameter = {
  parameterPath: "complexBody",
  mapper: LongWrapperMapper
};

export const complexBody3: OperationParameter = {
  parameterPath: "complexBody",
  mapper: FloatWrapperMapper
};

export const complexBody4: OperationParameter = {
  parameterPath: "complexBody",
  mapper: DoubleWrapperMapper
};

export const complexBody5: OperationParameter = {
  parameterPath: "complexBody",
  mapper: BooleanWrapperMapper
};

export const complexBody6: OperationParameter = {
  parameterPath: "complexBody",
  mapper: StringWrapperMapper
};

export const complexBody7: OperationParameter = {
  parameterPath: "complexBody",
  mapper: DateWrapperMapper
};

export const complexBody8: OperationParameter = {
  parameterPath: "complexBody",
  mapper: DatetimeWrapperMapper
};

export const complexBody9: OperationParameter = {
  parameterPath: "complexBody",
  mapper: Datetimerfc1123WrapperMapper
};

export const complexBody10: OperationParameter = {
  parameterPath: "complexBody",
  mapper: DurationWrapperMapper
};

export const complexBody11: OperationParameter = {
  parameterPath: "complexBody",
  mapper: ByteWrapperMapper
};

export const complexBody12: OperationParameter = {
  parameterPath: "complexBody",
  mapper: ArrayWrapperMapper
};

export const complexBody13: OperationParameter = {
  parameterPath: "complexBody",
  mapper: DictionaryWrapperMapper
};

export const complexBody14: OperationParameter = {
  parameterPath: "complexBody",
  mapper: SiameseMapper
};

export const complexBody15: OperationParameter = {
  parameterPath: "complexBody",
  mapper: FishMapper
};

export const complexBody16: OperationParameter = {
  parameterPath: "complexBody",
  mapper: SalmonMapper
};

export const complexBody17: OperationParameter = {
  parameterPath: "complexBody",
  mapper: ReadonlyObjMapper
};
