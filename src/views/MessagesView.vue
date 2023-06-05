<template>
  <MainPanel>
    <template #view>
      <PageLayout>
        <template #header>
          <PageHeader>

          </PageHeader>
        </template>
        <template #content>

        </template>
      </PageLayout>
    </template>
  </MainPanel>
</template>

<script setup lang="ts">

import MainPanel from "@/layouts/Panel/MainPanel.vue";
import PageLayout from "@/layouts/PageView/PageLayout.vue";
import PageHeader from "@/components/PageHeader/PageHeader.vue";
</script>