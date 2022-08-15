import { controllerGenerator } from './express/controller';
import { middlewareGenerator } from './express/middleware';
import { generateBarrelFile } from '../../utils/generate-barrel-file';

export function wireExpressGenerators(
  /** @type NodePlopAPI} */
  plop,
) {
  controllerGenerator(plop);
  middlewareGenerator(plop);

  plop.setGenerator('ts-stub-with-barrel-file', {
    description: 'generic file stub with barrel file and test (TypeScript)',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'file name',
      },
      {
        type: 'input',
        name: 'path',
        message: 'relative file path',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{path}}/{{name}}.ts',
        templateFile: 'templates/typescript/general-file.hbs',
      },
      {
        type: 'add',
        path: '{{path}}/__test__/{{name}}.test.ts',
        templateFile: 'templates/typescript/general-file.test.hbs',
      },
      {
        type: 'modify',
        path: '{{path}}/index.ts',
        transform: (body, data) => generateBarrelFile(body, data),
      },
    ],
  });
}
