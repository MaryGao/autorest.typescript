import { PathParameterDefinition, PathParameterPart, PropertyDefinition } from "@azure-tools/rlc-codegen";
import { OperationDetails, HttpOperationParameters, HttpOperationParameter } from "@cadl-lang/rest/http";
import { NameType, normalizeName } from "../util/nameUtils.js";

export function transformToParameterTypes(routes: OperationDetails[]) {
    const parameters: PathParameterDefinition[] = [];
    for (const route of routes) {
        const operationName = normalizeName(
            `${route.groupName}_${route.operation.name}`,
            NameType.Interface
        );
        const paramName = `${operationName}Parameters`;
        const rawParameters = route.parameters;
        const internReferences: PathParameterPart[] = [];
        buildQueryParameterStructure(internReferences, rawParameters, operationName);
        buildPathParameterStructure();
        buildHeaderParameterStructure(internReferences, rawParameters, operationName);
        buildBodyParameterStructure(internReferences, rawParameters, operationName);
        buildContentTypeParameterStructure(internReferences, rawParameters, operationName);
        parameters.push({
            name: paramName,
            baseType: "RequestParameters",
            compositions: internReferences
        });
    }

    return parameters;
}

function buildQueryParameterStructure(
    internReferences: PathParameterPart[],
    rawParameters: HttpOperationParameters,
    operationName: string) {
    const queryParameters = rawParameters.parameters.filter(p => p.type === "query");
    if (!queryParameters.length) {
        return undefined;
    }
    const queryParameterTypeName = `${operationName}QueryParam`;
    const queryParameterPropertiesName = `${operationName}QueryParamProperties`;

    // Get the property detail for each query parameter
    const propertiesDetails = queryParameters.map(qp => getParameterPropertyStructure(qp));
    const hasRequiredParameters = propertiesDetails.some(
        p => !p.isOptional
    );
    const queryParameter: PathParameterPart = {
        name: queryParameterTypeName,
        properties: [{
            name: "queryParameters",
            type: queryParameterPropertiesName,
            // Mark as optional if there are no required parameters
            isOptional: !hasRequiredParameters,
            // Need to construct the relevant property type
            buildType: true,
            buildStructure: {
                name: queryParameterPropertiesName,
                properties: propertiesDetails
            }
        }]
    };
    internReferences.push(queryParameter);
    return queryParameter;
}

/**
 * Only support to take the global path parameter as path parameter
 * @returns 
 */
function buildPathParameterStructure() {
    // TODO
    return null;
}

function buildHeaderParameterStructure(
    internReferences: PathParameterPart[],
    rawParameters: HttpOperationParameters,
    operationName: string) {
    const headerParameters = rawParameters.parameters.filter(
        p => (p.type === "header" && p.name != "content-type")
    );
    if (!headerParameters.length) {
        return undefined;
    }
    const headerParameterTypeName = `${operationName}HeaderParam`;
    const headerParameterPropertiesName = `${operationName}Headers`;

    // Get the property detail for each header parameter
    const propertiesDetails = headerParameters.map(hp => getParameterPropertyStructure(hp));
    const hasRequiredParameters = propertiesDetails.some(
        p => !p.isOptional
    );
    const headerParameter: PathParameterPart = {
        name: headerParameterTypeName,
        properties: [{
            name: "headers",
            type: `RawHttpHeadersInput & ${headerParameterPropertiesName}`,
            // Mark as optional if there are no required parameters
            isOptional: !hasRequiredParameters,
            // Need to construct the relevant property type
            buildType: true,
            buildStructure: {
                name: headerParameterPropertiesName,
                properties: propertiesDetails
            }
        }]
    };
    internReferences.push(headerParameter);
    return headerParameter;
}

function buildBodyParameterStructure(
    internReferences: PathParameterPart[],
    rawParameters: HttpOperationParameters,
    operationName: string) {
    const bodyParameters = rawParameters.body;
    if (!bodyParameters) {
        return undefined;
    }
    const bodyParameterTypeName = `${operationName}BodyParam`;
    // TODO: handle more body types 
    const bodyType = (bodyParameters.type.kind === "Model") ? bodyParameters.type.name : "";
    // In case of formData we'd get multiple properties in body marked as partialBody
    const headerParameter: PathParameterPart = {
        name: bodyParameterTypeName,
        properties: [{
            name: "body",
            type: bodyType,
            // Mark as optional if there are no required parameters
            isOptional: bodyParameters.optional,
            // No need to construct the relevant property type
            buildType: false
        }]
    };
    internReferences.push(headerParameter);
    return headerParameter;
}

function buildContentTypeParameterStructure(
    internReferences: PathParameterPart[],
    rawParameters: HttpOperationParameters,
    operationName: string) {
    const mediaTypes = rawParameters.parameters.filter(
        p => (p.type === "header" && p.name === "content-type")
    );
    if (!mediaTypes.length) {
        return undefined;
    }
    const mediaTypeParameterTypeName = `${operationName}MediaTypesParam`;
    const mediaTypeParameter: PathParameterPart = {
        name: mediaTypeParameterTypeName,
        properties: [{
            name: "contentType",
            description: "Request content type",
            type: `"text/plain"`, // TODO
            // Mark as optional if there are no required parameters
            isOptional: Boolean(mediaTypes[0]?.param.optional),
            buildType: false
        }]
    };
    internReferences.push(mediaTypeParameter);
    return mediaTypeParameter;
}

function getParameterPropertyStructure(parameter: HttpOperationParameter) {
    const to: PropertyDefinition = {
        name: `"${parameter.name}"`, // TODO
        description: "Remember to update description from doc", // TODO
        type: "any",// TODO
        isOptional: parameter.param.optional,
        buildType: false,
    };
    return to;
}

