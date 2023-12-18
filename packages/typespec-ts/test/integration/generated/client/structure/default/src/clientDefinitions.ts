// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ThreeParameters,
  FourParameters,
  FiveParameters,
  SixParameters,
  OneParameters,
  TwoParameters,
} from "./parameters";
import {
  Three204Response,
  Four204Response,
  Five204Response,
  Six204Response,
  One204Response,
  Two204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Three {
  post(options?: ThreeParameters): StreamableMethod<Three204Response>;
}

export interface Four {
  post(options?: FourParameters): StreamableMethod<Four204Response>;
}

export interface Five {
  post(options?: FiveParameters): StreamableMethod<Five204Response>;
}

export interface Six {
  post(options?: SixParameters): StreamableMethod<Six204Response>;
}

export interface One {
  post(options?: OneParameters): StreamableMethod<One204Response>;
}

export interface Two {
  post(options?: TwoParameters): StreamableMethod<Two204Response>;
}

export interface Routes {
  /** Resource for '/three' has methods for the following verbs: post */
  (path: "/three"): Three;
  /** Resource for '/four' has methods for the following verbs: post */
  (path: "/four"): Four;
  /** Resource for '/five' has methods for the following verbs: post */
  (path: "/five"): Five;
  /** Resource for '/six' has methods for the following verbs: post */
  (path: "/six"): Six;
  /** Resource for '/one' has methods for the following verbs: post */
  (path: "/one"): One;
  /** Resource for '/two' has methods for the following verbs: post */
  (path: "/two"): Two;
}

export type ServiceClient = Client & {
  path: Routes;
};
