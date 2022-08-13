import { wireExpressGenerators } from './typescript/wire-express-generators';

export function wireTypescriptGenerators(
  /** @type NodePlopAPI} */
  plop,
) {
  wireExpressGenerators(plop);
}
