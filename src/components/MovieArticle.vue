<template>
  <div class="flex">
    <div class="w-1/4 pr-4">
      <img :src="poster_path" alt="image" width="270">
    </div>
    <div class="w-3/4 space-y-4 font-extralight">
      <h1 class="text-4xl text-zinc-200 after:inline-flex
      after:justify-center after:items-center
      after:border-zinc-500 after:border after:border-solid after:rounded-full
       after:ml-5 after:text-3xl after:w-16 after:h-16 after:text-green-500
       after:content-[attr(data-rating)]"
          :data-rating="vote_average">{{ title }}</h1>
      <div class="text-xl text-zinc-300">{{ allGenres }}</div>
      <div class="text-rose-500 text-2xl">{{ year }} &nbsp; {{ duration }}</div>
      <p class="text-xl text-zinc-300"> {{ overview }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, inject, onUpdated, PropType, ref,
} from 'vue';
import IFormatter from '@/types/IFormatter';

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
      type: [Number, null] as PropType<number | null>,
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
  setup: (props) => {
    const year = ref(0);
    const allGenres = ref('');
    const duration = ref('');
    const formatters = inject('formatter') as IFormatter;

    if (props.release_date) {
      year.value = formatters.year(props.release_date);
      allGenres.value = formatters.separator(props.genres, ' ');
      duration.value = formatters.duration(props.runtime || 0);
    }

    onUpdated(() => {
      year.value = formatters.year(props.release_date);
      allGenres.value = formatters.separator(props.genres, ' ');
      duration.value = formatters.duration(props.runtime || 0);
    });

    return {
      allGenres,
      year,
      duration,
    };
  },
});
</script>

<style scoped>

</style>
