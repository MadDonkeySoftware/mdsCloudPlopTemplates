import { NodePlopAPI } from 'plop';
import { generateBarrelFile } from '../../../utils/generate-barrel-file';
import { sep } from 'path'

export function controllerGenerator(
  /** @type NodePlopAPI} */
  plop,
) {
  plop.setGenerator('ts-fastify-controller', {
    description: 'application controller logic (TypeScript)',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'controller file name',
      },
      {
        type: 'input',
        name: 'version',
        message: 'controller api path version (blank to skip)',
        filter: (input) => {
          if (input === '') return input;
          if (!input.endsWith(sep)) return `${input}${sep}`;
          return input;
        },
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/controllers/{{version}}{{name}}.ts',
        templateFile: 'templates/typescript/fastify/controller.hbs',
      },
      {
        type: 'add',
        path: 'src/controllers/{{version}}__tests__/{{name}}.test.ts',
        templateFile: 'templates/typescript/fastify/controller.test.hbs',
      },
      {
        type: 'add',
        path: 'src/controllers/{{version}}index.ts',
        abortOnFail: false,
      },
      {
        type: 'modify',
        path: 'src/controllers/{{version}}index.ts',
        transform: (body, data) => generateBarrelFile(body, data),
      },
    ],
  });
}
