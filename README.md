<p align="center" style="color: #343a40">
  <img src="https://mdx-logo.now.sh/" alt="MDX">
  <h1 align="center">@nuxtjs/mdx</h1>
</p>
<p align="center">
  <a href="https://npmjs.com/package/@nuxtjs/mdx"><img src="https://img.shields.io/npm/v/@nuxtjs/mdx/latest.svg?style=flat-square" alt="npm version"></a>
  <a href="https://npmjs.com/package/@nuxtjs/mdx"><img src="https://img.shields.io/npm/dt/@nuxtjs/mdx.svg?style=flat-square" alt="npm downloads"></a>
  <a href="https://circleci.com/gh/nuxt-community/mdx-module"><img src="https://img.shields.io/circleci/project/github/mdx-community/emotion-module.svg?style=flat-square" alt="circle ci"></a>
  <a href="https://codecov.io/gh/nuxt-community/mdx-module"><img src="https://img.shields.io/codecov/c/github/nuxt-community/mdx-module.svg?style=flat-square" alt="coverage"></a>
  <a href="https://www.npmjs.com/package/@nuxtjs/mdx"><img src="https://img.shields.io/npm/l/@nuxtjs/mdx.svg?style=flat-square" alt="License"></a>
</p>

> [MDX](https://mdxjs.org) module for Nuxt.js

## Features

- Load `.mdx` files inside Vue components.
- Register `.mdx` files as routes in `pages` directory.

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `@nuxtjs/mdx` dependency to your project

```bash
yarn add @nuxtjs/mdx # or npm install @nuxtjs/mdx
```

2. Add `@nuxtjs/mdx` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    '@nuxtjs/mdx',

    // With options
    ['@nuxtjs/mdx', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Jonathan Bakebwa <codebender828@gmail.com>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nuxtjs/mdx/latest.svg
[npm-version-href]: https://npmjs.com/package/@nuxtjs/mdx

[npm-downloads-src]: https://img.shields.io/npm/dt/@nuxtjs/mdx.svg
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/mdx

[github-actions-ci-src]: https://github.com//workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com//actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/.svg
[codecov-href]: https://codecov.io/gh/

[license-src]: https://img.shields.io/npm/l/@nuxtjs/mdx.svg
[license-href]: https://npmjs.com/package/@nuxtjs/mdx
