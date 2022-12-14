import { NodePlopAPI } from 'plop';
import { generateBarrelFile } from '../../../utils/generate-barrel-file';

export function middlewareGenerator(
  /** @type NodePlopAPI} */
  plop,
) {
  // simple middleware generator
  plop.setGenerator('ts-fastify-simple-middleware', {
    description: 'fastify middleware (TypeScript)',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'middleware file name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/middlewares/{{name}}.ts',
        templateFile: 'templates/typescript/fastify/simple-middleware.hbs',
      },
      {
        type: 'add',
        path: 'src/middlewares/__tests__/{{name}}.test.ts',
        templateFile: 'templates/typescript/fastify/simple-middleware.test.hbs',
      },
      {
        type: 'add',
        path: 'src/middlewares/index.ts',
        abortOnFail: false,
      },
      {
        type: 'modify',
        path: 'src/middlewares/index.ts',
        transform: (body, data) => generateBarrelFile(body, data),
      },
    ],
  });
}
