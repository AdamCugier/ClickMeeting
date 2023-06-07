<template>
  <section class="cm-nav">
    <div class="cm-nav--logo">
      <img src="src/assets/img/logo_sm.svg">
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
import NavItem from "@/components/Nav/NavItem/NavItem.vue";
import type {NavItemI} from "@/components/Nav/NavItem/NavItem.vue";
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