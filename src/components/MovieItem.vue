<template>
  <div class="flex-col flex">
    <img :src="image" alt="image" height="370">
    <div class="flex flex-wrap mt-2">
      <div class="flex flex-col w-1/2">
        <div class="text-zinc-500 text-lg">{{ title }}</div>
      </div>
      <div class="w-1/2 flex justify-end items-start">
        <div class="text-zinc-400 border border-solid border-zinc-500 rounded p-0.5 px-4">{{ year.split('-')[0] }}</div>
      </div>
      <div class="text-zinc-600 w-full">{{ genre.join('&') }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue/dist/vue';

export default {
  name: 'movie-item',
  props: {
    title: {
      required: true,
      type: String,
    },
    image: {
      required: true,
      type: String,
    },
    genre: {
      type: Array as PropType<string[]>,
    },
    year: String,
  }
}
</script>

<style scoped>

</style>
