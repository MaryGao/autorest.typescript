import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  Workspace,
  WorkspacesListBySubscriptionOptionalParams,
  WorkspacesListByResourceGroupOptionalParams,
  WorkspacesGetOptionalParams,
  WorkspacesGetResponse,
  WorkspacesCreateOrUpdateOptionalParams,
  WorkspacesCreateOrUpdateResponse,
  WorkspacePatchResource,
  WorkspacesUpdateOptionalParams,
  WorkspacesUpdateResponse,
  WorkspacesDeleteOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Workspaces. */
export interface Workspaces {
  /**
   * Lists all the available workspaces under the specified subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: WorkspacesListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<Workspace>;
  /**
   * Lists all the available workspaces under the specified resource group.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: WorkspacesListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<Workspace>;
  /**
   * Gets the properties of the specified workspace.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspacesGetOptionalParams,
  ): Promise<WorkspacesGetResponse>;
  /**
   * Creates or updates a workspace resource with the specified parameters.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param workspace The parameters for creating or updating a healthcare workspace.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    workspace: Workspace,
    options?: WorkspacesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<WorkspacesCreateOrUpdateResponse>,
      WorkspacesCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a workspace resource with the specified parameters.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param workspace The parameters for creating or updating a healthcare workspace.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    workspace: Workspace,
    options?: WorkspacesCreateOrUpdateOptionalParams,
  ): Promise<WorkspacesCreateOrUpdateResponse>;
  /**
   * Patch workspace details.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param workspacePatchResource The parameters for updating a specified workspace.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    workspaceName: string,
    workspacePatchResource: WorkspacePatchResource,
    options?: WorkspacesUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<WorkspacesUpdateResponse>,
      WorkspacesUpdateResponse
    >
  >;
  /**
   * Patch workspace details.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param workspacePatchResource The parameters for updating a specified workspace.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    workspacePatchResource: WorkspacePatchResource,
    options?: WorkspacesUpdateOptionalParams,
  ): Promise<WorkspacesUpdateResponse>;
  /**
   * Deletes a specified workspace.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspacesDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes a specified workspace.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param workspaceName The name of workspace resource.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspacesDeleteOptionalParams,
  ): Promise<void>;
}
