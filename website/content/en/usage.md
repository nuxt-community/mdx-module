---
title: Usage
description: ''
position: 3
category: Guide
---

After installing the `@nuxtjs/mdx` module, you're ready to start using MDX files in your Nuxt app. The `@nuxtjs/mdx` module picks up all `.mdx` files used in your Nuxt app and converts them into Vue components. This makes it possible to use MDX files as Nuxt routes and regular components.

## Using `.mdx` files in `~/pages` directory
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

<hello></hello>


## Import `.mdx` files in Vue components
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
