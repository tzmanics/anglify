import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function anglifySchematics(options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const config = {
      apiId: options.api,
      accessToken: options.token,
      projectName: options.project
    };
    tree.create("/netlifyConfig.json", JSON.stringify(config, null, 2));

    const newGitignoreContent = "netlifyConfig.json";
    if (tree.exists("/.gitignore")) {
      let gitignoreBuffer = tree.read("/.gitignore");
      if (gitignoreBuffer != null) {
        let gitignoreContents = gitignoreBuffer.toString();
        gitignoreContents = `${gitignoreContents}\r\n${newGitignoreContent}`;
        _context.logger.warn(gitignoreContents);
      }
    } else {
      tree.create("/.gitignore", newGitignoreContent);
    }

    // 3) call Netlify API

    return tree;
  };
}
