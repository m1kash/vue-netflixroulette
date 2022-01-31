<template>
  <div class="aqa-movie flex-col flex"
       @click.prevent="openMovie(id)"
       @keyup.enter="openMovie(id)">
    <img v-lazy="image" alt="image" height="370">
    <div class="flex flex-wrap mt-2">
      <div class="flex flex-col w-1/2">
        <div class="text-zinc-500 text-lg">{{ title }}</div>
      </div>
      <div class="w-1/2 flex justify-end items-start">
        <div class="text-zinc-400 border border-solid
        border-zinc-500 rounded p-0.5 px-4">{{ year }}</div>
      </div>
      <div class="text-zinc-600 w-full">{{ genresFormatted }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, PropType } from 'vue';
import { useRouter } from 'vue-router';
import IFormatter from '@/types/IFormatter';
import { ActionsTypes } from '@/types/store/actions-types';
import { useStore } from '@/store';

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
    const store = useStore();
    const router = useRouter();
    const formatters = inject('formatter') as IFormatter;
    const year = formatters.year(props.release_date);
    const genresFormatted = formatters.separator(props.genres, '&');

    return {
      genresFormatted,
      year,
      openMovie(id: number) {
        store.dispatch(ActionsTypes.GET_MOVIE_BY_ID, id);
        router.push({ name: 'Movies', params: { id } });
      },
    };
  },
});
</script>

<style scoped>

</style>
