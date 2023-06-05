<template>
  <MainPanel>
    <template #view>
      <PageLayout>
        <template #header>
          Home Page
        </template>
        <template #content>
          <Button primary label="Wylogiuj" @click="closeUserSession"/>
        </template>
      </PageLayout>
    </template>
  </MainPanel>
</template>

<script setup lang="ts">

import MainPanel from "@/layouts/Panel/MainPanel.vue";
import Button from "@/components/Button/Button.vue";
import useUser from "@/composables/useUser";
import PageLayout from "@/layouts/PageView/PageLayout.vue";

const {closeUserSession} = useUser()
</script>
