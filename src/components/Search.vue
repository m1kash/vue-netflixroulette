<template>
  <div class="flex flex-wrap w-full h-full p-20">
    <label for="search" class="uppercase font-extralight text-4xl text-white w-full mb-4 ">Find Your Movie</label>
    <form class="space-x-4 flex w-full" @submit.prevent="search">
      <text-field v-model:value="value" width="w-3/4" id="search" placeholder="Search" ></text-field>
      <large-button width="w-1/4" @click.prevent="search"> Search </large-button>
    </form>
    <portal-toggle label="Search by" :toggle-elems="elems" @change-toggler="changeActiveElem"></portal-toggle>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import TextField from '@/components/TextField.vue';
import LargeButton from '@/components/LargeButton.vue';
import portalToggle from '@/components/Toggle.vue';
import ITogglers from "@/types/ITogglers";
import {state} from "@/store";
import {searchBy} from "@/types/searchTag";

export default defineComponent({
  name: 'portal-search',
  data: () => ({
    elems: [] as ITogglers[],
    value: '' as string
  }),
  props: {
    togglers: {
      type: Array as PropType<ITogglers[]>,
      required: true
    },
  },
  mounted() {
    this.elems = this.$props.togglers ? this.$props.togglers : [];
  },
  methods: {
    search() {
      state.searchText = this.value;
    },
    changeActiveElem(id: searchBy) {
      state.searchBy = id;
    }
  },
  components: { portalToggle, LargeButton, TextField }
})
</script>
