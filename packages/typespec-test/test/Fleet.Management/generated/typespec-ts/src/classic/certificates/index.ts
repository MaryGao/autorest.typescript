// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzureSphereContext } from "../../api/azureSphereContext.js";
import {
  Certificate,
  CertificateChainResponse,
  ProofOfPossessionNonceRequest,
  ProofOfPossessionNonceResponse,
} from "../../models/models.js";
import {
  get,
  listByCatalog,
  retrieveCertChain,
  retrieveProofOfPossessionNonce,
} from "../../api/certificates/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import {
  CertificatesGetOptionalParams,
  CertificatesListByCatalogOptionalParams,
  CertificatesRetrieveCertChainOptionalParams,
  CertificatesRetrieveProofOfPossessionNonceOptionalParams,
} from "../../models/options.js";

export interface CertificatesOperations {
  get: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    serialNumber: string,
    options?: CertificatesGetOptionalParams,
  ) => Promise<Certificate>;
  listByCatalog: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    options?: CertificatesListByCatalogOptionalParams,
  ) => PagedAsyncIterableIterator<Certificate>;
  retrieveCertChain: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    serialNumber: string,
    options?: CertificatesRetrieveCertChainOptionalParams,
  ) => Promise<CertificateChainResponse>;
  retrieveProofOfPossessionNonce: (
    subscriptionId: string,
    resourceGroupName: string,
    catalogName: string,
    serialNumber: string,
    body: ProofOfPossessionNonceRequest,
    options?: CertificatesRetrieveProofOfPossessionNonceOptionalParams,
  ) => Promise<ProofOfPossessionNonceResponse>;
}

export function getCertificates(context: AzureSphereContext) {
  return {
    get: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      serialNumber: string,
      options?: CertificatesGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        serialNumber,
        options,
      ),
    listByCatalog: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      options?: CertificatesListByCatalogOptionalParams,
    ) =>
      listByCatalog(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        options,
      ),
    retrieveCertChain: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      serialNumber: string,
      options?: CertificatesRetrieveCertChainOptionalParams,
    ) =>
      retrieveCertChain(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        serialNumber,
        options,
      ),
    retrieveProofOfPossessionNonce: (
      subscriptionId: string,
      resourceGroupName: string,
      catalogName: string,
      serialNumber: string,
      body: ProofOfPossessionNonceRequest,
      options?: CertificatesRetrieveProofOfPossessionNonceOptionalParams,
    ) =>
      retrieveProofOfPossessionNonce(
        context,
        subscriptionId,
        resourceGroupName,
        catalogName,
        serialNumber,
        body,
        options,
      ),
  };
}

export function getCertificatesOperations(
  context: AzureSphereContext,
): CertificatesOperations {
  return {
    ...getCertificates(context),
  };
}
