<template>
  <div class="flex flex-col bg-stone-800
  justify-items-center min-h-screen h-full">
    <header>
      <slot name="header"></slot>
    </header>
    <main class="flex-1 flex-grow">
      <slot name="content"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'portalLayout',
});
</script>
