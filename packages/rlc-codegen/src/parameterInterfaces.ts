export interface PathParameterStructure {
    name: string;
    baseType: string;
    compositions: ParameterTypeStructure[];
}

export interface ParameterTypeStructure {
    name: string;
    description?: string;
    properties: ParameterPropertyStructure[];
}

export interface ParameterPropertyStructure {
    name: string;
    description?: string;
    type: string;
    isOptional?: boolean;
    buildType: boolean;
    buildStructure?: ParameterTypeStructure;
}
