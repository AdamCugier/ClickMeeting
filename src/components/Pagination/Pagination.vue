<template>
  <div v-if="lastPage > 1">
    <button v-if="activePage > 1" @click="() => changePage(1)">first</button>
    <button v-if="activePage > 2" @click="() => changePage(activePage - 1)">prev</button>
    <button>{{ activePage }}</button>
    <button v-if="activePage < lastPage -1" @click="() => changePage(activePage + 1)">next</button>
    <button v-if="activePage !== lastPage" @click="() => changePage(lastPage)">last</button>
  </div>
</template>
<script setup lang="ts">


interface PaginationI {
  /**
   * Active page
   */
  activePage: number,
  /**
   * Primary or secondary button
   */
  lastPage: number,
}

const props = withDefaults(defineProps<PaginationI>(), {activePage: 1, lastPage: 1});
const emit = defineEmits<{
  /**
   * Emit click pagination button
   */
  (e: 'changePage', page: number): Event;
}>();

const changePage = (page: number) => {
  emit("changePage", page)
};

</script>
