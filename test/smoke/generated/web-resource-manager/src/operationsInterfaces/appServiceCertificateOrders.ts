/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  AppServiceCertificateOrder,
  AppServiceCertificateOrdersListNextOptionalParams,
  AppServiceCertificateOrdersListOptionalParams,
  AppServiceCertificateOrdersListByResourceGroupNextOptionalParams,
  AppServiceCertificateOrdersListByResourceGroupOptionalParams,
  AppServiceCertificateResource,
  AppServiceCertificateOrdersListCertificatesNextOptionalParams,
  AppServiceCertificateOrdersListCertificatesOptionalParams,
  AppServiceCertificateOrdersValidatePurchaseInformationOptionalParams,
  AppServiceCertificateOrdersGetOptionalParams,
  AppServiceCertificateOrdersGetResponse,
  AppServiceCertificateOrdersCreateOrUpdateOptionalParams,
  AppServiceCertificateOrdersCreateOrUpdateResponse,
  AppServiceCertificateOrdersDeleteOptionalParams,
  AppServiceCertificateOrderPatchResource,
  AppServiceCertificateOrdersUpdateOptionalParams,
  AppServiceCertificateOrdersUpdateResponse,
  AppServiceCertificateOrdersGetCertificateOptionalParams,
  AppServiceCertificateOrdersGetCertificateResponse,
  AppServiceCertificateOrdersCreateOrUpdateCertificateOptionalParams,
  AppServiceCertificateOrdersCreateOrUpdateCertificateResponse,
  AppServiceCertificateOrdersDeleteCertificateOptionalParams,
  AppServiceCertificatePatchResource,
  AppServiceCertificateOrdersUpdateCertificateOptionalParams,
  AppServiceCertificateOrdersUpdateCertificateResponse,
  ReissueCertificateOrderRequest,
  AppServiceCertificateOrdersReissueOptionalParams,
  RenewCertificateOrderRequest,
  AppServiceCertificateOrdersRenewOptionalParams,
  AppServiceCertificateOrdersResendEmailOptionalParams,
  NameIdentifier,
  AppServiceCertificateOrdersResendRequestEmailsOptionalParams,
  SiteSealRequest,
  AppServiceCertificateOrdersRetrieveSiteSealOptionalParams,
  AppServiceCertificateOrdersRetrieveSiteSealResponse,
  AppServiceCertificateOrdersVerifyDomainOwnershipOptionalParams,
  AppServiceCertificateOrdersRetrieveCertificateActionsOptionalParams,
  AppServiceCertificateOrdersRetrieveCertificateActionsResponse,
  AppServiceCertificateOrdersRetrieveCertificateEmailHistoryOptionalParams,
  AppServiceCertificateOrdersRetrieveCertificateEmailHistoryResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AppServiceCertificateOrders. */
export interface AppServiceCertificateOrders {
  /**
   * Description for List all certificate orders in a subscription.
   * @param options The options parameters.
   */
  list(
    options?: AppServiceCertificateOrdersListOptionalParams
  ): PagedAsyncIterableIterator<AppServiceCertificateOrder>;
  /**
   * Description for Get certificate orders in a resource group.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: AppServiceCertificateOrdersListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<AppServiceCertificateOrder>;
  /**
   * Description for List all certificates associated with a certificate order.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param certificateOrderName Name of the certificate order.
   * @param options The options parameters.
   */
  listCertificates(
    resourceGroupName: string,
    certificateOrderName: string,
    options?: AppServiceCertificateOrdersListCertificatesOptionalParams
  ): PagedAsyncIterableIterator<AppServiceCertificateResource>;
  /**
   * Description for Validate information for a certificate order.
   * @param appServiceCertificateOrder Information for a certificate order.
   * @param options The options parameters.
   */
  validatePurchaseInformation(
    appServiceCertificateOrder: AppServiceCertificateOrder,
    options?: AppServiceCertificateOrdersValidatePurchaseInformationOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Description for Get a certificate order.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param certificateOrderName Name of the certificate order..
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    certificateOrderName: string,
    options?: AppServiceCertificateOrdersGetOptionalParams
  ): Promise<AppServiceCertificateOrdersGetResponse>;
  /**
   * Description for Create or update a certificate purchase order.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param certificateOrderName Name of the certificate order.
   * @param certificateDistinguishedName Distinguished name to use for the certificate order.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    certificateOrderName: string,
    certificateDistinguishedName: AppServiceCertificateOrder,
    options?: AppServiceCertificateOrdersCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AppServiceCertificateOrdersCreateOrUpdateResponse>,
      AppServiceCertificateOrdersCreateOrUpdateResponse
    >
  >;
  /**
   * Description for Create or update a certificate purchase order.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param certificateOrderName Name of the certificate order.
   * @param certificateDistinguishedName Distinguished name to use for the certificate order.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    certificateOrderName: string,
    certificateDistinguishedName: AppServiceCertificateOrder,
    options?: AppServiceCertificateOrdersCreateOrUpdateOptionalParams
  ): Promise<AppServiceCertificateOrdersCreateOrUpdateResponse>;
  /**
   * Description for Delete an existing certificate order.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param certificateOrderName Name of the certificate order.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    certificateOrderName: string,
    options?: AppServiceCertificateOrdersDeleteOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Description for Create or update a certificate purchase order.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param certificateOrderName Name of the certificate order.
   * @param certificateDistinguishedName Distinguished name to use for the certificate order.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    certificateOrderName: string,
    certificateDistinguishedName: AppServiceCertificateOrderPatchResource,
    options?: AppServiceCertificateOrdersUpdateOptionalParams
  ): Promise<AppServiceCertificateOrdersUpdateResponse>;
  /**
   * Description for Get the certificate associated with a certificate order.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param certificateOrderName Name of the certificate order.
   * @param name Name of the certificate.
   * @param options The options parameters.
   */
  getCertificate(
    resourceGroupName: string,
    certificateOrderName: string,
    name: string,
    options?: AppServiceCertificateOrdersGetCertificateOptionalParams
  ): Promise<AppServiceCertificateOrdersGetCertificateResponse>;
  /**
   * Description for Creates or updates a certificate and associates with key vault secret.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param certificateOrderName Name of the certificate order.
   * @param name Name of the certificate.
   * @param keyVaultCertificate Key vault certificate resource Id.
   * @param options The options parameters.
   */
  beginCreateOrUpdateCertificate(
    resourceGroupName: string,
    certificateOrderName: string,
    name: string,
    keyVaultCertificate: AppServiceCertificateResource,
    options?: AppServiceCertificateOrdersCreateOrUpdateCertificateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        AppServiceCertificateOrdersCreateOrUpdateCertificateResponse
      >,
      AppServiceCertificateOrdersCreateOrUpdateCertificateResponse
    >
  >;
  /**
   * Description for Creates or updates a certificate and associates with key vault secret.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param certificateOrderName Name of the certificate order.
   * @param name Name of the certificate.
   * @param keyVaultCertificate Key vault certificate resource Id.
   * @param options The options parameters.
   */
  beginCreateOrUpdateCertificateAndWait(
    resourceGroupName: string,
    certificateOrderName: string,
    name: string,
    keyVaultCertificate: AppServiceCertificateResource,
    options?: AppServiceCertificateOrdersCreateOrUpdateCertificateOptionalParams
  ): Promise<AppServiceCertificateOrdersCreateOrUpdateCertificateResponse>;
  /**
   * Description for Delete the certificate associated with a certificate order.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param certificateOrderName Name of the certificate order.
   * @param name Name of the certificate.
   * @param options The options parameters.
   */
  deleteCertificate(
    resourceGroupName: string,
    certificateOrderName: string,
    name: string,
    options?: AppServiceCertificateOrdersDeleteCertificateOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Description for Creates or updates a certificate and associates with key vault secret.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param certificateOrderName Name of the certificate order.
   * @param name Name of the certificate.
   * @param keyVaultCertificate Key vault certificate resource Id.
   * @param options The options parameters.
   */
  updateCertificate(
    resourceGroupName: string,
    certificateOrderName: string,
    name: string,
    keyVaultCertificate: AppServiceCertificatePatchResource,
    options?: AppServiceCertificateOrdersUpdateCertificateOptionalParams
  ): Promise<AppServiceCertificateOrdersUpdateCertificateResponse>;
  /**
   * Description for Reissue an existing certificate order.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param certificateOrderName Name of the certificate order.
   * @param reissueCertificateOrderRequest Parameters for the reissue.
   * @param options The options parameters.
   */
  reissue(
    resourceGroupName: string,
    certificateOrderName: string,
    reissueCertificateOrderRequest: ReissueCertificateOrderRequest,
    options?: AppServiceCertificateOrdersReissueOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Description for Renew an existing certificate order.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param certificateOrderName Name of the certificate order.
   * @param renewCertificateOrderRequest Renew parameters
   * @param options The options parameters.
   */
  renew(
    resourceGroupName: string,
    certificateOrderName: string,
    renewCertificateOrderRequest: RenewCertificateOrderRequest,
    options?: AppServiceCertificateOrdersRenewOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Description for Resend certificate email.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param certificateOrderName Name of the certificate order.
   * @param options The options parameters.
   */
  resendEmail(
    resourceGroupName: string,
    certificateOrderName: string,
    options?: AppServiceCertificateOrdersResendEmailOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Description for Verify domain ownership for this certificate order.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param certificateOrderName Name of the certificate order.
   * @param nameIdentifier Email address
   * @param options The options parameters.
   */
  resendRequestEmails(
    resourceGroupName: string,
    certificateOrderName: string,
    nameIdentifier: NameIdentifier,
    options?: AppServiceCertificateOrdersResendRequestEmailsOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Description for Verify domain ownership for this certificate order.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param certificateOrderName Name of the certificate order.
   * @param siteSealRequest Site seal request.
   * @param options The options parameters.
   */
  retrieveSiteSeal(
    resourceGroupName: string,
    certificateOrderName: string,
    siteSealRequest: SiteSealRequest,
    options?: AppServiceCertificateOrdersRetrieveSiteSealOptionalParams
  ): Promise<AppServiceCertificateOrdersRetrieveSiteSealResponse>;
  /**
   * Description for Verify domain ownership for this certificate order.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param certificateOrderName Name of the certificate order.
   * @param options The options parameters.
   */
  verifyDomainOwnership(
    resourceGroupName: string,
    certificateOrderName: string,
    options?: AppServiceCertificateOrdersVerifyDomainOwnershipOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Description for Retrieve the list of certificate actions.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the certificate order.
   * @param options The options parameters.
   */
  retrieveCertificateActions(
    resourceGroupName: string,
    name: string,
    options?: AppServiceCertificateOrdersRetrieveCertificateActionsOptionalParams
  ): Promise<AppServiceCertificateOrdersRetrieveCertificateActionsResponse>;
  /**
   * Description for Retrieve email history.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of the certificate order.
   * @param options The options parameters.
   */
  retrieveCertificateEmailHistory(
    resourceGroupName: string,
    name: string,
    options?: AppServiceCertificateOrdersRetrieveCertificateEmailHistoryOptionalParams
  ): Promise<
    AppServiceCertificateOrdersRetrieveCertificateEmailHistoryResponse
  >;
}
