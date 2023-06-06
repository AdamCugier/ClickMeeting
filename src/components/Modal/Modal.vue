<template>
<div class="cm-modal--overlay">
    <div class="cm-modal--container">
      <div class="cm-modal--header">
        <slot name="header">
          default Header
        </slot>
      </div>
      <div class="cm-modal--body">
        <slot name="body">
          default body
        </slot>
      </div>
      <div class="cm-modal--footer">
        <slot name="footer">
          default footer
        </slot>
      </div>
    </div>
</div>
</template>
<script setup lang="ts">
import './Modal.scss'
</script>


<style scoped>

</style>