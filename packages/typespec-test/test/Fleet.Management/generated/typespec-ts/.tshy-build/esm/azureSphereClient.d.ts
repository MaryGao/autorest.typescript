import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import { OperationsOperations } from "./classic/operations/index.js";
import { CatalogsOperations } from "./classic/catalogs/index.js";
import { CertificatesOperations } from "./classic/certificates/index.js";
import { ImagesOperations } from "./classic/images/index.js";
import { ProductsOperations } from "./classic/products/index.js";
import { DeviceGroupsOperations } from "./classic/deviceGroups/index.js";
import { DeploymentsOperations } from "./classic/deployments/index.js";
import { DevicesOperations } from "./classic/devices/index.js";
import { AzureSphereClientOptions } from "./api/index.js";
export { AzureSphereClientOptions } from "./api/azureSphereContext.js";
export declare class AzureSphereClient {
    private _client;
    /** The pipeline used by this client to make requests */
    readonly pipeline: Pipeline;
    /** Azure Sphere resource management API. */
    constructor(credential: TokenCredential, options?: AzureSphereClientOptions);
    /** The operation groups for Operations */
    readonly operations: OperationsOperations;
    /** The operation groups for Catalogs */
    readonly catalogs: CatalogsOperations;
    /** The operation groups for Certificates */
    readonly certificates: CertificatesOperations;
    /** The operation groups for Images */
    readonly images: ImagesOperations;
    /** The operation groups for Products */
    readonly products: ProductsOperations;
    /** The operation groups for DeviceGroups */
    readonly deviceGroups: DeviceGroupsOperations;
    /** The operation groups for Deployments */
    readonly deployments: DeploymentsOperations;
    /** The operation groups for Devices */
    readonly devices: DevicesOperations;
}
//# sourceMappingURL=azureSphereClient.d.ts.map