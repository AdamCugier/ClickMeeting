<template>
  <MainPanel>
    <template #view>
      HOME PAGE
      <Button primary label="Wylogiuj" @click="closeUserSession"/>
    </template>
  </MainPanel>
</template>

<script setup lang="ts">

import MainPanel from "@/layouts/Panel/MainPanel.vue";
import Button from "@/components/Button/Button.vue";
import useUser from "@/composables/useUser";

const {closeUserSession} = useUser()
</script>
