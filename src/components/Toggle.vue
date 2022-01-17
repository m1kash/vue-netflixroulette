<template>
  <div class="flex items-center py-4">
    <span class="text-white uppercase text-lg mr-4">{{label}}</span>
    <div class="flex h-full" >
      <button v-for="({name, key}, i) in toggleElems"
              :key="key"
              @click.prevent="changeActiveElem(name)"
              class="toggle-btn"
              :class="[activeElem === name && 'active', i === toggleElems.length - 1 && 'rounded-r', i === 0 && 'rounded-l']"
      >
        {{ name }}
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, PropType} from "vue";
import IToggleElems from "@/types/ITogglers";

export default defineComponent({
  name: 'portal-toggle',
  props: {
    toggleElems: {
      required: true,
      type: Array as PropType<IToggleElems[]>
    },
    label: String,
  },
  data: () => ({
    activeElem: '' as string
  }),
  beforeMount() {
    this.activeElem = this.$props.toggleElems.length ? this.$props.toggleElems[0].name : '';
  },
  beforeUpdate() {
    this.activeElem = this.$props.toggleElems.length ? this.$props.toggleElems[0].name : '';
  },
  methods: {
    changeActiveElem(nameToggle: string) {
      this.activeElem = nameToggle;
    }
  }
});
</script>
<style scoped>
.toggle-btn {
  @apply bg-neutral-700 bg-opacity-75 uppercase text-white px-4 py-1;
}

.active {
  @apply bg-rose-500 hover:bg-rose-600 bg-opacity-100;
}
</style>

