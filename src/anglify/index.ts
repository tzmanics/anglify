import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";

export function anglify(options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const config = {
      api: options.api,
      token: options.token,
      project: options.project
    };
    tree.create("/netlifyConfig.json", JSON.stringify(config, null, 2));

    const newGitignoreContent = "netlifyConfig.json";
    if (tree.exists("/.gitignore")) {
      let gitignoreBuffer = tree.read("/.gitignore");
      if (gitignoreBuffer != null) {
        let gitignoreContents = gitignoreBuffer.toString();
        gitignoreContents = `${gitignoreContents}\r\n${newGitignoreContent}`;
        tree.overwrite("/.gitignore", gitignoreContents);
      }
    } else {
      tree.create("/.gitignore", newGitignoreContent);
    }

    return tree;
  };
}
