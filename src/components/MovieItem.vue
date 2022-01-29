<template>
  <div class="flex-col flex" @click.prevent="openMovie(id)">
    <img v-lazy="image" alt="image" height="370">
    <div class="flex flex-wrap mt-2">
      <div class="flex flex-col w-1/2">
        <div class="text-zinc-500 text-lg">{{ title }}</div>
      </div>
      <div class="w-1/2 flex justify-end items-start">
        <div class="text-zinc-400 border border-solid border-zinc-500 rounded p-0.5 px-4">{{ year }}</div>
      </div>
      <div class="text-zinc-600 w-full">{{ genresFormatted }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue/dist/vue';
import {defineComponent, inject} from "vue";
import IFormatter from "@/types/IFormatter";

export default defineComponent({
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
    genres: {
      type: Array as PropType<string[]>,
      required: true,
    },
    release_date: {
      required: true,
      type: String,
    },
    id: Number,
  },
  setup(props) {
    const formatters = inject('formatter') as IFormatter;
    const year = formatters.year(props.release_date);
    const genresFormatted = formatters.ampersandSeparator(props.genres);

    return {
      genresFormatted,
      year
    }
  },
  methods: {
    openMovie(id: number) {
      this.$router.push({ name: 'Movies', params: { id: id } });
    }
  },
});
</script>

<style scoped>

</style>
