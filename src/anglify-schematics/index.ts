import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function anglifySchematics(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    // 1) create config file
    const config = {
      apiId: "",
      accessToken: "",
      projectName: ""
    };
    tree.create("/netlifyConfig.json", JSON.stringify(config, null, 2));

    // 2) update gitignore file #thanksBill

    // 3) call Netlify API

    return tree;
  };
}
