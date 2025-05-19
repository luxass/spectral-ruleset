import { DiagnosticSeverity } from "@stoplight/types";
import { spectralRuleTest } from "./__utils";

export default spectralRuleTest("luxass/headers-hyphenated-pascal-case", [
  {
    name: "valid hyphenated pascal case headers",
    document: {
      swagger: "2.0",
      info: { version: "1.0" },
      paths: {
        "/users": {
          get: {
            parameters: [
              {
                name: "Content-Type",
                in: "header",
              },
              {
                name: "Accept-Language",
                in: "header",
              },
              {
                name: "X-Rate-Limit-Remaining",
                in: "header",
              },
              {
                name: "If-None-Match",
                in: "header",
              },
            ],
          },
        },
      },
    },
    errors: [],
  },
  {
    name: "invalid lowercase header",
    document: {
      swagger: "2.0",
      info: { version: "1.0" },
      paths: {
        "/users": {
          get: {
            parameters: [
              {
                name: "content-type",
                in: "header",
              },
            ],
          },
        },
      },
    },
    errors: [
      {
        message: "name is not hyphenated-pascal-case: \"content-type\" must match the pattern \"^[A-Z][a-z0-9]*(-[A-Z][a-z0-9]*)*$\"",
        path: ["paths", "/users", "get", "parameters", "0", "name"],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },
  {
    name: "invalid camelCase header",
    document: {
      swagger: "2.0",
      info: { version: "1.0" },
      paths: {
        "/users": {
          get: {
            parameters: [
              {
                name: "contentType",
                in: "header",
              },
            ],
          },
        },
      },
    },
    errors: [
      {
        message: "name is not hyphenated-pascal-case: \"contentType\" must match the pattern \"^[A-Z][a-z0-9]*(-[A-Z][a-z0-9]*)*$\"",
        path: ["paths", "/users", "get", "parameters", "0", "name"],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },
  {
    name: "invalid uppercase header",
    document: {
      swagger: "2.0",
      info: { version: "1.0" },
      paths: {
        "/users": {
          get: {
            parameters: [
              {
                name: "CONTENT-TYPE",
                in: "header",
              },
            ],
          },
        },
      },
    },
    errors: [
      {
        message: "name is not hyphenated-pascal-case: \"CONTENT-TYPE\" must match the pattern \"^[A-Z][a-z0-9]*(-[A-Z][a-z0-9]*)*$\"",
        path: ["paths", "/users", "get", "parameters", "0", "name"],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },
  {
    name: "invalid snake_case header",
    document: {
      swagger: "2.0",
      info: { version: "1.0" },
      paths: {
        "/users": {
          get: {
            parameters: [
              {
                name: "content_type",
                in: "header",
              },
            ],
          },
        },
      },
    },
    errors: [
      {
        message: "name is not hyphenated-pascal-case: \"content_type\" must match the pattern \"^[A-Z][a-z0-9]*(-[A-Z][a-z0-9]*)*$\"",
        path: ["paths", "/users", "get", "parameters", "0", "name"],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },
]);
