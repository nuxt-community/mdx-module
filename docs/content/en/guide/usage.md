---
title: Usage
subtitle: "Using MDX files in your Nuxt app is easy."
description: "With the @nuxtjs/mdx module, you're ready to start using MDX files in your Nuxt app."
position: 3
category: Guide
---

The module picks up all `.mdx` files used in your Nuxt app and converts them into Vue components. Making possible to use MDX files as Nuxt pages and regular components.

## Write MDX pages

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

<nuxt-link to="/setup">
  back to setup page &rarr;
</nuxt-link>
```

**Result:**

<div class="border p-4">
  <hello></hello>
</div>

## Import MDX files in Vue

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
