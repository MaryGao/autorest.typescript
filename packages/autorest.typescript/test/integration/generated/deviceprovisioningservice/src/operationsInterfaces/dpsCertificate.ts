import {
  DpsCertificateGetOptionalParams,
  DpsCertificateGetResponse,
  CertificateBodyDescription,
  DpsCertificateCreateOrUpdateOptionalParams,
  DpsCertificateCreateOrUpdateResponse,
  DpsCertificateDeleteOptionalParams,
  DpsCertificateListOptionalParams,
  DpsCertificateListResponse,
  DpsCertificateGenerateVerificationCodeOptionalParams,
  DpsCertificateGenerateVerificationCodeResponse,
  VerificationCodeRequest,
  DpsCertificateVerifyCertificateOptionalParams,
  DpsCertificateVerifyCertificateResponse,
} from "../models";

/** Interface representing a DpsCertificate. */
export interface DpsCertificate {
  /**
   * Get the certificate from the provisioning service.
   * @param certificateName Name of the certificate to retrieve.
   * @param resourceGroupName Resource group identifier.
   * @param provisioningServiceName Name of the provisioning service the certificate is associated with.
   * @param options The options parameters.
   */
  get(
    certificateName: string,
    resourceGroupName: string,
    provisioningServiceName: string,
    options?: DpsCertificateGetOptionalParams,
  ): Promise<DpsCertificateGetResponse>;
  /**
   * Add new certificate or update an existing certificate.
   * @param resourceGroupName Resource group identifier.
   * @param provisioningServiceName The name of the provisioning service.
   * @param certificateName The name of the certificate create or update.
   * @param certificateDescription The certificate body.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    provisioningServiceName: string,
    certificateName: string,
    certificateDescription: CertificateBodyDescription,
    options?: DpsCertificateCreateOrUpdateOptionalParams,
  ): Promise<DpsCertificateCreateOrUpdateResponse>;
  /**
   * Deletes the specified certificate associated with the Provisioning Service
   * @param resourceGroupName Resource group identifier.
   * @param ifMatch ETag of the certificate
   * @param provisioningServiceName The name of the provisioning service.
   * @param certificateName This is a mandatory field, and is the logical name of the certificate that
   *                        the provisioning service will access by.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    ifMatch: string,
    provisioningServiceName: string,
    certificateName: string,
    options?: DpsCertificateDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Get all the certificates tied to the provisioning service.
   * @param resourceGroupName Name of resource group.
   * @param provisioningServiceName Name of provisioning service to retrieve certificates for.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    provisioningServiceName: string,
    options?: DpsCertificateListOptionalParams,
  ): Promise<DpsCertificateListResponse>;
  /**
   * Generate verification code for Proof of Possession.
   * @param certificateName The mandatory logical name of the certificate, that the provisioning service
   *                        uses to access.
   * @param ifMatch ETag of the certificate. This is required to update an existing certificate, and
   *                ignored while creating a brand new certificate.
   * @param resourceGroupName name of resource group.
   * @param provisioningServiceName Name of provisioning service.
   * @param options The options parameters.
   */
  generateVerificationCode(
    certificateName: string,
    ifMatch: string,
    resourceGroupName: string,
    provisioningServiceName: string,
    options?: DpsCertificateGenerateVerificationCodeOptionalParams,
  ): Promise<DpsCertificateGenerateVerificationCodeResponse>;
  /**
   * Verifies the certificate's private key possession by providing the leaf cert issued by the verifying
   * pre uploaded certificate.
   * @param certificateName The mandatory logical name of the certificate, that the provisioning service
   *                        uses to access.
   * @param ifMatch ETag of the certificate.
   * @param resourceGroupName Resource group name.
   * @param provisioningServiceName Provisioning service name.
   * @param request The name of the certificate
   * @param options The options parameters.
   */
  verifyCertificate(
    certificateName: string,
    ifMatch: string,
    resourceGroupName: string,
    provisioningServiceName: string,
    request: VerificationCodeRequest,
    options?: DpsCertificateVerifyCertificateOptionalParams,
  ): Promise<DpsCertificateVerifyCertificateResponse>;
}
