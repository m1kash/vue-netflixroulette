<template>
  <portal-layout>
    <template v-slot:header>
      <portal-header>
        <portal-search :togglers="genres"></portal-search>
      </portal-header>
    </template>
    <template v-slot:content>
      <portal-container>
        <portal-toolbar :count="items.length"></portal-toolbar>
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
import portalSearch from "@/components/Search.vue";
import PortalToolbar from "@/components/Toolbar.vue";
import MovieList from "@/components/MovieList.vue";
import ITogglers from "@/types/ITogglers";
import { FILTER_PARAMS_SEARCH } from "@/constants";
import { state } from "@/store";
import IMovie from "@/types/IMovie";
import {searchBy} from "@/types/searchTag";
import {sortBy} from "@/types/sortBy";

export default defineComponent({
  name: 'Home-page',
  data: () => ({
    searchText: '' as string,
    genres: FILTER_PARAMS_SEARCH as Array<ITogglers>,
  }),
  computed: {
    items() {
      let resultItems: IMovie[] = state.searchText ? state.items.filter((item: IMovie) => {
        const field = item[state.searchBy as searchBy];
        const searchString = Array.isArray(field) ? field.join(' ') : field;

        return searchString.toLowerCase().includes(state.searchText);
      }) : state.items;
      const getTime = (value: string | number) => new Date(value).getTime();
      const sortField = state.sortBy as sortBy;
      const sortFunction = state.sortBy === 'release_date'
        ? (a: IMovie, b: IMovie) => getTime(b[sortField]) - getTime(a[sortField])
        : (a: IMovie, b: IMovie) => (b[sortField] as number) - (a[sortField] as number);

      resultItems = resultItems.sort(sortFunction);

      return resultItems;
    }
  },
  components: {
    MovieList,
    PortalToolbar,
    portalLayout,
    portalHeader,
    portalFooter,
    PortalContainer,
    portalSearch
  },
})
</script>

<style scoped>

</style>
