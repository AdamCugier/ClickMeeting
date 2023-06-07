<template>
  <div class="cm-page-header">
    <div class="cm-page-header--container">
      <div class="cm-page-header--left">
        <RoundedButton size="lg" :icon="props.icon" disabled/>
        <h1>{{ props.title }}</h1>
      </div>
      <div class="cm-page-header--actions">
        <slot name="actions"></slot>
      </div>
      <div class="cm-page-header--mobile-menu--wrapper">
        <font-awesome-icon icon="fa-solid fa-bars" class="cm-page-header--mobile-menu--icon" @click="toggleMenu"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import './PageHeader.scss'
import RoundedButton from "@/components/Buttons/RoundedButton/RoundedButton.vue";
//@ts-ignore
import {useStore} from "vuex";

interface PageHeaderI {
  title: string,
  icon: string

}

const props = withDefaults(defineProps<PageHeaderI>(), {});

const {commit} = useStore()

const toggleMenu = (): void => {
  commit('TOGGLE_NAV')
}
</script>