// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export { BatchClient, BatchClientOptions } from "./BatchClient.js";
export {
  BatchNodeUserCreateOptions,
  BatchError,
  ErrorMessage,
  BatchErrorDetail,
  BatchNodeUserUpdateOptions,
  BatchNode,
  BatchNodeState,
  SchedulingState,
  TaskInformation,
  TaskState,
  TaskExecutionInformation,
  TaskContainerExecutionInformation,
  TaskFailureInformation,
  ErrorCategory,
  NameValuePair,
  TaskExecutionResult,
  StartTask,
  TaskContainerSettings,
  ContainerRegistry,
  BatchNodeIdentityReference,
  ContainerWorkingDirectory,
  ResourceFile,
  EnvironmentSetting,
  UserIdentity,
  AutoUserSpecification,
  AutoUserScope,
  ElevationLevel,
  StartTaskInformation,
  StartTaskState,
  CertificateReference,
  CertificateStoreLocation,
  CertificateVisibility,
  BatchNodeError,
  BatchNodeEndpointConfiguration,
  InboundEndpoint,
  InboundEndpointProtocol,
  NodeAgentInformation,
  VirtualMachineInfo,
  ImageReference,
  NodeRebootOptions,
  BatchNodeRebootOption,
  NodeReimageOptions,
  BatchNodeReimageOption,
  NodeDisableSchedulingOptions,
  DisableBatchNodeSchedulingOption,
  BatchNodeRemoteLoginSettingsResult,
  UploadBatchServiceLogsOptions,
  UploadBatchServiceLogsResult,
  BatchNodeListResult,
  NodeVMExtension,
  VMExtension,
  VMExtensionInstanceView,
  InstanceViewStatus,
  StatusLevelTypes,
  NodeVMExtensionList,
  NodeFileListResult,
  NodeFile,
  FileProperties,
  BatchTaskCreateOptions,
  ExitConditions,
  ExitCodeMapping,
  ExitOptions,
  JobAction,
  DependencyAction,
  ExitCodeRangeMapping,
  OutputFile,
  OutputFileDestination,
  OutputFileBlobContainerDestination,
  HttpHeader,
  OutputFileUploadOptions,
  OutputFileUploadCondition,
  AffinityInformation,
  TaskConstraints,
  MultiInstanceSettings,
  TaskDependencies,
  TaskIdRange,
  ApplicationPackageReference,
  AuthenticationTokenSettings,
  AccessScope,
  BatchTaskListResult,
  BatchTask,
  BatchNodeInformation,
  TaskStatistics,
  BatchTaskCollection,
  TaskAddCollectionResult,
  TaskAddResult,
  TaskAddStatus,
  BatchTaskListSubtasksResult,
  SubtaskInformation,
  SubtaskState,
  BatchJobSchedule,
  JobScheduleState,
  Schedule,
  JobSpecification,
  OnAllTasksComplete,
  OnTaskFailure,
  JobNetworkConfiguration,
  JobConstraints,
  JobManagerTask,
  JobPreparationTask,
  JobReleaseTask,
  PoolInformation,
  AutoPoolSpecification,
  PoolLifetimeOption,
  PoolSpecification,
  CloudServiceConfiguration,
  VirtualMachineConfiguration,
  WindowsConfiguration,
  DataDisk,
  CachingType,
  StorageAccountType,
  ContainerConfiguration,
  ContainerType,
  DiskEncryptionConfiguration,
  DiskEncryptionTarget,
  NodePlacementConfiguration,
  NodePlacementPolicyType,
  OSDisk,
  DiffDiskSettings,
  DiffDiskPlacement,
  TaskSchedulingPolicy,
  BatchNodeFillType,
  NetworkConfiguration,
  DynamicVNetAssignmentScope,
  PoolEndpointConfiguration,
  InboundNATPool,
  NetworkSecurityGroupRule,
  NetworkSecurityGroupRuleAccess,
  PublicIpAddressConfiguration,
  IpAddressProvisioningType,
  UserAccount,
  LinuxUserConfiguration,
  WindowsUserConfiguration,
  LoginMode,
  MetadataItem,
  MountConfiguration,
  AzureBlobFileSystemConfiguration,
  NfsMountConfiguration,
  CifsMountConfiguration,
  AzureFileShareConfiguration,
  NodeCommunicationMode,
  JobScheduleExecutionInformation,
  RecentJob,
  JobScheduleStatistics,
  BatchJobScheduleUpdateOptions,
  BatchJobScheduleCreateOptions,
  BatchJobScheduleListResult,
  BatchCertificate,
  CertificateState,
  DeleteCertificateError,
  CertificateFormat,
  CertificateListResult,
  BatchJob,
  JobState,
  JobExecutionInformation,
  JobSchedulingError,
  JobStatistics,
  BatchJobUpdateOptions,
  BatchJobDisableOptions,
  DisableJobOption,
  BatchJobTerminateOptions,
  BatchJobCreateOptions,
  BatchJobListResult,
  BatchJobListPreparationAndReleaseTaskStatusResult,
  JobPreparationAndReleaseTaskExecutionInformation,
  JobPreparationTaskExecutionInformation,
  JobPreparationTaskState,
  JobReleaseTaskExecutionInformation,
  JobReleaseTaskState,
  TaskCountsResult,
  TaskCounts,
  TaskSlotCounts,
  AccountListSupportedImagesResult,
  ImageInformation,
  OSType,
  VerificationType,
  PoolNodeCountsListResult,
  PoolNodeCounts,
  NodeCounts,
  PoolListUsageMetricsResult,
  PoolUsageMetrics,
  BatchPoolCreateOptions,
  BatchPoolListResult,
  BatchPool,
  PoolState,
  AllocationState,
  ResizeError,
  AutoScaleRun,
  AutoScaleRunError,
  PoolStatistics,
  UsageStatistics,
  ResourceStatistics,
  BatchPoolIdentity,
  PoolIdentityType,
  UserAssignedIdentity,
  BatchPoolUpdateOptions,
  BatchPoolEnableAutoScaleOptions,
  BatchPoolEvaluateAutoScaleOptions,
  BatchPoolResizeOptions,
  BatchNodeDeallocationOption,
  BatchPoolReplaceOptions,
  NodeRemoveOptions,
  ApplicationListResult,
  BatchApplication,
  Versions,
  GetApplicationOptionalParams,
  ListPoolUsageMetricsOptionalParams,
  CreatePoolOptionalParams,
  ListPoolsOptionalParams,
  DeletePoolOptionalParams,
  PoolExistsOptionalParams,
  GetPoolOptionalParams,
  UpdatePoolOptionalParams,
  DisablePoolAutoScaleOptionalParams,
  EnablePoolAutoScaleOptionalParams,
  EvaluatePoolAutoScaleOptionalParams,
  ResizePoolOptionalParams,
  StopPoolResizeOptionalParams,
  ReplacePoolPropertiesOptionalParams,
  RemoveNodesOptionalParams,
  ListSupportedImagesOptionalParams,
  ListPoolNodeCountsOptionalParams,
  DeleteJobOptionalParams,
  GetJobOptionalParams,
  UpdateJobOptionalParams,
  ReplaceJobOptionalParams,
  DisableJobOptionalParams,
  EnableJobOptionalParams,
  TerminateJobOptionalParams,
  CreateJobOptionalParams,
  ListJobsOptionalParams,
  ListJobsFromScheduleOptionalParams,
  ListJobPreparationAndReleaseTaskStatusOptionalParams,
  GetJobTaskCountsOptionalParams,
  CreateCertificateOptionalParams,
  ListCertificatesOptionalParams,
  CancelCertificateDeletionOptionalParams,
  DeleteCertificateOptionalParams,
  GetCertificateOptionalParams,
  JobScheduleExistsOptionalParams,
  DeleteJobScheduleOptionalParams,
  GetJobScheduleOptionalParams,
  UpdateJobScheduleOptionalParams,
  ReplaceJobScheduleOptionalParams,
  DisableJobScheduleOptionalParams,
  EnableJobScheduleOptionalParams,
  TerminateJobScheduleOptionalParams,
  CreateJobScheduleOptionalParams,
  ListJobSchedulesOptionalParams,
  CreateTaskOptionalParams,
  ListTasksOptionalParams,
  CreateTaskCollectionOptionalParams,
  DeleteTaskOptionalParams,
  GetTaskOptionalParams,
  ReplaceTaskOptionalParams,
  ListSubTasksOptionalParams,
  TerminateTaskOptionalParams,
  ReactivateTaskOptionalParams,
  DeleteTaskFileOptionalParams,
  GetTaskFileOptionalParams,
  GetTaskFilePropertiesOptionalParams,
  ListTaskFilesOptionalParams,
  CreateNodeUserOptionalParams,
  DeleteNodeUserOptionalParams,
  ReplaceNodeUserOptionalParams,
  GetNodeOptionalParams,
  RebootNodeOptionalParams,
  ReimageNodeOptionalParams,
  DisableNodeSchedulingOptionalParams,
  EnableNodeSchedulingOptionalParams,
  GetNodeRemoteLoginSettingsOptionalParams,
  GetNodeRemoteDesktopFileOptionalParams,
  UploadNodeLogsOptionalParams,
  ListNodesOptionalParams,
  GetNodeExtensionOptionalParams,
  ListNodeExtensionsOptionalParams,
  DeleteNodeFileOptionalParams,
  GetNodeFileOptionalParams,
  GetNodeFilePropertiesOptionalParams,
  ListNodeFilesOptionalParams,
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./models/index.js";
