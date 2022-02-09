<template>
  <portal-layout>
    <template v-slot:header>
      <portal-header>
        <portal-search :togglers="genres"></portal-search>
      </portal-header>
    </template>
    <template v-slot:content>
      <portal-container>
        <div class="aqa-404 text-8xl text-white text-center mt-24">
          Oh no 😢 404
        </div>
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
import portalSearch from '@/components/Search.vue';
import ITogglers from '@/types/ITogglers';
import { useStore } from '@/store';
import { ActionsTypes } from '@/types/store/actions-types';
import { FILTER_PARAMS_SEARCH } from '@/constants';

export default defineComponent({
  name: 'movie-page',
  data: () => ({
    searchText: '' as string,
    genres: FILTER_PARAMS_SEARCH as Array<ITogglers>,
  }),
  setup() {
    const store = useStore();

    store.dispatch(ActionsTypes.FILTER_SEARCH_TEXT, '');
  },
  components: {
    portalLayout,
    portalHeader,
    portalFooter,
    PortalContainer,
    portalSearch,
  },
});
</script>
