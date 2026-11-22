import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/ruleset.ts"],
  format: ["esm", "cjs"],
  dts: false,
  clean: true,
  exports: false,
  publint: true,
  deps: {
    alwaysBundle: ["@stoplight/types"],
    onlyBundle: ["@stoplight/types"],
  },
});
