import { DiagnosticSeverity } from "@stoplight/types";
import { spectralRuleTest } from "./__utils";

spectralRuleTest("luxass/version-in-info", [
  {
    name: "valid semantic version",
    document: {
      openapi: "3.1.0",
      info: {
        title: "Test API",
        version: "1.0.0",
      },
      paths: {},
    },
    errors: [],
  },
  {
    name: "valid semantic version with pre-release",
    document: {
      openapi: "3.1.0",
      info: {
        title: "Test API",
        version: "1.0.0-alpha.1",
      },
      paths: {},
    },
    errors: [],
  },
  {
    name: "valid semantic version with build metadata",
    document: {
      openapi: "3.1.0",
      info: {
        title: "Test API",
        version: "1.0.0+20230101",
      },
      paths: {},
    },
    errors: [],
  },
  {
    name: "invalid version - single number",
    document: {
      openapi: "3.1.0",
      info: {
        title: "Test API",
        version: "1",
      },
      paths: {},
    },
    errors: [
      {
        code: "luxass/version-in-info",
        message: "API version should follow semantic versioning.",
        path: ["info", "version"],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
  {
    name: "invalid version - two numbers only",
    document: {
      openapi: "3.1.0",
      info: {
        title: "Test API",
        version: "1.0",
      },
      paths: {},
    },
    errors: [
      {
        code: "luxass/version-in-info",
        message: "API version should follow semantic versioning.",
        path: ["info", "version"],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
  {
    name: "invalid version - descriptive text",
    document: {
      openapi: "3.1.0",
      info: {
        title: "Test API",
        version: "latest",
      },
      paths: {},
    },
    errors: [
      {
        code: "luxass/version-in-info",
        message: "API version should follow semantic versioning.",
        path: ["info", "version"],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
]);
