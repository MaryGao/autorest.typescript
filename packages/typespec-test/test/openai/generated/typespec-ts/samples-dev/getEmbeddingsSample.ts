// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureKeyCredential } from "@azure/core-auth";
import createOpenAIClient, {
  GetEmbeddingsParameters,
} from "@msinternal/openai";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetEmbeddings
 *
 * @summary call operation GetEmbeddings
 */
async function getEmbeddingsSample() {
  const endpoint = "{Your endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createOpenAIClient(endpoint, credential);
  const deploymentId = "{Your deploymentId}";
  const options: GetEmbeddingsParameters = {
    body: {
      user: "{Your user}",
      input_type: "{Your input_type}",
      model: "{Your model}",
      input: "{Your input}",
    },
  };
  const result = await client
    .path("/deployments/{deploymentId}/embeddings", deploymentId)
    .post(options);
  console.log(result);
}

async function main() {
  getEmbeddingsSample();
}

main().catch(console.error);