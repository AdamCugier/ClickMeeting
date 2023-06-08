<template>
  <div v-if="lastPage > 1">
    <div class="cm-pagination">
      <button class="cm-pagination--btn cm-pagination--btn-first" v-if="activePage > 1" @click="() => changePage(1)">
        <font-awesome-icon icon="fa-solid fa-angles-left"/>
      </button>
      <button class="cm-pagination--btn cm-pagination--btn-prev" v-if="activePage > 2" @click="() => changePage(activePage - 1)">
        {{ activePage - 1 }}
      </button>
      <button class="cm-pagination--btn cm-pagination--btn-active">{{ activePage }}</button>
      <button class="cm-pagination--btn cm-pagination--btn-next" v-if="activePage < lastPage -1" @click="() => changePage(activePage + 1)">
        {{ activePage + 1 }}
      </button>
      <button class="cm-pagination--btn cm-pagination--btn-last" v-if="activePage !== lastPage" @click="() => changePage(lastPage)">
        <font-awesome-icon icon="fa-solid fa-angles-right"/>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import './Pagination.scss'

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
