<template>
  <div class="empty-layout" :class="{'storyblok-preview-mode': isStoryblokPreviewMode}">
    <slot />
  </div>
</template>

<script>

export default {
  computed: {
    isStoryblokPreviewMode () {
      return this.$route.query.hasOwnProperty('_storyblok')
    }
  }
}
</script>

<style lang="scss" src="theme/css/main.scss"></style>

<style lang="scss">
.default-layout {
  &.storyblok-preview-mode {
    a {
      pointer-events: none;
    }
  }
}
</style>
