<template>
<div class="w-full flex justify-between items-center px-20 pt-4">
  <span v-if="!genre" class="text-white text-lg">{{ count }} movies</span>
  <span v-if="genre" class="text-white text-lg">Films by {{genre}} genre</span>
  <portal-toggle v-if="!genre" :active="activeFilter" label="Sort by" :toggle-elems="toggles" @change-toggler="changeFilter"></portal-toggle>
</div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import portalToggle from "@/components/Toggle.vue";
import IToggleElems from "@/types/ITogglers";
import {FILTER_PARAMS_TOOLBAR} from "@/constants";
import {state} from "@/store";
import {sortBy} from "@/types/sortBy";

export default defineComponent({
  name: 'portal-toolbar',
  props: {
    elems: {
      type: Array as PropType<IToggleElems[]>,
    },
    count: {
      type: Number,
    },
    genre: {
      type: String,
    }
  },
  data: () => ({
    toggles: FILTER_PARAMS_TOOLBAR,
    activeFilter: '' as string,
  }),
  mounted() {
    this.activeFilter = state.sortBy;
  },
  methods: {
    changeFilter(id: sortBy) {
      state.sortBy = id;
    }
  },
  components: {
    portalToggle
  },
})
</script>
