import { TokenCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { AzureSphereContext } from "../rest/index.js";
export interface AzureSphereClientOptions extends ClientOptions {
    /** The API version to use for this operation. */
    apiVersion?: string;
}
export { AzureSphereContext } from "../rest/index.js";
/** Azure Sphere resource management API. */
export declare function createAzureSphere(credential: TokenCredential, options?: AzureSphereClientOptions): AzureSphereContext;
//# sourceMappingURL=azureSphereContext.d.ts.map