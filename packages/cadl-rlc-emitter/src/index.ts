import { CompilerHost, Program } from '@cadl-lang/compiler';
import { buildClientDefinitions, buildParameterTypes, Paths } from '@azure-tools/rlc-codegen';
import { getAllRoutes } from '@cadl-lang/rest/http';
import { dirname, join } from 'path';
import { transformToParameterTypes } from './transform/transformParameterTypes.js';
export async function $onEmit(program: Program) {
    const [routes, _diagnostics] = getAllRoutes(program);
    const paths: Paths = {};
    for (const route of routes) {
        paths[route.path] = {
            name: route.operation.name,
            pathParameters: route.parameters.parameters
                .filter((p) => p.type === 'path')
                .map((p) => {
                    return {
                        name: p.name,
                        type: 'string',
                        description: 'param'
                    };
                }),
            methods: {
                [route.verb]: [
                    {
                        description: 'Foo',
                        hasOptionalOptions: route.parameters.parameters.some(
                            (p) => p.param.optional
                        ),
                        optionsName: 'options',
                        responseTypes: { success: ['string'], error: [] },
                        returnType: '',
                        successStatus: ['200']
                    }
                ]
            }
        };
    }
    const res = transformToParameterTypes(routes);
    const rlcModel = { paths, libraryName: 'Foo', srcPath: 'src', params: res };
    const clientDefinitionsFile = buildClientDefinitions(
        rlcModel,
        {
            clientImports: new Set(),
            importedParameters: new Set(),
            importedResponses: new Set()
        }
    );

    const filePath = program.compilerOptions.outputPath
        ? join(program.compilerOptions.outputPath, clientDefinitionsFile.path)
        : clientDefinitionsFile.path;
    await emitFile(filePath, clientDefinitionsFile.content, program.host);

    const parameterType = buildParameterTypes(rlcModel,
        {
            clientImports: new Set(),
            importedParameters: new Set(),
            importedResponses: new Set()
        });
    const parameterPath = program.compilerOptions.outputPath
        ? join(program.compilerOptions.outputPath, parameterType.path)
        : parameterType.path;
    await emitFile(parameterPath, parameterType.content, program.host);
}

async function emitFile(path: string, content: string, host: CompilerHost) {
    await host.mkdirp(dirname(path));
    await host.writeFile(path, content);
}
