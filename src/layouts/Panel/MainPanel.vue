<template>
  <div class="main-panel-container">
    <div class="main-panel-container--nav">
      <Nav/>
    </div>
    <div class="main-panel-container--page-view">
      <slot name="view"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import './MainPanel.scss';
import Nav from "@/components/Nav/Nav.vue";
import useUser from "@/composables/useUser.js";

const {user} = useUser()


</script>