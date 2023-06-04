<template>
  <div>
    <Button primary label="Zalogiuj" @click="login"/>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/Button/Button.vue";
import useUser from "@/composables/useUser";
import router from "@/router";

const {saveUserSession} = useUser()
const login = async (): Promise<void> => {
  await saveUserSession(1);
  router.push({name: 'Home'})
}
</script>