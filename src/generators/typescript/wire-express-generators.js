import { controllerGenerator as expressControllerGenerator } from './express/controller';
import { middlewareGenerator as expressMiddlewareGenerator } from './express/middleware';
import { controllerGenerator as fastifyControllerGenerator } from './fastify/controller';
import { middlewareGenerator as fastifyMiddlewareGenerator } from './fastify/middleware';
import { routerGenerator as fastifyRouterGenerator } from './fastify/route';
import { generateBarrelFile } from '../../utils/generate-barrel-file';

export function wireExpressGenerators(
  /** @type NodePlopAPI} */
  plop,
) {
  expressControllerGenerator(plop);
  expressMiddlewareGenerator(plop);
  fastifyControllerGenerator(plop);
  fastifyMiddlewareGenerator(plop);
  fastifyRouterGenerator(plop);

  plop.setGenerator('ts-fn-stub-with-barrel-file', {
    description: 'generic function file stub with barrel file and test (TypeScript)',
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
        templateFile: 'templates/typescript/general-fn-file.hbs',
      },
      {
        type: 'add',
        path: '{{path}}/__tests__/{{name}}.test.ts',
        templateFile: 'templates/typescript/general-fn-file.test.hbs',
      },
      {
        type: 'add',
        path: '{{path}}/index.ts',
        abortOnFail: false,
      },
      {
        type: 'modify',
        path: '{{path}}/index.ts',
        transform: (body, data) => generateBarrelFile(body, data),
      },
    ],
  });

  plop.setGenerator('ts-type-stub-with-barrel-file', {
    description: 'generic function file stub with barrel file and test (TypeScript)',
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
        templateFile: 'templates/typescript/general-type-file.hbs',
      },
      {
        type: 'add',
        path: '{{path}}/index.ts',
        abortOnFail: false,
      },
      {
        type: 'modify',
        path: '{{path}}/index.ts',
        transform: (body, data) => generateBarrelFile(body, data),
      },
    ],
  });
}
