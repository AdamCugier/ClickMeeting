<template>
  <Tooltip :text="props.label">
    <RouterLink :to="props.linkTo" active-class="active">
      <div class="cm-nav--item">
        <font-awesome-icon :icon="`fa-solid ${props.icon}`" class="cm-nav--item-icon"/>
      </div>
    </RouterLink>
  </Tooltip>
</template>
<script setup lang="ts">
import './NavItem.scss'
import Tooltip from "@/components/Tooltip/Tooltip.vue";

export interface NavItemI {
  /**
   * Link to redirect
   */
  linkTo: string,
  /**
   * Icon to display
   */
  icon: 'fa-house-chimney-window' | 'fa-message' | 'fa-power-off' | string,
  /**
   * Tooltip text
   */
  label: string
}

const props = withDefaults(defineProps<NavItemI>(), {});
</script>