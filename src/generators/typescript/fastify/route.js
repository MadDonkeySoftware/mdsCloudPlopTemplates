import { NodePlopAPI } from 'plop';
import { generateBarrelFile } from '../../../utils/generate-barrel-file';

export function routerGenerator(
  /** @type NodePlopAPI} */
  plop,
) {
  plop.setGenerator('ts-fastify-route', {
    description: 'application router (TypeScript)',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'router file name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/routes/{{name}}.ts',
        templateFile: 'templates/typescript/fastify/router.hbs',
      },
      {
        type: 'add',
        path: 'src/routes/__tests__/{{name}}.test.ts',
        templateFile: 'templates/typescript/fastify/router.test.hbs',
      },
      {
        type: 'add',
        path: 'src/routes/index.ts',
        abortOnFail: false,
      },
      {
        type: 'modify',
        path: 'src/routes/index.ts',
        transform: (body, data) => generateBarrelFile(body, data),
      },
    ],
  });
}
