<template>
  <div class="cm-input--wrapper">
    <input
        :type="type"
        :value="modelValue"
        @change="(e) => $emit('update:modelValue', (e.target! as HTMLInputElement).value)"
        :placeholder="label"
        autocomplete="off"
        :id="id"
    />
    <label :class="classes" :for="id">{{ label }}</label>
    <font-awesome-icon v-if="icon" :icon="icon" class="cm-input--icon"/>
  </div>
</template>
<script setup lang="ts">
import './InputCM.scss'
import {computed} from "vue";

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

  /**
   * Input icon
   */
  icon?: string
}

const props = withDefaults(defineProps<InputCmI>(), {type: 'text', label: 'Input label'});

const classes = computed(() => ({
      'cm-input--label': true,
      'cm-input--label-visible': props.modelValue
    })
)
</script>