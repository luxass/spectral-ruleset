import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/ruleset.ts"],
  outDir: "dist",
  format: ["esm", "cjs"],
  clean: true,
  external: [
    "@stoplight/spectral-functions",
    "@stoplight/spectral-formats",
  ],
});
