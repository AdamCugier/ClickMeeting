<template>
  <button type="button" :disabled="blocked" :class="classes" @click="onClick">{{ label }}</button>
</template>

<script lang="ts" setup>
import './Button.scss';
import {computed} from 'vue';

const props = withDefaults(defineProps<{
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
}>(), {primary: false, disabled: false});

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
}));

const blocked = computed(() => props.disabled)

const onClick = () => {
  emit("click")
};

</script>
