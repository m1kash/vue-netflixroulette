<template>
  <div class="container relative mx-auto h-full z-10">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'portal-container'
});
</script>
