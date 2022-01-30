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
import {mapGetters} from 'vuex'
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
import {MutationTypes} from "@/types/store/mutation-types";
import {useStore} from "@/store";

export default defineComponent({
  name: 'Home-page',
  data: () => ({
    searchText: '' as string,
    genres: FILTER_PARAMS_SEARCH as Array<ITogglers>,
  }),
  setup() {
    const store = useStore();

    store.commit(MutationTypes.FILTER_MOVIES);
  },
  computed: {
    ...mapGetters({
      items: 'getMovies',
      countItems: 'getCountMovies'
    })
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
