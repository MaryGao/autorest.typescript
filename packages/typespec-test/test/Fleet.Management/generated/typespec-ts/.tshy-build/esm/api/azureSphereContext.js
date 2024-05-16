// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import getClient from "../rest/index.js";
/** Azure Sphere resource management API. */
export function createAzureSphere(credential, options = {}) {
    const clientContext = getClient(credential, options);
    return clientContext;
}
//# sourceMappingURL=azureSphereContext.js.map