// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { uint8ArrayToString } from "@azure/core-util";

/** Model with required and optional properties */
export interface RequiredAndOptionalProperty {
  /** optional string property */
  optionalProperty?: string;
  /** required int property */
  requiredProperty: number;
}

export function requiredAndOptionalPropertySerializer(
  item: RequiredAndOptionalProperty,
): Record<string, unknown> {
  return {
    optionalProperty: item["optionalProperty"],
    requiredProperty: item["requiredProperty"],
  };
}

/** Model with union of float literal property */
export interface UnionFloatLiteralProperty {
  /** Property */
  property?: 1.25 | 2.375;
}

export function unionFloatLiteralPropertySerializer(
  item: UnionFloatLiteralProperty,
): Record<string, unknown> {
  return {
    property: item["property"],
  };
}

/** Model with union of int literal property */
export interface UnionIntLiteralProperty {
  /** Property */
  property?: 1 | 2;
}

export function unionIntLiteralPropertySerializer(
  item: UnionIntLiteralProperty,
): Record<string, unknown> {
  return {
    property: item["property"],
  };
}

/** Model with union of string literal property */
export interface UnionStringLiteralProperty {
  /** Property */
  property?: "hello" | "world";
}

export function unionStringLiteralPropertySerializer(
  item: UnionStringLiteralProperty,
): Record<string, unknown> {
  return {
    property: item["property"],
  };
}

/** Model with boolean literal property */
export interface BooleanLiteralProperty {
  /** Property */
  property?: true;
}

export function booleanLiteralPropertySerializer(
  item: BooleanLiteralProperty,
): Record<string, unknown> {
  return {
    property: item["property"],
  };
}

/** Model with float literal property */
export interface FloatLiteralProperty {
  /** Property */
  property?: 1.25;
}

export function floatLiteralPropertySerializer(
  item: FloatLiteralProperty,
): Record<string, unknown> {
  return {
    property: item["property"],
  };
}

/** Model with int literal property */
export interface IntLiteralProperty {
  /** Property */
  property?: 1;
}

export function intLiteralPropertySerializer(
  item: IntLiteralProperty,
): Record<string, unknown> {
  return {
    property: item["property"],
  };
}

/** Model with string literal property */
export interface StringLiteralProperty {
  /** Property */
  property?: "hello";
}

export function stringLiteralPropertySerializer(
  item: StringLiteralProperty,
): Record<string, unknown> {
  return {
    property: item["property"],
  };
}

/** Model with collection models properties */
export interface CollectionsModelProperty {
  /** Property */
  property?: StringProperty[];
}

export function collectionsModelPropertySerializer(
  item: CollectionsModelProperty,
): Record<string, unknown> {
  return {
    property:
      item["property"] === undefined
        ? item["property"]
        : item["property"].map(stringPropertySerializer),
  };
}

/** Template type for testing models with optional property. Pass in the type of the property you are looking for */
export interface StringProperty {
  /** Property */
  property?: string;
}

export function stringPropertySerializer(
  item: StringProperty,
): Record<string, unknown> {
  return {
    property: item["property"],
  };
}

/** Model with collection bytes properties */
export interface CollectionsByteProperty {
  /** Property */
  property?: Uint8Array[];
}

export function collectionsBytePropertySerializer(
  item: CollectionsByteProperty,
): Record<string, unknown> {
  return {
    property:
      item["property"] === undefined
        ? item["property"]
        : item["property"].map((p) => uint8ArrayToString(p, "base64")),
  };
}

/** Model with a plainTime property */
export interface PlainTimeProperty {
  /** Property */
  property?: Date;
}

export function plainTimePropertySerializer(
  item: PlainTimeProperty,
): Record<string, unknown> {
  return {
    property: item["property"]?.toTimeString(),
  };
}

/** Model with a plainDate property */
export interface PlainDateProperty {
  /** Property */
  property?: Date;
}

export function plainDatePropertySerializer(
  item: PlainDateProperty,
): Record<string, unknown> {
  return {
    property: item["property"]?.toDateString(),
  };
}

/** Model with a duration property */
export interface DurationProperty {
  /** Property */
  property?: string;
}

export function durationPropertySerializer(
  item: DurationProperty,
): Record<string, unknown> {
  return {
    property: item["property"],
  };
}

/** Model with a datetime property */
export interface DatetimeProperty {
  /** Property */
  property?: Date;
}

export function datetimePropertySerializer(
  item: DatetimeProperty,
): Record<string, unknown> {
  return {
    property: item["property"]?.toISOString(),
  };
}

/** Template type for testing models with optional property. Pass in the type of the property you are looking for */
export interface BytesProperty {
  /** Property */
  property?: Uint8Array;
}

export function bytesPropertySerializer(
  item: BytesProperty,
): Record<string, unknown> {
  return {
    property:
      item["property"] !== undefined
        ? uint8ArrayToString(item["property"], "base64")
        : undefined,
  };
}
