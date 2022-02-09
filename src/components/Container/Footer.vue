<template>
  <div class="h-24 bg-neutral-700 flex justify-center items-center">
    <portal-logo width="300"></portal-logo>
  </div>
</template>

<script lang="ts">
import PortalLogo from '@/components/Logo.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'portal-footer',
  components: { PortalLogo },
});
</script>
