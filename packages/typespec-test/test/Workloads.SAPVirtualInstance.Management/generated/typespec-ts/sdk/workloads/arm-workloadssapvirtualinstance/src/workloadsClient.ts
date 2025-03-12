// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  getSapApplicationServerInstancesOperations,
  SapApplicationServerInstancesOperations,
} from "./classic/sapApplicationServerInstances/index.js";
import {
  getSapDatabaseInstancesOperations,
  SapDatabaseInstancesOperations,
} from "./classic/sapDatabaseInstances/index.js";
import {
  getSapCentralServerInstancesOperations,
  SapCentralServerInstancesOperations,
} from "./classic/sapCentralServerInstances/index.js";
import {
  getSapVirtualInstancesOperations,
  SapVirtualInstancesOperations,
} from "./classic/sapVirtualInstances/index.js";
import {
  getOperationsOperations,
  OperationsOperations,
} from "./classic/operations/index.js";
import {
  createWorkloads,
  WorkloadsContext,
  WorkloadsClientOptionalParams,
} from "./api/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { WorkloadsClientOptionalParams } from "./api/workloadsContext.js";

export class WorkloadsClient {
  private _client: WorkloadsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Workloads client provides access to various workload operations. */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: WorkloadsClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createWorkloads(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.sapApplicationServerInstances =
      getSapApplicationServerInstancesOperations(this._client);
    this.sapDatabaseInstances = getSapDatabaseInstancesOperations(this._client);
    this.sapCentralServerInstances = getSapCentralServerInstancesOperations(
      this._client,
    );
    this.sapVirtualInstances = getSapVirtualInstancesOperations(this._client);
    this.operations = getOperationsOperations(this._client);
  }

  /** The operation groups for sapApplicationServerInstances */
  public readonly sapApplicationServerInstances: SapApplicationServerInstancesOperations;
  /** The operation groups for sapDatabaseInstances */
  public readonly sapDatabaseInstances: SapDatabaseInstancesOperations;
  /** The operation groups for sapCentralServerInstances */
  public readonly sapCentralServerInstances: SapCentralServerInstancesOperations;
  /** The operation groups for sapVirtualInstances */
  public readonly sapVirtualInstances: SapVirtualInstancesOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
