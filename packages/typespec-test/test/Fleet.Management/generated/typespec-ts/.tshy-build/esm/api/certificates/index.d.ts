import { Certificate, CertificateListResult, CertificateChainResponse, ProofOfPossessionNonceRequest, ProofOfPossessionNonceResponse } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { AzureSphereContext as Client, CertificatesGet200Response, CertificatesGetDefaultResponse, CertificatesListByCatalog200Response, CertificatesListByCatalogDefaultResponse, CertificatesRetrieveCertChain200Response, CertificatesRetrieveCertChainDefaultResponse, CertificatesRetrieveProofOfPossessionNonce200Response, CertificatesRetrieveProofOfPossessionNonceDefaultResponse } from "../../rest/index.js";
import { StreamableMethod } from "@azure-rest/core-client";
import { CertificatesGetOptionalParams, CertificatesListByCatalogOptionalParams, CertificatesRetrieveCertChainOptionalParams, CertificatesRetrieveProofOfPossessionNonceOptionalParams } from "../../models/options.js";
export declare function _getSend(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, serialNumber: string, options?: CertificatesGetOptionalParams): StreamableMethod<CertificatesGet200Response | CertificatesGetDefaultResponse>;
export declare function _getDeserialize(result: CertificatesGet200Response | CertificatesGetDefaultResponse): Promise<Certificate>;
/** Get a Certificate */
export declare function get(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, serialNumber: string, options?: CertificatesGetOptionalParams): Promise<Certificate>;
export declare function _listByCatalogSend(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, options?: CertificatesListByCatalogOptionalParams): StreamableMethod<CertificatesListByCatalog200Response | CertificatesListByCatalogDefaultResponse>;
export declare function _listByCatalogDeserialize(result: CertificatesListByCatalog200Response | CertificatesListByCatalogDefaultResponse): Promise<CertificateListResult>;
/** List Certificate resources by Catalog */
export declare function listByCatalog(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, options?: CertificatesListByCatalogOptionalParams): PagedAsyncIterableIterator<Certificate>;
export declare function _retrieveCertChainSend(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, serialNumber: string, options?: CertificatesRetrieveCertChainOptionalParams): StreamableMethod<CertificatesRetrieveCertChain200Response | CertificatesRetrieveCertChainDefaultResponse>;
export declare function _retrieveCertChainDeserialize(result: CertificatesRetrieveCertChain200Response | CertificatesRetrieveCertChainDefaultResponse): Promise<CertificateChainResponse>;
/** Retrieves cert chain. */
export declare function retrieveCertChain(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, serialNumber: string, options?: CertificatesRetrieveCertChainOptionalParams): Promise<CertificateChainResponse>;
export declare function _retrieveProofOfPossessionNonceSend(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, serialNumber: string, body: ProofOfPossessionNonceRequest, options?: CertificatesRetrieveProofOfPossessionNonceOptionalParams): StreamableMethod<CertificatesRetrieveProofOfPossessionNonce200Response | CertificatesRetrieveProofOfPossessionNonceDefaultResponse>;
export declare function _retrieveProofOfPossessionNonceDeserialize(result: CertificatesRetrieveProofOfPossessionNonce200Response | CertificatesRetrieveProofOfPossessionNonceDefaultResponse): Promise<ProofOfPossessionNonceResponse>;
/** Gets the proof of possession nonce. */
export declare function retrieveProofOfPossessionNonce(context: Client, subscriptionId: string, resourceGroupName: string, catalogName: string, serialNumber: string, body: ProofOfPossessionNonceRequest, options?: CertificatesRetrieveProofOfPossessionNonceOptionalParams): Promise<ProofOfPossessionNonceResponse>;
//# sourceMappingURL=index.d.ts.map