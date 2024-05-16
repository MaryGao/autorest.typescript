import { AzureSphereContext } from "../../api/azureSphereContext.js";
import { Certificate, CertificateChainResponse, ProofOfPossessionNonceRequest, ProofOfPossessionNonceResponse } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { CertificatesGetOptionalParams, CertificatesListByCatalogOptionalParams, CertificatesRetrieveCertChainOptionalParams, CertificatesRetrieveProofOfPossessionNonceOptionalParams } from "../../models/options.js";
export interface CertificatesOperations {
    get: (subscriptionId: string, resourceGroupName: string, catalogName: string, serialNumber: string, options?: CertificatesGetOptionalParams) => Promise<Certificate>;
    listByCatalog: (subscriptionId: string, resourceGroupName: string, catalogName: string, options?: CertificatesListByCatalogOptionalParams) => PagedAsyncIterableIterator<Certificate>;
    retrieveCertChain: (subscriptionId: string, resourceGroupName: string, catalogName: string, serialNumber: string, options?: CertificatesRetrieveCertChainOptionalParams) => Promise<CertificateChainResponse>;
    retrieveProofOfPossessionNonce: (subscriptionId: string, resourceGroupName: string, catalogName: string, serialNumber: string, body: ProofOfPossessionNonceRequest, options?: CertificatesRetrieveProofOfPossessionNonceOptionalParams) => Promise<ProofOfPossessionNonceResponse>;
}
export declare function getCertificates(context: AzureSphereContext): {
    get: (subscriptionId: string, resourceGroupName: string, catalogName: string, serialNumber: string, options?: CertificatesGetOptionalParams) => Promise<Certificate>;
    listByCatalog: (subscriptionId: string, resourceGroupName: string, catalogName: string, options?: CertificatesListByCatalogOptionalParams) => PagedAsyncIterableIterator<Certificate, Certificate[], import("../../models/pagingTypes.js").PageSettings>;
    retrieveCertChain: (subscriptionId: string, resourceGroupName: string, catalogName: string, serialNumber: string, options?: CertificatesRetrieveCertChainOptionalParams) => Promise<CertificateChainResponse>;
    retrieveProofOfPossessionNonce: (subscriptionId: string, resourceGroupName: string, catalogName: string, serialNumber: string, body: ProofOfPossessionNonceRequest, options?: CertificatesRetrieveProofOfPossessionNonceOptionalParams) => Promise<ProofOfPossessionNonceResponse>;
};
export declare function getCertificatesOperations(context: AzureSphereContext): CertificatesOperations;
//# sourceMappingURL=index.d.ts.map