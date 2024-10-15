// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** A StorageClass resource for an Arc connected cluster (Microsoft.Kubernetes/connectedClusters) */
export interface StorageClassResourceOutput extends ExtensionResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: StorageClassPropertiesOutput;
}

/** Details of the StorageClass StorageClass. */
export interface StorageClassPropertiesOutput {
  /**
   * Volume can be expanded or not
   *
   * Possible values: "Allow", "Disallow"
   */
  allowVolumeExpansion?: VolumeExpansionOutput;
  /** Additional mount options */
  mountOptions?: string[];
  /** Provisioner name */
  provisioner?: string;
  /**
   * Binding mode of volumes: Immediate, WaitForFirstConsumer
   *
   * Possible values: "Immediate", "WaitForFirstConsumer"
   */
  volumeBindingMode?: VolumeBindingModeOutput;
  /** The access mode: [ReadWriteOnce, ReadWriteMany] or [ReadWriteOnce] */
  accessModes?: AccessModeOutput[];
  /**
   * Allow single data node failure
   *
   * Possible values: "NotDataResilient", "DataResilient"
   */
  dataResilience?: DataResilienceTierOutput;
  /**
   * Failover speed: NA, Slow, Fast
   *
   * Possible values: "NotAvailable", "Slow", "Fast", "Super"
   */
  failoverSpeed?: FailoverTierOutput;
  /** Limitations of the storage class */
  limitations?: string[];
  /**
   * Performance tier
   *
   * Possible values: "Undefined", "Basic", "Standard", "Premium", "Ultra"
   */
  performance?: PerformanceTierOutput;
  /** Selection priority when multiple storage classes meet the criteria. 0: Highest, -1: Never use */
  priority?: number;
  /** Properties of the StorageClass */
  typeProperties: StorageClassTypePropertiesOutput;
  /**
   * Resource provision state
   *
   * Possible values: "Provisioning", "Updating", "Deleting", "Accepted"
   */
  readonly provisioningState?: ProvisioningStateOutput;
}

/** The properties of storage class of the StorageClass */
export interface StorageClassTypePropertiesOutputParent {
  type: SCTypeOutput;
}

/** The properties of Native StorageClass */
export interface NativeStorageClassTypePropertiesOutput
  extends StorageClassTypePropertiesOutputParent {
  /** Native StorageClass */
  type: "Native";
}

/** The properties of RWX StorageClass */
export interface RwxStorageClassTypePropertiesOutput
  extends StorageClassTypePropertiesOutputParent {
  /** RWX StorageClass */
  type: "RWX";
  /** The backing storageclass used to create new storageclass */
  backingStorageClassName: string;
}

/** The properties of Blob StorageClass */
export interface BlobStorageClassTypePropertiesOutput
  extends StorageClassTypePropertiesOutputParent {
  /** Blob StorageClass */
  type: "Blob";
  /** Azure Storage Account Name */
  azureStorageAccountName: string;
  /** Azure Storage Account Key */
  azureStorageAccountKey: string;
}

/** The properties of NFS StorageClass */
export interface NfsStorageClassTypePropertiesOutput
  extends StorageClassTypePropertiesOutputParent {
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
  onDelete?: NfsDirectoryActionOnVolumeDeletionOutput;
}

/** The properties of SMB StorageClass */
export interface SmbStorageClassTypePropertiesOutput
  extends StorageClassTypePropertiesOutputParent {
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
export interface ExtensionResourceOutput extends ResourceOutput {}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface ResourceOutput {
  /** Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} */
  readonly id?: string;
  /** The name of the resource */
  readonly name?: string;
  /** The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts" */
  readonly type?: string;
  /** Azure Resource Manager metadata containing createdBy and modifiedBy information. */
  readonly systemData?: SystemDataOutput;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemDataOutput {
  /** The identity that created the resource. */
  createdBy?: string;
  /**
   * The type of identity that created the resource.
   *
   * Possible values: "User", "Application", "ManagedIdentity", "Key"
   */
  createdByType?: CreatedByTypeOutput;
  /** The timestamp of resource creation (UTC). */
  createdAt?: string;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /**
   * The type of identity that last modified the resource.
   *
   * Possible values: "User", "Application", "ManagedIdentity", "Key"
   */
  lastModifiedByType?: CreatedByTypeOutput;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: string;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResourceOutput extends ResourceOutput {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The geo-location where the resource lives */
  location: string;
}

/** The resource model definition containing the full set of allowed properties for a resource. Except properties bag, there cannot be a top level property outside of this set. */
export interface ResourceModelWithAllowedPropertySetOutput
  extends TrackedResourceOutput {
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
  identity?: IdentityOutput;
  sku?: SkuOutput;
  plan?: PlanOutput;
}

/** Identity for the resource. */
export interface IdentityOutput {
  /** The principal ID of resource identity. The value must be an UUID. */
  readonly principalId?: string;
  /** The tenant ID of resource. The value must be an UUID. */
  readonly tenantId?: string;
  /** The identity type. */
  type?: ResourceIdentityTypeOutput;
}

/** The resource model definition representing SKU */
export interface SkuOutput {
  /** The name of the SKU. Ex - P3. It is typically a letter+number code */
  name: string;
  /** This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. */
  tier?: SkuTierOutput;
  /** The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. */
  size?: string;
  /** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
  family?: string;
  /** If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. */
  capacity?: number;
}

/** Plan for the resource. */
export interface PlanOutput {
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
export interface ProxyResourceOutput extends ResourceOutput {}

/** The resource model definition for an Azure Resource Manager resource with an etag. */
export interface AzureEntityResourceOutput extends ResourceOutput {
  /** Resource Etag. */
  readonly etag?: string;
}

/** A private link resource. */
export interface PrivateLinkResourceOutput extends ResourceOutput {
  /** Resource properties. */
  properties?: PrivateLinkResourcePropertiesOutput;
}

/** Properties of a private link resource. */
export interface PrivateLinkResourcePropertiesOutput {
  /** The private link resource group id. */
  readonly groupId?: string;
  /** The private link resource required member names. */
  readonly requiredMembers?: string[];
  /** The private link resource private link DNS zone name. */
  requiredZoneNames?: string[];
}

/** The private endpoint connection resource */
export interface PrivateEndpointConnectionOutput extends ResourceOutput {
  /** The private endpoint connection properties */
  properties?: PrivateEndpointConnectionPropertiesOutput;
}

/** Properties of the private endpoint connection. */
export interface PrivateEndpointConnectionPropertiesOutput {
  /** The group ids for the private endpoint resource. */
  readonly groupIds?: string[];
  /** The private endpoint resource. */
  privateEndpoint?: PrivateEndpointOutput;
  /** A collection of information about the state of the connection between service consumer and provider. */
  privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateOutput;
  /**
   * The provisioning state of the private endpoint connection resource.
   *
   * Possible values: "Succeeded", "Creating", "Deleting", "Failed"
   */
  readonly provisioningState?: PrivateEndpointConnectionProvisioningStateOutput;
}

/** The Private Endpoint resource. */
export interface PrivateEndpointOutput {
  /** The resource identifier for private endpoint */
  readonly id?: string;
}

/** A collection of information about the state of the connection between service consumer and provider. */
export interface PrivateLinkServiceConnectionStateOutput {
  /**
   * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
   *
   * Possible values: "Pending", "Approved", "Rejected"
   */
  status?: PrivateEndpointServiceConnectionStatusOutput;
  /** The reason for approval/rejection of the connection. */
  description?: string;
  /** A message indicating if changes on the service provider require any updates on the consumer. */
  actionsRequired?: string;
}

/** A LoadBalancer resource for an Arc connected cluster (Microsoft.Kubernetes/connectedClusters) */
export interface LoadBalancerOutput extends ExtensionResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: LoadBalancerPropertiesOutput;
}

/** Details of the LoadBalancer. */
export interface LoadBalancerPropertiesOutput {
  /** IP Range */
  addresses: string[];
  /** A dynamic label mapping to select related services. For instance, if you want to create a load balancer only for services with label "a=b", then please specify {"a": "b"} in the field. */
  serviceSelector?: Record<string, string>;
  /**
   * Advertise Mode
   *
   * Possible values: "ARP", "BGP", "Both"
   */
  advertiseMode: AdvertiseModeOutput;
  /** The list of BGP peers it should advertise to. Null or empty means to advertise to all peers. */
  bgpPeers?: string[];
  /**
   * Resource provision state
   *
   * Possible values: "Provisioning", "Updating", "Deleting", "Accepted"
   */
  readonly provisioningState?: ProvisioningStateOutput;
}

/** A BgpPeer resource for an Arc connected cluster (Microsoft.Kubernetes/connectedClusters) */
export interface BgpPeerOutput extends ExtensionResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: BgpPeerPropertiesOutput;
}

/** Details of the BgpPeer. */
export interface BgpPeerPropertiesOutput {
  /** My ASN */
  myAsn: number;
  /** Peer ASN */
  peerAsn: number;
  /** Peer Address */
  peerAddress: string;
  /**
   * Resource provision state
   *
   * Possible values: "Provisioning", "Updating", "Deleting", "Accepted"
   */
  readonly provisioningState?: ProvisioningStateOutput;
}

/** A Service resource for an Arc connected cluster (Microsoft.Kubernetes/connectedClusters) */
export interface ServiceResourceOutput extends ExtensionResourceOutput {
  /** The resource-specific properties for this resource. */
  properties?: ServicePropertiesOutput;
}

/** Properties for the service resource */
export interface ServicePropertiesOutput {
  /** The object id of the service principal of the RP provisioned in the tenant */
  readonly rpObjectId?: string;
  /**
   * Resource provision state
   *
   * Possible values: "Provisioning", "Updating", "Deleting", "Accepted"
   */
  readonly provisioningState?: ProvisioningStateOutput;
}

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. */
export interface ErrorResponseOutput {
  /** The error object. */
  error?: ErrorDetailOutput;
}

/** The error detail. */
export interface ErrorDetailOutput {
  /** The error code. */
  readonly code?: string;
  /** The error message. */
  readonly message?: string;
  /** The error target. */
  readonly target?: string;
  /** The error details. */
  readonly details?: Array<ErrorDetailOutput>;
  /** The error additional info. */
  readonly additionalInfo?: Array<ErrorAdditionalInfoOutput>;
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfoOutput {
  /** The additional info type. */
  readonly type?: string;
  /** The additional info. */
  readonly info?: Record<string, any>;
}

/** The response of a StorageClassResource list operation. */
export interface StorageClassResourceListResultOutput {
  /** The StorageClassResource items on this page */
  value: Array<StorageClassResourceOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export interface OperationListResultOutput {
  /** The Operation items on this page */
  value: Array<OperationOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Details of a REST API operation, returned from the Resource Provider Operations API */
export interface OperationOutput {
  /** The name of the operation, as per Resource-Based Access Control (RBAC). Examples: "Microsoft.Compute/virtualMachines/write", "Microsoft.Compute/virtualMachines/capture/action" */
  readonly name?: string;
  /** Whether the operation applies to data-plane. This is "true" for data-plane operations and "false" for Azure Resource Manager/control-plane operations. */
  readonly isDataAction?: boolean;
  /** Localized display information for this particular operation. */
  readonly display?: OperationDisplayOutput;
  /**
   * The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system"
   *
   * Possible values: "user", "system", "user,system"
   */
  readonly origin?: OriginOutput;
  /**
   * Extensible enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs.
   *
   * Possible values: "Internal"
   */
  actionType?: ActionTypeOutput;
}

/** Localized display information for and operation. */
export interface OperationDisplayOutput {
  /** The localized friendly form of the resource provider name, e.g. "Microsoft Monitoring Insights" or "Microsoft Compute". */
  readonly provider?: string;
  /** The localized friendly name of the resource type related to this operation. E.g. "Virtual Machines" or "Job Schedule Collections". */
  readonly resource?: string;
  /** The concise, localized friendly name for the operation; suitable for dropdowns. E.g. "Create or Update Virtual Machine", "Restart Virtual Machine". */
  readonly operation?: string;
  /** The short, localized friendly description of the operation; suitable for tool tips and detailed views. */
  readonly description?: string;
}

/** The response of a LoadBalancer list operation. */
export interface LoadBalancerListResultOutput {
  /** The LoadBalancer items on this page */
  value: Array<LoadBalancerOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** The response of a BgpPeer list operation. */
export interface BgpPeerListResultOutput {
  /** The BgpPeer items on this page */
  value: Array<BgpPeerOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** The response of a ServiceResource list operation. */
export interface ServiceResourceListResultOutput {
  /** The ServiceResource items on this page */
  value: Array<ServiceResourceOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** The properties of storage class of the StorageClass */
export type StorageClassTypePropertiesOutput =
  | StorageClassTypePropertiesOutputParent
  | NativeStorageClassTypePropertiesOutput
  | RwxStorageClassTypePropertiesOutput
  | BlobStorageClassTypePropertiesOutput
  | NfsStorageClassTypePropertiesOutput
  | SmbStorageClassTypePropertiesOutput;
/** Alias for VolumeExpansionOutput */
export type VolumeExpansionOutput = string;
/** Alias for VolumeBindingModeOutput */
export type VolumeBindingModeOutput = string;
/** Alias for AccessModeOutput */
export type AccessModeOutput = string;
/** Alias for DataResilienceTierOutput */
export type DataResilienceTierOutput = string;
/** Alias for FailoverTierOutput */
export type FailoverTierOutput = string;
/** Alias for PerformanceTierOutput */
export type PerformanceTierOutput = string;
/** Alias for SCTypeOutput */
export type SCTypeOutput = string;
/** Alias for NfsDirectoryActionOnVolumeDeletionOutput */
export type NfsDirectoryActionOnVolumeDeletionOutput = string;
/** Alias for ResourceProvisioningStateOutput */
export type ResourceProvisioningStateOutput = string;
/** Alias for ProvisioningStateOutput */
export type ProvisioningStateOutput = string;
/** Alias for CreatedByTypeOutput */
export type CreatedByTypeOutput = string;
/** Alias for ResourceIdentityTypeOutput */
export type ResourceIdentityTypeOutput = "SystemAssigned";
/** Alias for SkuTierOutput */
export type SkuTierOutput = "Free" | "Basic" | "Standard" | "Premium";
/** Alias for PrivateEndpointServiceConnectionStatusOutput */
export type PrivateEndpointServiceConnectionStatusOutput = string;
/** Alias for PrivateEndpointConnectionProvisioningStateOutput */
export type PrivateEndpointConnectionProvisioningStateOutput = string;
/** Alias for AdvertiseModeOutput */
export type AdvertiseModeOutput = string;
/** Alias for OriginOutput */
export type OriginOutput = string;
/** Alias for ActionTypeOutput */
export type ActionTypeOutput = string;
