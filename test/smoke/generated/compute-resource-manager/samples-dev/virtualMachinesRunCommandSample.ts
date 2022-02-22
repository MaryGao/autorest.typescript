/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  RunCommandInput,
  ComputeManagementClient
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Run command on the VM.
 *
 * @summary Run command on the VM.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/runCommands/VirtualMachineRunCommand.json
 */
async function virtualMachineRunCommand() {
  const subscriptionId = "24fb23e3-6ba3-41f0-9b6e-e41131d5d61e";
  const resourceGroupName = "crptestar98131";
  const vmName = "vm3036";
  const parameters: RunCommandInput = { commandId: "RunPowerShellScript" };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachines.beginRunCommandAndWait(
    resourceGroupName,
    vmName,
    parameters
  );
  console.log(result);
}

virtualMachineRunCommand().catch(console.error);
