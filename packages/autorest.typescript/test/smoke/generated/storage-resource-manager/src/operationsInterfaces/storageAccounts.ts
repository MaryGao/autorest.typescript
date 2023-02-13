/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  StorageAccount,
  StorageAccountsListOptionalParams,
  StorageAccountsListByResourceGroupOptionalParams,
  StorageAccountCheckNameAvailabilityParameters,
  StorageAccountsCheckNameAvailabilityOptionalParams,
  StorageAccountsCheckNameAvailabilityResponse,
  StorageAccountCreateParameters,
  StorageAccountsCreateOptionalParams,
  StorageAccountsCreateResponse,
  StorageAccountsDeleteOptionalParams,
  StorageAccountsGetPropertiesOptionalParams,
  StorageAccountsGetPropertiesResponse,
  StorageAccountUpdateParameters,
  StorageAccountsUpdateOptionalParams,
  StorageAccountsUpdateResponse,
  StorageAccountsListKeysOptionalParams,
  StorageAccountsListKeysResponse,
  StorageAccountRegenerateKeyParameters,
  StorageAccountsRegenerateKeyOptionalParams,
  StorageAccountsRegenerateKeyResponse,
  AccountSasParameters,
  StorageAccountsListAccountSASOptionalParams,
  StorageAccountsListAccountSASResponse,
  ServiceSasParameters,
  StorageAccountsListServiceSASOptionalParams,
  StorageAccountsListServiceSASResponse,
  StorageAccountsFailoverOptionalParams,
  StorageAccountsHierarchicalNamespaceMigrationOptionalParams,
  StorageAccountsAbortHierarchicalNamespaceMigrationOptionalParams,
  BlobRestoreParameters,
  StorageAccountsRestoreBlobRangesOptionalParams,
  StorageAccountsRestoreBlobRangesResponse,
  StorageAccountsRevokeUserDelegationKeysOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a StorageAccounts. */
export interface StorageAccounts {
  /**
   * Lists all the storage accounts available under the subscription. Note that storage keys are not
   * returned; use the ListKeys operation for this.
   * @param options The options parameters.
   */
  list(
    options?: StorageAccountsListOptionalParams
  ): PagedAsyncIterableIterator<StorageAccount>;
  /**
   * Lists all the storage accounts available under the given resource group. Note that storage keys are
   * not returned; use the ListKeys operation for this.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: StorageAccountsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<StorageAccount>;
  /**
   * Checks that the storage account name is valid and is not already in use.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param options The options parameters.
   */
  checkNameAvailability(
    accountName: StorageAccountCheckNameAvailabilityParameters,
    options?: StorageAccountsCheckNameAvailabilityOptionalParams
  ): Promise<StorageAccountsCheckNameAvailabilityResponse>;
  /**
   * Asynchronously creates a new storage account with the specified parameters. If an account is already
   * created and a subsequent create request is issued with different properties, the account properties
   * will be updated. If an account is already created and a subsequent create or update request is
   * issued with the exact same set of properties, the request will succeed.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param parameters The parameters to provide for the created account.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    accountName: string,
    parameters: StorageAccountCreateParameters,
    options?: StorageAccountsCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<StorageAccountsCreateResponse>,
      StorageAccountsCreateResponse
    >
  >;
  /**
   * Asynchronously creates a new storage account with the specified parameters. If an account is already
   * created and a subsequent create request is issued with different properties, the account properties
   * will be updated. If an account is already created and a subsequent create or update request is
   * issued with the exact same set of properties, the request will succeed.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param parameters The parameters to provide for the created account.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    accountName: string,
    parameters: StorageAccountCreateParameters,
    options?: StorageAccountsCreateOptionalParams
  ): Promise<StorageAccountsCreateResponse>;
  /**
   * Deletes a storage account in Microsoft Azure.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    options?: StorageAccountsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Returns the properties for the specified storage account including but not limited to name, SKU
   * name, location, and account status. The ListKeys operation should be used to retrieve storage keys.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param options The options parameters.
   */
  getProperties(
    resourceGroupName: string,
    accountName: string,
    options?: StorageAccountsGetPropertiesOptionalParams
  ): Promise<StorageAccountsGetPropertiesResponse>;
  /**
   * The update operation can be used to update the SKU, encryption, access tier, or tags for a storage
   * account. It can also be used to map the account to a custom domain. Only one custom domain is
   * supported per storage account; the replacement/change of custom domain is not supported. In order to
   * replace an old custom domain, the old value must be cleared/unregistered before a new value can be
   * set. The update of multiple properties is supported. This call does not change the storage keys for
   * the account. If you want to change the storage account keys, use the regenerate keys operation. The
   * location and name of the storage account cannot be changed after creation.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param parameters The parameters to provide for the updated account.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    accountName: string,
    parameters: StorageAccountUpdateParameters,
    options?: StorageAccountsUpdateOptionalParams
  ): Promise<StorageAccountsUpdateResponse>;
  /**
   * Lists the access keys or Kerberos keys (if active directory enabled) for the specified storage
   * account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param options The options parameters.
   */
  listKeys(
    resourceGroupName: string,
    accountName: string,
    options?: StorageAccountsListKeysOptionalParams
  ): Promise<StorageAccountsListKeysResponse>;
  /**
   * Regenerates one of the access keys or Kerberos keys for the specified storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param regenerateKey Specifies name of the key which should be regenerated -- key1, key2, kerb1,
   *                      kerb2.
   * @param options The options parameters.
   */
  regenerateKey(
    resourceGroupName: string,
    accountName: string,
    regenerateKey: StorageAccountRegenerateKeyParameters,
    options?: StorageAccountsRegenerateKeyOptionalParams
  ): Promise<StorageAccountsRegenerateKeyResponse>;
  /**
   * List SAS credentials of a storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param parameters The parameters to provide to list SAS credentials for the storage account.
   * @param options The options parameters.
   */
  listAccountSAS(
    resourceGroupName: string,
    accountName: string,
    parameters: AccountSasParameters,
    options?: StorageAccountsListAccountSASOptionalParams
  ): Promise<StorageAccountsListAccountSASResponse>;
  /**
   * List service SAS credentials of a specific resource.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param parameters The parameters to provide to list service SAS credentials.
   * @param options The options parameters.
   */
  listServiceSAS(
    resourceGroupName: string,
    accountName: string,
    parameters: ServiceSasParameters,
    options?: StorageAccountsListServiceSASOptionalParams
  ): Promise<StorageAccountsListServiceSASResponse>;
  /**
   * Failover request can be triggered for a storage account in case of availability issues. The failover
   * occurs from the storage account's primary cluster to secondary cluster for RA-GRS accounts. The
   * secondary cluster will become primary after failover.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param options The options parameters.
   */
  beginFailover(
    resourceGroupName: string,
    accountName: string,
    options?: StorageAccountsFailoverOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Failover request can be triggered for a storage account in case of availability issues. The failover
   * occurs from the storage account's primary cluster to secondary cluster for RA-GRS accounts. The
   * secondary cluster will become primary after failover.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param options The options parameters.
   */
  beginFailoverAndWait(
    resourceGroupName: string,
    accountName: string,
    options?: StorageAccountsFailoverOptionalParams
  ): Promise<void>;
  /**
   * Live Migration of storage account to enable Hns
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param requestType Required. Hierarchical namespace migration type can either be a hierarchical
   *                    namespace validation request 'HnsOnValidationRequest' or a hydration request
   *                    'HnsOnHydrationRequest'. The validation request will validate the migration whereas the hydration
   *                    request will migrate the account.
   * @param options The options parameters.
   */
  beginHierarchicalNamespaceMigration(
    resourceGroupName: string,
    accountName: string,
    requestType: string,
    options?: StorageAccountsHierarchicalNamespaceMigrationOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Live Migration of storage account to enable Hns
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param requestType Required. Hierarchical namespace migration type can either be a hierarchical
   *                    namespace validation request 'HnsOnValidationRequest' or a hydration request
   *                    'HnsOnHydrationRequest'. The validation request will validate the migration whereas the hydration
   *                    request will migrate the account.
   * @param options The options parameters.
   */
  beginHierarchicalNamespaceMigrationAndWait(
    resourceGroupName: string,
    accountName: string,
    requestType: string,
    options?: StorageAccountsHierarchicalNamespaceMigrationOptionalParams
  ): Promise<void>;
  /**
   * Abort live Migration of storage account to enable Hns
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param options The options parameters.
   */
  beginAbortHierarchicalNamespaceMigration(
    resourceGroupName: string,
    accountName: string,
    options?: StorageAccountsAbortHierarchicalNamespaceMigrationOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Abort live Migration of storage account to enable Hns
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param options The options parameters.
   */
  beginAbortHierarchicalNamespaceMigrationAndWait(
    resourceGroupName: string,
    accountName: string,
    options?: StorageAccountsAbortHierarchicalNamespaceMigrationOptionalParams
  ): Promise<void>;
  /**
   * Restore blobs in the specified blob ranges
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param parameters The parameters to provide for restore blob ranges.
   * @param options The options parameters.
   */
  beginRestoreBlobRanges(
    resourceGroupName: string,
    accountName: string,
    parameters: BlobRestoreParameters,
    options?: StorageAccountsRestoreBlobRangesOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<StorageAccountsRestoreBlobRangesResponse>,
      StorageAccountsRestoreBlobRangesResponse
    >
  >;
  /**
   * Restore blobs in the specified blob ranges
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param parameters The parameters to provide for restore blob ranges.
   * @param options The options parameters.
   */
  beginRestoreBlobRangesAndWait(
    resourceGroupName: string,
    accountName: string,
    parameters: BlobRestoreParameters,
    options?: StorageAccountsRestoreBlobRangesOptionalParams
  ): Promise<StorageAccountsRestoreBlobRangesResponse>;
  /**
   * Revoke user delegation keys.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param options The options parameters.
   */
  revokeUserDelegationKeys(
    resourceGroupName: string,
    accountName: string,
    options?: StorageAccountsRevokeUserDelegationKeysOptionalParams
  ): Promise<void>;
}
