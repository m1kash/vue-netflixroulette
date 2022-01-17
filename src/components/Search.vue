<template>
  <div class="flex flex-wrap w-full h-full p-20">
    <label for="search" class="uppercase font-extralight text-4xl text-white w-full mb-4 ">Find Your Movie</label>
    <div class="space-x-4 flex w-full">
      <text-field width="w-3/4" id="search" placeholder="Search" ></text-field>
      <large-button width="w-1/4"> Search </large-button>
    </div>
    <portal-toggle label="Search by" :toggle-elems="elems"></portal-toggle>
  </div>
</template>

<script lang="ts">
import TextField from '@/components/TextField.vue';
import LargeButton from '@/components/LargeButton.vue';
import portalToggle from '@/components/Toggle.vue';
import {defineComponent, PropType} from 'vue';
import ITogglers from "@/types/ITogglers";

export default defineComponent({
  name: 'portal-search',
  data: () => ({
    elems: [] as ITogglers[]
  }),
  props: {
    togglers: [] as PropType<ITogglers[]>,
  },
  mounted() {
    this.elems = this.$props.togglers ? this.$props.togglers : [];
  },
  components: { portalToggle, LargeButton, TextField }
})
</script>
