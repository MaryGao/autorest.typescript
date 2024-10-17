// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** A StorageClass resource for an Arc connected cluster (Microsoft.Kubernetes/connectedClusters) */
export interface StorageClassResource extends ExtensionResource {
  /** The resource-specific properties for this resource. */
  properties?: StorageClassProperties;
}

/** Details of the StorageClass StorageClass. */
export interface StorageClassProperties {
  /**
   * Volume can be expanded or not
   *
   * Possible values: "Allow", "Disallow"
   */
  allowVolumeExpansion?: VolumeExpansion;
  /** Additional mount options */
  mountOptions?: string[];
  /** Provisioner name */
  provisioner?: string;
  /**
   * Binding mode of volumes: Immediate, WaitForFirstConsumer
   *
   * Possible values: "Immediate", "WaitForFirstConsumer"
   */
  volumeBindingMode?: VolumeBindingMode;
  /** The access mode: [ReadWriteOnce, ReadWriteMany] or [ReadWriteOnce] */
  accessModes?: AccessMode[];
  /**
   * Allow single data node failure
   *
   * Possible values: "NotDataResilient", "DataResilient"
   */
  dataResilience?: DataResilienceTier;
  /**
   * Failover speed: NA, Slow, Fast
   *
   * Possible values: "NotAvailable", "Slow", "Fast", "Super"
   */
  failoverSpeed?: FailoverTier;
  /** Limitations of the storage class */
  limitations?: string[];
  /**
   * Performance tier
   *
   * Possible values: "Undefined", "Basic", "Standard", "Premium", "Ultra"
   */
  performance?: PerformanceTier;
  /** Selection priority when multiple storage classes meet the criteria. 0: Highest, -1: Never use */
  priority?: number;
  /** Properties of the StorageClass */
  typeProperties: StorageClassTypeProperties;
}

/** The properties of storage class of the StorageClass */
export interface StorageClassTypePropertiesParent {
  type: SCType;
}

/** The properties of Native StorageClass */
export interface NativeStorageClassTypeProperties
  extends StorageClassTypePropertiesParent {
  /** Native StorageClass */
  type: "Native";
}

/** The properties of RWX StorageClass */
export interface RwxStorageClassTypeProperties
  extends StorageClassTypePropertiesParent {
  /** RWX StorageClass */
  type: "RWX";
  /** The backing storageclass used to create new storageclass */
  backingStorageClassName: string;
}

/** The properties of Blob StorageClass */
export interface BlobStorageClassTypeProperties
  extends StorageClassTypePropertiesParent {
  /** Blob StorageClass */
  type: "Blob";
  /** Azure Storage Account Name */
  azureStorageAccountName: string;
  /** Azure Storage Account Key */
  azureStorageAccountKey: string;
}

/** The properties of NFS StorageClass */
export interface NfsStorageClassTypeProperties
  extends StorageClassTypePropertiesParent {
  /** NFS StorageClass */
  type: "NFS";
  /** NFS Server */
  server: string;
  /** NFS share */
  share: string;
  /** Sub directory under share. If the sub directory doesn't exist, driver will create it */
  subDir?: string;
  /** Mounted folder permissions. Default is 0. If set as non-zero, driver will perform `chmod` after mount */
  mountPermissions?: string;
  /**
   * The action to take when a NFS volume is deleted. Default is Delete
   *
   * Possible values: "Delete", "Retain"
   */
  onDelete?: NfsDirectoryActionOnVolumeDeletion;
}

/** The properties of SMB StorageClass */
export interface SmbStorageClassTypeProperties
  extends StorageClassTypePropertiesParent {
  /** SMB StorageClass */
  type: "SMB";
  /** SMB Source */
  source: string;
  /** Sub directory under share. If the sub directory doesn't exist, driver will create it */
  subDir?: string;
  /** Server username */
  username?: string;
  /** Server password */
  password?: string;
  /** Server domain */
  domain?: string;
}

/** The base extension resource. */
export interface ExtensionResource extends Resource {}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /**
   * The type of identity that created the resource.
   *
   * Possible values: "User", "Application", "ManagedIdentity", "Key"
   */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date | string;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /**
   * The type of identity that last modified the resource.
   *
   * Possible values: "User", "Application", "ManagedIdentity", "Key"
   */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date | string;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The geo-location where the resource lives */
  location: string;
}

/** The resource model definition containing the full set of allowed properties for a resource. Except properties bag, there cannot be a top level property outside of this set. */
export interface ResourceModelWithAllowedPropertySet extends TrackedResource {
  /**
   * The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource.
   * If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
   */
  managedBy?: string;
  /**
   * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.
   * If supported, the resource provider must validate and persist this value.
   */
  kind?: string;
  /**
   * The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.
   * Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19),
   * If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
   */
  eTag?: string;
  identity?: Identity;
  sku?: Sku;
  plan?: Plan;
}

/** Identity for the resource. */
export interface Identity {
  /** The identity type. */
  type?: ResourceIdentityType;
}

/** The resource model definition representing SKU */
export interface Sku {
  /** The name of the SKU. Ex - P3. It is typically a letter+number code */
  name: string;
  /** This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. */
  tier?: SkuTier;
  /** The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. */
  size?: string;
  /** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
  family?: string;
  /** If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. */
  capacity?: number;
}

/** Plan for the resource. */
export interface Plan {
  /** A user defined name of the 3rd Party Artifact that is being procured. */
  name: string;
  /** The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic */
  publisher: string;
  /** The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding. */
  product: string;
  /** A publisher provided promotion code as provisioned in Data Market for the said product/artifact. */
  promotionCode?: string;
  /** The version of the desired product/artifact. */
  version?: string;
}

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResource extends Resource {}

/** The resource model definition for an Azure Resource Manager resource with an etag. */
export interface AzureEntityResource extends Resource {}

/** A private link resource. */
export interface PrivateLinkResource extends Resource {
  /** Resource properties. */
  properties?: PrivateLinkResourceProperties;
}

/** Properties of a private link resource. */
export interface PrivateLinkResourceProperties {
  /** The private link resource private link DNS zone name. */
  requiredZoneNames?: string[];
}

/** The private endpoint connection resource */
export interface PrivateEndpointConnection extends Resource {
  /** The private endpoint connection properties */
  properties?: PrivateEndpointConnectionProperties;
}

/** Properties of the private endpoint connection. */
export interface PrivateEndpointConnectionProperties {
  /** The private endpoint resource. */
  privateEndpoint?: PrivateEndpoint;
  /** A collection of information about the state of the connection between service consumer and provider. */
  privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
}

/** The Private Endpoint resource. */
export interface PrivateEndpoint {}

/** A collection of information about the state of the connection between service consumer and provider. */
export interface PrivateLinkServiceConnectionState {
  /**
   * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
   *
   * Possible values: "Pending", "Approved", "Rejected"
   */
  status?: PrivateEndpointServiceConnectionStatus;
  /** The reason for approval/rejection of the connection. */
  description?: string;
  /** A message indicating if changes on the service provider require any updates on the consumer. */
  actionsRequired?: string;
}

/** A LoadBalancer resource for an Arc connected cluster (Microsoft.Kubernetes/connectedClusters) */
export interface LoadBalancer extends ExtensionResource {
  /** The resource-specific properties for this resource. */
  properties?: LoadBalancerProperties;
}

/** Details of the LoadBalancer. */
export interface LoadBalancerProperties {
  /** IP Range */
  addresses: string[];
  /** A dynamic label mapping to select related services. For instance, if you want to create a load balancer only for services with label "a=b", then please specify {"a": "b"} in the field. */
  serviceSelector?: Record<string, string>;
  /**
   * Advertise Mode
   *
   * Possible values: "ARP", "BGP", "Both"
   */
  advertiseMode: AdvertiseMode;
  /** The list of BGP peers it should advertise to. Null or empty means to advertise to all peers. */
  bgpPeers?: string[];
}

/** A BgpPeer resource for an Arc connected cluster (Microsoft.Kubernetes/connectedClusters) */
export interface BgpPeer extends ExtensionResource {
  /** The resource-specific properties for this resource. */
  properties?: BgpPeerProperties;
}

/** Details of the BgpPeer. */
export interface BgpPeerProperties {
  /** My ASN */
  myAsn: number;
  /** Peer ASN */
  peerAsn: number;
  /** Peer Address */
  peerAddress: string;
}

/** A Service resource for an Arc connected cluster (Microsoft.Kubernetes/connectedClusters) */
export interface ServiceResource extends ExtensionResource {
  /** The resource-specific properties for this resource. */
  properties?: ServiceProperties;
}

/** Properties for the service resource */
export interface ServiceProperties {}

/** The model for updating a storageClass */
export interface StorageClassResourceUpdate {
  /** The properties of StorageClass */
  properties?: StorageClassPropertiesUpdate;
}

/** The model for updating storageClass properties */
export interface StorageClassPropertiesUpdate {
  /**
   * Volume can be expanded or not
   *
   * Possible values: "Allow", "Disallow"
   */
  allowVolumeExpansion?: VolumeExpansion;
  /** Additional mount options */
  mountOptions?: string[];
  /** The access mode: [ReadWriteOnce, ReadWriteMany] or [ReadWriteOnce] */
  accessModes?: AccessMode[];
  /**
   * Allow single data node failure
   *
   * Possible values: "NotDataResilient", "DataResilient"
   */
  dataResilience?: DataResilienceTier;
  /**
   * Failover speed: NA, Slow, Fast
   *
   * Possible values: "NotAvailable", "Slow", "Fast", "Super"
   */
  failoverSpeed?: FailoverTier;
  /** Limitations of the storage class */
  limitations?: string[];
  /**
   * Performance tier
   *
   * Possible values: "Undefined", "Basic", "Standard", "Premium", "Ultra"
   */
  performance?: PerformanceTier;
  /** Selection priority when multiple storage classes meet the criteria. 0: Highest, -1: Never use */
  priority?: number;
  /** New storage class type of storageClass */
  typeProperties?: StorageClassTypePropertiesUpdate;
}

/** The model for update a storageClass */
export interface StorageClassTypePropertiesUpdate {
  /** The backing storageclass used to create new storageclass */
  backingStorageClassName?: string;
  /** Azure Storage Account Name */
  azureStorageAccountName?: string;
  /** Azure Storage Account Key */
  azureStorageAccountKey?: string;
  /** NFS Server */
  server?: string;
  /** NFS share */
  share?: string;
  /** Sub directory under share. If the sub directory doesn't exist, driver will create it */
  subDir?: string;
  /** Mounted folder permissions. Default is 0. If set as non-zero, driver will perform `chmod` after mount */
  mountPermissions?: string;
  /**
   * The action to take when a NFS volume is deleted. Default is Delete
   *
   * Possible values: "Delete", "Retain"
   */
  onDelete?: NfsDirectoryActionOnVolumeDeletion;
  /** SMB Source */
  source?: string;
  /** Server username */
  username?: string;
  /** Server password */
  password?: string;
  /** Server domain */
  domain?: string;
}

/** The properties of storage class of the StorageClass */
export type StorageClassTypeProperties =
  | StorageClassTypePropertiesParent
  | NativeStorageClassTypeProperties
  | RwxStorageClassTypeProperties
  | BlobStorageClassTypeProperties
  | NfsStorageClassTypeProperties
  | SmbStorageClassTypeProperties;
/** Alias for VolumeExpansion */
export type VolumeExpansion = string;
/** Alias for VolumeBindingMode */
export type VolumeBindingMode = string;
/** Alias for AccessMode */
export type AccessMode = string;
/** Alias for DataResilienceTier */
export type DataResilienceTier = string;
/** Alias for FailoverTier */
export type FailoverTier = string;
/** Alias for PerformanceTier */
export type PerformanceTier = string;
/** Alias for SCType */
export type SCType = string;
/** Alias for NfsDirectoryActionOnVolumeDeletion */
export type NfsDirectoryActionOnVolumeDeletion = string;
/** Alias for ResourceProvisioningState */
export type ResourceProvisioningState = string;
/** Alias for ProvisioningState */
export type ProvisioningState = string;
/** Alias for CreatedByType */
export type CreatedByType = string;
/** Alias for ResourceIdentityType */
export type ResourceIdentityType = "SystemAssigned";
/** Alias for SkuTier */
export type SkuTier = "Free" | "Basic" | "Standard" | "Premium";
/** Alias for PrivateEndpointServiceConnectionStatus */
export type PrivateEndpointServiceConnectionStatus = string;
/** Alias for PrivateEndpointConnectionProvisioningState */
export type PrivateEndpointConnectionProvisioningState = string;
/** Alias for AdvertiseMode */
export type AdvertiseMode = string;
