// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { get, listByCatalog, retrieveCertChain, retrieveProofOfPossessionNonce, } from "../../api/certificates/index.js";
export function getCertificates(context) {
    return {
        get: (subscriptionId, resourceGroupName, catalogName, serialNumber, options) => get(context, subscriptionId, resourceGroupName, catalogName, serialNumber, options),
        listByCatalog: (subscriptionId, resourceGroupName, catalogName, options) => listByCatalog(context, subscriptionId, resourceGroupName, catalogName, options),
        retrieveCertChain: (subscriptionId, resourceGroupName, catalogName, serialNumber, options) => retrieveCertChain(context, subscriptionId, resourceGroupName, catalogName, serialNumber, options),
        retrieveProofOfPossessionNonce: (subscriptionId, resourceGroupName, catalogName, serialNumber, body, options) => retrieveProofOfPossessionNonce(context, subscriptionId, resourceGroupName, catalogName, serialNumber, body, options),
    };
}
export function getCertificatesOperations(context) {
    return {
        ...getCertificates(context),
    };
}
//# sourceMappingURL=index.js.map