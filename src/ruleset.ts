import type { RulesetDefinition } from "@stoplight/spectral-core";
import {
  pattern,
  truthy,
} from "@stoplight/spectral-functions";
import { asyncapi, oas } from "@stoplight/spectral-rulesets";
import { DiagnosticSeverity } from "@stoplight/types";
import oas2Rules from "./oas2";
import oas3Rules from "./oas3";

export default {
  extends: [[oas as RulesetDefinition, "all"], [asyncapi as RulesetDefinition, "all"]],
  rules: {
    "operation-tags": "off",
    "operation-operationId": "off",
    "operation-success-response": "error",
    "luxass/api-homepage": {
      message: "APIs MUST have a root path (`/`) defined.",
      description:
        "Good documentation is always welcome, but API consumers should be able to get a pretty long way through interaction with the API alone. They should at least know they're looking at the right place instead of getting a 404 or random 500 error as is common in some APIs.\n\nThere are various efforts around to standardize the home document, but the best is probably this one: https://webconcepts.info/specs/IETF/I-D/nottingham-json-home",
      given: "$.paths",
      then: {
        field: "/",
        function: truthy,
      },
      severity: DiagnosticSeverity.Warning,
    },
    "luxass/api-homepage-get": {
      message: "APIs root path (`/`) MUST have a GET operation.",
      description:
        "Good documentation is always welcome, but API consumers should be able to get a pretty long way through interaction with the API alone. They should at least know they're looking at the right place instead of getting a 404 or random 500 error as is common in some APIs.\n\nThere are various efforts around to standardize the home document, but the best is probably this one: https://webconcepts.info/specs/IETF/I-D/nottingham-json-home",
      given: "$.paths[/]",
      then: {
        field: "get",
        function: truthy,
      },
      severity: DiagnosticSeverity.Warning,
    },
    "luxass/no-x-headers": {
      message: "Header `{{property}}` should not start with \"X-\".",
      description:
        "Headers starting with X- is an awkward convention which is entirely unnecessary. There is probably a standard for what you're trying to do, so it would be better to use that. If there is not a standard already perhaps there's a draft that you could help mature through use and feedback.\n\nSee what you can find on https://standards.rest.\n\nMore about X- headers here: https://tools.ietf.org/html/rfc6648.",
      given: "$..parameters[?(@.in === 'header')].name",
      then: {
        function: pattern,
        functionOptions: {
          notMatch: "^(x|X)-",
        },
      },
      severity: DiagnosticSeverity.Error,
    },
    "luxass/no-file-extensions-in-paths": {
      message:
        "Paths must not include file extensions such as .json, .xml, .html and .txt.",
      description:
        "Paths must not include file extensions such as `.json`, `.xml`, `.html` and `.txt`. Use the OpenAPI `content` keyword to tell consumers which Media Types are available.",
      given: "$.paths[*]~",
      then: {
        function: pattern,
        functionOptions: {
          notMatch: ".(json|xml|html|txt)$",
        },
      },
      severity: DiagnosticSeverity.Error,
    },
    ...oas2Rules,
    ...oas3Rules,
  },
} satisfies RulesetDefinition;
