<template>
  <div class="flex flex-wrap w-full h-full p-20">
    <span class="uppercase font-extralight text-4xl text-white w-full mb-4"
     for="search">
    Find Your Movie
    </span>
    <form class="space-x-4 flex w-full aqa-form-search" @submit.prevent="search">
      <text-field v-model:value="value" @keyup="search"
                  width="w-3/4" id="search"
                  placeholder="Search" />
      <large-button width="w-1/4" @click.prevent="search">
        Search
      </large-button>
    </form>
    <portal-toggle label="Search by" :active="activeFilter"
                   :toggle-elems="elems"
                   @change-toggler="changeActiveElem"></portal-toggle>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import TextField from '@/components/TextField.vue';
import LargeButton from '@/components/LargeButton.vue';
import portalToggle from '@/components/Toggle.vue';
import { ActionsTypes } from '@/types/store/actions-types';
import ITogglers from '@/types/ITogglers';
import { searchBy } from '@/types/searchTag';
import { useStore } from '@/store';

export default defineComponent({
  name: 'portal-search',
  data: () => ({
    elems: [] as ITogglers[],
    value: '' as string,
    activeFilter: '' as string,
  }),
  props: {
    togglers: {
      type: Array as PropType<ITogglers[]>,
      required: true,
    },
  },
  mounted() {
    const store = useStore();

    this.elems = this.$props.togglers ? this.$props.togglers : [];
    this.activeFilter = store.state.searchBy;
  },
  methods: {
    search() {
      let config = {};
      this.$store.dispatch(ActionsTypes.FILTER_SEARCH_TEXT, this.value);
      if (this.value) {
        config = { query: { search: this.value } };
      }
      this.$router.push({ name: 'Home', ...config });
    },
    changeActiveElem(id: searchBy) {
      this.$store.dispatch(ActionsTypes.FILTER_SEARCH_BY, id);
    },
  },
  components: { portalToggle, LargeButton, TextField },
});
</script>
