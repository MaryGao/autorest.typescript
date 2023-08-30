// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  createCollectionFormat,
  CollectionFormatClientOptions,
  CollectionFormatContext,
  headerCsv,
  queryMulti,
  querySsv,
  queryTsv,
  queryPipes,
  queryCsv,
} from "./api/index.js";
import {
  QueryMultiOptions,
  QuerySsvOptions,
  QueryTsvOptions,
  QueryPipesOptions,
  QueryCsvOptions,
  HeaderCsvOptions,
} from "./models/options.js";

export { CollectionFormatClientOptions } from "./api/CollectionFormatContext.js";

export class CollectionFormatClient {
  private _client: CollectionFormatContext;

  /** Test for collectionFormat. */
  constructor(options: CollectionFormatClientOptions = {}) {
    this._client = createCollectionFormat(options);
  }

  query = {
    multi: (colors: string[], options?: QueryMultiOptions): Promise<void> => {
      return queryMulti(this._client, colors, options);
    },
    ssv: (colors: string[], options?: QuerySsvOptions): Promise<void> => {
      return querySsv(this._client, colors, options);
    },
    tsv: (colors: string[], options?: QueryTsvOptions): Promise<void> => {
      return queryTsv(this._client, colors, options);
    },
    pipes: (colors: string[], options?: QueryPipesOptions): Promise<void> => {
      return queryPipes(this._client, colors, options);
    },
    csv: (colors: string[], options?: QueryCsvOptions): Promise<void> => {
      return queryCsv(this._client, colors, options);
    },
  };
  header = {
    csv: (colors: string[], options?: HeaderCsvOptions): Promise<void> => {
      return headerCsv(this._client, colors, options);
    },
  };
}
