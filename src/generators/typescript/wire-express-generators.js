import { controllerGenerator } from './express/controller';
import { middlewareGenerator } from './express/middleware';

export function wireExpressGenerators(
  /** @type NodePlopAPI} */
  plop,
) {
  controllerGenerator(plop);
  middlewareGenerator(plop);
}
