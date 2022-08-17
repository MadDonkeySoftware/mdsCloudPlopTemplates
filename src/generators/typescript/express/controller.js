import { NodePlopAPI } from 'plop';
import { generateBarrelFile } from '../../../utils/generate-barrel-file';

export function controllerGenerator(
  /** @type NodePlopAPI} */
  plop,
) {
  plop.setGenerator('ts-express-controller', {
    description: 'application controller logic (TypeScript)',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'controller file name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/controllers/{{name}}.ts',
        templateFile: 'templates/typescript/express/controller.hbs',
      },
      {
        type: 'add',
        path: 'src/controllers/__tests__/{{name}}.test.ts',
        templateFile: 'templates/typescript/express/controller.test.hbs',
      },
      {
        type: 'modify',
        path: 'src/controllers/index.ts',
        transform: (body, data) => generateBarrelFile(body, data),
      },
    ],
  });
}
