import type { RuleDefinition } from "@stoplight/spectral-core";
import { oas3 } from "@stoplight/spectral-formats";
import { pattern, undefined as undefinedFunc } from "@stoplight/spectral-functions";
import { DiagnosticSeverity } from "@stoplight/types";

export default {
  "luxass/oas3/protocol-https-only": {
    description: "ALL requests MUST go through `https` protocol only.",
    formats: [oas3],
    message: "Schemes MUST be https and no other value is allowed.",
    severity: DiagnosticSeverity.Error,
    recommended: true,
    type: "style",
    given: "$.servers..url",
    then: {
      function: pattern,
      functionOptions: {
        match: "/^https:/",
      },
    },
  },
  "luxass/oas3/get-request-no-body": {
    message: "A `GET` request MUST NOT accept a request body.",
    description:
        "Defining a request body on a HTTP GET is in some implementations, but is increasingly frowned upon due to the confusion that comes from unspecified behavior in the HTTP specification.",
    given: "$.paths..get.requestBody",
    then: {
      function: undefinedFunc,
    },
    formats: [oas3],
    severity: DiagnosticSeverity.Error,
  },
} satisfies Record<string, Readonly<RuleDefinition>>;
