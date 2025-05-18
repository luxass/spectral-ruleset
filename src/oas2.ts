import type { RuleDefinition } from "@stoplight/spectral-core";
import { oas2 } from "@stoplight/spectral-formats";
import { pattern, schema } from "@stoplight/spectral-functions";
import { DiagnosticSeverity } from "@stoplight/types";

export default {
  "luxass/oas2/get-request-no-body": {
    message: "A `GET` request MUST NOT accept a request body.",
    description:
        "Defining a request body on a HTTP GET is technically possible in some implementations, but is increasingly frowned upon due to the confusion that comes from unspecified behavior in the HTTP specification.",
    given: "$.paths..get.parameters..in",
    then: {
      function: pattern,
      functionOptions: {
        notMatch: "/^body$/",
      },
    },
    severity: DiagnosticSeverity.Error,
    formats: [oas2],
  },
  "luxass/oas2/protocol-https-only": {
    description: "ALL requests MUST go through `https` protocol only.",
    formats: [oas2],
    message: "Schemes MUST be https and no other value is allowed.",
    severity: DiagnosticSeverity.Error,
    recommended: true,
    type: "style",
    given: "$",
    then: {
      field: "schemes",
      function: schema,
      functionOptions: {
        schema: {
          type: "array",
          items: {
            type: "string",
            enum: ["https"],
          },
        },
      },
    },
  },
} satisfies Record<string, Readonly<RuleDefinition>>;
