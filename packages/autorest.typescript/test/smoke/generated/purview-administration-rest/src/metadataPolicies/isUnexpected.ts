// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  MetadataRolesList200Response,
  MetadataRolesListDefaultResponse,
  MetadataPolicyListAll200Response,
  MetadataPolicyListAllDefaultResponse,
  MetadataPolicyUpdate200Response,
  MetadataPolicyUpdateDefaultResponse,
  MetadataPolicyGet200Response,
  MetadataPolicyGetDefaultResponse
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /metadataRoles": ["200"],
  "GET /metadataPolicies": ["200"],
  "PUT /metadataPolicies/{policyId}": ["200"],
  "GET /metadataPolicies/{policyId}": ["200"]
};

export function isUnexpected(
  response: MetadataRolesList200Response | MetadataRolesListDefaultResponse
): response is MetadataRolesListDefaultResponse;
export function isUnexpected(
  response:
    | MetadataPolicyListAll200Response
    | MetadataPolicyListAllDefaultResponse
): response is MetadataPolicyListAllDefaultResponse;
export function isUnexpected(
  response:
    | MetadataPolicyUpdate200Response
    | MetadataPolicyUpdateDefaultResponse
): response is MetadataPolicyUpdateDefaultResponse;
export function isUnexpected(
  response: MetadataPolicyGet200Response | MetadataPolicyGetDefaultResponse
): response is MetadataPolicyGetDefaultResponse;
export function isUnexpected(
  response:
    | MetadataRolesList200Response
    | MetadataRolesListDefaultResponse
    | MetadataPolicyListAll200Response
    | MetadataPolicyListAllDefaultResponse
    | MetadataPolicyUpdate200Response
    | MetadataPolicyUpdateDefaultResponse
    | MetadataPolicyGet200Response
    | MetadataPolicyGetDefaultResponse
): response is
  | MetadataRolesListDefaultResponse
  | MetadataPolicyListAllDefaultResponse
  | MetadataPolicyUpdateDefaultResponse
  | MetadataPolicyGetDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = geParametrizedPathSuccess(method, url.pathname);
  }
  return !pathDetails.includes(response.status);
}

function geParametrizedPathSuccess(method: string, path: string): string[] {
  const pathParts = path.split("/");

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

    // If the candidate and actual paths don't match in size
    // we move on to the next candidate path
    if (
      candidateParts.length === pathParts.length &&
      hasParametrizedPath(key)
    ) {
      // track if we have found a match to return the values found.
      let found = true;
      for (let i = 0; i < candidateParts.length; i++) {
        if (
          candidateParts[i]?.startsWith("{") &&
          candidateParts[i]?.endsWith("}")
        ) {
          // If the current part of the candidate is a "template" part
          // it is a match with the actual path part on hand
          // skip as the parameterized part can match anything
          continue;
        }

        // If the candidate part is not a template and
        // the parts don't match mark the candidate as not found
        // to move on with the next candidate path.
        if (candidateParts[i] !== pathParts[i]) {
          found = false;
          break;
        }
      }

      // We finished evaluating the current candidate parts
      // if all parts matched we return the success values form
      // the path mapping.
      if (found) {
        return value;
      }
    }
  }

  // No match was found, return an empty array.
  return [];
}

function hasParametrizedPath(path: string): boolean {
  return path.includes("/{");
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}
