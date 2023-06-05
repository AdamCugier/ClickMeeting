<template>
  <MainPanel>
    <template #view>
      <PageLayout>
        <template #header>
          <PageHeader>

          </PageHeader>
        </template>
        <template #content>
          <span v-if="state.msgsModule.loading">LOADING</span>
          <div v-else>
            <Messages/>
            <Pagination :last-page="getters.lastPageNumber" :active-page="state.msgsModule.activePage"
                        @change-page="(page) =>changePaginationPage(page)"></Pagination>
          </div>
        </template>
      </PageLayout>
    </template>
  </MainPanel>
</template>

<script setup lang="ts">

import MainPanel from "@/layouts/Panel/MainPanel.vue";
import PageLayout from "@/layouts/PageView/PageLayout.vue";
import PageHeader from "@/components/PageHeader/PageHeader.vue";
import {useStore} from "vuex";
import Pagination from "@/components/Pagination/Pagination.vue";
import {onUnmounted} from "vue";
import Messages from "@/components/Messages/Messages.vue";

const {dispatch, state, getters, commit} = useStore()

const init = async () => {
  await dispatch('getMessages')
}
const changePaginationPage = async (page) => {
  await commit('SET_ACTIVE_PAGE', page)
  await dispatch('getMessages')
}

init();


</script>