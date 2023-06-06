<template>
  <button type="button" :disabled="blocked" :class="classes" @click="onClick">{{ label }}</button>
</template>

<script lang="ts" setup>
import './Button.scss';
import {computed} from 'vue';

interface ButtonI {
  /**
   * The label of the button
   */
  label: string,
  /**
   * Primary or secondary button
   */
  primary?: boolean,

  /**
   * Disable or enable button
   */
  disabled?: boolean

  /**
   * Size of the button
   */
  size?: 'sm' | 'md' | 'lg',
}

const props = withDefaults(defineProps<ButtonI>(), {label: 'button', primary: false, disabled: false, size: 'md'});

const emit = defineEmits<{
  /**
   * Emit click event
   */
  (e: 'click'): Event;
}>();

const classes = computed(() => ({
  'cm-btn': true,
  'cm-btn--primary': props.primary,
  'cm-btn--secondary': !props.primary,
  'cm-btn--sm': props.size === 'sm',
  'cm-btn--md': props.size === 'md',
  'cm-btn--lg': props.size === 'lg',
}));

const blocked = computed(() => props.disabled)

const onClick = () => {
  emit("click")
};

</script>
