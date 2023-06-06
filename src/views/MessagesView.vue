<template>
  <MainPanel>
    <template #view>
      <PageLayout>
        <template #header>
          <PageHeader icon="fa-message" title="Wiadomości">
            <template #actions>
            <Search :value="state.msgsModule.searchMsg" @on-change="(value) => findMessages(value)" />
            </template>
          </PageHeader>
        </template>
        <template #content>
          <h2>Moja skrzynka odbiorcza</h2>
          <span v-if="state.msgsModule.loading">LOADING</span>
          <div v-else-if="state.msgsModule.messages.length > 0">
            <Messages/>
            <Pagination v-if="getters.lastPageNumber > 1" :last-page="getters.lastPageNumber" :active-page="state.msgsModule.activePage"
                        @change-page="(page) =>changePaginationPage(page)"></Pagination>
          </div>
          <div v-else>
            <h3>Nie znaleziono wiadomości</h3>
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
import Search from "@/components/Search/Search.vue";

const {dispatch, state, getters, commit} = useStore()

const init = async () => {
  await dispatch('getMessages')
}
const changePaginationPage = async (page: number) => {
  await commit('SET_ACTIVE_PAGE', page)
  await dispatch('getMessages')
}

const findMessages = async (value: string) => {
  await commit('SET_SEARCH_MSG', value)
  await commit('SET_ACTIVE_PAGE', 1)
  await dispatch('getMessages')
}
onUnmounted(() => {
  commit('CLEAR_SEARCH')
})

init();


</script>