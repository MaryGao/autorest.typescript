import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  DicomService,
  DicomServicesListByWorkspaceOptionalParams,
  DicomServicesGetOptionalParams,
  DicomServicesGetResponse,
  DicomServicesCreateOrUpdateOptionalParams,
  DicomServicesCreateOrUpdateResponse,
  DicomServicePatchResource,
  DicomServicesUpdateOptionalParams,
  DicomServicesUpdateResponse,
  DicomServicesDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DicomServices. */
export interface DicomServices {
  /**
   * Lists all DICOM Services for the given workspace
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param options The options parameters.
   */
  listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: DicomServicesListByWorkspaceOptionalParams
  ): PagedAsyncIterableIterator<DicomService>;
  /**
   * Gets the properties of the specified DICOM Service.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param dicomServiceName The name of DICOM Service resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    dicomServiceName: string,
    options?: DicomServicesGetOptionalParams
  ): Promise<DicomServicesGetResponse>;
  /**
   * Creates or updates a DICOM Service resource with the specified parameters.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param dicomServiceName The name of DICOM Service resource.
   * @param dicomservice The parameters for creating or updating a Dicom Service resource.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    dicomServiceName: string,
    dicomservice: DicomService,
    options?: DicomServicesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DicomServicesCreateOrUpdateResponse>,
      DicomServicesCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a DICOM Service resource with the specified parameters.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param dicomServiceName The name of DICOM Service resource.
   * @param dicomservice The parameters for creating or updating a Dicom Service resource.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    dicomServiceName: string,
    dicomservice: DicomService,
    options?: DicomServicesCreateOrUpdateOptionalParams
  ): Promise<DicomServicesCreateOrUpdateResponse>;
  /**
   * Patch DICOM Service details.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param dicomServiceName The name of DICOM Service resource.
   * @param workspaceName The name of workspace resource.
   * @param dicomservicePatchResource The parameters for updating a Dicom Service.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    dicomServiceName: string,
    workspaceName: string,
    dicomservicePatchResource: DicomServicePatchResource,
    options?: DicomServicesUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DicomServicesUpdateResponse>,
      DicomServicesUpdateResponse
    >
  >;
  /**
   * Patch DICOM Service details.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param dicomServiceName The name of DICOM Service resource.
   * @param workspaceName The name of workspace resource.
   * @param dicomservicePatchResource The parameters for updating a Dicom Service.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    dicomServiceName: string,
    workspaceName: string,
    dicomservicePatchResource: DicomServicePatchResource,
    options?: DicomServicesUpdateOptionalParams
  ): Promise<DicomServicesUpdateResponse>;
  /**
   * Deletes a DICOM Service.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param dicomServiceName The name of DICOM Service resource.
   * @param workspaceName The name of workspace resource.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    dicomServiceName: string,
    workspaceName: string,
    options?: DicomServicesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes a DICOM Service.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param dicomServiceName The name of DICOM Service resource.
   * @param workspaceName The name of workspace resource.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    dicomServiceName: string,
    workspaceName: string,
    options?: DicomServicesDeleteOptionalParams
  ): Promise<void>;
}
