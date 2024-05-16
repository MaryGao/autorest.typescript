// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { getOperationsOperations, } from "./classic/operations/index.js";
import { getCatalogsOperations, } from "./classic/catalogs/index.js";
import { getCertificatesOperations, } from "./classic/certificates/index.js";
import { getImagesOperations, } from "./classic/images/index.js";
import { getProductsOperations, } from "./classic/products/index.js";
import { getDeviceGroupsOperations, } from "./classic/deviceGroups/index.js";
import { getDeploymentsOperations, } from "./classic/deployments/index.js";
import { getDevicesOperations, } from "./classic/devices/index.js";
import { createAzureSphere, } from "./api/index.js";
export class AzureSphereClient {
    _client;
    /** The pipeline used by this client to make requests */
    pipeline;
    /** Azure Sphere resource management API. */
    constructor(credential, options = {}) {
        this._client = createAzureSphere(credential, options);
        this.pipeline = this._client.pipeline;
        this.operations = getOperationsOperations(this._client);
        this.catalogs = getCatalogsOperations(this._client);
        this.certificates = getCertificatesOperations(this._client);
        this.images = getImagesOperations(this._client);
        this.products = getProductsOperations(this._client);
        this.deviceGroups = getDeviceGroupsOperations(this._client);
        this.deployments = getDeploymentsOperations(this._client);
        this.devices = getDevicesOperations(this._client);
    }
    /** The operation groups for Operations */
    operations;
    /** The operation groups for Catalogs */
    catalogs;
    /** The operation groups for Certificates */
    certificates;
    /** The operation groups for Images */
    images;
    /** The operation groups for Products */
    products;
    /** The operation groups for DeviceGroups */
    deviceGroups;
    /** The operation groups for Deployments */
    deployments;
    /** The operation groups for Devices */
    devices;
}
//# sourceMappingURL=azureSphereClient.js.map