import { DiagnosticSeverity } from "@stoplight/types";
import { spectralRuleTest } from "../__utils";

spectralRuleTest("luxass/oas2/get-request-no-body", [
  {
    name: "valid case",
    document: {
      swagger: "2.0",
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
      swagger: "2.0.0",
      info: { version: "1.0" },
      paths: {
        "/": {
          get: {
            summary: "Get is a question but this looks like an answer",
            consumes: ["application/json"],
            parameters: [
              {
                in: "body",
                name: "user",
                schema: {
                  type: "object",
                },
              },
            ],
          },
        },
      },
    },
    errors: [
      {
        message: "A `GET` request MUST NOT accept a request body.",
        path: ["paths", "/", "get", "parameters", "0", "in"],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },
]);
