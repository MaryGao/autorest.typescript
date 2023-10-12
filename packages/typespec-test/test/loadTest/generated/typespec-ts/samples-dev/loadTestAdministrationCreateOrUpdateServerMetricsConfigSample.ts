// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DefaultAzureCredential } from "@azure/identity";
import createAzureLoadTestingClient, {
  LoadTestAdministrationCreateOrUpdateServerMetricsConfigParameters,
} from "@azure-rest/load-testing";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation CreateOrUpdateServerMetricsConfig
 *
 * @summary call operation CreateOrUpdateServerMetricsConfig
 */
async function loadTestAdministrationCreateOrUpdateServerMetricsConfigSample() {
  const endpoint = "{Your endpoint}";
  const credential = new DefaultAzureCredential();
  const client = createAzureLoadTestingClient(endpoint, credential);
  const testId = "{Your testId}";
  const options: LoadTestAdministrationCreateOrUpdateServerMetricsConfigParameters =
    {
      body: {
        metrics: {
          key: {
            resourceId: "{Your resourceId}",
            metricNamespace: "{Your metricNamespace}",
            displayDescription: "{Your displayDescription}",
            name: "{Your name}",
            aggregation: "{Your aggregation}",
            unit: "{Your unit}",
            resourceType: "{Your resourceType}",
          },
        },
      },
      contentType: "application/merge-patch+json",
    };
  const result = await client
    .path("/tests/{testId}/server-metrics-config", testId)
    .patch(options);
  console.log(result);
}

async function main() {
  loadTestAdministrationCreateOrUpdateServerMetricsConfigSample();
}

main().catch(console.error);