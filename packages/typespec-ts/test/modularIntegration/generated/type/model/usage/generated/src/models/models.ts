// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Record used in operation parameters */
export interface InputRecord {
  requiredProp: string;
}

export function inputRecordSerializer(
  item: InputRecord,
): Record<string, unknown> {
  return {
    requiredProp: item["requiredProp"],
  };
}

/** Record used in operation return type */
export interface OutputRecord {
  requiredProp: string;
}

/** Record used both as operation parameter and return type */
export interface InputOutputRecord {
  requiredProp: string;
}

export function inputOutputRecordSerializer(
  item: InputOutputRecord,
): Record<string, unknown> {
  return {
    requiredProp: item["requiredProp"],
  };
}
