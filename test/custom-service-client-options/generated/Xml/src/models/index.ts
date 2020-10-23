/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ServiceClientOptions } from "@azure/core-http";
import * as coreHttp from "@azure/core-http";

/**
 * An interface representing JSONInput.
 */
export interface JSONInput {
  id?: number;
}

/**
 * An interface representing JSONOutput.
 */
export interface JSONOutput {
  id?: number;
}

/**
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  status?: number;
  message?: string;
}

/**
 * A slide in a slideshow
 */
export interface Slide {
  type?: string;
  title?: string;
  items?: string[];
}

/**
 * Data about a slideshow
 */
export interface Slideshow {
  title?: string;
  date?: string;
  author?: string;
  slides?: Slide[];
}

/**
 * A barrel of apples.
 */
export interface AppleBarrel {
  goodApples?: string[];
  badApples?: string[];
}

/**
 * A banana.
 */
export interface Banana {
  name?: string;
  flavor?: string;
  /**
   * The time at which you should reconsider eating this banana
   */
  expiration?: Date;
}

/**
 * Properties of a container
 */
export interface ContainerProperties {
  lastModified: Date;
  etag: string;
  /**
   * Possible values include: 'locked', 'unlocked'
   */
  leaseStatus?: LeaseStatusType;
  /**
   * Possible values include: 'available', 'leased', 'expired', 'breaking', 'broken'
   */
  leaseState?: LeaseStateType;
  /**
   * Possible values include: 'infinite', 'fixed'
   */
  leaseDuration?: LeaseDurationType;
  /**
   * Possible values include: 'container', 'blob'
   */
  publicAccess?: PublicAccessType;
}

/**
 * An Azure Storage container
 */
export interface Container {
  name: string;
  properties: ContainerProperties;
  metadata?: { [propertyName: string]: string };
}

/**
 * An enumeration of containers
 */
export interface ListContainersResponse {
  serviceEndpoint: string;
  prefix: string;
  marker?: string;
  maxResults: number;
  containers?: Container[];
  nextMarker: string;
}

/**
 * CORS is an HTTP feature that enables a web application running under one domain to access
 * resources in another domain. Web browsers implement a security restriction known as same-origin
 * policy that prevents a web page from calling APIs in a different domain; CORS provides a secure
 * way to allow one domain (the origin domain) to call APIs in another domain
 */
export interface CorsRule {
  /**
   * The origin domains that are permitted to make a request against the storage service via CORS.
   * The origin domain is the domain from which the request originates. Note that the origin must
   * be an exact case-sensitive match with the origin that the user age sends to the service. You
   * can also use the wildcard character '*' to allow all origin domains to make requests via CORS.
   */
  allowedOrigins: string;
  /**
   * The methods (HTTP request verbs) that the origin domain may use for a CORS request. (comma
   * separated)
   */
  allowedMethods: string;
  /**
   * the request headers that the origin domain may specify on the CORS request.
   */
  allowedHeaders: string;
  /**
   * The response headers that may be sent in the response to the CORS request and exposed by the
   * browser to the request issuer
   */
  exposedHeaders: string;
  /**
   * The maximum amount time that a browser should cache the preflight OPTIONS request.
   */
  maxAgeInSeconds: number;
}

/**
 * Properties of a blob
 */
export interface BlobProperties {
  lastModified: Date;
  etag: string;
  /**
   * Size in bytes
   */
  contentLength?: number;
  contentType?: string;
  contentEncoding?: string;
  contentLanguage?: string;
  contentMD5?: string;
  contentDisposition?: string;
  cacheControl?: string;
  blobSequenceNumber?: number;
  /**
   * Possible values include: 'BlockBlob', 'PageBlob', 'AppendBlob'
   */
  blobType?: BlobType;
  /**
   * Possible values include: 'locked', 'unlocked'
   */
  leaseStatus?: LeaseStatusType;
  /**
   * Possible values include: 'available', 'leased', 'expired', 'breaking', 'broken'
   */
  leaseState?: LeaseStateType;
  /**
   * Possible values include: 'infinite', 'fixed'
   */
  leaseDuration?: LeaseDurationType;
  copyId?: string;
  /**
   * Possible values include: 'pending', 'success', 'aborted', 'failed'
   */
  copyStatus?: CopyStatusType;
  copySource?: string;
  copyProgress?: string;
  copyCompletionTime?: Date;
  copyStatusDescription?: string;
  serverEncrypted?: boolean;
  incrementalCopy?: boolean;
  destinationSnapshot?: string;
  deletedTime?: Date;
  remainingRetentionDays?: number;
  /**
   * Possible values include: 'P4', 'P6', 'P10', 'P20', 'P30', 'P40', 'P50', 'Hot', 'Cool',
   * 'Archive'
   */
  accessTier?: AccessTier;
  accessTierInferred?: boolean;
  /**
   * Possible values include: 'rehydrate-pending-to-hot', 'rehydrate-pending-to-cool'
   */
  archiveStatus?: ArchiveStatus;
}

/**
 * An Azure Storage blob
 */
export interface Blob {
  name: string;
  deleted: boolean;
  snapshot: string;
  properties: BlobProperties;
  metadata?: { [propertyName: string]: string };
}

/**
 * the retention policy
 */
export interface RetentionPolicy {
  /**
   * Indicates whether a retention policy is enabled for the storage service
   */
  enabled: boolean;
  /**
   * Indicates the number of days that metrics or logging or soft-deleted data should be retained.
   * All data older than this value will be deleted
   */
  days?: number;
}

/**
 * Azure Analytics Logging settings.
 */
export interface Logging {
  /**
   * The version of Storage Analytics to configure.
   */
  version: string;
  /**
   * Indicates whether all delete requests should be logged.
   */
  deleteProperty: boolean;
  /**
   * Indicates whether all read requests should be logged.
   */
  read: boolean;
  /**
   * Indicates whether all write requests should be logged.
   */
  write: boolean;
  retentionPolicy: RetentionPolicy;
}

/**
 * An interface representing Metrics.
 */
export interface Metrics {
  /**
   * The version of Storage Analytics to configure.
   */
  version?: string;
  /**
   * Indicates whether metrics are enabled for the Blob service.
   */
  enabled: boolean;
  /**
   * Indicates whether metrics should generate summary statistics for called API operations.
   */
  includeAPIs?: boolean;
  retentionPolicy?: RetentionPolicy;
}

/**
 * An interface representing BlobPrefix.
 */
export interface BlobPrefix {
  name: string;
}

/**
 * An interface representing Blobs.
 */
export interface Blobs {
  blobPrefix?: BlobPrefix[];
  blob?: Blob[];
}

/**
 * An enumeration of blobs
 */
export interface ListBlobsResponse {
  serviceEndpoint: string;
  containerName: string;
  prefix: string;
  marker: string;
  maxResults: number;
  delimiter: string;
  blobs: Blobs;
  nextMarker: string;
}

/**
 * An Access policy
 */
export interface AccessPolicy {
  /**
   * the date-time the policy is active
   */
  start: Date;
  /**
   * the date-time the policy expires
   */
  expiry: Date;
  /**
   * the permissions for the acl policy
   */
  permission: string;
}

/**
 * signed identifier
 */
export interface SignedIdentifier {
  /**
   * a unique id
   */
  id: string;
  /**
   * The access policy
   */
  accessPolicy: AccessPolicy;
}

/**
 * Storage Service Properties.
 */
export interface StorageServiceProperties {
  /**
   * Azure Analytics Logging settings
   */
  logging?: Logging;
  /**
   * A summary of request statistics grouped by API in hourly aggregates for blobs
   */
  hourMetrics?: Metrics;
  /**
   * a summary of request statistics grouped by API in minute aggregates for blobs
   */
  minuteMetrics?: Metrics;
  /**
   * The set of CORS rules.
   */
  cors?: CorsRule[];
  /**
   * The default version to use for requests to the Blob service if an incoming request's version
   * is not specified. Possible values include version 2008-10-27 and all more recent versions
   */
  defaultServiceVersion?: string;
  /**
   * The Delete Retention Policy for the service
   */
  deleteRetentionPolicy?: RetentionPolicy;
}

/**
 * I am a complex type with no XML node
 */
export interface ComplexTypeNoMeta {
  /**
   * The id of the res
   */
  id?: string;
}

/**
 * I am a complex type with XML node
 */
export interface ComplexTypeWithMeta {
  /**
   * The id of the res
   */
  id?: string;
}

/**
 * I am root, and I ref a model with no meta
 */
export interface RootWithRefAndNoMeta {
  /**
   * XML will use RefToModel
   */
  refToModel?: ComplexTypeNoMeta;
  /**
   * Something else (just to avoid flattening)
   */
  something?: string;
}

/**
 * I am root, and I ref a model WITH meta
 */
export interface RootWithRefAndMeta {
  /**
   * XML will use XMLComplexTypeWithMeta
   */
  refToModel?: ComplexTypeWithMeta;
  /**
   * Something else (just to avoid flattening)
   */
  something?: string;
}

/**
 * An interface representing AutoRestSwaggerBATXMLServiceOptions.
 */
export interface AutoRestSwaggerBATXMLServiceOptions extends ServiceClientOptions {
  baseUri?: string;
}

/**
 * Defines headers for getHeaders operation.
 */
export interface XmlGetHeadersHeaders {
  /**
   * A custom response header.
   */
  customHeader: string;
}

/**
 * Defines values for LeaseStatusType.
 * Possible values include: 'locked', 'unlocked'
 * @readonly
 * @enum {string}
 */
export type LeaseStatusType = 'locked' | 'unlocked';

/**
 * Defines values for LeaseStateType.
 * Possible values include: 'available', 'leased', 'expired', 'breaking', 'broken'
 * @readonly
 * @enum {string}
 */
export type LeaseStateType = 'available' | 'leased' | 'expired' | 'breaking' | 'broken';

/**
 * Defines values for LeaseDurationType.
 * Possible values include: 'infinite', 'fixed'
 * @readonly
 * @enum {string}
 */
export type LeaseDurationType = 'infinite' | 'fixed';

/**
 * Defines values for PublicAccessType.
 * Possible values include: 'container', 'blob'
 * @readonly
 * @enum {string}
 */
export type PublicAccessType = 'container' | 'blob';

/**
 * Defines values for BlobType.
 * Possible values include: 'BlockBlob', 'PageBlob', 'AppendBlob'
 * @readonly
 * @enum {string}
 */
export type BlobType = 'BlockBlob' | 'PageBlob' | 'AppendBlob';

/**
 * Defines values for CopyStatusType.
 * Possible values include: 'pending', 'success', 'aborted', 'failed'
 * @readonly
 * @enum {string}
 */
export type CopyStatusType = 'pending' | 'success' | 'aborted' | 'failed';

/**
 * Defines values for AccessTier.
 * Possible values include: 'P4', 'P6', 'P10', 'P20', 'P30', 'P40', 'P50', 'Hot', 'Cool', 'Archive'
 * @readonly
 * @enum {string}
 */
export type AccessTier = 'P4' | 'P6' | 'P10' | 'P20' | 'P30' | 'P40' | 'P50' | 'Hot' | 'Cool' | 'Archive';

/**
 * Defines values for ArchiveStatus.
 * Possible values include: 'rehydrate-pending-to-hot', 'rehydrate-pending-to-cool'
 * @readonly
 * @enum {string}
 */
export type ArchiveStatus = 'rehydrate-pending-to-hot' | 'rehydrate-pending-to-cool';

/**
 * Contains response data for the getComplexTypeRefNoMeta operation.
 */
export type XmlGetComplexTypeRefNoMetaResponse = RootWithRefAndNoMeta & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RootWithRefAndNoMeta;
    };
};

/**
 * Contains response data for the getComplexTypeRefWithMeta operation.
 */
export type XmlGetComplexTypeRefWithMetaResponse = RootWithRefAndMeta & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RootWithRefAndMeta;
    };
};

/**
 * Contains response data for the getSimple operation.
 */
export type XmlGetSimpleResponse = Slideshow & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Slideshow;
    };
};

/**
 * Contains response data for the getWrappedLists operation.
 */
export type XmlGetWrappedListsResponse = AppleBarrel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AppleBarrel;
    };
};

/**
 * Contains response data for the getHeaders operation.
 */
export type XmlGetHeadersResponse = XmlGetHeadersHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: XmlGetHeadersHeaders;
    };
};

/**
 * Contains response data for the getEmptyList operation.
 */
export type XmlGetEmptyListResponse = Slideshow & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Slideshow;
    };
};

/**
 * Contains response data for the getEmptyWrappedLists operation.
 */
export type XmlGetEmptyWrappedListsResponse = AppleBarrel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AppleBarrel;
    };
};

/**
 * Contains response data for the getRootList operation.
 */
export type XmlGetRootListResponse = Array<Banana> & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Banana[];
    };
};

/**
 * Contains response data for the getRootListSingleItem operation.
 */
export type XmlGetRootListSingleItemResponse = Array<Banana> & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Banana[];
    };
};

/**
 * Contains response data for the getEmptyRootList operation.
 */
export type XmlGetEmptyRootListResponse = Array<Banana> & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Banana[];
    };
};

/**
 * Contains response data for the getEmptyChildElement operation.
 */
export type XmlGetEmptyChildElementResponse = Banana & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Banana;
    };
};

/**
 * Contains response data for the listContainers operation.
 */
export type XmlListContainersResponse = ListContainersResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ListContainersResponse;
    };
};

/**
 * Contains response data for the getServiceProperties operation.
 */
export type XmlGetServicePropertiesResponse = StorageServiceProperties & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: StorageServiceProperties;
    };
};

/**
 * Contains response data for the getAcls operation.
 */
export type XmlGetAclsResponse = Array<SignedIdentifier> & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SignedIdentifier[];
    };
};

/**
 * Contains response data for the listBlobs operation.
 */
export type XmlListBlobsResponse = ListBlobsResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ListBlobsResponse;
    };
};

/**
 * Contains response data for the jsonOutput operation.
 */
export type XmlJsonOutputResponse = JSONOutput & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: JSONOutput;
    };
};
