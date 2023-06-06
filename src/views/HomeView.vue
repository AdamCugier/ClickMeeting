<template>
  <MainPanel>
    <template #view>
      <PageLayout>
        <template #header>
          <PageHeader icon="fa-house-chimney-window" :title="`Witaj, ${state.userModule.user.name}!`"/>
        </template>
        <template #content>
          <h2>Zadanie rekrutacyjne</h2>
        </template>
      </PageLayout>
    </template>
  </MainPanel>
</template>

<script setup lang="ts">
import MainPanel from "@/layouts/Panel/MainPanel.vue";
import PageLayout from "@/layouts/PageView/PageLayout.vue";
import PageHeader from "@/components/PageHeader/PageHeader.vue";
import Search from "@/components/Search/Search.vue";
import {useStore} from "vuex";

const {state} = useStore()

</script>
