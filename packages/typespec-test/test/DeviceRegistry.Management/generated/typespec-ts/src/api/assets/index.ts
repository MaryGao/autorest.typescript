// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  extendedLocationSerializer,
  assetPropertiesSerializer,
  assetUpdatePropertiesSerializer,
  Asset,
  AssetUpdate,
  _AssetListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  DeviceRegistryContext as Client,
  AssetsCreateOrReplace200Response,
  AssetsCreateOrReplace201Response,
  AssetsCreateOrReplaceDefaultResponse,
  AssetsCreateOrReplaceLogicalResponse,
  AssetsDelete202Response,
  AssetsDelete204Response,
  AssetsDeleteDefaultResponse,
  AssetsDeleteLogicalResponse,
  AssetsGet200Response,
  AssetsGetDefaultResponse,
  AssetsListByResourceGroup200Response,
  AssetsListByResourceGroupDefaultResponse,
  AssetsListBySubscription200Response,
  AssetsListBySubscriptionDefaultResponse,
  AssetsUpdate200Response,
  AssetsUpdate202Response,
  AssetsUpdateDefaultResponse,
  AssetsUpdateLogicalResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  AssetsGetOptionalParams,
  AssetsCreateOrReplaceOptionalParams,
  AssetsUpdateOptionalParams,
  AssetsDeleteOptionalParams,
  AssetsListByResourceGroupOptionalParams,
  AssetsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetName: string,
  options: AssetsGetOptionalParams = { requestOptions: {} },
): StreamableMethod<AssetsGet200Response | AssetsGetDefaultResponse> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assets/{assetName}",
      subscriptionId,
      resourceGroupName,
      assetName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: AssetsGet200Response | AssetsGetDefaultResponse,
): Promise<Asset> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    tags: result.body["tags"],
    location: result.body["location"],
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          uuid: result.body.properties?.["uuid"],
          assetType: result.body.properties?.["assetType"],
          enabled: result.body.properties?.["enabled"],
          externalAssetId: result.body.properties?.["externalAssetId"],
          displayName: result.body.properties?.["displayName"],
          description: result.body.properties?.["description"],
          assetEndpointProfileUri:
            result.body.properties?.["assetEndpointProfileUri"],
          version: result.body.properties?.["version"],
          manufacturer: result.body.properties?.["manufacturer"],
          manufacturerUri: result.body.properties?.["manufacturerUri"],
          model: result.body.properties?.["model"],
          productCode: result.body.properties?.["productCode"],
          hardwareRevision: result.body.properties?.["hardwareRevision"],
          softwareRevision: result.body.properties?.["softwareRevision"],
          documentationUri: result.body.properties?.["documentationUri"],
          serialNumber: result.body.properties?.["serialNumber"],
          attributes: result.body.properties?.["attributes"],
          defaultDataPointsConfiguration:
            result.body.properties?.["defaultDataPointsConfiguration"],
          defaultEventsConfiguration:
            result.body.properties?.["defaultEventsConfiguration"],
          dataPoints:
            result.body.properties?.["dataPoints"] === undefined
              ? result.body.properties?.["dataPoints"]
              : result.body.properties?.["dataPoints"].map((p) => {
                  return {
                    name: p["name"],
                    dataSource: p["dataSource"],
                    capabilityId: p["capabilityId"],
                    observabilityMode: p["observabilityMode"],
                    dataPointConfiguration: p["dataPointConfiguration"],
                  };
                }),
          events:
            result.body.properties?.["events"] === undefined
              ? result.body.properties?.["events"]
              : result.body.properties?.["events"].map((p) => {
                  return {
                    name: p["name"],
                    eventNotifier: p["eventNotifier"],
                    capabilityId: p["capabilityId"],
                    observabilityMode: p["observabilityMode"],
                    eventConfiguration: p["eventConfiguration"],
                  };
                }),
          status: !result.body.properties?.status
            ? undefined
            : {
                errors:
                  result.body.properties?.status?.["errors"] === undefined
                    ? result.body.properties?.status?.["errors"]
                    : result.body.properties?.status?.["errors"].map((p) => {
                        return { code: p["code"], message: p["message"] };
                      }),
                version: result.body.properties?.status?.["version"],
              },
          provisioningState: result.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: result.body.extendedLocation["type"],
      name: result.body.extendedLocation["name"],
    },
  };
}

/** Get a Asset */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetName: string,
  options: AssetsGetOptionalParams = { requestOptions: {} },
): Promise<Asset> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    assetName,
    options,
  );
  return _getDeserialize(result);
}

export function _createOrReplaceSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetName: string,
  resource: Asset,
  options: AssetsCreateOrReplaceOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | AssetsCreateOrReplace200Response
  | AssetsCreateOrReplace201Response
  | AssetsCreateOrReplaceDefaultResponse
  | AssetsCreateOrReplaceLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assets/{assetName}",
      subscriptionId,
      resourceGroupName,
      assetName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !resource.tags
          ? resource.tags
          : (serializeRecord(resource.tags as any) as any),
        location: resource["location"],
        properties: !resource.properties
          ? resource.properties
          : assetPropertiesSerializer(resource.properties),
        extendedLocation: extendedLocationSerializer(resource.extendedLocation),
      },
    });
}

export async function _createOrReplaceDeserialize(
  result:
    | AssetsCreateOrReplace200Response
    | AssetsCreateOrReplace201Response
    | AssetsCreateOrReplaceDefaultResponse
    | AssetsCreateOrReplaceLogicalResponse,
): Promise<Asset> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const res = result as unknown as AssetsCreateOrReplaceLogicalResponse;
  return {
    tags: res.body["tags"],
    location: res.body["location"],
    id: res.body["id"],
    name: res.body["name"],
    type: res.body["type"],
    systemData: !res.body.systemData
      ? undefined
      : {
          createdBy: res.body.systemData?.["createdBy"],
          createdByType: res.body.systemData?.["createdByType"],
          createdAt:
            res.body.systemData?.["createdAt"] !== undefined
              ? new Date(res.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: res.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: res.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            res.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(res.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !res.body.properties
      ? undefined
      : {
          uuid: res.body.properties?.["uuid"],
          assetType: res.body.properties?.["assetType"],
          enabled: res.body.properties?.["enabled"],
          externalAssetId: res.body.properties?.["externalAssetId"],
          displayName: res.body.properties?.["displayName"],
          description: res.body.properties?.["description"],
          assetEndpointProfileUri:
            res.body.properties?.["assetEndpointProfileUri"],
          version: res.body.properties?.["version"],
          manufacturer: res.body.properties?.["manufacturer"],
          manufacturerUri: res.body.properties?.["manufacturerUri"],
          model: res.body.properties?.["model"],
          productCode: res.body.properties?.["productCode"],
          hardwareRevision: res.body.properties?.["hardwareRevision"],
          softwareRevision: res.body.properties?.["softwareRevision"],
          documentationUri: res.body.properties?.["documentationUri"],
          serialNumber: res.body.properties?.["serialNumber"],
          attributes: res.body.properties?.["attributes"],
          defaultDataPointsConfiguration:
            res.body.properties?.["defaultDataPointsConfiguration"],
          defaultEventsConfiguration:
            res.body.properties?.["defaultEventsConfiguration"],
          dataPoints:
            res.body.properties?.["dataPoints"] === undefined
              ? res.body.properties?.["dataPoints"]
              : res.body.properties?.["dataPoints"].map((p) => {
                  return {
                    name: p["name"],
                    dataSource: p["dataSource"],
                    capabilityId: p["capabilityId"],
                    observabilityMode: p["observabilityMode"],
                    dataPointConfiguration: p["dataPointConfiguration"],
                  };
                }),
          events:
            res.body.properties?.["events"] === undefined
              ? res.body.properties?.["events"]
              : res.body.properties?.["events"].map((p) => {
                  return {
                    name: p["name"],
                    eventNotifier: p["eventNotifier"],
                    capabilityId: p["capabilityId"],
                    observabilityMode: p["observabilityMode"],
                    eventConfiguration: p["eventConfiguration"],
                  };
                }),
          status: !res.body.properties?.status
            ? undefined
            : {
                errors:
                  res.body.properties?.status?.["errors"] === undefined
                    ? res.body.properties?.status?.["errors"]
                    : res.body.properties?.status?.["errors"].map((p) => {
                        return { code: p["code"], message: p["message"] };
                      }),
                version: res.body.properties?.status?.["version"],
              },
          provisioningState: res.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: res.body.extendedLocation["type"],
      name: res.body.extendedLocation["name"],
    },
  };
}

/** Create a Asset */
export function createOrReplace(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetName: string,
  resource: Asset,
  options: AssetsCreateOrReplaceOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Asset>, Asset> {
  return getLongRunningPoller(context, _createOrReplaceDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrReplaceSend(
        context,
        subscriptionId,
        resourceGroupName,
        assetName,
        resource,
        options,
      ),
  }) as PollerLike<OperationState<Asset>, Asset>;
}

export function _updateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetName: string,
  properties: AssetUpdate,
  options: AssetsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | AssetsUpdate200Response
  | AssetsUpdate202Response
  | AssetsUpdateDefaultResponse
  | AssetsUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assets/{assetName}",
      subscriptionId,
      resourceGroupName,
      assetName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !properties.tags
          ? properties.tags
          : (serializeRecord(properties.tags as any) as any),
        properties: !properties.properties
          ? properties.properties
          : assetUpdatePropertiesSerializer(properties.properties),
      },
    });
}

export async function _updateDeserialize(
  result:
    | AssetsUpdate200Response
    | AssetsUpdate202Response
    | AssetsUpdateDefaultResponse
    | AssetsUpdateLogicalResponse,
): Promise<Asset> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const res = result as unknown as AssetsUpdateLogicalResponse;
  return {
    tags: res.body["tags"],
    location: res.body["location"],
    id: res.body["id"],
    name: res.body["name"],
    type: res.body["type"],
    systemData: !res.body.systemData
      ? undefined
      : {
          createdBy: res.body.systemData?.["createdBy"],
          createdByType: res.body.systemData?.["createdByType"],
          createdAt:
            res.body.systemData?.["createdAt"] !== undefined
              ? new Date(res.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: res.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: res.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            res.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(res.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !res.body.properties
      ? undefined
      : {
          uuid: res.body.properties?.["uuid"],
          assetType: res.body.properties?.["assetType"],
          enabled: res.body.properties?.["enabled"],
          externalAssetId: res.body.properties?.["externalAssetId"],
          displayName: res.body.properties?.["displayName"],
          description: res.body.properties?.["description"],
          assetEndpointProfileUri:
            res.body.properties?.["assetEndpointProfileUri"],
          version: res.body.properties?.["version"],
          manufacturer: res.body.properties?.["manufacturer"],
          manufacturerUri: res.body.properties?.["manufacturerUri"],
          model: res.body.properties?.["model"],
          productCode: res.body.properties?.["productCode"],
          hardwareRevision: res.body.properties?.["hardwareRevision"],
          softwareRevision: res.body.properties?.["softwareRevision"],
          documentationUri: res.body.properties?.["documentationUri"],
          serialNumber: res.body.properties?.["serialNumber"],
          attributes: res.body.properties?.["attributes"],
          defaultDataPointsConfiguration:
            res.body.properties?.["defaultDataPointsConfiguration"],
          defaultEventsConfiguration:
            res.body.properties?.["defaultEventsConfiguration"],
          dataPoints:
            res.body.properties?.["dataPoints"] === undefined
              ? res.body.properties?.["dataPoints"]
              : res.body.properties?.["dataPoints"].map((p) => {
                  return {
                    name: p["name"],
                    dataSource: p["dataSource"],
                    capabilityId: p["capabilityId"],
                    observabilityMode: p["observabilityMode"],
                    dataPointConfiguration: p["dataPointConfiguration"],
                  };
                }),
          events:
            res.body.properties?.["events"] === undefined
              ? res.body.properties?.["events"]
              : res.body.properties?.["events"].map((p) => {
                  return {
                    name: p["name"],
                    eventNotifier: p["eventNotifier"],
                    capabilityId: p["capabilityId"],
                    observabilityMode: p["observabilityMode"],
                    eventConfiguration: p["eventConfiguration"],
                  };
                }),
          status: !res.body.properties?.status
            ? undefined
            : {
                errors:
                  res.body.properties?.status?.["errors"] === undefined
                    ? res.body.properties?.status?.["errors"]
                    : res.body.properties?.status?.["errors"].map((p) => {
                        return { code: p["code"], message: p["message"] };
                      }),
                version: res.body.properties?.status?.["version"],
              },
          provisioningState: res.body.properties?.["provisioningState"],
        },
    extendedLocation: {
      type: res.body.extendedLocation["type"],
      name: res.body.extendedLocation["name"],
    },
  };
}

/** Update a Asset */
export function update(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetName: string,
  properties: AssetUpdate,
  options: AssetsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Asset>, Asset> {
  return getLongRunningPoller(context, _updateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(
        context,
        subscriptionId,
        resourceGroupName,
        assetName,
        properties,
        options,
      ),
  }) as PollerLike<OperationState<Asset>, Asset>;
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetName: string,
  options: AssetsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | AssetsDelete202Response
  | AssetsDelete204Response
  | AssetsDeleteDefaultResponse
  | AssetsDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assets/{assetName}",
      subscriptionId,
      resourceGroupName,
      assetName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | AssetsDelete202Response
    | AssetsDelete204Response
    | AssetsDeleteDefaultResponse
    | AssetsDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a Asset */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  assetName: string,
  options: AssetsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(
        context,
        subscriptionId,
        resourceGroupName,
        assetName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _listByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: AssetsListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | AssetsListByResourceGroup200Response
  | AssetsListByResourceGroupDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceRegistry/assets",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByResourceGroupDeserialize(
  result:
    | AssetsListByResourceGroup200Response
    | AssetsListByResourceGroupDefaultResponse,
): Promise<_AssetListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => {
      return {
        tags: p["tags"],
        location: p["location"],
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"],
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.["lastModifiedByType"],
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        properties: !p.properties
          ? undefined
          : {
              uuid: p.properties?.["uuid"],
              assetType: p.properties?.["assetType"],
              enabled: p.properties?.["enabled"],
              externalAssetId: p.properties?.["externalAssetId"],
              displayName: p.properties?.["displayName"],
              description: p.properties?.["description"],
              assetEndpointProfileUri:
                p.properties?.["assetEndpointProfileUri"],
              version: p.properties?.["version"],
              manufacturer: p.properties?.["manufacturer"],
              manufacturerUri: p.properties?.["manufacturerUri"],
              model: p.properties?.["model"],
              productCode: p.properties?.["productCode"],
              hardwareRevision: p.properties?.["hardwareRevision"],
              softwareRevision: p.properties?.["softwareRevision"],
              documentationUri: p.properties?.["documentationUri"],
              serialNumber: p.properties?.["serialNumber"],
              attributes: p.properties?.["attributes"],
              defaultDataPointsConfiguration:
                p.properties?.["defaultDataPointsConfiguration"],
              defaultEventsConfiguration:
                p.properties?.["defaultEventsConfiguration"],
              dataPoints:
                p.properties?.["dataPoints"] === undefined
                  ? p.properties?.["dataPoints"]
                  : p.properties?.["dataPoints"].map((p) => {
                      return {
                        name: p["name"],
                        dataSource: p["dataSource"],
                        capabilityId: p["capabilityId"],
                        observabilityMode: p["observabilityMode"],
                        dataPointConfiguration: p["dataPointConfiguration"],
                      };
                    }),
              events:
                p.properties?.["events"] === undefined
                  ? p.properties?.["events"]
                  : p.properties?.["events"].map((p) => {
                      return {
                        name: p["name"],
                        eventNotifier: p["eventNotifier"],
                        capabilityId: p["capabilityId"],
                        observabilityMode: p["observabilityMode"],
                        eventConfiguration: p["eventConfiguration"],
                      };
                    }),
              status: !p.properties?.status
                ? undefined
                : {
                    errors:
                      p.properties?.status?.["errors"] === undefined
                        ? p.properties?.status?.["errors"]
                        : p.properties?.status?.["errors"].map((p) => {
                            return { code: p["code"], message: p["message"] };
                          }),
                    version: p.properties?.status?.["version"],
                  },
              provisioningState: p.properties?.["provisioningState"],
            },
        extendedLocation: {
          type: p.extendedLocation["type"],
          name: p.extendedLocation["name"],
        },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List Asset resources by resource group */
export function listByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: AssetsListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Asset> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _listByResourceGroupDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: AssetsListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod<
  AssetsListBySubscription200Response | AssetsListBySubscriptionDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.DeviceRegistry/assets",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listBySubscriptionDeserialize(
  result:
    | AssetsListBySubscription200Response
    | AssetsListBySubscriptionDefaultResponse,
): Promise<_AssetListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => {
      return {
        tags: p["tags"],
        location: p["location"],
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"],
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.["lastModifiedByType"],
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        properties: !p.properties
          ? undefined
          : {
              uuid: p.properties?.["uuid"],
              assetType: p.properties?.["assetType"],
              enabled: p.properties?.["enabled"],
              externalAssetId: p.properties?.["externalAssetId"],
              displayName: p.properties?.["displayName"],
              description: p.properties?.["description"],
              assetEndpointProfileUri:
                p.properties?.["assetEndpointProfileUri"],
              version: p.properties?.["version"],
              manufacturer: p.properties?.["manufacturer"],
              manufacturerUri: p.properties?.["manufacturerUri"],
              model: p.properties?.["model"],
              productCode: p.properties?.["productCode"],
              hardwareRevision: p.properties?.["hardwareRevision"],
              softwareRevision: p.properties?.["softwareRevision"],
              documentationUri: p.properties?.["documentationUri"],
              serialNumber: p.properties?.["serialNumber"],
              attributes: p.properties?.["attributes"],
              defaultDataPointsConfiguration:
                p.properties?.["defaultDataPointsConfiguration"],
              defaultEventsConfiguration:
                p.properties?.["defaultEventsConfiguration"],
              dataPoints:
                p.properties?.["dataPoints"] === undefined
                  ? p.properties?.["dataPoints"]
                  : p.properties?.["dataPoints"].map((p) => {
                      return {
                        name: p["name"],
                        dataSource: p["dataSource"],
                        capabilityId: p["capabilityId"],
                        observabilityMode: p["observabilityMode"],
                        dataPointConfiguration: p["dataPointConfiguration"],
                      };
                    }),
              events:
                p.properties?.["events"] === undefined
                  ? p.properties?.["events"]
                  : p.properties?.["events"].map((p) => {
                      return {
                        name: p["name"],
                        eventNotifier: p["eventNotifier"],
                        capabilityId: p["capabilityId"],
                        observabilityMode: p["observabilityMode"],
                        eventConfiguration: p["eventConfiguration"],
                      };
                    }),
              status: !p.properties?.status
                ? undefined
                : {
                    errors:
                      p.properties?.status?.["errors"] === undefined
                        ? p.properties?.status?.["errors"]
                        : p.properties?.status?.["errors"].map((p) => {
                            return { code: p["code"], message: p["message"] };
                          }),
                    version: p.properties?.status?.["version"],
                  },
              provisioningState: p.properties?.["provisioningState"],
            },
        extendedLocation: {
          type: p.extendedLocation["type"],
          name: p.extendedLocation["name"],
        },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List Asset resources by subscription ID */
export function listBySubscription(
  context: Client,
  subscriptionId: string,
  options: AssetsListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Asset> {
  return buildPagedAsyncIterator(
    context,
    () => _listBySubscriptionSend(context, subscriptionId, options),
    _listBySubscriptionDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
