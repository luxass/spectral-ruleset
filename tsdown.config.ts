import { defineConfig } from "tsdown";
import pkg from "./package.json" with { type: "json" };

export default defineConfig({
  entry: ["src/ruleset.ts"],
  format: ["esm", "cjs"],
  clean: true,
  exports: true,
  publint: true,
  noExternal: [
    "@stoplight/types",
  ],
  external: Object.keys((pkg.devDependencies) || {})
    .filter((dep) => dep !== "@stoplight/types"),

});
