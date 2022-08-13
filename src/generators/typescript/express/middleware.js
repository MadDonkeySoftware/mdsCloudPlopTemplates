import { NodePlopAPI } from 'plop';
import { generateBarrelFile } from '../../../utils/generate-barrel-file';

export function middlewareGenerator(
  /** @type NodePlopAPI} */
  plop,
) {
  // simple middleware generator
  plop.setGenerator('ts-express-simple-middleware', {
    description: 'express middleware (TypeScript)',
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
        templateFile: 'templates/typescript/express/simple-middleware.hbs',
      },
      {
        type: 'add',
        path: 'src/middlewares/__test__/{{name}}.test.ts',
        templateFile: 'templates/typescript/express/simple-middleware.test.hbs',
      },
      {
        type: 'modify',
        path: 'src/middlewares/index.ts',
        transform: (body, data) => generateBarrelFile(body, data),
      },
    ],
  });
}
