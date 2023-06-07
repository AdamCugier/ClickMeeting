<template>
  <div :class="classes">
    <div class="cm-main-panel--nav">
      <Nav/>
    </div>
    <div class="cm-main-panel--page-view">
      <slot name="view"></slot>
    </div>
    <div class="cm-main-panel--footer">
      <span>ClickMeeting</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import './MainPanel.scss';
import Nav from "@/components/Nav/Nav.vue";
import {computed} from "vue";
//@ts-ignore
import {useStore} from "vuex";

const {state} = useStore()

const classes = computed(() => ({
  'cm-main-panel--container': true,
  'cm-main-panel--nav-opened': state.navModule.toggleNav
}))
</script>