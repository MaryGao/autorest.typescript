/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import {
  MapperRequiredClientOptionalParams,
  UpdateCertificateIssuerOptionalParams,
  UpdateCertificateIssuerResponse
} from "./models";

export class MapperRequiredClient extends coreClient.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the MapperRequiredClient class.
   * @param $host server parameter
   * @param options The parameter options
   */
  constructor($host: string, options?: MapperRequiredClientOptionalParams) {
    if ($host === undefined) {
      throw new Error("'$host' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: MapperRequiredClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-mapperrequired/1.0.0-preview1`;
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
      endpoint: options.endpoint ?? options.baseUri ?? "{$host}"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.$host = $host;
  }

  /**
   * The UpdateCertificateIssuer operation performs an update on the specified certificate issuer entity.
   * This operation requires the certificates/setissuers permission.
   * @param issuerName The name of the issuer.
   * @param options The options parameters.
   */
  updateCertificateIssuer(
    issuerName: string,
    options?: UpdateCertificateIssuerOptionalParams
  ): Promise<UpdateCertificateIssuerResponse> {
    return this.sendOperationRequest(
      { issuerName, options },
      updateCertificateIssuerOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const updateCertificateIssuerOperationSpec: coreClient.OperationSpec = {
  path: "/certificates/issuers/{issuer-name}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" } }
    }
  },
  requestBody: {
    parameterPath: { provider: ["options", "provider"] },
    mapper: { ...Mappers.CertificateIssuerUpdateParameters, required: true }
  },
  urlParameters: [Parameters.$host, Parameters.issuerName],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
