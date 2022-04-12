/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import {
  PipelineRequest,
  PipelineResponse,
  SendRequest
} from "@azure/core-rest-pipeline";
import {
  BasicImpl,
  PrimitiveImpl,
  ArrayImpl,
  DictionaryImpl,
  InheritanceImpl,
  PolymorphismImpl,
  PolymorphicrecursiveImpl,
  ReadonlypropertyImpl,
  FlattencomplexImpl
} from "./operations";
import {
  Basic,
  Primitive,
  Array,
  Dictionary,
  Inheritance,
  Polymorphism,
  Polymorphicrecursive,
  Readonlyproperty,
  Flattencomplex
} from "./operationsInterfaces";
import { BodyComplexClientOptionalParams } from "./models";

export class BodyComplexClient extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the BodyComplexClient class.
   * @param options The parameter options
   */
  constructor(options?: BodyComplexClientOptionalParams) {
    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: BodyComplexClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-body-complex/1.0.0-preview1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint ?? options.baseUri ?? "http://localhost:3000"
    };
    super(optionsWithDefaults);

    // Assigning values to Constant parameters
    this.$host = options.$host || "http://localhost:3000";
    this.apiVersion = options.apiVersion || "2016-02-29";
    this.basic = new BasicImpl(this);
    this.primitive = new PrimitiveImpl(this);
    this.array = new ArrayImpl(this);
    this.dictionary = new DictionaryImpl(this);
    this.inheritance = new InheritanceImpl(this);
    this.polymorphism = new PolymorphismImpl(this);
    this.polymorphicrecursive = new PolymorphicrecursiveImpl(this);
    this.readonlyproperty = new ReadonlypropertyImpl(this);
    this.flattencomplex = new FlattencomplexImpl(this);
    this.addCustomApiVersionPolicy(options.apiVersion);
  }

  /** A function that adds a policy that sets the api-version (or equivalent) to reflect the library version. */
  private addCustomApiVersionPolicy(apiVersion?: string) {
    if (!apiVersion) {
      return;
    }
    const apiVersionPolicy = {
      name: "CustomApiVersionPolicy",
      async sendRequest(
        request: PipelineRequest,
        next: SendRequest
      ): Promise<PipelineResponse> {
        const param = request.url.split("?");
        if (param.length > 1) {
          const newParams = param[1].split("&").map((item) => {
            if (item.indexOf("api-version") > -1) {
              return item.replace(/(?<==).*$/, apiVersion);
            } else {
              return item;
            }
          });
          request.url = param[0] + "?" + newParams.join("&");
        }
        return next(request);
      }
    };
    this.pipeline.addPolicy(apiVersionPolicy);
  }

  basic: Basic;
  primitive: Primitive;
  array: Array;
  dictionary: Dictionary;
  inheritance: Inheritance;
  polymorphism: Polymorphism;
  polymorphicrecursive: Polymorphicrecursive;
  readonlyproperty: Readonlyproperty;
  flattencomplex: Flattencomplex;
}
