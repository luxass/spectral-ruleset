# @luxass/spectral-ruleset

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]

Opinionated ruleset for Spectral with focus on best practices for OpenAPI and AsyncAPI specifications.

> [!IMPORTANT]
> This package provides a collection of rules that enforce API best practices and conventions. The rules are designed to help you create more consistent and maintainable API specifications.

## Installation

```bash
npm install @luxass/spectral-ruleset
```

## Usage

Create a `.spectral.yml` file:

```yaml
extends:
  - "@luxass/spectral-ruleset"
```

Or quickly create one using:

```bash
echo 'extends: ["@luxass/spectral-ruleset"]' > .spectral.yml
```

You can also use it directly from unpkg:

```bash
echo 'extends: ["https://unpkg.com/@luxass/spectral-ruleset"]' > .spectral.yml
```

## Rules

This ruleset extends the official OpenAPI and AsyncAPI rulesets from `@stoplight/spectral-rulesets`, with some built-in rules modified (`operation-tags` and `operation-operationId` are disabled, `operation-success-response` is set to error level).

### Custom Rules

<details>
<summary><strong>General Rules</strong></summary>

##### `luxass/api-homepage` ⚠️
Ensures that APIs have a root path (`/`) defined. This helps with API discoverability and provides a clear entry point for consumers.

##### `luxass/api-homepage-get` ⚠️
Ensures that the API root path (`/`) has a GET operation defined. This allows consumers to discover what the API offers.

##### `luxass/version-in-info` ⚠️
Enforces semantic versioning format for the `info.version` field (e.g., `1.0.0`).

</details>

<details>
<summary><strong>Path Rules</strong></summary>

##### `luxass/paths-kebab-case` ⚠️
Enforces kebab-case naming convention for all API paths (e.g., `/user-profiles` instead of `/userProfiles`).

##### `luxass/no-file-extensions-in-paths` ❌
Prevents file extensions (`.json`, `.xml`, `.html`, `.txt`) in API paths. Use the `content` field to specify media types instead.

##### `luxass/no-trailing-slash` ⚠️
Prevents trailing slashes in paths (except for the root path `/`), avoiding confusion about resource identity.

##### `luxass/plural-resource-names` ⚠️
Encourages using plural nouns for resource collections (e.g., `/users` instead of `/user`).

</details>

<details>
<summary><strong>Header Rules</strong></summary>

##### `luxass/no-x-headers` ❌
Prevents usage of headers starting with `X-` prefix. Encourages using standardized headers instead of the deprecated X- convention.

##### `luxass/headers-hyphenated-pascal-case` ❌
Enforces `Hyphenated-Pascal-Case` notation for HTTP headers (e.g., `Content-Type`, `Accept-Language`).

</details>

<details>
<summary><strong>OpenAPI 2.0 Specific Rules</strong></summary>

##### `luxass/oas2/protocol-https-only` ❌
Ensures that only HTTPS protocol is used in the `schemes` array.

##### `luxass/oas2/get-request-no-body` ❌
Prevents GET requests from having request bodies, following HTTP best practices.

</details>

<details>
<summary><strong>OpenAPI 3.x Specific Rules</strong></summary>

##### `luxass/oas3/protocol-https-only` ❌
Ensures that all server URLs use HTTPS protocol only.

##### `luxass/oas3/get-request-no-body` ❌
Prevents GET requests from having `requestBody` defined, following HTTP best practices.

</details>

## 📄 License

Published under [MIT License](./LICENSE).

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@luxass/spectral-ruleset?style=flat&colorA=18181B&colorB=4169E1
[npm-version-href]: https://npmjs.com/package/@luxass/spectral-ruleset
[npm-downloads-src]: https://img.shields.io/npm/dm/@luxass/spectral-ruleset?style=flat&colorA=18181B&colorB=4169E1
[npm-downloads-href]: https://npmjs.com/package/@luxass/spectral-ruleset
