import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: ["unicorn", "typescript", "oxc"],
  categories: {
    correctness: "error",
    perf: "error",
    suspicious: "error",
    pedantic: "warn",
  },
  rules: {
    "eslint/no-await-in-loop": "off",
    "no-console": ["error", { allow: ["error"] }],
    "no-shadow": "off",
    "eslint/eqeqeq": ["warn", "always", { null: "ignore" }],
    "typescript/no-explicit-any": "error",
    "eslint/max-lines": ["warn", { skipBlankLines: true, skipComments: true }],
    "eslint/max-lines-per-function": ["warn", { skipBlankLines: true, skipComments: true }],
    curly: "off",
  },
  overrides: [
    {
      // Spectral uses a `then` object to describe what each rule checks.
      files: ["src/ruleset.ts", "src/oas2.ts", "src/oas3.ts"],
      rules: {
        "unicorn/no-thenable": "off",
      },
    },
    {
      files: ["test/**/*.test.ts"],
      rules: {
        "eslint/max-lines": "off",
        "eslint/max-lines-per-function": "off",
      },
    },
  ],
});
