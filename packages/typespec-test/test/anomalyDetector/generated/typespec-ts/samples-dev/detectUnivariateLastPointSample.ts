// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createAnomalyDetectorClient, {
  DetectUnivariateLastPointParameters,
} from "@msinternal/ai-anomaly-detector";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation DetectUnivariateLastPoint
 *
 * @summary call operation DetectUnivariateLastPoint
 */
async function detectUnivariateLastPointSample() {
  const endpoint = "{Your endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAnomalyDetectorClient(endpoint, credential);
  const options: DetectUnivariateLastPointParameters = {
    body: {
      series: [{ timestamp: new Date(), value: 123 }],
      granularity: "yearly",
      customInterval: 123,
      period: 123,
      maxAnomalyRatio: 123,
      sensitivity: 123,
      imputeMode: '{Your "imputeMode"}',
      imputeFixedValue: 123,
    },
  };
  const result = await client.path("/timeseries/last/detect").post(options);
  console.log(result);
}

async function main() {
  detectUnivariateLastPointSample();
}

main().catch(console.error);
