[![@nuxtjs/mdx](https://mdx.nuxtjs.org/preview.png)](https://mdx.nuxtjs.org)

# @nuxtjs/mdx

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> [MDX](https://mdxjs.com) module for [Nuxt](https://nuxtjs.org)

- [✨ &nbsp;Release Notes](https://mdx.nuxtjs.org/releases)
- [📖 &nbsp;Documentation](https://mdx.nuxtjs.org)

## Features

- Import `.mdx` files as Vue components
- Import Vue components in your `.mdx` files
- Replace markdown elements with Vue components with the MDX Provider.

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `@nuxtjs/mdx` dependency to your project

```bash
yarn add --dev @nuxtjs/mdx # or npm install --dev @nuxtjs/mdx
```

2. Add `@nuxtjs/mdx` to the `buildModules` section of `nuxt.config.js`

```js
export default {
  buildModules: [
    '@nuxtjs/mdx'
  ]
}
```

## Usage

After installing the `@nuxtjs/mdx` module, you're ready to start using MDX files in your Nuxt app. The `@nuxtjs/mdx` module picks up all `.mdx` files used in your Nuxt app and converts them into Vue components. This makes it possible to use MDX files as Nuxt routes and regular components.

### Using `.mdx` files in `~/pages` directory

Start by creating a `hello.mdx` file in your `~/pages` directory.

```[Application]
pages/
  index.vue
  hello.mdx
```

Inside `hello.mdx`, add some markdown content:

```md[hello.mdx]
# Hello Nuxt MDX

<section
  id="mdx-nuxt-section"
  style={{
    color: 'white',
    backgroundColor: 'tomato',
    padding: '3rem'
  }}
>
  This a Nuxt MDX tomato.
</section>

<nuxt-link to="/some/path">
  to some page &rarr;
</nuxt-link>
```

After starting your app server, you can now view your rendered `hello.mdx` page at `localhost:3000/hello` 🎉

### Importing `.mdx` files in Vue components
You can also import `.mdx` files as inside other Vue components.

```vue
<template>
  <div>
    <!-- 👇🏽 MDX file is parsed as Vue component -->
    <MyMDXComponent />
  </div>
</template>

<script>
import MyMDXComponent from '~/components/MyMDXComponent.mdx'

export default {
  components: {
    MyMDXComponent
  }
}
</script>
```

## Development

1. Clone this repository
2. Install dependencies using `yarn`
3. Start development server using `yarn dev`

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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/pi0"><img src="https://avatars0.githubusercontent.com/u/5158436?v=4" width="100px;" alt=""/><br /><sub><b>pooya parsa</b></sub></a><br /><a href="https://github.com/codebender828/mdx-module/commits?author=pi0" title="Code">💻</a></td>
    <td align="center"><a href="https://atinux.com"><img src="https://avatars2.githubusercontent.com/u/904724?v=4" width="100px;" alt=""/><br /><sub><b>Sébastien Chopin</b></sub></a><br /><a href="https://github.com/codebender828/mdx-module/commits?author=Atinux" title="Code">💻</a></td>
    <td align="center"><a href="https://jbakebwa.dev"><img src="https://avatars2.githubusercontent.com/u/21237954?v=4" width="100px;" alt=""/><br /><sub><b>Jonathan Bakebwa</b></sub></a><br /><a href="https://github.com/codebender828/mdx-module/commits?author=codebender828" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nuxtjs/mdx/latest.svg
[npm-version-href]: https://npmjs.com/package/@nuxtjs/mdx

[npm-downloads-src]: https://img.shields.io/npm/dt/@nuxtjs/mdx.svg
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/mdx

[github-actions-ci-src]: https://github.com/nuxt-community/mdx-module/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/nuxt-community/mdx-module/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/mdx-module.svg
[codecov-href]: https://codecov.io/gh/nuxt-community/mdx-module

[license-src]: https://img.shields.io/npm/l/@nuxtjs/mdx.svg
[license-href]: https://npmjs.com/package/@nuxtjs/mdx
