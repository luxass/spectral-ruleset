import { defineConfig } from "tsdown";
import pkg from "./package.json" with { type: "json" };

export default defineConfig({
  entry: ["src/ruleset.ts"],
  format: ["esm", "cjs"],
  clean: true,
  exports: {
    enabled: "local-only",
  },
  publint: true,
  noExternal: [
    "@stoplight/types",
  ],
  inlineOnly: false,
  external: Object.keys((pkg.devDependencies) || {})
    .filter((dep) => dep !== "@stoplight/types"),
});
