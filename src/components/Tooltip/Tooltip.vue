<template>
  <div class="cm-tooltip-provider">
    <slot/>
    <span :class="classes">{{props.text}}</span>
  </div>

</template>
<script setup lang="ts">
import {computed} from "vue";
import './Tooltip.scss'

const props = withDefaults(defineProps<{
  /**
   * Tooltip text to display
   */
  text: string,
  /**
   * Tooltip position
   */
  position?: 'left' | 'top' | 'right' | 'bottom',
}>(), {position: 'right'});

const classes = computed(() => ({
  'cm-tooltip': true,
  'cm-tooltip--left': props.position === 'left',
  'cm-tooltip--top': props.position === 'top',
  'cm-tooltip--right': props.position === 'right',
  'cm-tooltip--bottom': props.position === 'bottom',
}));
</script>
<style scoped>

</style>