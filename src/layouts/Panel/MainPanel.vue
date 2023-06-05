<template>
  <div class="cm-main-panel--container">
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
import useUser from "@/composables/useUser.js";

const {user} = useUser()


</script>