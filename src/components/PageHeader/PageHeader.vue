<template>
<div class="cm-page-header">
  <div class="cm-page-header--container">
    <div class="cm-page-header--left">
      <font-awesome-icon :icon="`fa-solid ${props.icon}`" class="cm-page-header--left--icon"/>
      <h1>{{props.title}}</h1>
    </div>
    <div/>
    <slot name="actions"></slot>
  </div>
</div>
</template>

<script setup lang="ts">
import './PageHeader.scss'
interface PageHeaderI {
  title: string,
  icon: string

}
const props = withDefaults(defineProps<PageHeaderI>(), {});
</script>