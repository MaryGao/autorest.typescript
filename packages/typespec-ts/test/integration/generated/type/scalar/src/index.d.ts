import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { RequestParameters } from '@azure-rest/core-client';
import { StreamableMethod } from '@azure-rest/core-client';

export declare interface BooleanModelGet {
    get(options?: BooleanModelGetParameters): StreamableMethod<BooleanModelGet200Response>;
    put(options: BooleanModelPutParameters): StreamableMethod<BooleanModelPut204Response>;
}

export declare interface BooleanModelGet200Response extends HttpResponse {
    status: "200";
    body: boolean;
}

export declare type BooleanModelGetParameters = RequestParameters;

export declare interface BooleanModelPut204Response extends HttpResponse {
    status: "204";
}

export declare interface BooleanModelPutBodyParam {
    body: boolean;
}

export declare type BooleanModelPutParameters = BooleanModelPutBodyParam & RequestParameters;

declare function createClient(options?: ScalarClientOptions): ScalarClient;
export default createClient;

export declare interface Decimal128TypeRequestBody {
    put(options: Decimal128TypeRequestBodyParameters): StreamableMethod<Decimal128TypeRequestBody204Response>;
}

export declare interface Decimal128TypeRequestBody204Response extends HttpResponse {
    status: "204";
}

export declare interface Decimal128TypeRequestBodyBodyParam {
    body: number;
}

export declare type Decimal128TypeRequestBodyParameters = Decimal128TypeRequestBodyBodyParam & RequestParameters;

export declare interface Decimal128TypeRequestParameter {
    get(options: Decimal128TypeRequestParameterParameters): StreamableMethod<Decimal128TypeRequestParameter204Response>;
}

export declare interface Decimal128TypeRequestParameter204Response extends HttpResponse {
    status: "204";
}

export declare type Decimal128TypeRequestParameterParameters = Decimal128TypeRequestParameterQueryParam & RequestParameters;

export declare interface Decimal128TypeRequestParameterQueryParam {
    queryParameters: Decimal128TypeRequestParameterQueryParamProperties;
}

export declare interface Decimal128TypeRequestParameterQueryParamProperties {
    value: number;
}

export declare interface Decimal128TypeResponseBody {
    get(options?: Decimal128TypeResponseBodyParameters): StreamableMethod<Decimal128TypeResponseBody200Response>;
}

export declare interface Decimal128TypeResponseBody200Response extends HttpResponse {
    status: "200";
    body: number;
}

export declare type Decimal128TypeResponseBodyParameters = RequestParameters;

export declare interface Decimal128VerifyPrepareVerify {
    get(options?: Decimal128VerifyPrepareVerifyParameters): StreamableMethod<Decimal128VerifyPrepareVerify200Response>;
}

export declare interface Decimal128VerifyPrepareVerify200Response extends HttpResponse {
    status: "200";
    body: number[];
}

export declare type Decimal128VerifyPrepareVerifyParameters = RequestParameters;

export declare interface Decimal128VerifyVerify {
    post(options: Decimal128VerifyVerifyParameters): StreamableMethod<Decimal128VerifyVerify204Response>;
}

export declare interface Decimal128VerifyVerify204Response extends HttpResponse {
    status: "204";
}

export declare interface Decimal128VerifyVerifyBodyParam {
    body: number;
}

export declare type Decimal128VerifyVerifyParameters = Decimal128VerifyVerifyBodyParam & RequestParameters;

export declare interface DecimalTypeRequestBody {
    put(options: DecimalTypeRequestBodyParameters): StreamableMethod<DecimalTypeRequestBody204Response>;
}

export declare interface DecimalTypeRequestBody204Response extends HttpResponse {
    status: "204";
}

export declare interface DecimalTypeRequestBodyBodyParam {
    body: number;
}

export declare type DecimalTypeRequestBodyParameters = DecimalTypeRequestBodyBodyParam & RequestParameters;

export declare interface DecimalTypeRequestParameter {
    get(options: DecimalTypeRequestParameterParameters): StreamableMethod<DecimalTypeRequestParameter204Response>;
}

export declare interface DecimalTypeRequestParameter204Response extends HttpResponse {
    status: "204";
}

export declare type DecimalTypeRequestParameterParameters = DecimalTypeRequestParameterQueryParam & RequestParameters;

export declare interface DecimalTypeRequestParameterQueryParam {
    queryParameters: DecimalTypeRequestParameterQueryParamProperties;
}

export declare interface DecimalTypeRequestParameterQueryParamProperties {
    value: number;
}

export declare interface DecimalTypeResponseBody {
    get(options?: DecimalTypeResponseBodyParameters): StreamableMethod<DecimalTypeResponseBody200Response>;
}

export declare interface DecimalTypeResponseBody200Response extends HttpResponse {
    status: "200";
    body: number;
}

export declare type DecimalTypeResponseBodyParameters = RequestParameters;

export declare interface DecimalVerifyPrepareVerify {
    get(options?: DecimalVerifyPrepareVerifyParameters): StreamableMethod<DecimalVerifyPrepareVerify200Response>;
}

export declare interface DecimalVerifyPrepareVerify200Response extends HttpResponse {
    status: "200";
    body: number[];
}

export declare type DecimalVerifyPrepareVerifyParameters = RequestParameters;

export declare interface DecimalVerifyVerify {
    post(options: DecimalVerifyVerifyParameters): StreamableMethod<DecimalVerifyVerify204Response>;
}

export declare interface DecimalVerifyVerify204Response extends HttpResponse {
    status: "204";
}

export declare interface DecimalVerifyVerifyBodyParam {
    body: number;
}

export declare type DecimalVerifyVerifyParameters = DecimalVerifyVerifyBodyParam & RequestParameters;

export declare interface Routes {
    (path: "/type/scalar/string"): StringModelGet;
    (path: "/type/scalar/boolean"): BooleanModelGet;
    (path: "/type/scalar/unknown"): UnknownGet;
    (path: "/type/scalar/decimal/response_body"): DecimalTypeResponseBody;
    (path: "/type/scalar/decimal/resquest_body"): DecimalTypeRequestBody;
    (path: "/type/scalar/decimal/request_parameter"): DecimalTypeRequestParameter;
    (path: "/type/scalar/decimal128/response_body"): Decimal128TypeResponseBody;
    (path: "/type/scalar/decimal128/resquest_body"): Decimal128TypeRequestBody;
    (path: "/type/scalar/decimal128/request_parameter"): Decimal128TypeRequestParameter;
    (path: "/type/scalar/decimal/prepare_verify"): DecimalVerifyPrepareVerify;
    (path: "/type/scalar/decimal/verify"): DecimalVerifyVerify;
    (path: "/type/scalar/decimal128/prepare_verify"): Decimal128VerifyPrepareVerify;
    (path: "/type/scalar/decimal128/verify"): Decimal128VerifyVerify;
}

export declare type ScalarClient = Client & {
    path: Routes;
};

export declare interface ScalarClientOptions extends ClientOptions {
}

export declare interface StringModelGet {
    get(options?: StringModelGetParameters): StreamableMethod<StringModelGet200Response>;
    put(options: StringModelPutParameters): StreamableMethod<StringModelPut204Response>;
}

export declare interface StringModelGet200Response extends HttpResponse {
    status: "200";
    body: string;
}

export declare type StringModelGetParameters = RequestParameters;

export declare interface StringModelPut204Response extends HttpResponse {
    status: "204";
}

export declare interface StringModelPutBodyParam {
    body: string;
}

export declare type StringModelPutParameters = StringModelPutBodyParam & RequestParameters;

export declare interface UnknownGet {
    get(options?: UnknownGetParameters): StreamableMethod<UnknownGet200Response>;
    put(options: UnknownPutParameters): StreamableMethod<UnknownPut204Response>;
}

export declare interface UnknownGet200Response extends HttpResponse {
    status: "200";
    body: any;
}

export declare type UnknownGetParameters = RequestParameters;

export declare interface UnknownPut204Response extends HttpResponse {
    status: "204";
}

export declare interface UnknownPutBodyParam {
    body: unknown;
}

export declare type UnknownPutParameters = UnknownPutBodyParam & RequestParameters;

export { }