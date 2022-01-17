<template>
  <div class="pt-4  relative min-h-[5rem] after:block after:absolute after:top-0 after:left-0 after:content-['*'] after:bg-header-texture after:bg-contain after:blur-sm after:h-full after:w-full after:brightness-50 after:z-0">
    <portal-container>
      <portal-logo class="z-50 absolute left-0 top-2" width="200"></portal-logo>
      <slot></slot>
    </portal-container>
  </div>
</template>

<script lang="ts">
import PortalLogo from '@/components/Logo.vue';
import PortalContainer from '@/components/Container/PortalContainer.vue';
import {defineComponent} from "vue";

export default defineComponent({
  name: 'portal-header',
  components: { PortalLogo, PortalContainer },
})
</script>
