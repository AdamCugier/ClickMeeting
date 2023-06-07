<template>
  <form>
    <div class="cm-login-form--inputs-wrapper">
      <InputCM id="login" label="Login" v-model="login" icon="fa-solid fa-paper-plane"/>
      <InputCM id="password" label="Hasło" type="password" v-model="password" icon="fa-solid fa-key"/>
    </div>
    <div v-if="error" class="cm-login-form--error-msg">Błędny login lub hasło</div>
    <div class="cm-login-form--button">
      <Button label="Zaloguj się" primary size="md" @click="loginUser"/>
    </div>
  </form>
</template>
<script setup lang="ts">
import useUser from "@/composables/useUser";
import router from "@/router";
import Button from "@/components/Buttons/Button/Button.vue";
import InputCM from "@/components/Input/InputCM.vue";
import {ref} from "vue";
import './LoginForm.scss'

const {saveUserSession, authUser} = useUser()

const login = ref<string>('');
const password = ref<string>('');
const error = ref<boolean>(false);
const loginUser = async (): Promise<void> => {
  const userId = await authUser(login.value, password.value)
  if (userId) {
    await saveUserSession(userId);
    await router.push({name: 'Home'})
  } else {
    error.value = true
    setTimeout(() => {
      error.value = false
    }, 3000)
  }
}
</script>