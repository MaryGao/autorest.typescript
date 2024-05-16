// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  OperationsList200Response,
  OperationsListDefaultResponse,
  CatalogsGet200Response,
  CatalogsGetDefaultResponse,
  CatalogsCreateOrUpdate200Response,
  CatalogsCreateOrUpdate201Response,
  CatalogsCreateOrUpdateLogicalResponse,
  CatalogsCreateOrUpdateDefaultResponse,
  CatalogsUpdate200Response,
  CatalogsUpdateDefaultResponse,
  CatalogsDelete200Response,
  CatalogsDelete202Response,
  CatalogsDelete204Response,
  CatalogsDeleteLogicalResponse,
  CatalogsDeleteDefaultResponse,
  CatalogsListByResourceGroup200Response,
  CatalogsListByResourceGroupDefaultResponse,
  CatalogsListBySubscription200Response,
  CatalogsListBySubscriptionDefaultResponse,
  CatalogsCountDevices200Response,
  CatalogsCountDevicesDefaultResponse,
  CatalogsListDeployments200Response,
  CatalogsListDeploymentsDefaultResponse,
  CatalogsListDeviceGroups200Response,
  CatalogsListDeviceGroupsDefaultResponse,
  CatalogsListDeviceInsights200Response,
  CatalogsListDeviceInsightsDefaultResponse,
  CatalogsListDevices200Response,
  CatalogsListDevicesDefaultResponse,
  CatalogsUploadImage202Response,
  CatalogsUploadImageLogicalResponse,
  CatalogsUploadImageDefaultResponse,
  CertificatesGet200Response,
  CertificatesGetDefaultResponse,
  CertificatesListByCatalog200Response,
  CertificatesListByCatalogDefaultResponse,
  CertificatesRetrieveCertChain200Response,
  CertificatesRetrieveCertChainDefaultResponse,
  CertificatesRetrieveProofOfPossessionNonce200Response,
  CertificatesRetrieveProofOfPossessionNonceDefaultResponse,
  ImagesGet200Response,
  ImagesGetDefaultResponse,
  ImagesCreateOrUpdate200Response,
  ImagesCreateOrUpdate201Response,
  ImagesCreateOrUpdateLogicalResponse,
  ImagesCreateOrUpdateDefaultResponse,
  ImagesDelete200Response,
  ImagesDelete202Response,
  ImagesDelete204Response,
  ImagesDeleteLogicalResponse,
  ImagesDeleteDefaultResponse,
  ImagesListByCatalog200Response,
  ImagesListByCatalogDefaultResponse,
  ProductsGet200Response,
  ProductsGetDefaultResponse,
  ProductsCreateOrUpdate200Response,
  ProductsCreateOrUpdate201Response,
  ProductsCreateOrUpdateLogicalResponse,
  ProductsCreateOrUpdateDefaultResponse,
  ProductsUpdate200Response,
  ProductsUpdate202Response,
  ProductsUpdateLogicalResponse,
  ProductsUpdateDefaultResponse,
  ProductsDelete200Response,
  ProductsDelete202Response,
  ProductsDelete204Response,
  ProductsDeleteLogicalResponse,
  ProductsDeleteDefaultResponse,
  ProductsListByCatalog200Response,
  ProductsListByCatalogDefaultResponse,
  ProductsCountDevices200Response,
  ProductsCountDevicesDefaultResponse,
  ProductsGenerateDefaultDeviceGroups200Response,
  ProductsGenerateDefaultDeviceGroupsDefaultResponse,
  DeviceGroupsGet200Response,
  DeviceGroupsGetDefaultResponse,
  DeviceGroupsCreateOrUpdate200Response,
  DeviceGroupsCreateOrUpdate201Response,
  DeviceGroupsCreateOrUpdateLogicalResponse,
  DeviceGroupsCreateOrUpdateDefaultResponse,
  DeviceGroupsUpdate200Response,
  DeviceGroupsUpdate202Response,
  DeviceGroupsUpdateLogicalResponse,
  DeviceGroupsUpdateDefaultResponse,
  DeviceGroupsDelete200Response,
  DeviceGroupsDelete202Response,
  DeviceGroupsDelete204Response,
  DeviceGroupsDeleteLogicalResponse,
  DeviceGroupsDeleteDefaultResponse,
  DeviceGroupsListByProduct200Response,
  DeviceGroupsListByProductDefaultResponse,
  DeviceGroupsClaimDevices202Response,
  DeviceGroupsClaimDevicesLogicalResponse,
  DeviceGroupsClaimDevicesDefaultResponse,
  DeviceGroupsCountDevices200Response,
  DeviceGroupsCountDevicesDefaultResponse,
  DeploymentsGet200Response,
  DeploymentsGetDefaultResponse,
  DeploymentsCreateOrUpdate200Response,
  DeploymentsCreateOrUpdate201Response,
  DeploymentsCreateOrUpdateLogicalResponse,
  DeploymentsCreateOrUpdateDefaultResponse,
  DeploymentsDelete200Response,
  DeploymentsDelete202Response,
  DeploymentsDelete204Response,
  DeploymentsDeleteLogicalResponse,
  DeploymentsDeleteDefaultResponse,
  DeploymentsListByDeviceGroup200Response,
  DeploymentsListByDeviceGroupDefaultResponse,
  DevicesGet200Response,
  DevicesGetDefaultResponse,
  DevicesCreateOrUpdate200Response,
  DevicesCreateOrUpdate201Response,
  DevicesCreateOrUpdateLogicalResponse,
  DevicesCreateOrUpdateDefaultResponse,
  DevicesUpdate200Response,
  DevicesUpdate202Response,
  DevicesUpdateDefaultResponse,
  DevicesDelete200Response,
  DevicesDelete202Response,
  DevicesDelete204Response,
  DevicesDeleteLogicalResponse,
  DevicesDeleteDefaultResponse,
  DevicesListByDeviceGroup200Response,
  DevicesListByDeviceGroupDefaultResponse,
  DevicesGenerateCapabilityImage200Response,
  DevicesGenerateCapabilityImage202Response,
  DevicesGenerateCapabilityImageLogicalResponse,
  DevicesGenerateCapabilityImageDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "GET /providers/Microsoft.AzureSphere/operations": ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}":
    ["200", "201"],
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}":
    ["200"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}":
    ["200", "202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs":
    ["200"],
  "GET /subscriptions/{subscriptionId}/providers/Microsoft.AzureSphere/catalogs":
    ["200"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/countDevices":
    ["200"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/listDeployments":
    ["200"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/listDeviceGroups":
    ["200"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/listDeviceInsights":
    ["200"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/listDevices":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/uploadImage":
    ["200", "202"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/uploadImage":
    ["202"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/certificates/{serialNumber}":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/certificates":
    ["200"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/certificates/{serialNumber}/retrieveCertChain":
    ["200"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/certificates/{serialNumber}/retrieveProofOfPossessionNonce":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/images/{imageName}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/images/{imageName}":
    ["200", "201"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/images/{imageName}":
    ["200", "202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/images":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}":
    ["200", "201"],
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}":
    ["200", "202"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}":
    ["200", "202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products":
    ["200"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/countDevices":
    ["200"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/generateDefaultDeviceGroups":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}":
    ["200", "201"],
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}":
    ["200", "202"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}":
    ["200", "202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/claimDevices":
    ["200", "202"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/claimDevices":
    ["202"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/countDevices":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/deployments/{deploymentName}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/deployments/{deploymentName}":
    ["200", "201"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/deployments/{deploymentName}":
    ["200", "202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/deployments":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices/{deviceName}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices/{deviceName}":
    ["200", "201"],
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices/{deviceName}":
    ["200", "202"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices/{deviceName}":
    ["200", "202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices/{deviceName}/generateCapabilityImage":
    ["200", "202"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices/{deviceName}/generateCapabilityImage":
    ["200", "202"],
};

export function isUnexpected(
  response: OperationsList200Response | OperationsListDefaultResponse,
): response is OperationsListDefaultResponse;
export function isUnexpected(
  response: CatalogsGet200Response | CatalogsGetDefaultResponse,
): response is CatalogsGetDefaultResponse;
export function isUnexpected(
  response:
    | CatalogsCreateOrUpdate200Response
    | CatalogsCreateOrUpdate201Response
    | CatalogsCreateOrUpdateLogicalResponse
    | CatalogsCreateOrUpdateDefaultResponse,
): response is CatalogsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response: CatalogsUpdate200Response | CatalogsUpdateDefaultResponse,
): response is CatalogsUpdateDefaultResponse;
export function isUnexpected(
  response:
    | CatalogsDelete200Response
    | CatalogsDelete202Response
    | CatalogsDelete204Response
    | CatalogsDeleteLogicalResponse
    | CatalogsDeleteDefaultResponse,
): response is CatalogsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | CatalogsListByResourceGroup200Response
    | CatalogsListByResourceGroupDefaultResponse,
): response is CatalogsListByResourceGroupDefaultResponse;
export function isUnexpected(
  response:
    | CatalogsListBySubscription200Response
    | CatalogsListBySubscriptionDefaultResponse,
): response is CatalogsListBySubscriptionDefaultResponse;
export function isUnexpected(
  response:
    | CatalogsCountDevices200Response
    | CatalogsCountDevicesDefaultResponse,
): response is CatalogsCountDevicesDefaultResponse;
export function isUnexpected(
  response:
    | CatalogsListDeployments200Response
    | CatalogsListDeploymentsDefaultResponse,
): response is CatalogsListDeploymentsDefaultResponse;
export function isUnexpected(
  response:
    | CatalogsListDeviceGroups200Response
    | CatalogsListDeviceGroupsDefaultResponse,
): response is CatalogsListDeviceGroupsDefaultResponse;
export function isUnexpected(
  response:
    | CatalogsListDeviceInsights200Response
    | CatalogsListDeviceInsightsDefaultResponse,
): response is CatalogsListDeviceInsightsDefaultResponse;
export function isUnexpected(
  response: CatalogsListDevices200Response | CatalogsListDevicesDefaultResponse,
): response is CatalogsListDevicesDefaultResponse;
export function isUnexpected(
  response:
    | CatalogsUploadImage202Response
    | CatalogsUploadImageLogicalResponse
    | CatalogsUploadImageDefaultResponse,
): response is CatalogsUploadImageDefaultResponse;
export function isUnexpected(
  response: CertificatesGet200Response | CertificatesGetDefaultResponse,
): response is CertificatesGetDefaultResponse;
export function isUnexpected(
  response:
    | CertificatesListByCatalog200Response
    | CertificatesListByCatalogDefaultResponse,
): response is CertificatesListByCatalogDefaultResponse;
export function isUnexpected(
  response:
    | CertificatesRetrieveCertChain200Response
    | CertificatesRetrieveCertChainDefaultResponse,
): response is CertificatesRetrieveCertChainDefaultResponse;
export function isUnexpected(
  response:
    | CertificatesRetrieveProofOfPossessionNonce200Response
    | CertificatesRetrieveProofOfPossessionNonceDefaultResponse,
): response is CertificatesRetrieveProofOfPossessionNonceDefaultResponse;
export function isUnexpected(
  response: ImagesGet200Response | ImagesGetDefaultResponse,
): response is ImagesGetDefaultResponse;
export function isUnexpected(
  response:
    | ImagesCreateOrUpdate200Response
    | ImagesCreateOrUpdate201Response
    | ImagesCreateOrUpdateLogicalResponse
    | ImagesCreateOrUpdateDefaultResponse,
): response is ImagesCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | ImagesDelete200Response
    | ImagesDelete202Response
    | ImagesDelete204Response
    | ImagesDeleteLogicalResponse
    | ImagesDeleteDefaultResponse,
): response is ImagesDeleteDefaultResponse;
export function isUnexpected(
  response: ImagesListByCatalog200Response | ImagesListByCatalogDefaultResponse,
): response is ImagesListByCatalogDefaultResponse;
export function isUnexpected(
  response: ProductsGet200Response | ProductsGetDefaultResponse,
): response is ProductsGetDefaultResponse;
export function isUnexpected(
  response:
    | ProductsCreateOrUpdate200Response
    | ProductsCreateOrUpdate201Response
    | ProductsCreateOrUpdateLogicalResponse
    | ProductsCreateOrUpdateDefaultResponse,
): response is ProductsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | ProductsUpdate200Response
    | ProductsUpdate202Response
    | ProductsUpdateLogicalResponse
    | ProductsUpdateDefaultResponse,
): response is ProductsUpdateDefaultResponse;
export function isUnexpected(
  response:
    | ProductsDelete200Response
    | ProductsDelete202Response
    | ProductsDelete204Response
    | ProductsDeleteLogicalResponse
    | ProductsDeleteDefaultResponse,
): response is ProductsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | ProductsListByCatalog200Response
    | ProductsListByCatalogDefaultResponse,
): response is ProductsListByCatalogDefaultResponse;
export function isUnexpected(
  response:
    | ProductsCountDevices200Response
    | ProductsCountDevicesDefaultResponse,
): response is ProductsCountDevicesDefaultResponse;
export function isUnexpected(
  response:
    | ProductsGenerateDefaultDeviceGroups200Response
    | ProductsGenerateDefaultDeviceGroupsDefaultResponse,
): response is ProductsGenerateDefaultDeviceGroupsDefaultResponse;
export function isUnexpected(
  response: DeviceGroupsGet200Response | DeviceGroupsGetDefaultResponse,
): response is DeviceGroupsGetDefaultResponse;
export function isUnexpected(
  response:
    | DeviceGroupsCreateOrUpdate200Response
    | DeviceGroupsCreateOrUpdate201Response
    | DeviceGroupsCreateOrUpdateLogicalResponse
    | DeviceGroupsCreateOrUpdateDefaultResponse,
): response is DeviceGroupsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | DeviceGroupsUpdate200Response
    | DeviceGroupsUpdate202Response
    | DeviceGroupsUpdateLogicalResponse
    | DeviceGroupsUpdateDefaultResponse,
): response is DeviceGroupsUpdateDefaultResponse;
export function isUnexpected(
  response:
    | DeviceGroupsDelete200Response
    | DeviceGroupsDelete202Response
    | DeviceGroupsDelete204Response
    | DeviceGroupsDeleteLogicalResponse
    | DeviceGroupsDeleteDefaultResponse,
): response is DeviceGroupsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | DeviceGroupsListByProduct200Response
    | DeviceGroupsListByProductDefaultResponse,
): response is DeviceGroupsListByProductDefaultResponse;
export function isUnexpected(
  response:
    | DeviceGroupsClaimDevices202Response
    | DeviceGroupsClaimDevicesLogicalResponse
    | DeviceGroupsClaimDevicesDefaultResponse,
): response is DeviceGroupsClaimDevicesDefaultResponse;
export function isUnexpected(
  response:
    | DeviceGroupsCountDevices200Response
    | DeviceGroupsCountDevicesDefaultResponse,
): response is DeviceGroupsCountDevicesDefaultResponse;
export function isUnexpected(
  response: DeploymentsGet200Response | DeploymentsGetDefaultResponse,
): response is DeploymentsGetDefaultResponse;
export function isUnexpected(
  response:
    | DeploymentsCreateOrUpdate200Response
    | DeploymentsCreateOrUpdate201Response
    | DeploymentsCreateOrUpdateLogicalResponse
    | DeploymentsCreateOrUpdateDefaultResponse,
): response is DeploymentsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | DeploymentsDelete200Response
    | DeploymentsDelete202Response
    | DeploymentsDelete204Response
    | DeploymentsDeleteLogicalResponse
    | DeploymentsDeleteDefaultResponse,
): response is DeploymentsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | DeploymentsListByDeviceGroup200Response
    | DeploymentsListByDeviceGroupDefaultResponse,
): response is DeploymentsListByDeviceGroupDefaultResponse;
export function isUnexpected(
  response: DevicesGet200Response | DevicesGetDefaultResponse,
): response is DevicesGetDefaultResponse;
export function isUnexpected(
  response:
    | DevicesCreateOrUpdate200Response
    | DevicesCreateOrUpdate201Response
    | DevicesCreateOrUpdateLogicalResponse
    | DevicesCreateOrUpdateDefaultResponse,
): response is DevicesCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | DevicesUpdate200Response
    | DevicesUpdate202Response
    | DevicesUpdateDefaultResponse,
): response is DevicesUpdateDefaultResponse;
export function isUnexpected(
  response:
    | DevicesDelete200Response
    | DevicesDelete202Response
    | DevicesDelete204Response
    | DevicesDeleteLogicalResponse
    | DevicesDeleteDefaultResponse,
): response is DevicesDeleteDefaultResponse;
export function isUnexpected(
  response:
    | DevicesListByDeviceGroup200Response
    | DevicesListByDeviceGroupDefaultResponse,
): response is DevicesListByDeviceGroupDefaultResponse;
export function isUnexpected(
  response:
    | DevicesGenerateCapabilityImage200Response
    | DevicesGenerateCapabilityImage202Response
    | DevicesGenerateCapabilityImageLogicalResponse
    | DevicesGenerateCapabilityImageDefaultResponse,
): response is DevicesGenerateCapabilityImageDefaultResponse;
export function isUnexpected(
  response:
    | OperationsList200Response
    | OperationsListDefaultResponse
    | CatalogsGet200Response
    | CatalogsGetDefaultResponse
    | CatalogsCreateOrUpdate200Response
    | CatalogsCreateOrUpdate201Response
    | CatalogsCreateOrUpdateLogicalResponse
    | CatalogsCreateOrUpdateDefaultResponse
    | CatalogsUpdate200Response
    | CatalogsUpdateDefaultResponse
    | CatalogsDelete200Response
    | CatalogsDelete202Response
    | CatalogsDelete204Response
    | CatalogsDeleteLogicalResponse
    | CatalogsDeleteDefaultResponse
    | CatalogsListByResourceGroup200Response
    | CatalogsListByResourceGroupDefaultResponse
    | CatalogsListBySubscription200Response
    | CatalogsListBySubscriptionDefaultResponse
    | CatalogsCountDevices200Response
    | CatalogsCountDevicesDefaultResponse
    | CatalogsListDeployments200Response
    | CatalogsListDeploymentsDefaultResponse
    | CatalogsListDeviceGroups200Response
    | CatalogsListDeviceGroupsDefaultResponse
    | CatalogsListDeviceInsights200Response
    | CatalogsListDeviceInsightsDefaultResponse
    | CatalogsListDevices200Response
    | CatalogsListDevicesDefaultResponse
    | CatalogsUploadImage202Response
    | CatalogsUploadImageLogicalResponse
    | CatalogsUploadImageDefaultResponse
    | CertificatesGet200Response
    | CertificatesGetDefaultResponse
    | CertificatesListByCatalog200Response
    | CertificatesListByCatalogDefaultResponse
    | CertificatesRetrieveCertChain200Response
    | CertificatesRetrieveCertChainDefaultResponse
    | CertificatesRetrieveProofOfPossessionNonce200Response
    | CertificatesRetrieveProofOfPossessionNonceDefaultResponse
    | ImagesGet200Response
    | ImagesGetDefaultResponse
    | ImagesCreateOrUpdate200Response
    | ImagesCreateOrUpdate201Response
    | ImagesCreateOrUpdateLogicalResponse
    | ImagesCreateOrUpdateDefaultResponse
    | ImagesDelete200Response
    | ImagesDelete202Response
    | ImagesDelete204Response
    | ImagesDeleteLogicalResponse
    | ImagesDeleteDefaultResponse
    | ImagesListByCatalog200Response
    | ImagesListByCatalogDefaultResponse
    | ProductsGet200Response
    | ProductsGetDefaultResponse
    | ProductsCreateOrUpdate200Response
    | ProductsCreateOrUpdate201Response
    | ProductsCreateOrUpdateLogicalResponse
    | ProductsCreateOrUpdateDefaultResponse
    | ProductsUpdate200Response
    | ProductsUpdate202Response
    | ProductsUpdateLogicalResponse
    | ProductsUpdateDefaultResponse
    | ProductsDelete200Response
    | ProductsDelete202Response
    | ProductsDelete204Response
    | ProductsDeleteLogicalResponse
    | ProductsDeleteDefaultResponse
    | ProductsListByCatalog200Response
    | ProductsListByCatalogDefaultResponse
    | ProductsCountDevices200Response
    | ProductsCountDevicesDefaultResponse
    | ProductsGenerateDefaultDeviceGroups200Response
    | ProductsGenerateDefaultDeviceGroupsDefaultResponse
    | DeviceGroupsGet200Response
    | DeviceGroupsGetDefaultResponse
    | DeviceGroupsCreateOrUpdate200Response
    | DeviceGroupsCreateOrUpdate201Response
    | DeviceGroupsCreateOrUpdateLogicalResponse
    | DeviceGroupsCreateOrUpdateDefaultResponse
    | DeviceGroupsUpdate200Response
    | DeviceGroupsUpdate202Response
    | DeviceGroupsUpdateLogicalResponse
    | DeviceGroupsUpdateDefaultResponse
    | DeviceGroupsDelete200Response
    | DeviceGroupsDelete202Response
    | DeviceGroupsDelete204Response
    | DeviceGroupsDeleteLogicalResponse
    | DeviceGroupsDeleteDefaultResponse
    | DeviceGroupsListByProduct200Response
    | DeviceGroupsListByProductDefaultResponse
    | DeviceGroupsClaimDevices202Response
    | DeviceGroupsClaimDevicesLogicalResponse
    | DeviceGroupsClaimDevicesDefaultResponse
    | DeviceGroupsCountDevices200Response
    | DeviceGroupsCountDevicesDefaultResponse
    | DeploymentsGet200Response
    | DeploymentsGetDefaultResponse
    | DeploymentsCreateOrUpdate200Response
    | DeploymentsCreateOrUpdate201Response
    | DeploymentsCreateOrUpdateLogicalResponse
    | DeploymentsCreateOrUpdateDefaultResponse
    | DeploymentsDelete200Response
    | DeploymentsDelete202Response
    | DeploymentsDelete204Response
    | DeploymentsDeleteLogicalResponse
    | DeploymentsDeleteDefaultResponse
    | DeploymentsListByDeviceGroup200Response
    | DeploymentsListByDeviceGroupDefaultResponse
    | DevicesGet200Response
    | DevicesGetDefaultResponse
    | DevicesCreateOrUpdate200Response
    | DevicesCreateOrUpdate201Response
    | DevicesCreateOrUpdateLogicalResponse
    | DevicesCreateOrUpdateDefaultResponse
    | DevicesUpdate200Response
    | DevicesUpdate202Response
    | DevicesUpdateDefaultResponse
    | DevicesDelete200Response
    | DevicesDelete202Response
    | DevicesDelete204Response
    | DevicesDeleteLogicalResponse
    | DevicesDeleteDefaultResponse
    | DevicesListByDeviceGroup200Response
    | DevicesListByDeviceGroupDefaultResponse
    | DevicesGenerateCapabilityImage200Response
    | DevicesGenerateCapabilityImage202Response
    | DevicesGenerateCapabilityImageLogicalResponse
    | DevicesGenerateCapabilityImageDefaultResponse,
): response is
  | OperationsListDefaultResponse
  | CatalogsGetDefaultResponse
  | CatalogsCreateOrUpdateDefaultResponse
  | CatalogsUpdateDefaultResponse
  | CatalogsDeleteDefaultResponse
  | CatalogsListByResourceGroupDefaultResponse
  | CatalogsListBySubscriptionDefaultResponse
  | CatalogsCountDevicesDefaultResponse
  | CatalogsListDeploymentsDefaultResponse
  | CatalogsListDeviceGroupsDefaultResponse
  | CatalogsListDeviceInsightsDefaultResponse
  | CatalogsListDevicesDefaultResponse
  | CatalogsUploadImageDefaultResponse
  | CertificatesGetDefaultResponse
  | CertificatesListByCatalogDefaultResponse
  | CertificatesRetrieveCertChainDefaultResponse
  | CertificatesRetrieveProofOfPossessionNonceDefaultResponse
  | ImagesGetDefaultResponse
  | ImagesCreateOrUpdateDefaultResponse
  | ImagesDeleteDefaultResponse
  | ImagesListByCatalogDefaultResponse
  | ProductsGetDefaultResponse
  | ProductsCreateOrUpdateDefaultResponse
  | ProductsUpdateDefaultResponse
  | ProductsDeleteDefaultResponse
  | ProductsListByCatalogDefaultResponse
  | ProductsCountDevicesDefaultResponse
  | ProductsGenerateDefaultDeviceGroupsDefaultResponse
  | DeviceGroupsGetDefaultResponse
  | DeviceGroupsCreateOrUpdateDefaultResponse
  | DeviceGroupsUpdateDefaultResponse
  | DeviceGroupsDeleteDefaultResponse
  | DeviceGroupsListByProductDefaultResponse
  | DeviceGroupsClaimDevicesDefaultResponse
  | DeviceGroupsCountDevicesDefaultResponse
  | DeploymentsGetDefaultResponse
  | DeploymentsCreateOrUpdateDefaultResponse
  | DeploymentsDeleteDefaultResponse
  | DeploymentsListByDeviceGroupDefaultResponse
  | DevicesGetDefaultResponse
  | DevicesCreateOrUpdateDefaultResponse
  | DevicesUpdateDefaultResponse
  | DevicesDeleteDefaultResponse
  | DevicesListByDeviceGroupDefaultResponse
  | DevicesGenerateCapabilityImageDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = getParametrizedPathSuccess(method, url.pathname);
  }
  return !pathDetails.includes(response.status);
}

function getParametrizedPathSuccess(method: string, path: string): string[] {
  const pathParts = path.split("/");

  // Traverse list to match the longest candidate
  // matchedLen: the length of candidate path
  // matchedValue: the matched status code array
  let matchedLen = -1,
    matchedValue: string[] = [];

  // Iterate the responseMap to find a match
  for (const [key, value] of Object.entries(responseMap)) {
    // Extracting the path from the map key which is in format
    // GET /path/foo
    if (!key.startsWith(method)) {
      continue;
    }
    const candidatePath = getPathFromMapKey(key);
    // Get each part of the url path
    const candidateParts = candidatePath.split("/");

    // track if we have found a match to return the values found.
    let found = true;
    for (
      let i = candidateParts.length - 1, j = pathParts.length - 1;
      i >= 1 && j >= 1;
      i--, j--
    ) {
      if (
        candidateParts[i]?.startsWith("{") &&
        candidateParts[i]?.indexOf("}") !== -1
      ) {
        const start = candidateParts[i]!.indexOf("}") + 1,
          end = candidateParts[i]?.length;
        // If the current part of the candidate is a "template" part
        // Try to use the suffix of pattern to match the path
        // {guid} ==> $
        // {guid}:export ==> :export$
        const isMatched = new RegExp(
          `${candidateParts[i]?.slice(start, end)}`,
        ).test(pathParts[j] || "");

        if (!isMatched) {
          found = false;
          break;
        }
        continue;
      }

      // If the candidate part is not a template and
      // the parts don't match mark the candidate as not found
      // to move on with the next candidate path.
      if (candidateParts[i] !== pathParts[j]) {
        found = false;
        break;
      }
    }

    // We finished evaluating the current candidate parts
    // Update the matched value if and only if we found the longer pattern
    if (found && candidatePath.length > matchedLen) {
      matchedLen = candidatePath.length;
      matchedValue = value;
    }
  }

  return matchedValue;
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}
