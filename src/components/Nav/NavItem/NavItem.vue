<template>
  <RouterLink :to="props.linkTo" active-class="active">
    <div class="cm-nav--item">
      <font-awesome-icon :icon="`fa-solid ${props.icon}`" class="cm-nav--item-icon"/>
    </div>
  </RouterLink>
</template>
<script setup lang="ts">
import './NavItem.scss'
export interface NavItemI {
  /**
   * Link to redirect
   */
  linkTo: string,
  /**
   * Icon to display
   */
  icon: 'fa-house-chimney-window' | 'fa-message'
}
const props = withDefaults(defineProps<NavItemI>(), {});
</script>