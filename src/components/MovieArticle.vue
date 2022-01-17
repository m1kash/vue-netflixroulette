<template>
  <div class="flex">
    <div class="w-1/4 pr-4">
      <img :src="poster_path" alt="image" width="270">
    </div>
    <div class="w-3/4 space-y-4 font-extralight">
      <h1 class="text-4xl text-zinc-200 after:inline-flex after:justify-center after:items-center after:border-zinc-500 after:border after:border-solid after:rounded-full after:ml-5 after:text-3xl after:w-16 after:h-16 after:text-green-500 after:content-[attr(data-rating)]" :data-rating="vote_average">{{ title }}</h1>
      <div class="text-xl text-zinc-300">{{ allGenres }}</div>
      <div class="text-rose-500 text-2xl">{{ year }} &nbsp; {{ duration }}</div>
      <p class="text-xl text-zinc-300"> {{ overview }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";

export default defineComponent({
  name: 'movie-article',
  props: {
    title: {
      required: true,
      type: String,
    },
    poster_path: {
      required: true,
      type: String,
    },
    genres: {
      required: true,
      type: Array as PropType<string[]>,
    },
    id: Number,
    runtime: {
      required: true,
      type: Number,
    },
    vote_average: {
      required: true,
      type: Number,
    },
    overview: String,
    release_date: {
      required: true,
      type: String,
    },
  },
  setup: () => ({
  }),
  computed: {
    allGenres(): string {
      return this.$props.genres.join('&');
    },
    year(): string {
      return this.$props.release_date.split('-')[0];
    },
    duration(): string {
      return `${this.$props.runtime} min`;
    }
  }
})
</script>

<style scoped>

</style>
