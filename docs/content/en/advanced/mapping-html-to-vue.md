---
title: Mapping HTML to Vue
description: 'Nuxt MDX configure @mdx.vue and @mdx/vue-loader to map Vue components to HTML elements.'
position: 4
fullscreen: true
category: Advanced
---

`@nuxtjs/mdx` installs `@mdx/vue` and `@mdx/vue-loader` as dependencies in your project. Together they allow you to map Vue components to HTML elements based on the Markdown syntax.

`@mdx/vue` exports the `MDXProvider` component that accepts an object with a map of all HTML elements you wish to be replaced with the corresponding component during rendering.

## Usage

Suppose we have an `helloworld.mdx` file with a header element that we would like to replace with a component with it's own styles/interactions.

```md[helloworld.mdx]
<!-- helloworld.mdx -->

# Hello, Vue!
```

### Defining components map

First we create a map of components we would like to replace. This instructs the `@mdx/vue-loader` to replace all defined keys with the values in the object.

<alert>

Note the value is a function that provides all properties about the `h1` element from the `.mdx` file and returns a Vue component. You can also use the regular render function syntax if you prefer that to JSX.

</alert>

<code-group>
  <code-block label="JSX" active>

```js [components.js]
// In `components.js` file

export default {
  h1: props => ({
    render(h) {
      return (
        <h1 style={{ color: 'tomato' }} {...props} >
          {this.$slots.default}
        </h1>
      )
    }
  })
}
```

  </code-block>
  <code-block label="Regular render function">

```js [components.js]
// In `components.js` file

export default {
  h1: props => ({
    render(h) {
      return h('h1', {
        style: {
          color: 'tomato'
        },
        ...props
      }, this.$slots.default)
    }
  })
}
```

  </code-block>
</code-group>

### Providing components map to `MDXProvider`
Wrap your `helloworld.mdx` file component inside the `MDXProvider` from `@mdxjs/vue` and provide it your components map as a prop.

We recommend doing it inside your Nuxt.js layout.

```vue [layouts/default.vue]
<template>
  <MDXProvider :components="components">
    <HelloWorld />
  </MDXProvider>
</template>

<script>
import { MDXProvider } from '@mdx-js/vue'
import HelloWorld from 'helloworld.mdx'
import components from './components.js'

export default {
  components: {
    MDXProvider,
    HelloWorld
  },
  data: () => ({
    components
  })
}
</script>
```

**Yields:**

```html
<h1 style="color:tomato">Hello, Vue!</h1>
```

### Examples
An good example of this use case are the Code blocks in the [Chakra UI Vue documentation](https://vue.chakra-ui.com). It uses the `MDXProvider` to replace regular codeblocks with live code snippets.

 - [Demo](https://vue.chakra-ui.com/button#button-variant)
 - [MDX file source](https://raw.githubusercontent.com/chakra-ui/chakra-ui-vue/54022981387f99304e4d6226b31f87d18d521f05/website/pages/button.mdx)
 - [Components map source](https://github.com/chakra-ui/chakra-ui-vue/blob/54022981387f99304e4d6226b31f87d18d521f05/website/components/CodeBlock.js#L12-L112)
