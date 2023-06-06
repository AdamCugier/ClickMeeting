<template>
  <div class="cm-search">
    <input :value="props.value" @input="handleChange" placeholder="Szukaj" class="cm-search--input">
    <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="cm-search--icon"/>
  </div>
</template>

<script setup lang="ts">
import debounce from 'lodash.debounce'
import './Search.scss'
interface SearchI {
  /**
   * Input value
   */
  value: string,
}

const props = withDefaults(defineProps<SearchI>(), {value: ''});
const emit = defineEmits<{
  /**
   * Emit input Value
   */
  (e: 'onChange', value: string): Event;
}>();

const handleChange = debounce((e: Event) => {
  emit("onChange", (e.target as HTMLInputElement).value)
}, 750)
</script>