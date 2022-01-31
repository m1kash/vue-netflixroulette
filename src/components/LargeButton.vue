<template>
  <button :class="width" class="bg-rose-500 h-12 text-white rounded uppercase
   size text-lg hover:bg-rose-600">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'large-button',
  props: {
    width: String,
  },
});
</script>
