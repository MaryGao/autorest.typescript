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
  JobTargetGroup,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates or updates a target group.
 *
 * @summary Creates or updates a target group.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/CreateOrUpdateJobTargetGroupMax.json
 */
async function createOrUpdateATargetGroupWithAllProperties() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "group1";
  const serverName = "server1";
  const jobAgentName = "agent1";
  const targetGroupName = "targetGroup1";
  const parameters: JobTargetGroup = {
    members: [
      {
        type: "SqlDatabase",
        databaseName: "database1",
        membershipType: "Exclude",
        serverName: "server1"
      },
      {
        type: "SqlServer",
        membershipType: "Include",
        refreshCredential:
          "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/group1/providers/Microsoft.Sql/servers/server1/jobAgents/agent1/credentials/testCredential",
        serverName: "server1"
      },
      {
        type: "SqlElasticPool",
        elasticPoolName: "pool1",
        membershipType: "Include",
        refreshCredential:
          "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/group1/providers/Microsoft.Sql/servers/server1/jobAgents/agent1/credentials/testCredential",
        serverName: "server2"
      },
      {
        type: "SqlShardMap",
        membershipType: "Include",
        refreshCredential:
          "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/group1/providers/Microsoft.Sql/servers/server1/jobAgents/agent1/credentials/testCredential",
        serverName: "server3",
        shardMapName: "shardMap1"
      }
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.jobTargetGroups.createOrUpdate(
    resourceGroupName,
    serverName,
    jobAgentName,
    targetGroupName,
    parameters
  );
  console.log(result);
}

createOrUpdateATargetGroupWithAllProperties().catch(console.error);
/**
 * This sample demonstrates how to Creates or updates a target group.
 *
 * @summary Creates or updates a target group.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/CreateOrUpdateJobTargetGroupMin.json
 */
async function createOrUpdateATargetGroupWithMinimalProperties() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "group1";
  const serverName = "server1";
  const jobAgentName = "agent1";
  const targetGroupName = "targetGroup1";
  const parameters: JobTargetGroup = { members: [] };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.jobTargetGroups.createOrUpdate(
    resourceGroupName,
    serverName,
    jobAgentName,
    targetGroupName,
    parameters
  );
  console.log(result);
}

createOrUpdateATargetGroupWithMinimalProperties().catch(console.error);
