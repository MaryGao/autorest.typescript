// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

export interface OperationsListOptionalParams extends OperationOptions {}

export interface CatalogsGetOptionalParams extends OperationOptions {}

export interface CatalogsCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface CatalogsUpdateOptionalParams extends OperationOptions {}

export interface CatalogsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface CatalogsListByResourceGroupOptionalParams
  extends OperationOptions {}

export interface CatalogsListBySubscriptionOptionalParams
  extends OperationOptions {}

export interface CatalogsCountDevicesOptionalParams extends OperationOptions {}

export interface CatalogsListDeploymentsOptionalParams
  extends OperationOptions {
  /** Filter the result list using the given expression */
  filter?: string;
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface CatalogsListDeviceGroupsOptionalParams
  extends OperationOptions {
  /** Filter the result list using the given expression */
  filter?: string;
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface CatalogsListDeviceInsightsOptionalParams
  extends OperationOptions {
  /** Filter the result list using the given expression */
  filter?: string;
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface CatalogsListDevicesOptionalParams extends OperationOptions {
  /** Filter the result list using the given expression */
  filter?: string;
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface CatalogsUploadImageOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface CertificatesGetOptionalParams extends OperationOptions {}

export interface CertificatesListByCatalogOptionalParams
  extends OperationOptions {
  /** Filter the result list using the given expression */
  filter?: string;
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface CertificatesRetrieveCertChainOptionalParams
  extends OperationOptions {}

export interface CertificatesRetrieveProofOfPossessionNonceOptionalParams
  extends OperationOptions {}

export interface ImagesGetOptionalParams extends OperationOptions {}

export interface ImagesCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface ImagesDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface ImagesListByCatalogOptionalParams extends OperationOptions {
  /** Filter the result list using the given expression */
  filter?: string;
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ProductsGetOptionalParams extends OperationOptions {}

export interface ProductsCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface ProductsUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface ProductsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface ProductsListByCatalogOptionalParams extends OperationOptions {}

export interface ProductsCountDevicesOptionalParams extends OperationOptions {}

export interface ProductsGenerateDefaultDeviceGroupsOptionalParams
  extends OperationOptions {}

export interface DeviceGroupsGetOptionalParams extends OperationOptions {}

export interface DeviceGroupsCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface DeviceGroupsUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface DeviceGroupsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface DeviceGroupsListByProductOptionalParams
  extends OperationOptions {
  /** Filter the result list using the given expression */
  filter?: string;
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface DeviceGroupsClaimDevicesOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface DeviceGroupsCountDevicesOptionalParams
  extends OperationOptions {}

export interface DeploymentsGetOptionalParams extends OperationOptions {}

export interface DeploymentsCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface DeploymentsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface DeploymentsListByDeviceGroupOptionalParams
  extends OperationOptions {
  /** Filter the result list using the given expression */
  filter?: string;
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface DevicesGetOptionalParams extends OperationOptions {}

export interface DevicesCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface DevicesUpdateOptionalParams extends OperationOptions {}

export interface DevicesDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

export interface DevicesListByDeviceGroupOptionalParams
  extends OperationOptions {}

export interface DevicesGenerateCapabilityImageOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}
