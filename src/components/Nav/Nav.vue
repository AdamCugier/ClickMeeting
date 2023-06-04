<template>
  <section class="cm-nav">
    <div>
      <font-awesome-icon icon="fa-brands fa-quinscape" class="cm-nav--logo"/>
    </div>
    <div class="cm-nav--items">
      <div>
        <NavItem v-for="item in navItems" :link-to="item.linkTo" :icon="item.icon" :label="item.label"/>
      </div>
      <div>
        <NavItem link-to="/login" icon="fa-power-off" @click="closeUserSession" label="Wyloguj"/>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import './Nav.scss'
import NavItem, {NavItemI} from "@/components/Nav/NavItem/NavItem.vue";
import useUser from "@/composables/useUser";

const {closeUserSession} = useUser()

const navItems: Array<NavItemI> = [{
  linkTo: '/',
  icon: 'fa-house-chimney-window',
  label: 'Strona Główna'
}, {
  linkTo: '/messages',
  icon: 'fa-message',
  label: 'Wiadomości'
}]
</script>