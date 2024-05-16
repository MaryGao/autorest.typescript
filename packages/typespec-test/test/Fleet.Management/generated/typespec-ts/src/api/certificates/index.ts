// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  Certificate,
  CertificateListResult,
  CertificateChainResponse,
  ProofOfPossessionNonceRequest,
  ProofOfPossessionNonceResponse,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  AzureSphereContext as Client,
  CertificatesGet200Response,
  CertificatesGetDefaultResponse,
  CertificatesListByCatalog200Response,
  CertificatesListByCatalogDefaultResponse,
  CertificatesRetrieveCertChain200Response,
  CertificatesRetrieveCertChainDefaultResponse,
  CertificatesRetrieveProofOfPossessionNonce200Response,
  CertificatesRetrieveProofOfPossessionNonceDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  CertificatesGetOptionalParams,
  CertificatesListByCatalogOptionalParams,
  CertificatesRetrieveCertChainOptionalParams,
  CertificatesRetrieveProofOfPossessionNonceOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  serialNumber: string,
  options: CertificatesGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  CertificatesGet200Response | CertificatesGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/certificates/{serialNumber}",
      subscriptionId,
      resourceGroupName,
      catalogName,
      serialNumber,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: CertificatesGet200Response | CertificatesGetDefaultResponse,
): Promise<Certificate> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          certificate: result.body.properties?.["certificate"],
          status: result.body.properties?.["status"],
          subject: result.body.properties?.["subject"],
          thumbprint: result.body.properties?.["thumbprint"],
          expiryUtc:
            result.body.properties?.["expiryUtc"] !== undefined
              ? new Date(result.body.properties?.["expiryUtc"])
              : undefined,
          notBeforeUtc:
            result.body.properties?.["notBeforeUtc"] !== undefined
              ? new Date(result.body.properties?.["notBeforeUtc"])
              : undefined,
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a Certificate */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  serialNumber: string,
  options: CertificatesGetOptionalParams = { requestOptions: {} },
): Promise<Certificate> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    catalogName,
    serialNumber,
    options,
  );
  return _getDeserialize(result);
}

export function _listByCatalogSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: CertificatesListByCatalogOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | CertificatesListByCatalog200Response
  | CertificatesListByCatalogDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/certificates",
      subscriptionId,
      resourceGroupName,
      catalogName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        $filter: options?.filter,
        $top: options?.top,
        $skip: options?.skip,
        $maxpagesize: options?.maxpagesize,
      },
    });
}

export async function _listByCatalogDeserialize(
  result:
    | CertificatesListByCatalog200Response
    | CertificatesListByCatalogDefaultResponse,
): Promise<CertificateListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      id: p["id"],
      type: p["type"],
      systemData: !p.systemData
        ? undefined
        : {
            createdBy: p.systemData?.["createdBy"],
            createdByType: p.systemData?.["createdByType"],
            createdAt:
              p.systemData?.["createdAt"] !== undefined
                ? new Date(p.systemData?.["createdAt"])
                : undefined,
            lastModifiedBy: p.systemData?.["lastModifiedBy"],
            lastModifiedByType: p.systemData?.["lastModifiedByType"],
            lastModifiedAt:
              p.systemData?.["lastModifiedAt"] !== undefined
                ? new Date(p.systemData?.["lastModifiedAt"])
                : undefined,
          },
      properties: !p.properties
        ? undefined
        : {
            certificate: p.properties?.["certificate"],
            status: p.properties?.["status"],
            subject: p.properties?.["subject"],
            thumbprint: p.properties?.["thumbprint"],
            expiryUtc:
              p.properties?.["expiryUtc"] !== undefined
                ? new Date(p.properties?.["expiryUtc"])
                : undefined,
            notBeforeUtc:
              p.properties?.["notBeforeUtc"] !== undefined
                ? new Date(p.properties?.["notBeforeUtc"])
                : undefined,
            provisioningState: p.properties?.["provisioningState"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List Certificate resources by Catalog */
export function listByCatalog(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  options: CertificatesListByCatalogOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Certificate> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByCatalogSend(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        options,
      ),
    _listByCatalogDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _retrieveCertChainSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  serialNumber: string,
  options: CertificatesRetrieveCertChainOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | CertificatesRetrieveCertChain200Response
  | CertificatesRetrieveCertChainDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/certificates/{serialNumber}/retrieveCertChain",
      subscriptionId,
      resourceGroupName,
      catalogName,
      serialNumber,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _retrieveCertChainDeserialize(
  result:
    | CertificatesRetrieveCertChain200Response
    | CertificatesRetrieveCertChainDefaultResponse,
): Promise<CertificateChainResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    certificateChain: result.body["certificateChain"],
  };
}

/** Retrieves cert chain. */
export async function retrieveCertChain(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  serialNumber: string,
  options: CertificatesRetrieveCertChainOptionalParams = { requestOptions: {} },
): Promise<CertificateChainResponse> {
  const result = await _retrieveCertChainSend(
    context,
    subscriptionId,
    resourceGroupName,
    catalogName,
    serialNumber,
    options,
  );
  return _retrieveCertChainDeserialize(result);
}

export function _retrieveProofOfPossessionNonceSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  serialNumber: string,
  body: ProofOfPossessionNonceRequest,
  options: CertificatesRetrieveProofOfPossessionNonceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | CertificatesRetrieveProofOfPossessionNonce200Response
  | CertificatesRetrieveProofOfPossessionNonceDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/certificates/{serialNumber}/retrieveProofOfPossessionNonce",
      subscriptionId,
      resourceGroupName,
      catalogName,
      serialNumber,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { proofOfPossessionNonce: body["proofOfPossessionNonce"] },
    });
}

export async function _retrieveProofOfPossessionNonceDeserialize(
  result:
    | CertificatesRetrieveProofOfPossessionNonce200Response
    | CertificatesRetrieveProofOfPossessionNonceDefaultResponse,
): Promise<ProofOfPossessionNonceResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    certificate: result.body["certificate"],
    status: result.body["status"],
    subject: result.body["subject"],
    thumbprint: result.body["thumbprint"],
    expiryUtc:
      result.body["expiryUtc"] !== undefined
        ? new Date(result.body["expiryUtc"])
        : undefined,
    notBeforeUtc:
      result.body["notBeforeUtc"] !== undefined
        ? new Date(result.body["notBeforeUtc"])
        : undefined,
    provisioningState: result.body["provisioningState"],
  };
}

/** Gets the proof of possession nonce. */
export async function retrieveProofOfPossessionNonce(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  catalogName: string,
  serialNumber: string,
  body: ProofOfPossessionNonceRequest,
  options: CertificatesRetrieveProofOfPossessionNonceOptionalParams = {
    requestOptions: {},
  },
): Promise<ProofOfPossessionNonceResponse> {
  const result = await _retrieveProofOfPossessionNonceSend(
    context,
    subscriptionId,
    resourceGroupName,
    catalogName,
    serialNumber,
    body,
    options,
  );
  return _retrieveProofOfPossessionNonceDeserialize(result);
}
