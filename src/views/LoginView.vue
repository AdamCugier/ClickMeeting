<template>
  <LoginLayout>
    <template #header>
      <LoginHeader/>
    </template>
    <template #body>
      <LoginForm/>
    </template>
    <template #footer>
      <LoginFooter/>
    </template>
  </LoginLayout>
</template>

<script setup lang="ts">
import LoginLayout from "@/layouts/Login/LoginLayout.vue";
import LoginForm from "@/components/Login/LoginForm/LoginForm.vue";
import LoginFooter from "@/components/Login/LoginFooter/LoginFooter.vue";
import LoginHeader from "@/components/Login/LoginHeader/LoginHeader.vue";
</script>