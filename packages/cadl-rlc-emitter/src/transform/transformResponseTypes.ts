import { Program } from "@cadl-lang/compiler";
import { getAllRoutes } from "@cadl-lang/rest/http";

export function transformToParameterTypes(program: Program) {
    const [routes, _diagnostics] = getAllRoutes(program);
    console.log(routes)

}
