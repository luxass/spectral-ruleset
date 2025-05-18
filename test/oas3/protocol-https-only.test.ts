import { DiagnosticSeverity } from "@stoplight/types";
import { spectralRuleTest } from "../__utils";

spectralRuleTest("luxass/oas3/protocol-https-only", [
  {
    name: "valid case",
    document: {
      openapi: "3.1.0",
      info: { version: "1.0" },
      paths: { "/": {} },
      servers: [{ url: "https://api.example.com/" }],
    },
    errors: [],
  },

  {
    name: "an invalid server.url using http",
    document: {
      openapi: "3.1.0",
      info: { version: "1.0" },
      paths: { "/": {} },
      servers: [{ url: "http://api.example.com/" }],
    },
    errors: [
      {
        message: "Schemes MUST be https and no other value is allowed.",
        path: ["servers", "0", "url"],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },

  {
    name: "an invalid server using ftp",
    document: {
      openapi: "3.1.0",
      info: { version: "1.0" },
      paths: { "/": {} },
      servers: [{ url: "ftp://api.example.com/" }],
    },
    errors: [
      {
        message: "Schemes MUST be https and no other value is allowed.",
        path: ["servers", "0", "url"],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },
]);
