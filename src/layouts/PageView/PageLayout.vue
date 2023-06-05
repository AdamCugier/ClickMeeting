<template>
  <div class="cm-page-layout--container">
    <header class="cm-page-layout--header">
      <slot name="header"></slot>
    </header>
    <section class="cm-page-layout--content">
      <div class="cm-page-layout--content--container">
        <slot name="content"></slot>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import './PageLayout.scss'

</script>
<style scoped>

</style>