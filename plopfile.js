module.exports = function (plop) {
  // controller generator
  plop.setGenerator('component', {
    description: 'component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Component name in PascalCase'
    }],
    actions: [{
      type: 'add',
      path: 'src/components/{{name}}/index.ts',
      templateFile: 'plop-templates/component/index.hbs'
    }, {
      type: 'add',
      path: 'src/components/{{name}}/{{name}}.tsx',
      templateFile: 'plop-templates/component/component.hbs'
    }, {
      type: 'add',
      path: 'src/components/{{name}}/__tests__/{{name}}.test.tsx',
      templateFile: 'plop-templates/component/test.hbs'
    }]
  });
  plop.setGenerator('page', {
    description: 'page',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Page name in PascalCase, suffixed by Page'
    }],
    actions: [{
      type: 'add',
      path: 'src/pages/{{name}}/index.ts',
      templateFile: 'plop-templates/component/index.hbs'
    }, {
      type: 'add',
      path: 'src/pages/{{name}}/{{name}}.tsx',
      templateFile: 'plop-templates/component/component.hbs'
    }, {
      type: 'add',
      path: 'src/pages/{{name}}/__tests__/{{name}}.test.tsx',
      templateFile: 'plop-templates/component/test.page.hbs'
    }]
  });
  plop.setGenerator('reducer', {
    description: 'reducer',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Reducer name in camelCase'
    }],
    actions: [{
      type: 'add',
      path: 'src/reducers/{{name}}.ts',
      templateFile: 'plop-templates/reducer/reducer.hbs'
    }, {
      type: 'add',
      path: 'src/reducers/__tests__/{{name}}.test.ts',
      templateFile: 'plop-templates/reducer/test.hbs'
    }, {
      type: 'append',
      path: 'src/reducers/index.ts',
      template: '  {{name}},',
      pattern: /const reducers: ReducersMapObject = {/gi
    }, {
      type: 'append',
      path: 'src/reducers/index.ts',
      template: 'import {{name}} from "./{{name}}";',
      pattern: /import { ReducersMapObject } from "redux";/gi
    }, {
      type: 'append',
      path: 'src/types/store.d.ts',
      template: "  {{name}}: I{{properCase name}}StoreType;",
      pattern: /export interface IStoreType {/gi
    }]
  });
};
