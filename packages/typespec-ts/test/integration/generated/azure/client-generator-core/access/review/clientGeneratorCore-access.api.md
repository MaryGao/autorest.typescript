## API Report File for "@msinternal/clientGeneratorCore-access"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { RequestParameters } from '@azure-rest/core-client';
import { StreamableMethod } from '@azure-rest/core-client';

// @public
export type AbstractModelOutput = AbstractModelOutputParent | RealModelOutput;

// @public
export interface AbstractModelOutputParent {
    // (undocumented)
    kind: string;
    // (undocumented)
    name: string;
}

// @public (undocumented)
export type AccessClient = Client & {
    path: Routes;
};

// @public
export interface BaseModelOutput {
    // (undocumented)
    name: string;
}

// @public
function createClient(options?: ClientOptions): AccessClient;
export default createClient;

// @public (undocumented)
export interface Discriminator {
    get(options: DiscriminatorParameters): StreamableMethod<Discriminator200Response>;
}

// @public
export interface Discriminator200Response extends HttpResponse {
    // (undocumented)
    body: AbstractModelOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export type DiscriminatorParameters = DiscriminatorQueryParam & RequestParameters;

// @public (undocumented)
export interface DiscriminatorQueryParam {
    // (undocumented)
    queryParameters: DiscriminatorQueryParamProperties;
}

// @public (undocumented)
export interface DiscriminatorQueryParamProperties {
    // (undocumented)
    kind: string;
}

// @public
export interface InnerModelOutput {
    // (undocumented)
    name: string;
}

// @public (undocumented)
export interface Internal {
    // (undocumented)
    get(options: InternalParameters): StreamableMethod<Internal200Response>;
}

// @public
export interface Internal200Response extends HttpResponse {
    // (undocumented)
    body: SharedModelOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface InternalDecoratorInInternal {
    // (undocumented)
    get(options: InternalDecoratorInInternalParameters): StreamableMethod<InternalDecoratorInInternal200Response>;
}

// @public
export interface InternalDecoratorInInternal200Response extends HttpResponse {
    // (undocumented)
    body: InternalDecoratorModelInInternalOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export type InternalDecoratorInInternalParameters = InternalDecoratorInInternalQueryParam & RequestParameters;

// @public (undocumented)
export interface InternalDecoratorInInternalQueryParam {
    // (undocumented)
    queryParameters: InternalDecoratorInInternalQueryParamProperties;
}

// @public (undocumented)
export interface InternalDecoratorInInternalQueryParamProperties {
    // (undocumented)
    name: string;
}

// @public
export interface InternalDecoratorModelInInternalOutput {
    // (undocumented)
    name: string;
}

// @public (undocumented)
export type InternalParameters = InternalQueryParam & RequestParameters;

// @public (undocumented)
export interface InternalQueryParam {
    // (undocumented)
    queryParameters: InternalQueryParamProperties;
}

// @public (undocumented)
export interface InternalQueryParamProperties {
    // (undocumented)
    name: string;
}

// @public (undocumented)
export interface NoDecoratorInInternal {
    // (undocumented)
    get(options: NoDecoratorInInternalParameters): StreamableMethod<NoDecoratorInInternal200Response>;
}

// @public
export interface NoDecoratorInInternal200Response extends HttpResponse {
    // (undocumented)
    body: NoDecoratorModelInInternalOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export type NoDecoratorInInternalParameters = NoDecoratorInInternalQueryParam & RequestParameters;

// @public (undocumented)
export interface NoDecoratorInInternalQueryParam {
    // (undocumented)
    queryParameters: NoDecoratorInInternalQueryParamProperties;
}

// @public (undocumented)
export interface NoDecoratorInInternalQueryParamProperties {
    // (undocumented)
    name: string;
}

// @public (undocumented)
export interface NoDecoratorInPublic {
    // (undocumented)
    get(options: NoDecoratorInPublicParameters): StreamableMethod<NoDecoratorInPublic200Response>;
}

// @public
export interface NoDecoratorInPublic200Response extends HttpResponse {
    // (undocumented)
    body: NoDecoratorModelInPublicOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export type NoDecoratorInPublicParameters = NoDecoratorInPublicQueryParam & RequestParameters;

// @public (undocumented)
export interface NoDecoratorInPublicQueryParam {
    // (undocumented)
    queryParameters: NoDecoratorInPublicQueryParamProperties;
}

// @public (undocumented)
export interface NoDecoratorInPublicQueryParamProperties {
    // (undocumented)
    name: string;
}

// @public
export interface NoDecoratorModelInInternalOutput {
    // (undocumented)
    name: string;
}

// @public
export interface NoDecoratorModelInPublicOutput {
    // (undocumented)
    name: string;
}

// @public (undocumented)
export interface Operation {
    get(options: OperationParameters): StreamableMethod<Operation200Response>;
}

// @public
export interface Operation200Response extends HttpResponse {
    // (undocumented)
    body: OuterModelOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export type OperationParameters = OperationQueryParam & RequestParameters;

// @public (undocumented)
export interface OperationQueryParam {
    // (undocumented)
    queryParameters: OperationQueryParamProperties;
}

// @public (undocumented)
export interface OperationQueryParamProperties {
    // (undocumented)
    name: string;
}

// @public
export interface OuterModelOutput extends BaseModelOutput {
    // (undocumented)
    inner: InnerModelOutput;
}

// @public (undocumented)
export interface Public {
    // (undocumented)
    get(options: PublicParameters): StreamableMethod<Public200Response>;
}

// @public
export interface Public200Response extends HttpResponse {
    // (undocumented)
    body: SharedModelOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export interface PublicDecoratorInInternal {
    // (undocumented)
    get(options: PublicDecoratorInInternalParameters): StreamableMethod<PublicDecoratorInInternal200Response>;
}

// @public
export interface PublicDecoratorInInternal200Response extends HttpResponse {
    // (undocumented)
    body: PublicDecoratorModelInInternalOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export type PublicDecoratorInInternalParameters = PublicDecoratorInInternalQueryParam & RequestParameters;

// @public (undocumented)
export interface PublicDecoratorInInternalQueryParam {
    // (undocumented)
    queryParameters: PublicDecoratorInInternalQueryParamProperties;
}

// @public (undocumented)
export interface PublicDecoratorInInternalQueryParamProperties {
    // (undocumented)
    name: string;
}

// @public (undocumented)
export interface PublicDecoratorInPublic {
    // (undocumented)
    get(options: PublicDecoratorInPublicParameters): StreamableMethod<PublicDecoratorInPublic200Response>;
}

// @public
export interface PublicDecoratorInPublic200Response extends HttpResponse {
    // (undocumented)
    body: PublicDecoratorModelInPublicOutput;
    // (undocumented)
    status: "200";
}

// @public (undocumented)
export type PublicDecoratorInPublicParameters = PublicDecoratorInPublicQueryParam & RequestParameters;

// @public (undocumented)
export interface PublicDecoratorInPublicQueryParam {
    // (undocumented)
    queryParameters: PublicDecoratorInPublicQueryParamProperties;
}

// @public (undocumented)
export interface PublicDecoratorInPublicQueryParamProperties {
    // (undocumented)
    name: string;
}

// @public
export interface PublicDecoratorModelInInternalOutput {
    // (undocumented)
    name: string;
}

// @public
export interface PublicDecoratorModelInPublicOutput {
    // (undocumented)
    name: string;
}

// @public (undocumented)
export type PublicParameters = PublicQueryParam & RequestParameters;

// @public (undocumented)
export interface PublicQueryParam {
    // (undocumented)
    queryParameters: PublicQueryParamProperties;
}

// @public (undocumented)
export interface PublicQueryParamProperties {
    // (undocumented)
    name: string;
}

// @public
export interface RealModelOutput extends AbstractModelOutputParent {
    // (undocumented)
    kind: "real";
}

// @public (undocumented)
export interface Routes {
    (path: "/azure/client-generator-core/access/publicOperation/noDecoratorInPublic"): NoDecoratorInPublic;
    (path: "/azure/client-generator-core/access/publicOperation/publicDecoratorInPublic"): PublicDecoratorInPublic;
    (path: "/azure/client-generator-core/access/internalOperation/noDecoratorInInternal"): NoDecoratorInInternal;
    (path: "/azure/client-generator-core/access/internalOperation/internalDecoratorInInternal"): InternalDecoratorInInternal;
    (path: "/azure/client-generator-core/access/internalOperation/publicDecoratorInInternal"): PublicDecoratorInInternal;
    (path: "/azure/client-generator-core/access/sharedModelInOperation/public"): Public;
    (path: "/azure/client-generator-core/access/sharedModelInOperation/internal"): Internal;
    (path: "/azure/client-generator-core/access/relativeModelInOperation/operation"): Operation;
    (path: "/azure/client-generator-core/access/relativeModelInOperation/discriminator"): Discriminator;
}

// @public
export interface SharedModelOutput {
    // (undocumented)
    name: string;
}

// (No @packageDocumentation comment for this package)

```