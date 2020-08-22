---
title: Setup
description: ''
position: 2
category: Guide
---


Check the [Nuxt.js documentation](https://nuxtjs.org/api/configuration-modules#the-modules-property) for more information about installing and using modules in Nuxt.js.

## Installation

Add `@nuxtjs/mdx` as a dependency to your project:

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add @nuxtjs/mdx
```

  </code-block>
  <code-block label="NPM">

```bash
npm install @nuxtjs/mdx
```

  </code-block>
</code-group>

## Configure

Then, add `@nuxtjs/mdx` to the `buildModules` section of `nuxt.config.js`:

```js[nuxt.config.js]
export default {
  buildModules: [
    '@nuxtjs/mdx'
  ]
}
```


