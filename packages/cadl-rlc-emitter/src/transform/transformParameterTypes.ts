import { ParameterPropertyStructure, ParameterTypeStructure, PathParameterStructure } from "@azure-tools/rlc-codegen/types/parameterInterfaces";
import { OperationDetails, HttpOperationParameters, HttpOperationParameter } from "@cadl-lang/rest/http";

export function transformToParameterTypes(routes: OperationDetails[]) {
    const parameters: PathParameterStructure[] = [];
    for (const route of routes) {
        const operationName = `${route.groupName}${route.operation.name}`;
        const paramName = `${operationName}Parameters`;
        const rawParameters = route.parameters;
        const internReferences: ParameterTypeStructure[] = [];
        buildQueryParameterStructure(internReferences, rawParameters, operationName);
        buildPathParameterStructure();
        buildHeaderParameterStructure(internReferences, rawParameters, operationName);
        buildBodyParameterStructure(internReferences, rawParameters, operationName);
        buildContentTypeParameterStructure();
        const compositions: Record<string, ParameterTypeStructure | string> = {};
        internReferences.forEach(r => compositions[r.name] = r);
        compositions["RequestParameters"] = "RequestParameters";
        parameters.push({
            name: paramName,
            compositions
        });
    }

    return parameters;
}

function buildQueryParameterStructure(
    internReferences: ParameterTypeStructure[],
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
        p => !p.isRequired
    );
    const queryParameter: ParameterTypeStructure = {
        name: queryParameterTypeName,
        properties: [{
            name: "queryParameters",
            type: queryParameterPropertiesName,
            // Mark as optional if there are no required parameters
            isRequired: hasRequiredParameters,
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
    internReferences: ParameterTypeStructure[],
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
        p => !p.isRequired
    );
    const headerParameter: ParameterTypeStructure = {
        name: headerParameterTypeName,
        properties: [{
            name: "headers",
            type: `RawHttpHeadersInput & ${headerParameterPropertiesName}`,
            // Mark as optional if there are no required parameters
            isRequired: hasRequiredParameters,
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
    internReferences: ParameterTypeStructure[],
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
    const headerParameter: ParameterTypeStructure = {
        name: bodyParameterTypeName,
        properties: [{
            name: "body",
            type: bodyType,
            // Mark as optional if there are no required parameters
            isRequired: bodyParameters.optional,
            // No need to construct the relevant property type
            buildType: false
        }]
    };
    internReferences.push(headerParameter);
    return headerParameter;
}

function buildContentTypeParameterStructure(
    internReferences: ParameterTypeStructure[],
    rawParameters: HttpOperationParameters,
    operationName: string) {
    const mediaTypes = rawParameters.parameters.filter(
        p => (p.type === "header" && p.name === "content-type")
    );
    if (!mediaTypes.length) {
        return undefined;
    }
}

function getParameterPropertyStructure(parameter: HttpOperationParameter) {
    const to: ParameterPropertyStructure = {
        name: parameter.name,
        description: "", // TODO
        type: "",// TODO
        isRequired: false, // TODO
        buildType: false,
    };
    return to;
}

