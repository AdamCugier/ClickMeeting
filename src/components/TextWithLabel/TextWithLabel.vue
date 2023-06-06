<template>
  <div :class="classes">
    <label class="cm-labeled-text--label">{{label}}</label>
    <span class="cm-labeled-text--text">{{text}}</span>
  </div>

</template>
<script setup lang="ts">
import './TextwithLabel.scss'
import {computed} from "vue";

interface TextWithLabelI {
  /**
   * Label of the Text
   */
  label: string,
  /**
   * Primary Text
   */
  text: string,
  /**
   * Text position
   */
  position?: 'left' | 'center' | 'right',

}
const props = withDefaults(defineProps<TextWithLabelI>(), {label: 'Label', text:'Hello there !', position: 'left'});

const classes = computed(() => ({
  'cm-labeled-text--wrapper': true,
  'cm-labeled-text--left': props.position === 'left',
  'cm-labeled-text--center': props.position === 'center',
  'cm-labeled-text--right': props.position === 'right',
}));

</script>