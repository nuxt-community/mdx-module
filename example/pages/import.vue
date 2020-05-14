<template>
  <div>
    <Comp />

    <nuxt-link to="/">
      &larr; Return to home
    </nuxt-link>
  </div>
</template>

<script>
import Comp from '../components/comp'

export default {
  components: {
    Comp
  }
}
</script>
