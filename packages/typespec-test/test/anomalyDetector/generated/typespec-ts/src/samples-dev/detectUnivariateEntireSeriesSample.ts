// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createAnomalyDetectorClient from "@msinternal/ai-anomaly-detector";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation DetectUnivariateEntireSeries
 *
 * @summary call operation DetectUnivariateEntireSeries
 */
async function detectUnivariateEntireSeriesSample() {
  const endpoint = "{Your endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAnomalyDetectorClient(endpoint, credential);
  const options: DetectUnivariateEntireSeriesParameters = {
    body: {
      series: [] as any,
      granularity: "yearly",
      customInterval: 123,
      period: 123,
      maxAnomalyRatio: 123,
      sensitivity: 123,
      imputeMode: "auto",
      imputeFixedValue: 123,
    },
  };
  const result = await client.path("/timeseries/entire/detect").post(options);
  console.log(result);
}

async function main() {
  detectUnivariateEntireSeriesSample();
}

main().catch(console.error);
