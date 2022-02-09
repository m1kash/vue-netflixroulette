<template>
<div class="w-full flex justify-between items-center px-20 pt-4">
  <span v-if="!genre" class="text-white text-lg">{{ count }} movies</span>
  <span v-if="genre" class="text-white text-lg">Films by {{genre}} genre</span>
  <portal-toggle v-if="!genre" :active="activeFilter" label="Sort by"
                 :toggle-elems="toggles"
                 @change-toggler="changeFilter"></portal-toggle>
</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { mapState } from 'vuex';
import IToggleElems from '@/types/ITogglers';
import { sortBy } from '@/types/sortBy';
import { ActionsTypes } from '@/types/store/actions-types';
import { useStore } from '@/store';
import portalToggle from '@/components/Toggle.vue';
import { FILTER_PARAMS_TOOLBAR } from '@/constants';

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
    },
  },
  data: () => ({
    toggles: FILTER_PARAMS_TOOLBAR,
  }),
  setup() {
    const store = useStore();

    return {
      changeFilter: (id: sortBy) => store.dispatch(
        ActionsTypes.CHANGE_SORT_BY,
        id,
      ),
    };
  },
  methods: {
  },
  computed: {
    ...mapState({
      activeFilter: 'sortBy',
    }),
  },
  components: {
    portalToggle,
  },
});
</script>
