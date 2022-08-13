import { NodePlopAPI } from 'plop';
import { wireTypescriptGenerators } from './generators/wire-typescript-generators';
import { nameToCamelCase } from './helpers/name-to-camel-case';

export default function (
  /** @type NodePlopAPI} */
  plop,
) {
  // Helpers
  plop.setHelper('nameToCamelCase', nameToCamelCase);

  wireTypescriptGenerators(plop);
}
