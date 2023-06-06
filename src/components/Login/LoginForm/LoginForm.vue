<template>
    <form>
      <div>
        <InputCM id="login" label="Login:" v-model="login"/>
      </div>
      <div>
        <InputCM id="password" label="Hasło:" type="password" v-model="password"/>
      </div>
      <div v-if="error">User o podanych danych nie istnieje</div>
      <Button label="Zaloguj" size="md" @click="loginUser"/>
    </form>
</template>
<script setup lang="ts">
import useUser from "@/composables/useUser";
import router from "@/router";
import Button from "@/components/Buttons/Button/Button.vue";
import InputCM from "@/components/Input/InputCM.vue";
import {ref} from "vue";
import type {UserI} from "@/store/User/UserModule";

const {saveUserSession, authUser} = useUser()

const login = ref<string>('');
const password = ref<string>('');
const error = ref<boolean>(false);
const loginUser = async (): Promise<void> => {
  const userId = await authUser(login.value, password.value)
  if (userId) {
    await saveUserSession(userId);
    await router.push({name: 'Home'})
  }
  else {
    error.value = true
    setTimeout(() => {
      error.value = false
    }, 3000)
  }
}
</script>