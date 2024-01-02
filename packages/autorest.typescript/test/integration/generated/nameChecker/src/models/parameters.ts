import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter,
} from "@azure/core-client";
import {
  SearchRequest as SearchRequestMapper,
  SuggestRequest as SuggestRequestMapper,
  IndexBatch as IndexBatchMapper,
  AutocompleteRequest as AutocompleteRequestMapper,
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String",
    },
  },
};

export const endpoint: OperationURLParameter = {
  parameterPath: "endpoint",
  mapper: {
    serializedName: "endpoint",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const indexName: OperationURLParameter = {
  parameterPath: "indexName",
  mapper: {
    serializedName: "indexName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2020-06-30-Preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String",
    },
  },
};

export const searchText: OperationQueryParameter = {
  parameterPath: ["options", "searchText"],
  mapper: {
    serializedName: "search",
    type: {
      name: "String",
    },
  },
};

export const includeTotalResultCount: OperationQueryParameter = {
  parameterPath: ["options", "searchOptions", "includeTotalResultCount"],
  mapper: {
    serializedName: "$count",
    type: {
      name: "Boolean",
    },
  },
};

export const facets: OperationQueryParameter = {
  parameterPath: ["options", "searchOptions", "facets"],
  mapper: {
    serializedName: "facet",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String",
        },
      },
    },
  },
  collectionFormat: "Multi",
};

export const filter: OperationQueryParameter = {
  parameterPath: ["options", "searchOptions", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String",
    },
  },
};

export const highlightFields: OperationQueryParameter = {
  parameterPath: ["options", "searchOptions", "highlightFields"],
  mapper: {
    serializedName: "highlight",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String",
        },
      },
    },
  },
  collectionFormat: "CSV",
};

export const highlightPostTag: OperationQueryParameter = {
  parameterPath: ["options", "searchOptions", "highlightPostTag"],
  mapper: {
    serializedName: "highlightPostTag",
    type: {
      name: "String",
    },
  },
};

export const highlightPreTag: OperationQueryParameter = {
  parameterPath: ["options", "searchOptions", "highlightPreTag"],
  mapper: {
    serializedName: "highlightPreTag",
    type: {
      name: "String",
    },
  },
};

export const minimumCoverage: OperationQueryParameter = {
  parameterPath: ["options", "searchOptions", "minimumCoverage"],
  mapper: {
    serializedName: "minimumCoverage",
    type: {
      name: "Number",
    },
  },
};

export const orderBy: OperationQueryParameter = {
  parameterPath: ["options", "searchOptions", "orderBy"],
  mapper: {
    serializedName: "$orderby",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String",
        },
      },
    },
  },
  collectionFormat: "CSV",
};

export const queryType: OperationQueryParameter = {
  parameterPath: ["options", "searchOptions", "queryType"],
  mapper: {
    serializedName: "queryType",
    type: {
      name: "Enum",
      allowedValues: ["simple", "full"],
    },
  },
};

export const scoringParameters: OperationQueryParameter = {
  parameterPath: ["options", "searchOptions", "scoringParameters"],
  mapper: {
    serializedName: "scoringParameter",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String",
        },
      },
    },
  },
  collectionFormat: "Multi",
};

export const scoringProfile: OperationQueryParameter = {
  parameterPath: ["options", "searchOptions", "scoringProfile"],
  mapper: {
    serializedName: "scoringProfile",
    type: {
      name: "String",
    },
  },
};

export const searchFields: OperationQueryParameter = {
  parameterPath: ["options", "searchOptions", "searchFields"],
  mapper: {
    serializedName: "searchFields",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String",
        },
      },
    },
  },
  collectionFormat: "CSV",
};

export const searchMode: OperationQueryParameter = {
  parameterPath: ["options", "searchOptions", "searchMode"],
  mapper: {
    serializedName: "searchMode",
    type: {
      name: "Enum",
      allowedValues: ["any", "all"],
    },
  },
};

export const scoringStatistics: OperationQueryParameter = {
  parameterPath: ["options", "searchOptions", "scoringStatistics"],
  mapper: {
    serializedName: "scoringStatistics",
    type: {
      name: "Enum",
      allowedValues: ["local", "global"],
    },
  },
};

export const sessionId: OperationQueryParameter = {
  parameterPath: ["options", "searchOptions", "sessionId"],
  mapper: {
    serializedName: "sessionId",
    type: {
      name: "String",
    },
  },
};

export const select: OperationQueryParameter = {
  parameterPath: ["options", "searchOptions", "select"],
  mapper: {
    serializedName: "$select",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String",
        },
      },
    },
  },
  collectionFormat: "CSV",
};

export const skip: OperationQueryParameter = {
  parameterPath: ["options", "searchOptions", "skip"],
  mapper: {
    serializedName: "$skip",
    type: {
      name: "Number",
    },
  },
};

export const top: OperationQueryParameter = {
  parameterPath: ["options", "searchOptions", "top"],
  mapper: {
    serializedName: "$top",
    type: {
      name: "Number",
    },
  },
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String",
    },
  },
};

export const searchRequest: OperationParameter = {
  parameterPath: "searchRequest",
  mapper: SearchRequestMapper,
};

export const key: OperationURLParameter = {
  parameterPath: "key",
  mapper: {
    serializedName: "key",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const selectedFields: OperationQueryParameter = {
  parameterPath: ["options", "selectedFields"],
  mapper: {
    serializedName: "$select",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String",
        },
      },
    },
  },
  collectionFormat: "CSV",
};

export const search$DONotNormalize$Text: OperationQueryParameter = {
  parameterPath: "search$DONotNormalize$Text",
  mapper: {
    serializedName: "search",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const suggesterName: OperationQueryParameter = {
  parameterPath: "suggesterName",
  mapper: {
    serializedName: "suggesterName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const filter1: OperationQueryParameter = {
  parameterPath: ["options", "suggestOptions", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String",
    },
  },
};

export const useFuzzyMatching: OperationQueryParameter = {
  parameterPath: ["options", "suggestOptions", "useFuzzyMatching"],
  mapper: {
    serializedName: "fuzzy",
    type: {
      name: "Boolean",
    },
  },
};

export const highlightPostTag1: OperationQueryParameter = {
  parameterPath: ["options", "suggestOptions", "highlightPostTag"],
  mapper: {
    serializedName: "highlightPostTag",
    type: {
      name: "String",
    },
  },
};

export const highlightPreTag1: OperationQueryParameter = {
  parameterPath: ["options", "suggestOptions", "highlightPreTag"],
  mapper: {
    serializedName: "highlightPreTag",
    type: {
      name: "String",
    },
  },
};

export const minimumCoverage1: OperationQueryParameter = {
  parameterPath: ["options", "suggestOptions", "minimumCoverage"],
  mapper: {
    serializedName: "minimumCoverage",
    type: {
      name: "Number",
    },
  },
};

export const orderBy1: OperationQueryParameter = {
  parameterPath: ["options", "suggestOptions", "orderBy"],
  mapper: {
    serializedName: "$orderby",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String",
        },
      },
    },
  },
  collectionFormat: "CSV",
};

export const searchFields1: OperationQueryParameter = {
  parameterPath: ["options", "suggestOptions", "searchFields"],
  mapper: {
    serializedName: "searchFields",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String",
        },
      },
    },
  },
  collectionFormat: "CSV",
};

export const select1: OperationQueryParameter = {
  parameterPath: ["options", "suggestOptions", "select"],
  mapper: {
    serializedName: "$select",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String",
        },
      },
    },
  },
  collectionFormat: "CSV",
};

export const top1: OperationQueryParameter = {
  parameterPath: ["options", "suggestOptions", "top"],
  mapper: {
    serializedName: "$top",
    type: {
      name: "Number",
    },
  },
};

export const suggestRequest: OperationParameter = {
  parameterPath: "suggestRequest",
  mapper: SuggestRequestMapper,
};

export const batch: OperationParameter = {
  parameterPath: "batch",
  mapper: IndexBatchMapper,
};

export const autocompleteMode: OperationQueryParameter = {
  parameterPath: ["options", "autocompleteOptions", "autocompleteMode"],
  mapper: {
    serializedName: "autocompleteMode",
    type: {
      name: "Enum",
      allowedValues: ["oneTerm", "twoTerms", "oneTermWithContext"],
    },
  },
};

export const filter2: OperationQueryParameter = {
  parameterPath: ["options", "autocompleteOptions", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String",
    },
  },
};

export const useFuzzyMatching1: OperationQueryParameter = {
  parameterPath: ["options", "autocompleteOptions", "useFuzzyMatching"],
  mapper: {
    serializedName: "fuzzy",
    type: {
      name: "Boolean",
    },
  },
};

export const highlightPostTag2: OperationQueryParameter = {
  parameterPath: ["options", "autocompleteOptions", "highlightPostTag"],
  mapper: {
    serializedName: "highlightPostTag",
    type: {
      name: "String",
    },
  },
};

export const highlightPreTag2: OperationQueryParameter = {
  parameterPath: ["options", "autocompleteOptions", "highlightPreTag"],
  mapper: {
    serializedName: "highlightPreTag",
    type: {
      name: "String",
    },
  },
};

export const minimumCoverage2: OperationQueryParameter = {
  parameterPath: ["options", "autocompleteOptions", "minimumCoverage"],
  mapper: {
    serializedName: "minimumCoverage",
    type: {
      name: "Number",
    },
  },
};

export const searchFields2: OperationQueryParameter = {
  parameterPath: ["options", "autocompleteOptions", "searchFields"],
  mapper: {
    serializedName: "searchFields",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String",
        },
      },
    },
  },
  collectionFormat: "CSV",
};

export const top2: OperationQueryParameter = {
  parameterPath: ["options", "autocompleteOptions", "top"],
  mapper: {
    serializedName: "$top",
    type: {
      name: "Number",
    },
  },
};

export const autocompleteRequest: OperationParameter = {
  parameterPath: "autocompleteRequest",
  mapper: AutocompleteRequestMapper,
};
