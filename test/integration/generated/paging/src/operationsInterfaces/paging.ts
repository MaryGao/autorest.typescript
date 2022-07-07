/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Product,
  PagingGetNoItemNamePagesOptionalParams,
  PagingGetNullNextLinkNamePagesOptionalParams,
  PagingGetSinglePagesOptionalParams,
  PagingFirstResponseEmptyOptionalParams,
  PagingGetMultiplePagesOptionalParams,
  PagingGetWithQueryParamsOptionalParams,
  PagingDuplicateParamsOptionalParams,
  PagingPageWithMaxPageSizeOptionalParams,
  PagingGetOdataMultiplePagesOptionalParams,
  PagingGetMultiplePagesWithOffsetOptions,
  PagingGetMultiplePagesWithOffsetOptionalParams,
  PagingGetMultiplePagesRetryFirstOptionalParams,
  PagingGetMultiplePagesRetrySecondOptionalParams,
  PagingGetSinglePagesFailureOptionalParams,
  PagingGetMultiplePagesFailureOptionalParams,
  PagingGetMultiplePagesFailureUriOptionalParams,
  PagingNextFragmentOptionalParams,
  PagingGetMultiplePagesFragmentNextLinkOptionalParams,
  CustomParameterGroup,
  PagingNextFragmentWithGroupingOptionalParams,
  PagingGetMultiplePagesFragmentWithGroupingNextLinkOptionalParams,
  PagingGetMultiplePagesLROOptionalParams,
  PagingAppendApiVersionOptionalParams,
  PagingReplaceApiVersionOptionalParams,
  PagingGetPagingModelWithItemNameWithXMSClientNameOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Paging. */
export interface Paging {
  /**
   * A paging operation that must return result of the default 'value' node.
   * @param options The options parameters.
   */
  listNoItemNamePages(
    options?: PagingGetNoItemNamePagesOptionalParams
  ): PagedAsyncIterableIterator<Product>;
  /**
   * A paging operation that must ignore any kind of nextLink, and stop after page 1.
   * @param options The options parameters.
   */
  listNullNextLinkNamePages(
    options?: PagingGetNullNextLinkNamePagesOptionalParams
  ): PagedAsyncIterableIterator<Product>;
  /**
   * A paging operation that finishes on the first call without a nextlink
   * @param options The options parameters.
   */
  listSinglePages(
    options?: PagingGetSinglePagesOptionalParams
  ): PagedAsyncIterableIterator<Product>;
  /**
   * A paging operation whose first response's items list is empty, but still returns a next link. Second
   * (and final) call, will give you an items list of 1.
   * @param options The options parameters.
   */
  listFirstResponseEmpty(
    options?: PagingFirstResponseEmptyOptionalParams
  ): PagedAsyncIterableIterator<Product>;
  /**
   * A paging operation that includes a nextLink that has 10 pages
   * @param options The options parameters.
   */
  listMultiplePages(
    options?: PagingGetMultiplePagesOptionalParams
  ): PagedAsyncIterableIterator<Product>;
  /**
   * A paging operation that includes a next operation. It has a different query parameter from it's next
   * operation nextOperationWithQueryParams. Returns a ProductResult
   * @param requiredQueryParameter A required integer query parameter. Put in value '100' to pass test.
   * @param options The options parameters.
   */
  listWithQueryParams(
    requiredQueryParameter: number,
    options?: PagingGetWithQueryParamsOptionalParams
  ): PagedAsyncIterableIterator<Product>;
  /**
   * Define `filter` as a query param for all calls. However, the returned next link will also include
   * the `filter` as part of it. Make sure you don't end up duplicating the `filter` param in the url
   * sent.
   * @param options The options parameters.
   */
  listDuplicateParams(
    options?: PagingDuplicateParamsOptionalParams
  ): PagedAsyncIterableIterator<Product>;
  /**
   * Paging with max page size. We don't want to
   * @param options The options parameters.
   */
  listPageWithMaxPageSize(
    options?: PagingPageWithMaxPageSizeOptionalParams
  ): PagedAsyncIterableIterator<Product>;
  /**
   * A paging operation that includes a nextLink in odata format that has 10 pages
   * @param options The options parameters.
   */
  listOdataMultiplePages(
    options?: PagingGetOdataMultiplePagesOptionalParams
  ): PagedAsyncIterableIterator<Product>;
  /**
   * A paging operation that includes a nextLink that has 10 pages
   * @param pagingGetMultiplePagesWithOffsetOptions Parameter group
   * @param options The options parameters.
   */
  listMultiplePagesWithOffset(
    pagingGetMultiplePagesWithOffsetOptions: PagingGetMultiplePagesWithOffsetOptions,
    options?: PagingGetMultiplePagesWithOffsetOptionalParams
  ): PagedAsyncIterableIterator<Product>;
  /**
   * A paging operation that fails on the first call with 500 and then retries and then get a response
   * including a nextLink that has 10 pages
   * @param options The options parameters.
   */
  listMultiplePagesRetryFirst(
    options?: PagingGetMultiplePagesRetryFirstOptionalParams
  ): PagedAsyncIterableIterator<Product>;
  /**
   * A paging operation that includes a nextLink that has 10 pages, of which the 2nd call fails first
   * with 500. The client should retry and finish all 10 pages eventually.
   * @param options The options parameters.
   */
  listMultiplePagesRetrySecond(
    options?: PagingGetMultiplePagesRetrySecondOptionalParams
  ): PagedAsyncIterableIterator<Product>;
  /**
   * A paging operation that receives a 400 on the first call
   * @param options The options parameters.
   */
  listSinglePagesFailure(
    options?: PagingGetSinglePagesFailureOptionalParams
  ): PagedAsyncIterableIterator<Product>;
  /**
   * A paging operation that receives a 400 on the second call
   * @param options The options parameters.
   */
  listMultiplePagesFailure(
    options?: PagingGetMultiplePagesFailureOptionalParams
  ): PagedAsyncIterableIterator<Product>;
  /**
   * A paging operation that receives an invalid nextLink
   * @param options The options parameters.
   */
  listMultiplePagesFailureUri(
    options?: PagingGetMultiplePagesFailureUriOptionalParams
  ): PagedAsyncIterableIterator<Product>;
  /**
   * A paging operation that doesn't return a full URL, just a fragment
   * @param apiVersion Sets the api version to use.
   * @param tenant Sets the tenant to use.
   * @param options The options parameters.
   */
  listMultiplePagesFragmentNextLink(
    apiVersion: string,
    tenant: string,
    options?: PagingGetMultiplePagesFragmentNextLinkOptionalParams
  ): PagedAsyncIterableIterator<Product>;
  /**
   * A paging operation that doesn't return a full URL, just a fragment with parameters grouped
   * @param customParameterGroup Parameter group
   * @param options The options parameters.
   */
  listMultiplePagesFragmentWithGroupingNextLink(
    customParameterGroup: CustomParameterGroup,
    options?: PagingGetMultiplePagesFragmentWithGroupingNextLinkOptionalParams
  ): PagedAsyncIterableIterator<Product>;
  /**
   * A long-running paging operation that includes a nextLink that has 10 pages
   * @param options The options parameters.
   */
  beginListMultiplePagesLROAndWait(
    options?: PagingGetMultiplePagesLROOptionalParams
  ): PagedAsyncIterableIterator<Product>;
  /**
   * A paging operation with api version. When calling the next link, you want to append your client's
   * api version to the next link
   * @param options The options parameters.
   */
  listAppendApiVersion(
    options?: PagingAppendApiVersionOptionalParams
  ): PagedAsyncIterableIterator<Product>;
  /**
   * A paging operation with api version. When calling the next link, you want to reformat it and
   * override the returned api version with your client's api version
   * @param options The options parameters.
   */
  listReplaceApiVersion(
    options?: PagingReplaceApiVersionOptionalParams
  ): PagedAsyncIterableIterator<Product>;
  /**
   * A paging operation that doesn't return a full URL, just a fragment
   * @param apiVersion Sets the api version to use.
   * @param tenant Sets the tenant to use.
   * @param nextLink Next link for list operation.
   * @param options The options parameters.
   */
  listNextFragment(
    apiVersion: string,
    tenant: string,
    nextLink: string,
    options?: PagingNextFragmentOptionalParams
  ): PagedAsyncIterableIterator<Product>;
  /**
   * A paging operation that doesn't return a full URL, just a fragment
   * @param nextLink Next link for list operation.
   * @param customParameterGroup Parameter group
   * @param options The options parameters.
   */
  listNextFragmentWithGrouping(
    nextLink: string,
    customParameterGroup: CustomParameterGroup,
    options?: PagingNextFragmentWithGroupingOptionalParams
  ): PagedAsyncIterableIterator<Product>;
  /**
   * A paging operation that returns a paging model whose item name is is overriden by x-ms-client-name
   * 'indexes'.
   * @param options The options parameters.
   */
  listPagingModelWithItemNameWithXMSClientName(
    options?: PagingGetPagingModelWithItemNameWithXMSClientNameOptionalParams
  ): PagedAsyncIterableIterator<Product>;
}
