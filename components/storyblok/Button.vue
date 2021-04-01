<template>
  <div class="storyblok-button">
    <router-link :id="item.id" :to="url" class="_link button-outline brdr-none px10 py20 bg-cl-mine-shaft :bg-cl-th-secondary weight-400 cl-white fs-medium no-underline pointer align-center">
      {{ item.text }}
    </router-link>
  </div>
</template>

<script>
import { Blok } from 'src/modules/vsf-storyblok-module/components'
export default {
  name: 'ButtonBlok',
  extends: Blok,
  computed: {
    url: function () {
      const { link } = this.item
      return link.cached_url || link.url
    }
  }
}
</script>

<style scoped>
.storyblok-button ._link {
  display: inline-block;
}
</style>
