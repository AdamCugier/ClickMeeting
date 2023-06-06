<template>
  <font-awesome-icon :icon="props.icon" :disabled="disabled" :class="classes" @click="onClick"/>
</template>
<script setup lang="ts">
import {computed} from "vue";
import './RoundedButton.scss';

interface RoundedButtonI {
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

  /**
   * Size of the button
   */
  icon?: string,
}

const props = withDefaults(defineProps<RoundedButtonI>(), {primary: false, disabled: false, size: 'md'});

const emit = defineEmits<{
  /**
   * Emit click event
   */
  (e: 'click'): Event;
}>();

const classes = computed(() => ({
  'cm-rounded-btn': true,
  'cm-rounded-btn--primary': props.primary,
  'cm-rounded-btn--secondary': !props.primary,
  'cm-rounded-btn--sm': props.size === 'sm',
  'cm-rounded-btn--md': props.size === 'md',
  'cm-rounded-btn--lg': props.size === 'lg',
  'cm-rounded-btn--disabled': props.disabled,
}));

const disabled = computed(() => props.disabled)

const onClick = () => {
  emit("click")
};

</script>