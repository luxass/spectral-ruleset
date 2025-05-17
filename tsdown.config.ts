import { defineConfig } from "tsdown";
import pkg from "./package.json";

export default defineConfig({
  entry: ["src/ruleset.ts"],
  outDir: "dist",
  format: ["esm", "cjs"],
  clean: true,
  noExternal: [
    "@stoplight/types",
  ],
  external: Object.keys((pkg.devDependencies) || {})
    .filter((dep) => dep !== "@stoplight/types"),
});
