<template>
  <div class="cm-page-header">
    <div class="cm-page-header--container">
      <div class="cm-page-header--left">
        <RoundedButton size="lg" :icon="props.icon" disabled/>
        <h1>{{ props.title }}</h1>
      </div>
      <div/>
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import './PageHeader.scss'
import RoundedButton from "@/components/Buttons/RoundedButton/RoundedButton.vue";

interface PageHeaderI {
  title: string,
  icon: string

}

const props = withDefaults(defineProps<PageHeaderI>(), {});
</script>