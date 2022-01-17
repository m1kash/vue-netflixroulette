<template>
  <div v-if="movies.length" class="grid gap-12 gap-y-8 grid-cols-3 py-8">
    <movie-item v-for="({title, poster_path, id, release_date, genres}) in movies"  :title="title" :image="poster_path" :year="release_date" :genre="genres" :key="id"  ></movie-item>
  </div>
  <div class="text-4xl text-white text-center mt-4 mb-16" v-else>Oh no 😢 404</div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import IMovie from '@/types/IMovie';
import MovieItem from "@/components/MovieItem.vue";

export default defineComponent({
  name: 'movie-list',
  components: {MovieItem},
  data: () => ({
    movies: [] as Array<IMovie>,
  }),
  props: {
    items: {
      type: [] as PropType<IMovie[]>,
    }
  },
  mounted() {
    this.movies = this.$props.items ? this.$props.items : [];
  },
});
</script>

<style scoped>

</style>
