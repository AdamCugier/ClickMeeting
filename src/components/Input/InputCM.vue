<template>
  <label :for="id">{{ label }}</label>
  <input
      :type="type"
      :value="modelValue"
      @change="(e) => $emit('update:modelValue', e.target.value)"
      :id="id"
  />
</template>
<script setup lang="ts">
interface InputCmI {
  /**
   * Input label
   */
  label: string,

  /**
   * Input ID
   */
  id: string

  /**
   * Input Value
   */
  modelValue: string,

  /**
   * Input type
   */
  type?: string
}

const props = withDefaults(defineProps<InputCmI>(), {type: 'text'});
</script>