<template>
  <div v-if="items.length" class="aqa-movie-list grid gap-12 gap-y-8 grid-cols-3 py-8">
  <movie-item v-for="({title, poster_path, id, release_date, genres}) in items"
              :title="title" :image="poster_path" :release_date="release_date"
              :genres="genres" :key="id" :id="id"  ></movie-item>
  </div>
  <div class="aqa-404 text-4xl text-white text-center mt-4 mb-16" v-else>
    Oh no 😢 404
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import IMovie from '@/types/IMovie';
import MovieItem from '@/components/MovieItem.vue';

export default defineComponent({
  name: 'movie-list',
  components: {
    MovieItem,
  },
  props: {
    items: {
      type: Array as PropType<IMovie[]>,
    },
  },
});
</script>
