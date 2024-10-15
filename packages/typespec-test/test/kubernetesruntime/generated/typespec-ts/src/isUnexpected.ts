// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  StorageClassGet200Response,
  StorageClassGetDefaultResponse,
  StorageClassCreateOrUpdate200Response,
  StorageClassCreateOrUpdate201Response,
  StorageClassCreateOrUpdateLogicalResponse,
  StorageClassCreateOrUpdateDefaultResponse,
  StorageClassUpdate200Response,
  StorageClassUpdate202Response,
  StorageClassUpdateLogicalResponse,
  StorageClassUpdateDefaultResponse,
  StorageClassDelete202Response,
  StorageClassDelete204Response,
  StorageClassDeleteLogicalResponse,
  StorageClassDeleteDefaultResponse,
  StorageClassList200Response,
  StorageClassListDefaultResponse,
  OperationsList200Response,
  OperationsListDefaultResponse,
  LoadBalancersGet200Response,
  LoadBalancersGetDefaultResponse,
  LoadBalancersCreateOrUpdate200Response,
  LoadBalancersCreateOrUpdate201Response,
  LoadBalancersCreateOrUpdateLogicalResponse,
  LoadBalancersCreateOrUpdateDefaultResponse,
  LoadBalancersDelete200Response,
  LoadBalancersDelete204Response,
  LoadBalancersDeleteDefaultResponse,
  LoadBalancersList200Response,
  LoadBalancersListDefaultResponse,
  BgpPeersGet200Response,
  BgpPeersGetDefaultResponse,
  BgpPeersCreateOrUpdate200Response,
  BgpPeersCreateOrUpdate201Response,
  BgpPeersCreateOrUpdateLogicalResponse,
  BgpPeersCreateOrUpdateDefaultResponse,
  BgpPeersDelete200Response,
  BgpPeersDelete204Response,
  BgpPeersDeleteDefaultResponse,
  BgpPeersList200Response,
  BgpPeersListDefaultResponse,
  ServicesGet200Response,
  ServicesGetDefaultResponse,
  ServicesCreateOrUpdate200Response,
  ServicesCreateOrUpdate201Response,
  ServicesCreateOrUpdateDefaultResponse,
  ServicesDelete200Response,
  ServicesDelete204Response,
  ServicesDeleteDefaultResponse,
  ServicesList200Response,
  ServicesListDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "GET /{resourceUri}/providers/Microsoft.KubernetesRuntime/storageClasses/{storageClassName}":
    ["200"],
  "PUT /{resourceUri}/providers/Microsoft.KubernetesRuntime/storageClasses/{storageClassName}":
    ["200", "201"],
  "PATCH /{resourceUri}/providers/Microsoft.KubernetesRuntime/storageClasses/{storageClassName}":
    ["200", "202"],
  "DELETE /{resourceUri}/providers/Microsoft.KubernetesRuntime/storageClasses/{storageClassName}":
    ["202", "204"],
  "GET /{resourceUri}/providers/Microsoft.KubernetesRuntime/storageClasses": [
    "200",
  ],
  "GET /providers/Microsoft.KubernetesRuntime/operations": ["200"],
  "GET /{resourceUri}/providers/Microsoft.KubernetesRuntime/loadBalancers/{loadBalancerName}":
    ["200"],
  "PUT /{resourceUri}/providers/Microsoft.KubernetesRuntime/loadBalancers/{loadBalancerName}":
    ["200", "201"],
  "DELETE /{resourceUri}/providers/Microsoft.KubernetesRuntime/loadBalancers/{loadBalancerName}":
    ["200", "204"],
  "GET /{resourceUri}/providers/Microsoft.KubernetesRuntime/loadBalancers": [
    "200",
  ],
  "GET /{resourceUri}/providers/Microsoft.KubernetesRuntime/bgpPeers/{bgpPeerName}":
    ["200"],
  "PUT /{resourceUri}/providers/Microsoft.KubernetesRuntime/bgpPeers/{bgpPeerName}":
    ["200", "201"],
  "DELETE /{resourceUri}/providers/Microsoft.KubernetesRuntime/bgpPeers/{bgpPeerName}":
    ["200", "204"],
  "GET /{resourceUri}/providers/Microsoft.KubernetesRuntime/bgpPeers": ["200"],
  "GET /{resourceUri}/providers/Microsoft.KubernetesRuntime/services/{serviceName}":
    ["200"],
  "PUT /{resourceUri}/providers/Microsoft.KubernetesRuntime/services/{serviceName}":
    ["200", "201"],
  "DELETE /{resourceUri}/providers/Microsoft.KubernetesRuntime/services/{serviceName}":
    ["200", "204"],
  "GET /{resourceUri}/providers/Microsoft.KubernetesRuntime/services": ["200"],
};

export function isUnexpected(
  response: StorageClassGet200Response | StorageClassGetDefaultResponse,
): response is StorageClassGetDefaultResponse;
export function isUnexpected(
  response:
    | StorageClassCreateOrUpdate200Response
    | StorageClassCreateOrUpdate201Response
    | StorageClassCreateOrUpdateLogicalResponse
    | StorageClassCreateOrUpdateDefaultResponse,
): response is StorageClassCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | StorageClassUpdate200Response
    | StorageClassUpdate202Response
    | StorageClassUpdateLogicalResponse
    | StorageClassUpdateDefaultResponse,
): response is StorageClassUpdateDefaultResponse;
export function isUnexpected(
  response:
    | StorageClassDelete202Response
    | StorageClassDelete204Response
    | StorageClassDeleteLogicalResponse
    | StorageClassDeleteDefaultResponse,
): response is StorageClassDeleteDefaultResponse;
export function isUnexpected(
  response: StorageClassList200Response | StorageClassListDefaultResponse,
): response is StorageClassListDefaultResponse;
export function isUnexpected(
  response: OperationsList200Response | OperationsListDefaultResponse,
): response is OperationsListDefaultResponse;
export function isUnexpected(
  response: LoadBalancersGet200Response | LoadBalancersGetDefaultResponse,
): response is LoadBalancersGetDefaultResponse;
export function isUnexpected(
  response:
    | LoadBalancersCreateOrUpdate200Response
    | LoadBalancersCreateOrUpdate201Response
    | LoadBalancersCreateOrUpdateLogicalResponse
    | LoadBalancersCreateOrUpdateDefaultResponse,
): response is LoadBalancersCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | LoadBalancersDelete200Response
    | LoadBalancersDelete204Response
    | LoadBalancersDeleteDefaultResponse,
): response is LoadBalancersDeleteDefaultResponse;
export function isUnexpected(
  response: LoadBalancersList200Response | LoadBalancersListDefaultResponse,
): response is LoadBalancersListDefaultResponse;
export function isUnexpected(
  response: BgpPeersGet200Response | BgpPeersGetDefaultResponse,
): response is BgpPeersGetDefaultResponse;
export function isUnexpected(
  response:
    | BgpPeersCreateOrUpdate200Response
    | BgpPeersCreateOrUpdate201Response
    | BgpPeersCreateOrUpdateLogicalResponse
    | BgpPeersCreateOrUpdateDefaultResponse,
): response is BgpPeersCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | BgpPeersDelete200Response
    | BgpPeersDelete204Response
    | BgpPeersDeleteDefaultResponse,
): response is BgpPeersDeleteDefaultResponse;
export function isUnexpected(
  response: BgpPeersList200Response | BgpPeersListDefaultResponse,
): response is BgpPeersListDefaultResponse;
export function isUnexpected(
  response: ServicesGet200Response | ServicesGetDefaultResponse,
): response is ServicesGetDefaultResponse;
export function isUnexpected(
  response:
    | ServicesCreateOrUpdate200Response
    | ServicesCreateOrUpdate201Response
    | ServicesCreateOrUpdateDefaultResponse,
): response is ServicesCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | ServicesDelete200Response
    | ServicesDelete204Response
    | ServicesDeleteDefaultResponse,
): response is ServicesDeleteDefaultResponse;
export function isUnexpected(
  response: ServicesList200Response | ServicesListDefaultResponse,
): response is ServicesListDefaultResponse;
export function isUnexpected(
  response:
    | StorageClassGet200Response
    | StorageClassGetDefaultResponse
    | StorageClassCreateOrUpdate200Response
    | StorageClassCreateOrUpdate201Response
    | StorageClassCreateOrUpdateLogicalResponse
    | StorageClassCreateOrUpdateDefaultResponse
    | StorageClassUpdate200Response
    | StorageClassUpdate202Response
    | StorageClassUpdateLogicalResponse
    | StorageClassUpdateDefaultResponse
    | StorageClassDelete202Response
    | StorageClassDelete204Response
    | StorageClassDeleteLogicalResponse
    | StorageClassDeleteDefaultResponse
    | StorageClassList200Response
    | StorageClassListDefaultResponse
    | OperationsList200Response
    | OperationsListDefaultResponse
    | LoadBalancersGet200Response
    | LoadBalancersGetDefaultResponse
    | LoadBalancersCreateOrUpdate200Response
    | LoadBalancersCreateOrUpdate201Response
    | LoadBalancersCreateOrUpdateLogicalResponse
    | LoadBalancersCreateOrUpdateDefaultResponse
    | LoadBalancersDelete200Response
    | LoadBalancersDelete204Response
    | LoadBalancersDeleteDefaultResponse
    | LoadBalancersList200Response
    | LoadBalancersListDefaultResponse
    | BgpPeersGet200Response
    | BgpPeersGetDefaultResponse
    | BgpPeersCreateOrUpdate200Response
    | BgpPeersCreateOrUpdate201Response
    | BgpPeersCreateOrUpdateLogicalResponse
    | BgpPeersCreateOrUpdateDefaultResponse
    | BgpPeersDelete200Response
    | BgpPeersDelete204Response
    | BgpPeersDeleteDefaultResponse
    | BgpPeersList200Response
    | BgpPeersListDefaultResponse
    | ServicesGet200Response
    | ServicesGetDefaultResponse
    | ServicesCreateOrUpdate200Response
    | ServicesCreateOrUpdate201Response
    | ServicesCreateOrUpdateDefaultResponse
    | ServicesDelete200Response
    | ServicesDelete204Response
    | ServicesDeleteDefaultResponse
    | ServicesList200Response
    | ServicesListDefaultResponse,
): response is
  | StorageClassGetDefaultResponse
  | StorageClassCreateOrUpdateDefaultResponse
  | StorageClassUpdateDefaultResponse
  | StorageClassDeleteDefaultResponse
  | StorageClassListDefaultResponse
  | OperationsListDefaultResponse
  | LoadBalancersGetDefaultResponse
  | LoadBalancersCreateOrUpdateDefaultResponse
  | LoadBalancersDeleteDefaultResponse
  | LoadBalancersListDefaultResponse
  | BgpPeersGetDefaultResponse
  | BgpPeersCreateOrUpdateDefaultResponse
  | BgpPeersDeleteDefaultResponse
  | BgpPeersListDefaultResponse
  | ServicesGetDefaultResponse
  | ServicesCreateOrUpdateDefaultResponse
  | ServicesDeleteDefaultResponse
  | ServicesListDefaultResponse {
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
          `${candidateParts[i]?.slice(start, end)}`,
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
