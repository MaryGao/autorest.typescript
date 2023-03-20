// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ApplicationsList200Response,
  ApplicationsListDefaultResponse,
  ApplicationsGet200Response,
  ApplicationsGetDefaultResponse,
  PoolListUsageMetrics200Response,
  PoolListUsageMetricsDefaultResponse,
  PoolGetAllLifetimeStatistics200Response,
  PoolGetAllLifetimeStatisticsDefaultResponse,
  PoolAdd201Response,
  PoolAddDefaultResponse,
  PoolList200Response,
  PoolListDefaultResponse,
  PoolDelete202Response,
  PoolDeleteDefaultResponse,
  PoolExists200Response,
  PoolExists404Response,
  PoolExistsDefaultResponse,
  PoolGet200Response,
  PoolGetDefaultResponse,
  PoolPatch200Response,
  PoolPatchDefaultResponse,
  PoolDisableAutoScale200Response,
  PoolDisableAutoScaleDefaultResponse,
  PoolEnableAutoScale200Response,
  PoolEnableAutoScaleDefaultResponse,
  PoolEvaluateAutoScale200Response,
  PoolEvaluateAutoScaleDefaultResponse,
  PoolResize202Response,
  PoolResizeDefaultResponse,
  PoolStopResize202Response,
  PoolStopResizeDefaultResponse,
  PoolUpdateProperties204Response,
  PoolUpdatePropertiesDefaultResponse,
  PoolRemoveNodes202Response,
  PoolRemoveNodesDefaultResponse,
  AccountListSupportedImages200Response,
  AccountListSupportedImagesDefaultResponse,
  AccountListPoolNodeCounts200Response,
  AccountListPoolNodeCountsDefaultResponse,
  JobGetAllLifetimeStatistics200Response,
  JobGetAllLifetimeStatisticsDefaultResponse,
  JobDelete202Response,
  JobDeleteDefaultResponse,
  JobGet200Response,
  JobGetDefaultResponse,
  JobPatch200Response,
  JobPatchDefaultResponse,
  JobUpdate200Response,
  JobUpdateDefaultResponse,
  JobDisable202Response,
  JobDisableDefaultResponse,
  JobEnable202Response,
  JobEnableDefaultResponse,
  JobTerminate202Response,
  JobTerminateDefaultResponse,
  JobAdd201Response,
  JobAddDefaultResponse,
  JobList200Response,
  JobListDefaultResponse,
  JobListFromJobSchedule200Response,
  JobListFromJobScheduleDefaultResponse,
  JobListPreparationAndReleaseTaskStatus200Response,
  JobListPreparationAndReleaseTaskStatusDefaultResponse,
  JobGetTaskCounts200Response,
  JobGetTaskCountsDefaultResponse,
  CertificatesAdd201Response,
  CertificatesAddDefaultResponse,
  CertificatesList200Response,
  CertificatesListDefaultResponse,
  CertificatesCancelDeletion204Response,
  CertificatesCancelDeletionDefaultResponse,
  CertificatesDelete202Response,
  CertificatesDeleteDefaultResponse,
  CertificatesGet200Response,
  CertificatesGetDefaultResponse,
  FileDeleteFromTask200Response,
  FileDeleteFromTaskDefaultResponse,
  FileGetFromTask200Response,
  FileGetFromTaskDefaultResponse,
  FileGetPropertiesFromTask200Response,
  FileGetPropertiesFromTaskDefaultResponse,
  FileDeleteFromComputeNode200Response,
  FileDeleteFromComputeNodeDefaultResponse,
  FileGetFromComputeNode200Response,
  FileGetFromComputeNodeDefaultResponse,
  FileGetPropertiesFromComputeNode200Response,
  FileGetPropertiesFromComputeNodeDefaultResponse,
  FileListFromTask200Response,
  FileListFromTaskDefaultResponse,
  FileListFromComputeNode200Response,
  FileListFromComputeNodeDefaultResponse,
  JobScheduleExists200Response,
  JobScheduleExists404Response,
  JobScheduleExistsDefaultResponse,
  JobScheduleDelete202Response,
  JobScheduleDeleteDefaultResponse,
  JobScheduleGet200Response,
  JobScheduleGetDefaultResponse,
  JobSchedulePatch200Response,
  JobSchedulePatchDefaultResponse,
  JobScheduleUpdate200Response,
  JobScheduleUpdateDefaultResponse,
  JobScheduleDisable204Response,
  JobScheduleDisableDefaultResponse,
  JobScheduleEnable204Response,
  JobScheduleEnableDefaultResponse,
  JobScheduleTerminate202Response,
  JobScheduleTerminateDefaultResponse,
  JobScheduleAdd201Response,
  JobScheduleAddDefaultResponse,
  JobScheduleList200Response,
  JobScheduleListDefaultResponse,
  TaskAdd201Response,
  TaskAddDefaultResponse,
  TaskList200Response,
  TaskListDefaultResponse,
  TaskAddCollection200Response,
  TaskAddCollectionDefaultResponse,
  TaskDelete200Response,
  TaskDeleteDefaultResponse,
  TaskGet200Response,
  TaskGetDefaultResponse,
  TaskUpdate200Response,
  TaskUpdateDefaultResponse,
  TaskListSubtasks200Response,
  TaskListSubtasksDefaultResponse,
  TaskTerminate204Response,
  TaskTerminateDefaultResponse,
  TaskReactivate204Response,
  TaskReactivateDefaultResponse,
  ComputeNodesAddUser201Response,
  ComputeNodesAddUserDefaultResponse,
  ComputeNodesDeleteUser200Response,
  ComputeNodesDeleteUserDefaultResponse,
  ComputeNodesUpdateUser200Response,
  ComputeNodesUpdateUserDefaultResponse,
  ComputeNodesGet200Response,
  ComputeNodesGetDefaultResponse,
  ComputeNodesReboot202Response,
  ComputeNodesRebootDefaultResponse,
  ComputeNodesReimage202Response,
  ComputeNodesReimageDefaultResponse,
  ComputeNodesDisableScheduling200Response,
  ComputeNodesDisableSchedulingDefaultResponse,
  ComputeNodesEnableScheduling200Response,
  ComputeNodesEnableSchedulingDefaultResponse,
  ComputeNodesGetRemoteLoginSettings200Response,
  ComputeNodesGetRemoteLoginSettingsDefaultResponse,
  ComputeNodesGetRemoteDesktop200Response,
  ComputeNodesGetRemoteDesktopDefaultResponse,
  ComputeNodesUploadBatchServiceLogs200Response,
  ComputeNodesUploadBatchServiceLogsDefaultResponse,
  ComputeNodesList200Response,
  ComputeNodesListDefaultResponse,
  ComputeNodeExtensionsGet200Response,
  ComputeNodeExtensionsGetDefaultResponse,
  ComputeNodeExtensionsList200Response,
  ComputeNodeExtensionsListDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "GET /applications": ["200"],
  "GET /applications/{applicationId}": ["200"],
  "GET /poolusagemetrics": ["200"],
  "GET /lifetimepoolstats": ["200"],
  "POST /pools": ["201"],
  "GET /pools": ["200"],
  "DELETE /pools/{poolId}": ["202"],
  "HEAD /pools/{poolId}": ["200", "404"],
  "GET /pools/{poolId}": ["200"],
  "PATCH /pools/{poolId}": ["200"],
  "POST /pools/{poolId}/disableautoscale": ["200"],
  "POST /pools/{poolId}/enableautoscale": ["200"],
  "POST /pools/{poolId}/evaluateautoscale": ["200"],
  "POST /pools/{poolId}/resize": ["202"],
  "POST /pools/{poolId}/stopresize": ["202"],
  "POST /pools/{poolId}/updateproperties": ["204"],
  "POST /pools/{poolId}/removenodes": ["202"],
  "GET /supportedimages": ["200"],
  "GET /nodecounts": ["200"],
  "GET /lifetimejobstats": ["200"],
  "DELETE /jobs/{jobId}": ["202"],
  "GET /jobs/{jobId}": ["200"],
  "PATCH /jobs/{jobId}": ["200"],
  "PUT /jobs/{jobId}": ["200"],
  "POST /jobs/{jobId}/disable": ["202"],
  "POST /jobs/{jobId}/enable": ["202"],
  "POST /jobs/{jobId}/terminate": ["202"],
  "POST /jobs": ["201"],
  "GET /jobs": ["200"],
  "GET /jobschedules/{jobScheduleId}/jobs": ["200"],
  "GET /jobs/{jobId}/jobpreparationandreleasetaskstatus": ["200"],
  "GET /jobs/{jobId}/taskcounts": ["200"],
  "POST /certificates": ["201"],
  "GET /certificates": ["200"],
  "POST /certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})/canceldelete":
    ["204"],
  "DELETE /certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})":
    ["202"],
  "GET /certificates(thumbprintAlgorithm={thumbprintAlgorithm},thumbprint={thumbprint})":
    ["200"],
  "DELETE /jobs/{jobId}/tasks/{taskId}/files/{filePath}": ["200"],
  "GET /jobs/{jobId}/tasks/{taskId}/files/{filePath}": ["200"],
  "HEAD /jobs/{jobId}/tasks/{taskId}/files/{filePath}": ["200"],
  "DELETE /pools/{poolId}/nodes/{nodeId}/files/{filePath}": ["200"],
  "GET /pools/{poolId}/nodes/{nodeId}/files/{filePath}": ["200"],
  "HEAD /pools/{poolId}/nodes/{nodeId}/files/{filePath}": ["200"],
  "GET /jobs/{jobId}/tasks/{taskId}/files": ["200"],
  "GET /pools/{poolId}/nodes/{nodeId}/files": ["200"],
  "HEAD /jobschedules/{jobScheduleId}": ["200", "404"],
  "DELETE /jobschedules/{jobScheduleId}": ["202"],
  "GET /jobschedules/{jobScheduleId}": ["200"],
  "PATCH /jobschedules/{jobScheduleId}": ["200"],
  "PUT /jobschedules/{jobScheduleId}": ["200"],
  "POST /jobschedules/{jobScheduleId}/disable": ["204"],
  "POST /jobschedules/{jobScheduleId}/enable": ["204"],
  "POST /jobschedules/{jobScheduleId}/terminate": ["202"],
  "POST /jobschedules": ["201"],
  "GET /jobschedules": ["200"],
  "POST /jobs/{jobId}/tasks": ["201"],
  "GET /jobs/{jobId}/tasks": ["200"],
  "POST /jobs/{jobId}/addtaskcollection": ["200"],
  "DELETE /jobs/{jobId}/tasks/{taskId}": ["200"],
  "GET /jobs/{jobId}/tasks/{taskId}": ["200"],
  "PUT /jobs/{jobId}/tasks/{taskId}": ["200"],
  "GET /jobs/{jobId}/tasks/{taskId}/subtasksinfo": ["200"],
  "POST /jobs/{jobId}/tasks/{taskId}/terminate": ["204"],
  "POST /jobs/{jobId}/tasks/{taskId}/reactivate": ["204"],
  "POST /pools/{poolId}/nodes/{nodeId}/users": ["201"],
  "DELETE /pools/{poolId}/nodes/{nodeId}/users/{userName}": ["200"],
  "PUT /pools/{poolId}/nodes/{nodeId}/users/{userName}": ["200"],
  "GET /pools/{poolId}/nodes/{nodeId}": ["200"],
  "POST /pools/{poolId}/nodes/{nodeId}/reboot": ["202"],
  "POST /pools/{poolId}/nodes/{nodeId}/reimage": ["202"],
  "POST /pools/{poolId}/nodes/{nodeId}/disablescheduling": ["200"],
  "POST /pools/{poolId}/nodes/{nodeId}/enablescheduling": ["200"],
  "GET /pools/{poolId}/nodes/{nodeId}/remoteloginsettings": ["200"],
  "GET /pools/{poolId}/nodes/{nodeId}/rdp": ["200"],
  "POST /pools/{poolId}/nodes/{nodeId}/uploadbatchservicelogs": ["200"],
  "GET /pools/{poolId}/nodes": ["200"],
  "GET /pools/{poolId}/nodes/{nodeId}/extensions/{extensionName}": ["200"],
  "GET /pools/{poolId}/nodes/{nodeId}/extensions": ["200"],
};

export function isUnexpected(
  response: ApplicationsList200Response | ApplicationsListDefaultResponse
): response is ApplicationsListDefaultResponse;
export function isUnexpected(
  response: ApplicationsGet200Response | ApplicationsGetDefaultResponse
): response is ApplicationsGetDefaultResponse;
export function isUnexpected(
  response:
    | PoolListUsageMetrics200Response
    | PoolListUsageMetricsDefaultResponse
): response is PoolListUsageMetricsDefaultResponse;
export function isUnexpected(
  response:
    | PoolGetAllLifetimeStatistics200Response
    | PoolGetAllLifetimeStatisticsDefaultResponse
): response is PoolGetAllLifetimeStatisticsDefaultResponse;
export function isUnexpected(
  response: PoolAdd201Response | PoolAddDefaultResponse
): response is PoolAddDefaultResponse;
export function isUnexpected(
  response: PoolList200Response | PoolListDefaultResponse
): response is PoolListDefaultResponse;
export function isUnexpected(
  response: PoolDelete202Response | PoolDeleteDefaultResponse
): response is PoolDeleteDefaultResponse;
export function isUnexpected(
  response:
    | PoolExists200Response
    | PoolExists404Response
    | PoolExistsDefaultResponse
): response is PoolExistsDefaultResponse;
export function isUnexpected(
  response: PoolGet200Response | PoolGetDefaultResponse
): response is PoolGetDefaultResponse;
export function isUnexpected(
  response: PoolPatch200Response | PoolPatchDefaultResponse
): response is PoolPatchDefaultResponse;
export function isUnexpected(
  response:
    | PoolDisableAutoScale200Response
    | PoolDisableAutoScaleDefaultResponse
): response is PoolDisableAutoScaleDefaultResponse;
export function isUnexpected(
  response: PoolEnableAutoScale200Response | PoolEnableAutoScaleDefaultResponse
): response is PoolEnableAutoScaleDefaultResponse;
export function isUnexpected(
  response:
    | PoolEvaluateAutoScale200Response
    | PoolEvaluateAutoScaleDefaultResponse
): response is PoolEvaluateAutoScaleDefaultResponse;
export function isUnexpected(
  response: PoolResize202Response | PoolResizeDefaultResponse
): response is PoolResizeDefaultResponse;
export function isUnexpected(
  response: PoolStopResize202Response | PoolStopResizeDefaultResponse
): response is PoolStopResizeDefaultResponse;
export function isUnexpected(
  response:
    | PoolUpdateProperties204Response
    | PoolUpdatePropertiesDefaultResponse
): response is PoolUpdatePropertiesDefaultResponse;
export function isUnexpected(
  response: PoolRemoveNodes202Response | PoolRemoveNodesDefaultResponse
): response is PoolRemoveNodesDefaultResponse;
export function isUnexpected(
  response:
    | AccountListSupportedImages200Response
    | AccountListSupportedImagesDefaultResponse
): response is AccountListSupportedImagesDefaultResponse;
export function isUnexpected(
  response:
    | AccountListPoolNodeCounts200Response
    | AccountListPoolNodeCountsDefaultResponse
): response is AccountListPoolNodeCountsDefaultResponse;
export function isUnexpected(
  response:
    | JobGetAllLifetimeStatistics200Response
    | JobGetAllLifetimeStatisticsDefaultResponse
): response is JobGetAllLifetimeStatisticsDefaultResponse;
export function isUnexpected(
  response: JobDelete202Response | JobDeleteDefaultResponse
): response is JobDeleteDefaultResponse;
export function isUnexpected(
  response: JobGet200Response | JobGetDefaultResponse
): response is JobGetDefaultResponse;
export function isUnexpected(
  response: JobPatch200Response | JobPatchDefaultResponse
): response is JobPatchDefaultResponse;
export function isUnexpected(
  response: JobUpdate200Response | JobUpdateDefaultResponse
): response is JobUpdateDefaultResponse;
export function isUnexpected(
  response: JobDisable202Response | JobDisableDefaultResponse
): response is JobDisableDefaultResponse;
export function isUnexpected(
  response: JobEnable202Response | JobEnableDefaultResponse
): response is JobEnableDefaultResponse;
export function isUnexpected(
  response: JobTerminate202Response | JobTerminateDefaultResponse
): response is JobTerminateDefaultResponse;
export function isUnexpected(
  response: JobAdd201Response | JobAddDefaultResponse
): response is JobAddDefaultResponse;
export function isUnexpected(
  response: JobList200Response | JobListDefaultResponse
): response is JobListDefaultResponse;
export function isUnexpected(
  response:
    | JobListFromJobSchedule200Response
    | JobListFromJobScheduleDefaultResponse
): response is JobListFromJobScheduleDefaultResponse;
export function isUnexpected(
  response:
    | JobListPreparationAndReleaseTaskStatus200Response
    | JobListPreparationAndReleaseTaskStatusDefaultResponse
): response is JobListPreparationAndReleaseTaskStatusDefaultResponse;
export function isUnexpected(
  response: JobGetTaskCounts200Response | JobGetTaskCountsDefaultResponse
): response is JobGetTaskCountsDefaultResponse;
export function isUnexpected(
  response: CertificatesAdd201Response | CertificatesAddDefaultResponse
): response is CertificatesAddDefaultResponse;
export function isUnexpected(
  response: CertificatesList200Response | CertificatesListDefaultResponse
): response is CertificatesListDefaultResponse;
export function isUnexpected(
  response:
    | CertificatesCancelDeletion204Response
    | CertificatesCancelDeletionDefaultResponse
): response is CertificatesCancelDeletionDefaultResponse;
export function isUnexpected(
  response: CertificatesDelete202Response | CertificatesDeleteDefaultResponse
): response is CertificatesDeleteDefaultResponse;
export function isUnexpected(
  response: CertificatesGet200Response | CertificatesGetDefaultResponse
): response is CertificatesGetDefaultResponse;
export function isUnexpected(
  response: FileDeleteFromTask200Response | FileDeleteFromTaskDefaultResponse
): response is FileDeleteFromTaskDefaultResponse;
export function isUnexpected(
  response: FileGetFromTask200Response | FileGetFromTaskDefaultResponse
): response is FileGetFromTaskDefaultResponse;
export function isUnexpected(
  response:
    | FileGetPropertiesFromTask200Response
    | FileGetPropertiesFromTaskDefaultResponse
): response is FileGetPropertiesFromTaskDefaultResponse;
export function isUnexpected(
  response:
    | FileDeleteFromComputeNode200Response
    | FileDeleteFromComputeNodeDefaultResponse
): response is FileDeleteFromComputeNodeDefaultResponse;
export function isUnexpected(
  response:
    | FileGetFromComputeNode200Response
    | FileGetFromComputeNodeDefaultResponse
): response is FileGetFromComputeNodeDefaultResponse;
export function isUnexpected(
  response:
    | FileGetPropertiesFromComputeNode200Response
    | FileGetPropertiesFromComputeNodeDefaultResponse
): response is FileGetPropertiesFromComputeNodeDefaultResponse;
export function isUnexpected(
  response: FileListFromTask200Response | FileListFromTaskDefaultResponse
): response is FileListFromTaskDefaultResponse;
export function isUnexpected(
  response:
    | FileListFromComputeNode200Response
    | FileListFromComputeNodeDefaultResponse
): response is FileListFromComputeNodeDefaultResponse;
export function isUnexpected(
  response:
    | JobScheduleExists200Response
    | JobScheduleExists404Response
    | JobScheduleExistsDefaultResponse
): response is JobScheduleExistsDefaultResponse;
export function isUnexpected(
  response: JobScheduleDelete202Response | JobScheduleDeleteDefaultResponse
): response is JobScheduleDeleteDefaultResponse;
export function isUnexpected(
  response: JobScheduleGet200Response | JobScheduleGetDefaultResponse
): response is JobScheduleGetDefaultResponse;
export function isUnexpected(
  response: JobSchedulePatch200Response | JobSchedulePatchDefaultResponse
): response is JobSchedulePatchDefaultResponse;
export function isUnexpected(
  response: JobScheduleUpdate200Response | JobScheduleUpdateDefaultResponse
): response is JobScheduleUpdateDefaultResponse;
export function isUnexpected(
  response: JobScheduleDisable204Response | JobScheduleDisableDefaultResponse
): response is JobScheduleDisableDefaultResponse;
export function isUnexpected(
  response: JobScheduleEnable204Response | JobScheduleEnableDefaultResponse
): response is JobScheduleEnableDefaultResponse;
export function isUnexpected(
  response:
    | JobScheduleTerminate202Response
    | JobScheduleTerminateDefaultResponse
): response is JobScheduleTerminateDefaultResponse;
export function isUnexpected(
  response: JobScheduleAdd201Response | JobScheduleAddDefaultResponse
): response is JobScheduleAddDefaultResponse;
export function isUnexpected(
  response: JobScheduleList200Response | JobScheduleListDefaultResponse
): response is JobScheduleListDefaultResponse;
export function isUnexpected(
  response: TaskAdd201Response | TaskAddDefaultResponse
): response is TaskAddDefaultResponse;
export function isUnexpected(
  response: TaskList200Response | TaskListDefaultResponse
): response is TaskListDefaultResponse;
export function isUnexpected(
  response: TaskAddCollection200Response | TaskAddCollectionDefaultResponse
): response is TaskAddCollectionDefaultResponse;
export function isUnexpected(
  response: TaskDelete200Response | TaskDeleteDefaultResponse
): response is TaskDeleteDefaultResponse;
export function isUnexpected(
  response: TaskGet200Response | TaskGetDefaultResponse
): response is TaskGetDefaultResponse;
export function isUnexpected(
  response: TaskUpdate200Response | TaskUpdateDefaultResponse
): response is TaskUpdateDefaultResponse;
export function isUnexpected(
  response: TaskListSubtasks200Response | TaskListSubtasksDefaultResponse
): response is TaskListSubtasksDefaultResponse;
export function isUnexpected(
  response: TaskTerminate204Response | TaskTerminateDefaultResponse
): response is TaskTerminateDefaultResponse;
export function isUnexpected(
  response: TaskReactivate204Response | TaskReactivateDefaultResponse
): response is TaskReactivateDefaultResponse;
export function isUnexpected(
  response: ComputeNodesAddUser201Response | ComputeNodesAddUserDefaultResponse
): response is ComputeNodesAddUserDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodesDeleteUser200Response
    | ComputeNodesDeleteUserDefaultResponse
): response is ComputeNodesDeleteUserDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodesUpdateUser200Response
    | ComputeNodesUpdateUserDefaultResponse
): response is ComputeNodesUpdateUserDefaultResponse;
export function isUnexpected(
  response: ComputeNodesGet200Response | ComputeNodesGetDefaultResponse
): response is ComputeNodesGetDefaultResponse;
export function isUnexpected(
  response: ComputeNodesReboot202Response | ComputeNodesRebootDefaultResponse
): response is ComputeNodesRebootDefaultResponse;
export function isUnexpected(
  response: ComputeNodesReimage202Response | ComputeNodesReimageDefaultResponse
): response is ComputeNodesReimageDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodesDisableScheduling200Response
    | ComputeNodesDisableSchedulingDefaultResponse
): response is ComputeNodesDisableSchedulingDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodesEnableScheduling200Response
    | ComputeNodesEnableSchedulingDefaultResponse
): response is ComputeNodesEnableSchedulingDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodesGetRemoteLoginSettings200Response
    | ComputeNodesGetRemoteLoginSettingsDefaultResponse
): response is ComputeNodesGetRemoteLoginSettingsDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodesGetRemoteDesktop200Response
    | ComputeNodesGetRemoteDesktopDefaultResponse
): response is ComputeNodesGetRemoteDesktopDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodesUploadBatchServiceLogs200Response
    | ComputeNodesUploadBatchServiceLogsDefaultResponse
): response is ComputeNodesUploadBatchServiceLogsDefaultResponse;
export function isUnexpected(
  response: ComputeNodesList200Response | ComputeNodesListDefaultResponse
): response is ComputeNodesListDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodeExtensionsGet200Response
    | ComputeNodeExtensionsGetDefaultResponse
): response is ComputeNodeExtensionsGetDefaultResponse;
export function isUnexpected(
  response:
    | ComputeNodeExtensionsList200Response
    | ComputeNodeExtensionsListDefaultResponse
): response is ComputeNodeExtensionsListDefaultResponse;
export function isUnexpected(
  response:
    | ApplicationsList200Response
    | ApplicationsListDefaultResponse
    | ApplicationsGet200Response
    | ApplicationsGetDefaultResponse
    | PoolListUsageMetrics200Response
    | PoolListUsageMetricsDefaultResponse
    | PoolGetAllLifetimeStatistics200Response
    | PoolGetAllLifetimeStatisticsDefaultResponse
    | PoolAdd201Response
    | PoolAddDefaultResponse
    | PoolList200Response
    | PoolListDefaultResponse
    | PoolDelete202Response
    | PoolDeleteDefaultResponse
    | PoolExists200Response
    | PoolExists404Response
    | PoolExistsDefaultResponse
    | PoolGet200Response
    | PoolGetDefaultResponse
    | PoolPatch200Response
    | PoolPatchDefaultResponse
    | PoolDisableAutoScale200Response
    | PoolDisableAutoScaleDefaultResponse
    | PoolEnableAutoScale200Response
    | PoolEnableAutoScaleDefaultResponse
    | PoolEvaluateAutoScale200Response
    | PoolEvaluateAutoScaleDefaultResponse
    | PoolResize202Response
    | PoolResizeDefaultResponse
    | PoolStopResize202Response
    | PoolStopResizeDefaultResponse
    | PoolUpdateProperties204Response
    | PoolUpdatePropertiesDefaultResponse
    | PoolRemoveNodes202Response
    | PoolRemoveNodesDefaultResponse
    | AccountListSupportedImages200Response
    | AccountListSupportedImagesDefaultResponse
    | AccountListPoolNodeCounts200Response
    | AccountListPoolNodeCountsDefaultResponse
    | JobGetAllLifetimeStatistics200Response
    | JobGetAllLifetimeStatisticsDefaultResponse
    | JobDelete202Response
    | JobDeleteDefaultResponse
    | JobGet200Response
    | JobGetDefaultResponse
    | JobPatch200Response
    | JobPatchDefaultResponse
    | JobUpdate200Response
    | JobUpdateDefaultResponse
    | JobDisable202Response
    | JobDisableDefaultResponse
    | JobEnable202Response
    | JobEnableDefaultResponse
    | JobTerminate202Response
    | JobTerminateDefaultResponse
    | JobAdd201Response
    | JobAddDefaultResponse
    | JobList200Response
    | JobListDefaultResponse
    | JobListFromJobSchedule200Response
    | JobListFromJobScheduleDefaultResponse
    | JobListPreparationAndReleaseTaskStatus200Response
    | JobListPreparationAndReleaseTaskStatusDefaultResponse
    | JobGetTaskCounts200Response
    | JobGetTaskCountsDefaultResponse
    | CertificatesAdd201Response
    | CertificatesAddDefaultResponse
    | CertificatesList200Response
    | CertificatesListDefaultResponse
    | CertificatesCancelDeletion204Response
    | CertificatesCancelDeletionDefaultResponse
    | CertificatesDelete202Response
    | CertificatesDeleteDefaultResponse
    | CertificatesGet200Response
    | CertificatesGetDefaultResponse
    | FileDeleteFromTask200Response
    | FileDeleteFromTaskDefaultResponse
    | FileGetFromTask200Response
    | FileGetFromTaskDefaultResponse
    | FileGetPropertiesFromTask200Response
    | FileGetPropertiesFromTaskDefaultResponse
    | FileDeleteFromComputeNode200Response
    | FileDeleteFromComputeNodeDefaultResponse
    | FileGetFromComputeNode200Response
    | FileGetFromComputeNodeDefaultResponse
    | FileGetPropertiesFromComputeNode200Response
    | FileGetPropertiesFromComputeNodeDefaultResponse
    | FileListFromTask200Response
    | FileListFromTaskDefaultResponse
    | FileListFromComputeNode200Response
    | FileListFromComputeNodeDefaultResponse
    | JobScheduleExists200Response
    | JobScheduleExists404Response
    | JobScheduleExistsDefaultResponse
    | JobScheduleDelete202Response
    | JobScheduleDeleteDefaultResponse
    | JobScheduleGet200Response
    | JobScheduleGetDefaultResponse
    | JobSchedulePatch200Response
    | JobSchedulePatchDefaultResponse
    | JobScheduleUpdate200Response
    | JobScheduleUpdateDefaultResponse
    | JobScheduleDisable204Response
    | JobScheduleDisableDefaultResponse
    | JobScheduleEnable204Response
    | JobScheduleEnableDefaultResponse
    | JobScheduleTerminate202Response
    | JobScheduleTerminateDefaultResponse
    | JobScheduleAdd201Response
    | JobScheduleAddDefaultResponse
    | JobScheduleList200Response
    | JobScheduleListDefaultResponse
    | TaskAdd201Response
    | TaskAddDefaultResponse
    | TaskList200Response
    | TaskListDefaultResponse
    | TaskAddCollection200Response
    | TaskAddCollectionDefaultResponse
    | TaskDelete200Response
    | TaskDeleteDefaultResponse
    | TaskGet200Response
    | TaskGetDefaultResponse
    | TaskUpdate200Response
    | TaskUpdateDefaultResponse
    | TaskListSubtasks200Response
    | TaskListSubtasksDefaultResponse
    | TaskTerminate204Response
    | TaskTerminateDefaultResponse
    | TaskReactivate204Response
    | TaskReactivateDefaultResponse
    | ComputeNodesAddUser201Response
    | ComputeNodesAddUserDefaultResponse
    | ComputeNodesDeleteUser200Response
    | ComputeNodesDeleteUserDefaultResponse
    | ComputeNodesUpdateUser200Response
    | ComputeNodesUpdateUserDefaultResponse
    | ComputeNodesGet200Response
    | ComputeNodesGetDefaultResponse
    | ComputeNodesReboot202Response
    | ComputeNodesRebootDefaultResponse
    | ComputeNodesReimage202Response
    | ComputeNodesReimageDefaultResponse
    | ComputeNodesDisableScheduling200Response
    | ComputeNodesDisableSchedulingDefaultResponse
    | ComputeNodesEnableScheduling200Response
    | ComputeNodesEnableSchedulingDefaultResponse
    | ComputeNodesGetRemoteLoginSettings200Response
    | ComputeNodesGetRemoteLoginSettingsDefaultResponse
    | ComputeNodesGetRemoteDesktop200Response
    | ComputeNodesGetRemoteDesktopDefaultResponse
    | ComputeNodesUploadBatchServiceLogs200Response
    | ComputeNodesUploadBatchServiceLogsDefaultResponse
    | ComputeNodesList200Response
    | ComputeNodesListDefaultResponse
    | ComputeNodeExtensionsGet200Response
    | ComputeNodeExtensionsGetDefaultResponse
    | ComputeNodeExtensionsList200Response
    | ComputeNodeExtensionsListDefaultResponse
): response is
  | ApplicationsListDefaultResponse
  | ApplicationsGetDefaultResponse
  | PoolListUsageMetricsDefaultResponse
  | PoolGetAllLifetimeStatisticsDefaultResponse
  | PoolAddDefaultResponse
  | PoolListDefaultResponse
  | PoolDeleteDefaultResponse
  | PoolExistsDefaultResponse
  | PoolGetDefaultResponse
  | PoolPatchDefaultResponse
  | PoolDisableAutoScaleDefaultResponse
  | PoolEnableAutoScaleDefaultResponse
  | PoolEvaluateAutoScaleDefaultResponse
  | PoolResizeDefaultResponse
  | PoolStopResizeDefaultResponse
  | PoolUpdatePropertiesDefaultResponse
  | PoolRemoveNodesDefaultResponse
  | AccountListSupportedImagesDefaultResponse
  | AccountListPoolNodeCountsDefaultResponse
  | JobGetAllLifetimeStatisticsDefaultResponse
  | JobDeleteDefaultResponse
  | JobGetDefaultResponse
  | JobPatchDefaultResponse
  | JobUpdateDefaultResponse
  | JobDisableDefaultResponse
  | JobEnableDefaultResponse
  | JobTerminateDefaultResponse
  | JobAddDefaultResponse
  | JobListDefaultResponse
  | JobListFromJobScheduleDefaultResponse
  | JobListPreparationAndReleaseTaskStatusDefaultResponse
  | JobGetTaskCountsDefaultResponse
  | CertificatesAddDefaultResponse
  | CertificatesListDefaultResponse
  | CertificatesCancelDeletionDefaultResponse
  | CertificatesDeleteDefaultResponse
  | CertificatesGetDefaultResponse
  | FileDeleteFromTaskDefaultResponse
  | FileGetFromTaskDefaultResponse
  | FileGetPropertiesFromTaskDefaultResponse
  | FileDeleteFromComputeNodeDefaultResponse
  | FileGetFromComputeNodeDefaultResponse
  | FileGetPropertiesFromComputeNodeDefaultResponse
  | FileListFromTaskDefaultResponse
  | FileListFromComputeNodeDefaultResponse
  | JobScheduleExistsDefaultResponse
  | JobScheduleDeleteDefaultResponse
  | JobScheduleGetDefaultResponse
  | JobSchedulePatchDefaultResponse
  | JobScheduleUpdateDefaultResponse
  | JobScheduleDisableDefaultResponse
  | JobScheduleEnableDefaultResponse
  | JobScheduleTerminateDefaultResponse
  | JobScheduleAddDefaultResponse
  | JobScheduleListDefaultResponse
  | TaskAddDefaultResponse
  | TaskListDefaultResponse
  | TaskAddCollectionDefaultResponse
  | TaskDeleteDefaultResponse
  | TaskGetDefaultResponse
  | TaskUpdateDefaultResponse
  | TaskListSubtasksDefaultResponse
  | TaskTerminateDefaultResponse
  | TaskReactivateDefaultResponse
  | ComputeNodesAddUserDefaultResponse
  | ComputeNodesDeleteUserDefaultResponse
  | ComputeNodesUpdateUserDefaultResponse
  | ComputeNodesGetDefaultResponse
  | ComputeNodesRebootDefaultResponse
  | ComputeNodesReimageDefaultResponse
  | ComputeNodesDisableSchedulingDefaultResponse
  | ComputeNodesEnableSchedulingDefaultResponse
  | ComputeNodesGetRemoteLoginSettingsDefaultResponse
  | ComputeNodesGetRemoteDesktopDefaultResponse
  | ComputeNodesUploadBatchServiceLogsDefaultResponse
  | ComputeNodesListDefaultResponse
  | ComputeNodeExtensionsGetDefaultResponse
  | ComputeNodeExtensionsListDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = getParametrizedPathSuccess(method, url.pathname);
  }
  return !pathDetails.includes(response.status);
}

function getParametrizedPathSuccess(method: string, path: string): string[] {
  const pathParts = path.split("/");

  // Traverse list to match the longest candidate
  // matchedLen: the length of candidate path
  // matchedValue: the matched status code array
  let matchedLen = -1,
    matchedValue: string[] = [];

  // Iterate the responseMap to find a match
  for (const [key, value] of Object.entries(responseMap)) {
    // Extracting the path from the map key which is in format
    // GET /path/foo
    if (!key.startsWith(method)) {
      continue;
    }
    const candidatePath = getPathFromMapKey(key);
    // Get each part of the url path
    const candidateParts = candidatePath.split("/");

    // track if we have found a match to return the values found.
    let found = true;
    for (
      let i = candidateParts.length - 1, j = pathParts.length - 1;
      i >= 1 && j >= 1;
      i--, j--
    ) {
      if (
        candidateParts[i]?.startsWith("{") &&
        candidateParts[i]?.indexOf("}") !== -1
      ) {
        const start = candidateParts[i]!.indexOf("}") + 1,
          end = candidateParts[i]?.length;
        // If the current part of the candidate is a "template" part
        // Try to use the suffix of pattern to match the path
        // {guid} ==> $
        // {guid}:export ==> :export$
        const isMatched = new RegExp(
          `${candidateParts[i]?.slice(start, end)}`
        ).test(pathParts[j] || "");

        if (!isMatched) {
          found = false;
          break;
        }
        continue;
      }

      // If the candidate part is not a template and
      // the parts don't match mark the candidate as not found
      // to move on with the next candidate path.
      if (candidateParts[i] !== pathParts[j]) {
        found = false;
        break;
      }
    }

    // We finished evaluating the current candidate parts
    // Update the matched value if and only if we found the longer pattern
    if (found && candidatePath.length > matchedLen) {
      matchedLen = candidatePath.length;
      matchedValue = value;
    }
  }

  return matchedValue;
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}