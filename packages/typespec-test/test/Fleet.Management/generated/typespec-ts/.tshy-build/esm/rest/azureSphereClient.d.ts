import { ClientOptions } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";
import { AzureSphereContext } from "./clientDefinitions.js";
/**
 * Initialize a new instance of `AzureSphereContext`
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(credentials: TokenCredential, options?: ClientOptions): AzureSphereContext;
//# sourceMappingURL=azureSphereClient.d.ts.map