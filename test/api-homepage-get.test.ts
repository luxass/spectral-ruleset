import { DiagnosticSeverity } from "@stoplight/types";
import { spectralRuleTest } from "./__utils";

spectralRuleTest("luxass/api-homepage-get", [
  {
    name: "valid case",
    document: {
      openapi: "3.1.0",
      info: { version: "1.0" },
      paths: {
        "/": {
          get: {},
        },
      },
    },
    errors: [],
  },

  {
    name: "invalid case",
    document: {
      openapi: "3.1.0",
      info: { version: "1.0" },
      paths: {
        "/": {},
      },
    },
    errors: [
      {
        message: "APIs root path (`/`) MUST have a GET operation.",
        path: ["paths", "/"],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
]);
