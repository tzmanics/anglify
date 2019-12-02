import { Tree } from "@angular-devkit/schematics";
import { SchematicTestRunner } from "@angular-devkit/schematics/testing";
import * as path from "path";

const collectionPath = path.join(__dirname, "../collection.json");

describe("ng-add", () => {
  it("creates a config file", () => {
    const runner = new SchematicTestRunner("schematics", collectionPath);
    const options = {
      api: "api",
      token: "token",
      project: "project"
    };
    const tree = runner.runSchematic("ng-add", options, Tree.empty());

    const content = tree.readContent("/netlifyConfig.json");
    expect(content).toContain('apiId": "api"');
    expect(content).toContain('accessToken": "token"');
    expect(content).toContain('projectName": "project"');
  });
});
