import { DiagnosticSeverity } from "@stoplight/types";
import { spectralRuleTest } from "./__utils";

spectralRuleTest("luxass/paths-kebab-case", [
  {
    name: "valid kebab-case paths",
    document: {
      swagger: "2.0",
      info: { version: "1.0" },
      paths: {
        "/": {},
        "/users": {},
        "/user-profiles": {},
        "/users/{id}": {},
        "/user-profiles/{user-id}/settings": {},
        "/api/v1/users": {},
        "/api-v1/users": {},
      },
    },
    errors: [],
  },
  {
    name: "invalid camelCase path",
    document: {
      swagger: "2.0",
      info: { version: "1.0" },
      paths: {
        "/userProfiles": {},
      },
    },
    errors: [
      {
        message: "/userProfiles is not kebab-case: Object{} must match the pattern \"^/([a-z0-9]+(-[a-z0-9]+)*)?(/[a-z0-9]+(-[a-z0-9]+)*|/{.+})*$\"",
        path: ["paths", "/userProfiles"],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
  {
    name: "invalid PascalCase path",
    document: {
      swagger: "2.0",
      info: { version: "1.0" },
      paths: {
        "/UserProfile": {},
      },
    },
    errors: [
      {
        message: "/UserProfile is not kebab-case: Object{} must match the pattern \"^/([a-z0-9]+(-[a-z0-9]+)*)?(/[a-z0-9]+(-[a-z0-9]+)*|/{.+})*$\"",
        path: ["paths", "/UserProfile"],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
  {
    name: "invalid snake_case path",
    document: {
      swagger: "2.0",
      info: { version: "1.0" },
      paths: {
        "/user_profile": {},
      },
    },
    errors: [
      {
        message: "/user_profile is not kebab-case: Object{} must match the pattern \"^/([a-z0-9]+(-[a-z0-9]+)*)?(/[a-z0-9]+(-[a-z0-9]+)*|/{.+})*$\"",
        path: ["paths", "/user_profile"],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
  {
    name: "invalid path with unclosed brace",
    document: {
      swagger: "2.0",
      info: { version: "1.0" },
      paths: {
        "/users/{id/profile": {},
      },
    },
    errors: [
      {
        message: "/users/{id/profile is not kebab-case: Object{} must match the pattern \"^/([a-z0-9]+(-[a-z0-9]+)*)?(/[a-z0-9]+(-[a-z0-9]+)*|/{.+})*$\"",
        path: ["paths", "/users/{id/profile"],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
  {
    name: "invalid path with text after parameter",
    document: {
      swagger: "2.0",
      info: { version: "1.0" },
      paths: {
        "/users/{id}profile": {},
      },
    },
    errors: [
      {
        message: "/users/{id}profile is not kebab-case: Object{} must match the pattern \"^/([a-z0-9]+(-[a-z0-9]+)*)?(/[a-z0-9]+(-[a-z0-9]+)*|/{.+})*$\"",
        path: ["paths", "/users/{id}profile"],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
]);
