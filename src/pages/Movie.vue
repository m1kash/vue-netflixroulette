<template>
  <portal-layout>
    <template v-slot:header>
      <portal-header class="before:absolute before:top-0 before:bg-black
      before:bg-opacity-50 before:w-full before:h-full
      before:absolute before:z-10">
        <search-button @click.prevent="$router.push('/')"
                       class="absolute right-0 top-2"/>
        <movie-article class="py-12" v-bind="movie"></movie-article>
      </portal-header>
    </template>
    <template v-slot:content>
      <portal-container>
        <portal-toolbar :count="items.length" :genre="genreRelated"/>
        <movie-list :items="items"></movie-list>
      </portal-container>
    </template>
    <template v-slot:footer>
      <portal-footer></portal-footer>
    </template>
  </portal-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '@/styles/app.css';
import portalLayout from '@/components/Container/Layout.vue';
import portalHeader from '@/components/Container/Header.vue';
import portalFooter from '@/components/Container/Footer.vue';
import PortalContainer from '@/components/Container/PortalContainer.vue';
import PortalToolbar from '@/components/Toolbar.vue';
import MovieList from '@/components/MovieList.vue';
import MovieArticle from '@/components/MovieArticle.vue';
import SearchButton from '@/components/SearchButton.vue';
import ITogglers from '@/types/ITogglers';
import { mapGetters } from 'vuex';
import { useRoute } from 'vue-router';
import { useStore } from '@/store';
import { ActionsTypes } from '@/types/store/actions-types';

export default defineComponent({
  name: 'movie-page',
  data: () => ({
    searchText: '' as string,
    // items: [] as Array<IMovie>,
    genres: [
      {
        name: 'title',
        key: '12',
      },
      {
        name: 'genre',
        key: '21',
      },
    ] as Array<ITogglers>,
    id: '' as string | string[],
  }),
  setup() {
    const router = useRoute();
    const store = useStore();

    if (!router.params.id) {
      return;
    }

    store.dispatch(ActionsTypes.GET_MOVIE_BY_ID, +router.params.id);
  },
  computed: {
    ...mapGetters({
      movie: 'getMovie',
      items: 'getRelatedMovies',
      genreRelated: 'getFirstGenreMovie',
    }),
  },
  components: {
    SearchButton,
    MovieArticle,
    MovieList,
    PortalToolbar,
    portalLayout,
    portalHeader,
    portalFooter,
    PortalContainer,
  },
});
</script>
