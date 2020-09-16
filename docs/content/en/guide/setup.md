---
title: Installation
subtitle: 'Using MDX in your Nuxt project is only one command away.'
position: 2
category: Guide
---

## Installation

> Requires a minimum Nuxt version of v2.10.0. See [nuxt/nuxt.js#5854](https://github.com/nuxt/nuxt.js/pull/5854)

Add `@nuxtjs/mdx` as a dependency to your project:

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add --dev @nuxtjs/mdx
```

  </code-block>
  <code-block label="NPM">

```bash
npm install --save-dev @nuxtjs/mdx
```

  </code-block>
</code-group>

Then add it to the `buildModules` section of your `nuxt.config.js`:

```js{}[nuxt.config.js]
export default {
  buildModules: ['@nuxtjs/mdx']
}
```

> If you are using nuxt < 2.9.0, use the `modules` property instead.

That's it! You can now start writing MDX files in your Nuxt app ✨
