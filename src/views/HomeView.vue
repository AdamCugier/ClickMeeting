<template>
  <MainPanel>
    <template #view>
      <PageLayout>
        <template #header>
          <p>STRONA GŁÓWNA- HEADER</p>
        </template>
        <template #content>
          <p>Brak contentu, Przejdż do wiadomości</p>
        </template>
      </PageLayout>
    </template>
  </MainPanel>
</template>

<script setup lang="ts">

import MainPanel from "@/layouts/Panel/MainPanel.vue";
import PageLayout from "@/layouts/PageView/PageLayout.vue";

</script>
