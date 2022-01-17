<template>
  <img src="@/assets/logo.png" alt="NetflixRoulette" :width="width" :height="height">
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'portal-logo',
  props: {
    width: String,
    height: {
      type: String,
      default: 'auto'
    },
  }
})
</script>
