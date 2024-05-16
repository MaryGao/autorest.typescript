import { OperationsListParameters, CatalogsGetParameters, CatalogsCreateOrUpdateParameters, CatalogsUpdateParameters, CatalogsDeleteParameters, CatalogsListByResourceGroupParameters, CatalogsListBySubscriptionParameters, CatalogsCountDevicesParameters, CatalogsListDeploymentsParameters, CatalogsListDeviceGroupsParameters, CatalogsListDeviceInsightsParameters, CatalogsListDevicesParameters, CatalogsUploadImageParameters, CertificatesGetParameters, CertificatesListByCatalogParameters, CertificatesRetrieveCertChainParameters, CertificatesRetrieveProofOfPossessionNonceParameters, ImagesGetParameters, ImagesCreateOrUpdateParameters, ImagesDeleteParameters, ImagesListByCatalogParameters, ProductsGetParameters, ProductsCreateOrUpdateParameters, ProductsUpdateParameters, ProductsDeleteParameters, ProductsListByCatalogParameters, ProductsCountDevicesParameters, ProductsGenerateDefaultDeviceGroupsParameters, DeviceGroupsGetParameters, DeviceGroupsCreateOrUpdateParameters, DeviceGroupsUpdateParameters, DeviceGroupsDeleteParameters, DeviceGroupsListByProductParameters, DeviceGroupsClaimDevicesParameters, DeviceGroupsCountDevicesParameters, DeploymentsGetParameters, DeploymentsCreateOrUpdateParameters, DeploymentsDeleteParameters, DeploymentsListByDeviceGroupParameters, DevicesGetParameters, DevicesCreateOrUpdateParameters, DevicesUpdateParameters, DevicesDeleteParameters, DevicesListByDeviceGroupParameters, DevicesGenerateCapabilityImageParameters } from "./parameters.js";
import { OperationsList200Response, OperationsListDefaultResponse, CatalogsGet200Response, CatalogsGetDefaultResponse, CatalogsCreateOrUpdate200Response, CatalogsCreateOrUpdate201Response, CatalogsCreateOrUpdateDefaultResponse, CatalogsUpdate200Response, CatalogsUpdateDefaultResponse, CatalogsDelete200Response, CatalogsDelete202Response, CatalogsDelete204Response, CatalogsDeleteDefaultResponse, CatalogsListByResourceGroup200Response, CatalogsListByResourceGroupDefaultResponse, CatalogsListBySubscription200Response, CatalogsListBySubscriptionDefaultResponse, CatalogsCountDevices200Response, CatalogsCountDevicesDefaultResponse, CatalogsListDeployments200Response, CatalogsListDeploymentsDefaultResponse, CatalogsListDeviceGroups200Response, CatalogsListDeviceGroupsDefaultResponse, CatalogsListDeviceInsights200Response, CatalogsListDeviceInsightsDefaultResponse, CatalogsListDevices200Response, CatalogsListDevicesDefaultResponse, CatalogsUploadImage202Response, CatalogsUploadImageDefaultResponse, CertificatesGet200Response, CertificatesGetDefaultResponse, CertificatesListByCatalog200Response, CertificatesListByCatalogDefaultResponse, CertificatesRetrieveCertChain200Response, CertificatesRetrieveCertChainDefaultResponse, CertificatesRetrieveProofOfPossessionNonce200Response, CertificatesRetrieveProofOfPossessionNonceDefaultResponse, ImagesGet200Response, ImagesGetDefaultResponse, ImagesCreateOrUpdate200Response, ImagesCreateOrUpdate201Response, ImagesCreateOrUpdateDefaultResponse, ImagesDelete200Response, ImagesDelete202Response, ImagesDelete204Response, ImagesDeleteDefaultResponse, ImagesListByCatalog200Response, ImagesListByCatalogDefaultResponse, ProductsGet200Response, ProductsGetDefaultResponse, ProductsCreateOrUpdate200Response, ProductsCreateOrUpdate201Response, ProductsCreateOrUpdateDefaultResponse, ProductsUpdate200Response, ProductsUpdate202Response, ProductsUpdateDefaultResponse, ProductsDelete200Response, ProductsDelete202Response, ProductsDelete204Response, ProductsDeleteDefaultResponse, ProductsListByCatalog200Response, ProductsListByCatalogDefaultResponse, ProductsCountDevices200Response, ProductsCountDevicesDefaultResponse, ProductsGenerateDefaultDeviceGroups200Response, ProductsGenerateDefaultDeviceGroupsDefaultResponse, DeviceGroupsGet200Response, DeviceGroupsGetDefaultResponse, DeviceGroupsCreateOrUpdate200Response, DeviceGroupsCreateOrUpdate201Response, DeviceGroupsCreateOrUpdateDefaultResponse, DeviceGroupsUpdate200Response, DeviceGroupsUpdate202Response, DeviceGroupsUpdateDefaultResponse, DeviceGroupsDelete200Response, DeviceGroupsDelete202Response, DeviceGroupsDelete204Response, DeviceGroupsDeleteDefaultResponse, DeviceGroupsListByProduct200Response, DeviceGroupsListByProductDefaultResponse, DeviceGroupsClaimDevices202Response, DeviceGroupsClaimDevicesDefaultResponse, DeviceGroupsCountDevices200Response, DeviceGroupsCountDevicesDefaultResponse, DeploymentsGet200Response, DeploymentsGetDefaultResponse, DeploymentsCreateOrUpdate200Response, DeploymentsCreateOrUpdate201Response, DeploymentsCreateOrUpdateDefaultResponse, DeploymentsDelete200Response, DeploymentsDelete202Response, DeploymentsDelete204Response, DeploymentsDeleteDefaultResponse, DeploymentsListByDeviceGroup200Response, DeploymentsListByDeviceGroupDefaultResponse, DevicesGet200Response, DevicesGetDefaultResponse, DevicesCreateOrUpdate200Response, DevicesCreateOrUpdate201Response, DevicesCreateOrUpdateDefaultResponse, DevicesUpdate200Response, DevicesUpdate202Response, DevicesUpdateDefaultResponse, DevicesDelete200Response, DevicesDelete202Response, DevicesDelete204Response, DevicesDeleteDefaultResponse, DevicesListByDeviceGroup200Response, DevicesListByDeviceGroupDefaultResponse, DevicesGenerateCapabilityImage200Response, DevicesGenerateCapabilityImage202Response, DevicesGenerateCapabilityImageDefaultResponse } from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";
export interface OperationsList {
    /** List the operations for the provider */
    get(options?: OperationsListParameters): StreamableMethod<OperationsList200Response | OperationsListDefaultResponse>;
}
export interface CatalogsGet {
    /** Get a Catalog */
    get(options?: CatalogsGetParameters): StreamableMethod<CatalogsGet200Response | CatalogsGetDefaultResponse>;
    /** Create a Catalog */
    put(options: CatalogsCreateOrUpdateParameters): StreamableMethod<CatalogsCreateOrUpdate200Response | CatalogsCreateOrUpdate201Response | CatalogsCreateOrUpdateDefaultResponse>;
    /** Update a Catalog */
    patch(options: CatalogsUpdateParameters): StreamableMethod<CatalogsUpdate200Response | CatalogsUpdateDefaultResponse>;
    /** Delete a Catalog */
    delete(options?: CatalogsDeleteParameters): StreamableMethod<CatalogsDelete200Response | CatalogsDelete202Response | CatalogsDelete204Response | CatalogsDeleteDefaultResponse>;
}
export interface CatalogsListByResourceGroup {
    /** List Catalog resources by resource group */
    get(options?: CatalogsListByResourceGroupParameters): StreamableMethod<CatalogsListByResourceGroup200Response | CatalogsListByResourceGroupDefaultResponse>;
}
export interface CatalogsListBySubscription {
    /** List Catalog resources by subscription ID */
    get(options?: CatalogsListBySubscriptionParameters): StreamableMethod<CatalogsListBySubscription200Response | CatalogsListBySubscriptionDefaultResponse>;
}
export interface CatalogsCountDevices {
    /** Counts devices in catalog. */
    post(options: CatalogsCountDevicesParameters): StreamableMethod<CatalogsCountDevices200Response | CatalogsCountDevicesDefaultResponse>;
}
export interface CatalogsListDeployments {
    /** Lists deployments for catalog. */
    post(options: CatalogsListDeploymentsParameters): StreamableMethod<CatalogsListDeployments200Response | CatalogsListDeploymentsDefaultResponse>;
}
export interface CatalogsListDeviceGroups {
    /** List the device groups for the catalog. */
    post(options: CatalogsListDeviceGroupsParameters): StreamableMethod<CatalogsListDeviceGroups200Response | CatalogsListDeviceGroupsDefaultResponse>;
}
export interface CatalogsListDeviceInsights {
    /** Lists device insights for catalog. */
    post(options: CatalogsListDeviceInsightsParameters): StreamableMethod<CatalogsListDeviceInsights200Response | CatalogsListDeviceInsightsDefaultResponse>;
}
export interface CatalogsListDevices {
    /** Lists devices for catalog. */
    post(options: CatalogsListDevicesParameters): StreamableMethod<CatalogsListDevices200Response | CatalogsListDevicesDefaultResponse>;
}
export interface CatalogsUploadImage {
    /** Creates an image. Use this action when the image ID is unknown. */
    post(options: CatalogsUploadImageParameters): StreamableMethod<CatalogsUploadImage202Response | CatalogsUploadImageDefaultResponse>;
}
export interface CertificatesGet {
    /** Get a Certificate */
    get(options?: CertificatesGetParameters): StreamableMethod<CertificatesGet200Response | CertificatesGetDefaultResponse>;
}
export interface CertificatesListByCatalog {
    /** List Certificate resources by Catalog */
    get(options?: CertificatesListByCatalogParameters): StreamableMethod<CertificatesListByCatalog200Response | CertificatesListByCatalogDefaultResponse>;
}
export interface CertificatesRetrieveCertChain {
    /** Retrieves cert chain. */
    post(options: CertificatesRetrieveCertChainParameters): StreamableMethod<CertificatesRetrieveCertChain200Response | CertificatesRetrieveCertChainDefaultResponse>;
}
export interface CertificatesRetrieveProofOfPossessionNonce {
    /** Gets the proof of possession nonce. */
    post(options: CertificatesRetrieveProofOfPossessionNonceParameters): StreamableMethod<CertificatesRetrieveProofOfPossessionNonce200Response | CertificatesRetrieveProofOfPossessionNonceDefaultResponse>;
}
export interface ImagesGet {
    /** Get a Image */
    get(options?: ImagesGetParameters): StreamableMethod<ImagesGet200Response | ImagesGetDefaultResponse>;
    /** Create a Image */
    put(options: ImagesCreateOrUpdateParameters): StreamableMethod<ImagesCreateOrUpdate200Response | ImagesCreateOrUpdate201Response | ImagesCreateOrUpdateDefaultResponse>;
    /** Delete a Image */
    delete(options?: ImagesDeleteParameters): StreamableMethod<ImagesDelete200Response | ImagesDelete202Response | ImagesDelete204Response | ImagesDeleteDefaultResponse>;
}
export interface ImagesListByCatalog {
    /** List Image resources by Catalog */
    get(options?: ImagesListByCatalogParameters): StreamableMethod<ImagesListByCatalog200Response | ImagesListByCatalogDefaultResponse>;
}
export interface ProductsGet {
    /** Get a Product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
    get(options?: ProductsGetParameters): StreamableMethod<ProductsGet200Response | ProductsGetDefaultResponse>;
    /** Create a Product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
    put(options: ProductsCreateOrUpdateParameters): StreamableMethod<ProductsCreateOrUpdate200Response | ProductsCreateOrUpdate201Response | ProductsCreateOrUpdateDefaultResponse>;
    /** Update a Product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
    patch(options: ProductsUpdateParameters): StreamableMethod<ProductsUpdate200Response | ProductsUpdate202Response | ProductsUpdateDefaultResponse>;
    /** Delete a Product. '.default' and '.unassigned' are system defined values and cannot be used for product name' */
    delete(options?: ProductsDeleteParameters): StreamableMethod<ProductsDelete200Response | ProductsDelete202Response | ProductsDelete204Response | ProductsDeleteDefaultResponse>;
}
export interface ProductsListByCatalog {
    /** List Product resources by Catalog */
    get(options?: ProductsListByCatalogParameters): StreamableMethod<ProductsListByCatalog200Response | ProductsListByCatalogDefaultResponse>;
}
export interface ProductsCountDevices {
    /** Counts devices in product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
    post(options: ProductsCountDevicesParameters): StreamableMethod<ProductsCountDevices200Response | ProductsCountDevicesDefaultResponse>;
}
export interface ProductsGenerateDefaultDeviceGroups {
    /** Generates default device groups for the product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
    post(options: ProductsGenerateDefaultDeviceGroupsParameters): StreamableMethod<ProductsGenerateDefaultDeviceGroups200Response | ProductsGenerateDefaultDeviceGroupsDefaultResponse>;
}
export interface DeviceGroupsGet {
    /** Get a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
    get(options?: DeviceGroupsGetParameters): StreamableMethod<DeviceGroupsGet200Response | DeviceGroupsGetDefaultResponse>;
    /** Create a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
    put(options: DeviceGroupsCreateOrUpdateParameters): StreamableMethod<DeviceGroupsCreateOrUpdate200Response | DeviceGroupsCreateOrUpdate201Response | DeviceGroupsCreateOrUpdateDefaultResponse>;
    /** Update a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
    patch(options: DeviceGroupsUpdateParameters): StreamableMethod<DeviceGroupsUpdate200Response | DeviceGroupsUpdate202Response | DeviceGroupsUpdateDefaultResponse>;
    /** Delete a DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
    delete(options?: DeviceGroupsDeleteParameters): StreamableMethod<DeviceGroupsDelete200Response | DeviceGroupsDelete202Response | DeviceGroupsDelete204Response | DeviceGroupsDeleteDefaultResponse>;
}
export interface DeviceGroupsListByProduct {
    /** List DeviceGroup resources by Product. '.default' and '.unassigned' are system defined values and cannot be used for product name. */
    get(options?: DeviceGroupsListByProductParameters): StreamableMethod<DeviceGroupsListByProduct200Response | DeviceGroupsListByProductDefaultResponse>;
}
export interface DeviceGroupsClaimDevices {
    /** Bulk claims the devices. Use '.unassigned' or '.default' for the device group and product names when bulk claiming devices to a catalog only. */
    post(options: DeviceGroupsClaimDevicesParameters): StreamableMethod<DeviceGroupsClaimDevices202Response | DeviceGroupsClaimDevicesDefaultResponse>;
}
export interface DeviceGroupsCountDevices {
    /** Counts devices in device group. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
    post(options: DeviceGroupsCountDevicesParameters): StreamableMethod<DeviceGroupsCountDevices200Response | DeviceGroupsCountDevicesDefaultResponse>;
}
export interface DeploymentsGet {
    /** Get a Deployment. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
    get(options?: DeploymentsGetParameters): StreamableMethod<DeploymentsGet200Response | DeploymentsGetDefaultResponse>;
    /** Create a Deployment. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
    put(options: DeploymentsCreateOrUpdateParameters): StreamableMethod<DeploymentsCreateOrUpdate200Response | DeploymentsCreateOrUpdate201Response | DeploymentsCreateOrUpdateDefaultResponse>;
    /** Delete a Deployment. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
    delete(options?: DeploymentsDeleteParameters): StreamableMethod<DeploymentsDelete200Response | DeploymentsDelete202Response | DeploymentsDelete204Response | DeploymentsDeleteDefaultResponse>;
}
export interface DeploymentsListByDeviceGroup {
    /** List Deployment resources by DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
    get(options?: DeploymentsListByDeviceGroupParameters): StreamableMethod<DeploymentsListByDeviceGroup200Response | DeploymentsListByDeviceGroupDefaultResponse>;
}
export interface DevicesGet {
    /** Get a Device. Use '.unassigned' or '.default' for the device group and product names when a device does not belong to a device group and product. */
    get(options?: DevicesGetParameters): StreamableMethod<DevicesGet200Response | DevicesGetDefaultResponse>;
    /** Create a Device. Use '.unassigned' or '.default' for the device group and product names to claim a device to the catalog only. */
    put(options: DevicesCreateOrUpdateParameters): StreamableMethod<DevicesCreateOrUpdate200Response | DevicesCreateOrUpdate201Response | DevicesCreateOrUpdateDefaultResponse>;
    /** Update a Device. Use '.unassigned' or '.default' for the device group and product names to move a device to the catalog level. */
    patch(options: DevicesUpdateParameters): StreamableMethod<DevicesUpdate200Response | DevicesUpdate202Response | DevicesUpdateDefaultResponse>;
    /** Delete a Device */
    delete(options?: DevicesDeleteParameters): StreamableMethod<DevicesDelete200Response | DevicesDelete202Response | DevicesDelete204Response | DevicesDeleteDefaultResponse>;
}
export interface DevicesListByDeviceGroup {
    /** List Device resources by DeviceGroup. '.default' and '.unassigned' are system defined values and cannot be used for product or device group name. */
    get(options?: DevicesListByDeviceGroupParameters): StreamableMethod<DevicesListByDeviceGroup200Response | DevicesListByDeviceGroupDefaultResponse>;
}
export interface DevicesGenerateCapabilityImage {
    /** Generates the capability image for the device. Use '.unassigned' or '.default' for the device group and product names to generate the image for a device that does not belong to a specific device group and product. */
    post(options: DevicesGenerateCapabilityImageParameters): StreamableMethod<DevicesGenerateCapabilityImage200Response | DevicesGenerateCapabilityImage202Response | DevicesGenerateCapabilityImageDefaultResponse>;
}
export interface Routes {
    /** Resource for '/providers/Microsoft.AzureSphere/operations' has methods for the following verbs: get */
    (path: "/providers/Microsoft.AzureSphere/operations"): OperationsList;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AzureSphere/catalogs/\{catalogName\}' has methods for the following verbs: get, put, patch, delete */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}", subscriptionId: string, resourceGroupName: string, catalogName: string): CatalogsGet;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AzureSphere/catalogs' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs", subscriptionId: string, resourceGroupName: string): CatalogsListByResourceGroup;
    /** Resource for '/subscriptions/\{subscriptionId\}/providers/Microsoft.AzureSphere/catalogs' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureSphere/catalogs", subscriptionId: string): CatalogsListBySubscription;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AzureSphere/catalogs/\{catalogName\}/countDevices' has methods for the following verbs: post */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/countDevices", subscriptionId: string, resourceGroupName: string, catalogName: string): CatalogsCountDevices;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AzureSphere/catalogs/\{catalogName\}/listDeployments' has methods for the following verbs: post */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/listDeployments", subscriptionId: string, resourceGroupName: string, catalogName: string): CatalogsListDeployments;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AzureSphere/catalogs/\{catalogName\}/listDeviceGroups' has methods for the following verbs: post */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/listDeviceGroups", subscriptionId: string, resourceGroupName: string, catalogName: string): CatalogsListDeviceGroups;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AzureSphere/catalogs/\{catalogName\}/listDeviceInsights' has methods for the following verbs: post */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/listDeviceInsights", subscriptionId: string, resourceGroupName: string, catalogName: string): CatalogsListDeviceInsights;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AzureSphere/catalogs/\{catalogName\}/listDevices' has methods for the following verbs: post */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/listDevices", subscriptionId: string, resourceGroupName: string, catalogName: string): CatalogsListDevices;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AzureSphere/catalogs/\{catalogName\}/uploadImage' has methods for the following verbs: post */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/uploadImage", subscriptionId: string, resourceGroupName: string, catalogName: string): CatalogsUploadImage;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AzureSphere/catalogs/\{catalogName\}/certificates/\{serialNumber\}' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/certificates/{serialNumber}", subscriptionId: string, resourceGroupName: string, catalogName: string, serialNumber: string): CertificatesGet;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AzureSphere/catalogs/\{catalogName\}/certificates' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/certificates", subscriptionId: string, resourceGroupName: string, catalogName: string): CertificatesListByCatalog;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AzureSphere/catalogs/\{catalogName\}/certificates/\{serialNumber\}/retrieveCertChain' has methods for the following verbs: post */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/certificates/{serialNumber}/retrieveCertChain", subscriptionId: string, resourceGroupName: string, catalogName: string, serialNumber: string): CertificatesRetrieveCertChain;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AzureSphere/catalogs/\{catalogName\}/certificates/\{serialNumber\}/retrieveProofOfPossessionNonce' has methods for the following verbs: post */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/certificates/{serialNumber}/retrieveProofOfPossessionNonce", subscriptionId: string, resourceGroupName: string, catalogName: string, serialNumber: string): CertificatesRetrieveProofOfPossessionNonce;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AzureSphere/catalogs/\{catalogName\}/images/\{imageName\}' has methods for the following verbs: get, put, delete */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/images/{imageName}", subscriptionId: string, resourceGroupName: string, catalogName: string, imageName: string): ImagesGet;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AzureSphere/catalogs/\{catalogName\}/images' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/images", subscriptionId: string, resourceGroupName: string, catalogName: string): ImagesListByCatalog;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AzureSphere/catalogs/\{catalogName\}/products/\{productName\}' has methods for the following verbs: get, put, patch, delete */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}", subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string): ProductsGet;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AzureSphere/catalogs/\{catalogName\}/products' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products", subscriptionId: string, resourceGroupName: string, catalogName: string): ProductsListByCatalog;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AzureSphere/catalogs/\{catalogName\}/products/\{productName\}/countDevices' has methods for the following verbs: post */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/countDevices", subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string): ProductsCountDevices;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AzureSphere/catalogs/\{catalogName\}/products/\{productName\}/generateDefaultDeviceGroups' has methods for the following verbs: post */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/generateDefaultDeviceGroups", subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string): ProductsGenerateDefaultDeviceGroups;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AzureSphere/catalogs/\{catalogName\}/products/\{productName\}/deviceGroups/\{deviceGroupName\}' has methods for the following verbs: get, put, patch, delete */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}", subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string): DeviceGroupsGet;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AzureSphere/catalogs/\{catalogName\}/products/\{productName\}/deviceGroups' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups", subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string): DeviceGroupsListByProduct;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AzureSphere/catalogs/\{catalogName\}/products/\{productName\}/deviceGroups/\{deviceGroupName\}/claimDevices' has methods for the following verbs: post */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/claimDevices", subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string): DeviceGroupsClaimDevices;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AzureSphere/catalogs/\{catalogName\}/products/\{productName\}/deviceGroups/\{deviceGroupName\}/countDevices' has methods for the following verbs: post */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/countDevices", subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string): DeviceGroupsCountDevices;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AzureSphere/catalogs/\{catalogName\}/products/\{productName\}/deviceGroups/\{deviceGroupName\}/deployments/\{deploymentName\}' has methods for the following verbs: get, put, delete */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/deployments/{deploymentName}", subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, deploymentName: string): DeploymentsGet;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AzureSphere/catalogs/\{catalogName\}/products/\{productName\}/deviceGroups/\{deviceGroupName\}/deployments' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/deployments", subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string): DeploymentsListByDeviceGroup;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AzureSphere/catalogs/\{catalogName\}/products/\{productName\}/deviceGroups/\{deviceGroupName\}/devices/\{deviceName\}' has methods for the following verbs: get, put, patch, delete */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices/{deviceName}", subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, deviceName: string): DevicesGet;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AzureSphere/catalogs/\{catalogName\}/products/\{productName\}/deviceGroups/\{deviceGroupName\}/devices' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices", subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string): DevicesListByDeviceGroup;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AzureSphere/catalogs/\{catalogName\}/products/\{productName\}/deviceGroups/\{deviceGroupName\}/devices/\{deviceName\}/generateCapabilityImage' has methods for the following verbs: post */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/products/{productName}/deviceGroups/{deviceGroupName}/devices/{deviceName}/generateCapabilityImage", subscriptionId: string, resourceGroupName: string, catalogName: string, productName: string, deviceGroupName: string, deviceName: string): DevicesGenerateCapabilityImage;
}
export type AzureSphereContext = Client & {
    path: Routes;
};
//# sourceMappingURL=clientDefinitions.d.ts.map