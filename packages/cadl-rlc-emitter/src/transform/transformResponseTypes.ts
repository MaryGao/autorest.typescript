import { ResponseSchema, Schema } from "@azure-tools/rlc-codegen";
import { ModelTypeProperty, Program } from "@cadl-lang/compiler";
import { getAllRoutes, HttpOperationResponse } from "@cadl-lang/rest/http";
import { NameType, normalizeName } from "../util/nameUtils";

export function transformToResponseTypes(program: Program) {
    const [routes, _diagnostics] = getAllRoutes(program);
    const responses: ResponseSchema[] = [];
    for (const route of routes) {
        const rawResponses = route.responses;
        for (const resp of rawResponses) {
            const statusCode = resp.statusCode;
            const operationName = normalizeName(
                `${route.groupName}_${route.operation.name}`,
                NameType.Interface
            );

            // Building the response type base name
            const baseName = normalizeName(
                `${operationName}${statusCode}`,
                NameType.Interface
            );
            // Build response header schema if any
            const headerInterface = buildResponseHeader(resp, baseName);
            let hasHeaders = false;
            if (headerInterface) {
                responses.push(headerInterface);
                hasHeaders = true;
            }

            // Get the information to build the Response Interface
            const responseName = getResponseTypeName(baseName);
            const responseDescription = resp.description;
            const properties: Record<string, Schema> = getResponseProperties(resp, statusCode, headerInterface);
            const responseSchema: ResponseSchema = {
                name: responseName,
                type: responseName,
                properties,
                ...(responseDescription && { description: responseDescription }),
                parents: { // extends HttpResponse 
                    immediate: [{
                        name: "HttpResponse",
                        type: "HttpResponse"
                    }]
                }

            };
            responses.push(responseSchema)
        }
    }
}

function getResponseTypeName(baseName: string) {
    return normalizeName(
        `${baseName}$Response`,
        NameType.Interface);
}

function getResponseProperties(
    resp: HttpOperationResponse,
    statusCode: string,
    headerInterface?: ResponseSchema,
): Record<string, Schema> {
    const props: Record<string, Schema> = {};
    // Hanlde property - status
    props["status"] = {
        name: "status",
        type: statusCode === `"default"` ? `string` : statusCode
    }
    if (!resp.responses.length) {
        return props;
    } else if (resp.responses.length > 1) {
        // TODO: handle one status code map to multiple rsps
    }
    const respDetail = resp.responses[0];

    // Handle property - body
    // TODO: get body type
    const bodyType = respDetail?.body?.type?.kind == "Model" ? respDetail?.body?.type.name : undefined;
    if (bodyType) {
        const bodyDescription: string = ""; // TODO: enrich body docs
        props["body"] = {
            name: "body",
            type: bodyType,
            ...(bodyDescription && { description: bodyDescription })
        };
    }
    // Handle property - header
    if (headerInterface) {
        props["header"] = {
            name: "headers",
            type: `RawHttpHeaders & ${headerInterface.name}`,
        };
    }
    return props;
}

function buildResponseHeader(
    resp: HttpOperationResponse,
    baseName: string
): ResponseSchema | undefined {
    if (!resp.responses.length) {
        return;
    } else if (resp.responses.length > 1) {
        // TODO: handle one status code map to multiple rsps
    }
    const respDetail = resp.responses[0];
    const headerProperties = buildHeaderProperties(respDetail?.headers);
    if (!headerProperties) {
        return;
    }
    return {
        name: `${baseName}Headers`,
        type: `${baseName}Headers`,
        properties: headerProperties,
    };
}
function buildHeaderProperties(
    headers?: Record<string, ModelTypeProperty>
): Record<string, Schema> | undefined {
    if (!headers || !Object.keys(headers).length) {
        return;
    }
    const props: Record<string, Schema> = {};
    Object.keys(headers).map(key => headers[key]).map(header => {
        // TODO: handle the schema part
        const name = `"${header?.name.toLowerCase()}"`;
        props[name] = {
            name,
            type: `"string"`,
            required: Boolean(header?.optional)
        };
    });
    return props;
}

