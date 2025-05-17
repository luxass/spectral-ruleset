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
  - '@luxass/spectral-ruleset'
```

Or quickly create one using:

```bash
echo 'extends: ["@luxass/spectral-ruleset"]' > .spectral.yml
```

You can also use it directly from unpkg:

```bash
echo 'extends: ["https://unpkg.com/@luxass/spectral-ruleset"]' > .spectral.yml
```

## 📄 License

Published under [MIT License](./LICENSE).

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@luxass/spectral-ruleset?style=flat&colorA=18181B&colorB=4169E1
[npm-version-href]: https://npmjs.com/package/@luxass/spectral-ruleset
[npm-downloads-src]: https://img.shields.io/npm/dm/@luxass/spectral-ruleset?style=flat&colorA=18181B&colorB=4169E1
[npm-downloads-href]: https://npmjs.com/package/@luxass/spectral-ruleset
