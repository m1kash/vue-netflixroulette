<template>
<div class="w-full flex justify-between items-center px-20">
  <span class="text-white text-lg">{{ count }} movies</span>
  <portal-toggle label="Sort by" :toggle-elems="toggles"></portal-toggle>
</div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import portalToggle from "@/components/Toggle.vue";
import IToggleElems from "@/types/ITogglers";

export default defineComponent({
  name: 'portal-toolbar',
  props: {
    elems: {
      type: Array as PropType<IToggleElems[]>
    },
    countItems: {
      type: Number,
    },
  },
  data: () => ({
    toggles: [
      {
        name: 'release date',
        key: '12'
      },
      {
        name: 'rating',
        key: '21'
      }
    ],
    count: 7,
  }),
  components: {
    portalToggle
  },
})
</script>
