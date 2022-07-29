export interface PathParameterStructure {
    name: string;
    compositions: Record<string, ParameterTypeStructure | string>;
}

export interface ParameterTypeStructure {
    name: string;
    description?: string;
    properties?: ParameterPropertyStructure[];
}

export interface ParameterPropertyStructure {
    name: string;
    description?: string;
    type: string;
    isRequired?: boolean;
    buildType: boolean;
    buildStructure?: ParameterTypeStructure;
}
