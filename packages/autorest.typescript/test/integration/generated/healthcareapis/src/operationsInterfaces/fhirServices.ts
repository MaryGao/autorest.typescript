import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  FhirService,
  FhirServicesListByWorkspaceOptionalParams,
  FhirServicesGetOptionalParams,
  FhirServicesGetResponse,
  FhirServicesCreateOrUpdateOptionalParams,
  FhirServicesCreateOrUpdateResponse,
  FhirServicePatchResource,
  FhirServicesUpdateOptionalParams,
  FhirServicesUpdateResponse,
  FhirServicesDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a FhirServices. */
export interface FhirServices {
  /**
   * Lists all FHIR Services for the given workspace
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param options The options parameters.
   */
  listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: FhirServicesListByWorkspaceOptionalParams
  ): PagedAsyncIterableIterator<FhirService>;
  /**
   * Gets the properties of the specified FHIR Service.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param fhirServiceName The name of FHIR Service resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    fhirServiceName: string,
    options?: FhirServicesGetOptionalParams
  ): Promise<FhirServicesGetResponse>;
  /**
   * Creates or updates a FHIR Service resource with the specified parameters.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param fhirServiceName The name of FHIR Service resource.
   * @param fhirservice The parameters for creating or updating a Fhir Service resource.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    fhirServiceName: string,
    fhirservice: FhirService,
    options?: FhirServicesCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<FhirServicesCreateOrUpdateResponse>,
      FhirServicesCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a FHIR Service resource with the specified parameters.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param fhirServiceName The name of FHIR Service resource.
   * @param fhirservice The parameters for creating or updating a Fhir Service resource.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    fhirServiceName: string,
    fhirservice: FhirService,
    options?: FhirServicesCreateOrUpdateOptionalParams
  ): Promise<FhirServicesCreateOrUpdateResponse>;
  /**
   * Patch FHIR Service details.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param fhirServiceName The name of FHIR Service resource.
   * @param workspaceName The name of workspace resource.
   * @param fhirservicePatchResource The parameters for updating a Fhir Service.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    fhirServiceName: string,
    workspaceName: string,
    fhirservicePatchResource: FhirServicePatchResource,
    options?: FhirServicesUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<FhirServicesUpdateResponse>,
      FhirServicesUpdateResponse
    >
  >;
  /**
   * Patch FHIR Service details.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param fhirServiceName The name of FHIR Service resource.
   * @param workspaceName The name of workspace resource.
   * @param fhirservicePatchResource The parameters for updating a Fhir Service.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    fhirServiceName: string,
    workspaceName: string,
    fhirservicePatchResource: FhirServicePatchResource,
    options?: FhirServicesUpdateOptionalParams
  ): Promise<FhirServicesUpdateResponse>;
  /**
   * Deletes a FHIR Service.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param fhirServiceName The name of FHIR Service resource.
   * @param workspaceName The name of workspace resource.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    fhirServiceName: string,
    workspaceName: string,
    options?: FhirServicesDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes a FHIR Service.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param fhirServiceName The name of FHIR Service resource.
   * @param workspaceName The name of workspace resource.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    fhirServiceName: string,
    workspaceName: string,
    options?: FhirServicesDeleteOptionalParams
  ): Promise<void>;
}
