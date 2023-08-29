// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  getPagedAsyncIterator,
  PagedAsyncIterableIterator,
  PagedResult,
} from "@azure/core-paging";
import {
  Client,
  createRestError,
  PathUncheckedResponse,
} from "@azure-rest/core-client";

export interface PageInfo {
  continuationToken?: string;
}

const pageMap = new WeakMap<object, PageInfo>();

/**
 * Given the last `.value` produced by the `byPage` iterator,
 * returns a continuation token that can be used to begin paging from
 * that point later.
 * @param page An object from accessing `value` on the IteratorResult from a `byPage` iterator.
 * @returns The continuation token that can be passed into byPage() during future calls.
 */
export function getContinuationToken(page: unknown): string | undefined {
  if (typeof page !== "object" || page === null) {
    return undefined;
  }
  return pageMap.get(page)?.continuationToken;
}

export function setContinuationToken(
  page: unknown,
  continuationToken: string | undefined
): void {
  if (typeof page !== "object" || page === null || !continuationToken) {
    return;
  }
  const pageInfo = pageMap.get(page) ?? {};
  pageInfo.continuationToken = continuationToken;
  pageMap.set(page, pageInfo);
}

/**
 * Helper type to extract the type of an array
 */
export type GetArrayType<T> = T extends Array<infer TData> ? TData : never;

/**
 * Helper type to infer the Type of the paged elements from the response type
 * This type is generated based on the swagger information for x-ms-pageable
 * specifically on the itemName property which indicates the property of the response
 * where the page items are found. The default value is `value`.
 * This type will allow us to provide strongly typed Iterator based on the response we get as second parameter
 */
export type PaginateReturn<TResult> = TResult extends
  | {
      body: { value?: infer TPage };
    }
  | {
      body: { items?: infer TPage };
    }
  ? GetArrayType<TPage>
  : Array<unknown>;

export function buildPagedAsyncIterator<
  TElement,
  TResponse extends PathUncheckedResponse = PathUncheckedResponse
>(
  client: Client,
  initialSendFunction: (...args: any[]) => PromiseLike<TResponse>,
  deserializeFunction: (
    resp: TResponse | PathUncheckedResponse
  ) => Promise<unknown>,
  sendFunctionArgs: any[] = []
): PagedAsyncIterableIterator<TElement> {
  let firstRun = true;
  let itemName: string, nextLinkName: string | undefined;
  const firstPageLinkPlaceholder = "";
  const pagedResult: PagedResult<TElement[]> = {
    firstPageLink: firstPageLinkPlaceholder,
    getPage: async (pageLink: string, maxPageSize?: number) => {
      if (maxPageSize) {
        throw new Error("maxPageSize is not supported by this operation.");
      }
      const result =
        firstRun && pageLink === firstPageLinkPlaceholder
          ? await initialSendFunction(...sendFunctionArgs)
          : await client.pathUnchecked(pageLink).get();
      if (firstRun) {
        const pageInfo = getPaginationProperties(result);
        itemName = pageInfo.itemName;
        nextLinkName = pageInfo.nextLinkName;
      }
      firstRun = false;
      checkPagingRequest(result);
      const results = await deserializeFunction(result);
      const nextLink = getNextLink(results, nextLinkName);
      const values = getElements<TElement>(results, itemName);
      return {
        page: values,
        nextPageLink: nextLink,
      };
    },
  };

  return getPagedAsyncIterator(pagedResult);
}

/**
 * Gets for the value of nextLink in the body
 */
function getNextLink(body: unknown, nextLinkName?: string): string | undefined {
  if (!nextLinkName) {
    return undefined;
  }

  const nextLink = (body as Record<string, unknown>)[nextLinkName];

  if (typeof nextLink !== "string" && typeof nextLink !== "undefined") {
    throw new Error(
      `Body Property ${nextLinkName} should be a string or undefined`
    );
  }

  return nextLink;
}

/**
 * Gets the elements of the current request in the body.
 */
function getElements<T = unknown>(body: unknown, itemName: string): T[] {
  const value = (body as Record<string, unknown>)[itemName] as T[];

  // value has to be an array according to the x-ms-pageable extension.
  // The fact that this must be an array is used above to calculate the
  // type of elements in the page in PaginateReturn
  if (!Array.isArray(value)) {
    throw new Error(
      `Couldn't paginate response\n Body doesn't contain an array property with name: ${itemName}`
    );
  }

  return value ?? [];
}

/**
 * Checks if a request failed
 */
function checkPagingRequest(response: PathUncheckedResponse): void {
  const Http2xxStatusCodes = [
    "200",
    "201",
    "202",
    "203",
    "204",
    "205",
    "206",
    "207",
    "208",
    "226",
  ];
  if (!Http2xxStatusCodes.includes(response.status)) {
    throw createRestError(
      `Pagination failed with unexpected statusCode ${response.status}`,
      response
    );
  }
}

/**
 * Extracts the itemName and nextLinkName from the initial response to use them for pagination
 */
function getPaginationProperties(initialResponse: PathUncheckedResponse) {
  // Build a set with the passed custom nextLinkNames
  const nextLinkNames = new Set(["nextLink"]);

  // Build a set with the passed custom set of itemNames
  const itemNames = new Set(["value", "items"]);

  let nextLinkName: string | undefined;
  let itemName: string | undefined;

  for (const name of nextLinkNames) {
    const nextLink = (initialResponse.body as Record<string, unknown>)[
      name
    ] as string;
    if (nextLink) {
      nextLinkName = name;
      break;
    }
  }

  for (const name of itemNames) {
    const item = (initialResponse.body as Record<string, unknown>)[
      name
    ] as string;
    if (item) {
      itemName = name;
      break;
    }
  }

  if (!itemName) {
    throw new Error(
      `Couldn't paginate response\n Body doesn't contain an array property with name: ${[
        ...itemNames,
      ].join(" OR ")}`
    );
  }

  return { itemName, nextLinkName };
}
