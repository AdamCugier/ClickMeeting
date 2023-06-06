<template>
  <div class="cm-login-layout--wrapper">
    <div class="cm-login-layout--card">
      <div class="cm-login-layout--card--header">
        <slot name="header"></slot>
      </div>
      <div class="cm-login-layout--card--body">
        <slot name="body"></slot>
      </div>
      <div class="cm-login-layout--card--footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import './LoginLayout.scss'
</script>