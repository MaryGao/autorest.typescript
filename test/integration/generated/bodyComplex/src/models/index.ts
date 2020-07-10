/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export type FishUnion = Fish | SalmonUnion | SharkUnion;
export type DotFishUnion = DotFish | DotSalmon;
export type MyBaseTypeUnion = MyBaseType | MyDerivedType;
export type SalmonUnion = Salmon | SmartSalmon;
export type SharkUnion = Shark | Sawshark | Goblinshark | Cookiecuttershark;

export interface Basic {
  /**
   * Basic Id
   */
  id?: number;
  /**
   * Name property with a very long description that does not fit on a single line and a line break.
   */
  name?: string;
  color?: CMYKColors;
}

export interface ErrorModel {
  status?: number;
  message?: string;
}

export interface IntWrapper {
  field1?: number;
  field2?: number;
}

export interface LongWrapper {
  field1?: number;
  field2?: number;
}

export interface FloatWrapper {
  field1?: number;
  field2?: number;
}

export interface DoubleWrapper {
  field1?: number;
  field56ZerosAfterTheDotAndNegativeZeroBeforeDotAndThisIsALongFieldNameOnPurpose?: number;
}

export interface BooleanWrapper {
  fieldTrue?: boolean;
  fieldFalse?: boolean;
}

export interface StringWrapper {
  field?: string;
  empty?: string;
  null?: string;
}

export interface DateWrapper {
  field?: Date;
  leap?: Date;
}

export interface DatetimeWrapper {
  field?: Date;
  now?: Date;
}

export interface Datetimerfc1123Wrapper {
  field?: Date;
  now?: Date;
}

export interface DurationWrapper {
  field?: string;
}

export interface ByteWrapper {
  field?: Uint8Array;
}

export interface ArrayWrapper {
  array?: string[];
}

export interface DictionaryWrapper {
  /**
   * Dictionary of <string>
   */
  defaultProgram?: { [propertyName: string]: string };
}

export interface Pet {
  id?: number;
  name?: string;
}

export interface Fish {
  /**
   * Polymorphic discriminator, which specifies the different types this object can be
   */
  fishtype:
    | "salmon"
    | "smart_salmon"
    | "shark"
    | "sawshark"
    | "goblin"
    | "cookiecuttershark";
  species?: string;
  length: number;
  siblings?: FishUnion[];
}

export interface DotFish {
  /**
   * Polymorphic discriminator, which specifies the different types this object can be
   */
  "fish.type": "DotSalmon";
  fishType: string;
  species?: string;
}

export interface DotFishMarket {
  sampleSalmon?: DotSalmon;
  salmons?: DotSalmon[];
  sampleFish?: DotFishUnion;
  fishes?: DotFishUnion[];
}

export interface ReadonlyObj {
  readonly id?: string;
  size?: number;
}

export interface MyBaseType {
  /**
   * Polymorphic discriminator, which specifies the different types this object can be
   */
  kind: "Kind1";
  propB1?: string;
  propBH1?: string;
}

export type Dog = Pet & {
  food?: string;
};

export type Cat = Pet & {
  color?: string;
  hates?: Dog[];
};

export type Salmon = Fish & {
  location?: string;
  iswild?: boolean;
};

export type Shark = Fish & {
  age?: number;
  birthday: Date;
};

export type DotSalmon = DotFish & {
  location?: string;
  iswild?: boolean;
};

export type MyDerivedType = MyBaseType & {
  propD1?: string;
};

export type Siamese = Cat & {
  breed?: string;
};

export type SmartSalmon = Salmon & {
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
  collegeDegree?: string;
};

export type Sawshark = Shark & {
  picture?: Uint8Array;
};

export type Goblinshark = Shark & {
  jawsize?: number;
  /**
   * Colors possible
   */
  color?: GoblinSharkColor;
};

export type Cookiecuttershark = Shark & {};
/**
 * Defines values for CMYKColors.
 */
export type CMYKColors = "cyan" | "Magenta" | "YELLOW" | "blacK";
/**
 * Defines values for GoblinSharkColor.
 */
export type GoblinSharkColor = "pink" | "gray" | "brown" | "RED" | "red";

/**
 * Contains response data for the getValid operation.
 */
export type BasicGetValidResponse = Basic & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Basic;
  };
};

/**
 * Contains response data for the getInvalid operation.
 */
export type BasicGetInvalidResponse = Basic & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Basic;
  };
};

/**
 * Contains response data for the getEmpty operation.
 */
export type BasicGetEmptyResponse = Basic & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Basic;
  };
};

/**
 * Contains response data for the getNull operation.
 */
export type BasicGetNullResponse = Basic & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Basic;
  };
};

/**
 * Contains response data for the getNotProvided operation.
 */
export type BasicGetNotProvidedResponse = Basic & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Basic;
  };
};

/**
 * Contains response data for the getInt operation.
 */
export type PrimitiveGetIntResponse = IntWrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: IntWrapper;
  };
};

/**
 * Contains response data for the getLong operation.
 */
export type PrimitiveGetLongResponse = LongWrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: LongWrapper;
  };
};

/**
 * Contains response data for the getFloat operation.
 */
export type PrimitiveGetFloatResponse = FloatWrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: FloatWrapper;
  };
};

/**
 * Contains response data for the getDouble operation.
 */
export type PrimitiveGetDoubleResponse = DoubleWrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: DoubleWrapper;
  };
};

/**
 * Contains response data for the getBool operation.
 */
export type PrimitiveGetBoolResponse = BooleanWrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: BooleanWrapper;
  };
};

/**
 * Contains response data for the getString operation.
 */
export type PrimitiveGetStringResponse = StringWrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: StringWrapper;
  };
};

/**
 * Contains response data for the getDate operation.
 */
export type PrimitiveGetDateResponse = DateWrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: DateWrapper;
  };
};

/**
 * Contains response data for the getDateTime operation.
 */
export type PrimitiveGetDateTimeResponse = DatetimeWrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: DatetimeWrapper;
  };
};

/**
 * Contains response data for the getDateTimeRfc1123 operation.
 */
export type PrimitiveGetDateTimeRfc1123Response = Datetimerfc1123Wrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Datetimerfc1123Wrapper;
  };
};

/**
 * Contains response data for the getDuration operation.
 */
export type PrimitiveGetDurationResponse = DurationWrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: DurationWrapper;
  };
};

/**
 * Contains response data for the getByte operation.
 */
export type PrimitiveGetByteResponse = ByteWrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ByteWrapper;
  };
};

/**
 * Contains response data for the getValid operation.
 */
export type ArrayGetValidResponse = ArrayWrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ArrayWrapper;
  };
};

/**
 * Contains response data for the getEmpty operation.
 */
export type ArrayGetEmptyResponse = ArrayWrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ArrayWrapper;
  };
};

/**
 * Contains response data for the getNotProvided operation.
 */
export type ArrayGetNotProvidedResponse = ArrayWrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ArrayWrapper;
  };
};

/**
 * Contains response data for the getValid operation.
 */
export type DictionaryGetValidResponse = DictionaryWrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: DictionaryWrapper;
  };
};

/**
 * Contains response data for the getEmpty operation.
 */
export type DictionaryGetEmptyResponse = DictionaryWrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: DictionaryWrapper;
  };
};

/**
 * Contains response data for the getNull operation.
 */
export type DictionaryGetNullResponse = DictionaryWrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: DictionaryWrapper;
  };
};

/**
 * Contains response data for the getNotProvided operation.
 */
export type DictionaryGetNotProvidedResponse = DictionaryWrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: DictionaryWrapper;
  };
};

/**
 * Contains response data for the getValid operation.
 */
export type InheritanceGetValidResponse = Siamese & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Siamese;
  };
};

/**
 * Contains response data for the getValid operation.
 */
export type PolymorphismGetValidResponse = FishUnion & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: FishUnion;
  };
};

/**
 * Contains response data for the getDotSyntax operation.
 */
export type PolymorphismGetDotSyntaxResponse = DotFishUnion & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: DotFishUnion;
  };
};

/**
 * Contains response data for the getComposedWithDiscriminator operation.
 */
export type PolymorphismGetComposedWithDiscriminatorResponse = DotFishMarket & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: DotFishMarket;
  };
};

/**
 * Contains response data for the getComposedWithoutDiscriminator operation.
 */
export type PolymorphismGetComposedWithoutDiscriminatorResponse = DotFishMarket & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: DotFishMarket;
  };
};

/**
 * Contains response data for the getComplicated operation.
 */
export type PolymorphismGetComplicatedResponse = SalmonUnion & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: SalmonUnion;
  };
};

/**
 * Contains response data for the putMissingDiscriminator operation.
 */
export type PolymorphismPutMissingDiscriminatorResponse = SalmonUnion & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: SalmonUnion;
  };
};

/**
 * Contains response data for the getValid operation.
 */
export type PolymorphicrecursiveGetValidResponse = FishUnion & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: FishUnion;
  };
};

/**
 * Contains response data for the getValid operation.
 */
export type ReadonlypropertyGetValidResponse = ReadonlyObj & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ReadonlyObj;
  };
};

/**
 * Contains response data for the getValid operation.
 */
export type FlattencomplexGetValidResponse = MyBaseTypeUnion & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: MyBaseTypeUnion;
  };
};

/**
 * Optional parameters.
 */
export interface BodyComplexClientOptionalParams
  extends coreHttp.ServiceClientOptions {
  /**
   * server parameter
   */
  $host?: string;
  /**
   * Api Version
   */
  apiVersion?: string;
  /**
   * Overrides client endpoint.
   */
  endpoint?: string;
}
