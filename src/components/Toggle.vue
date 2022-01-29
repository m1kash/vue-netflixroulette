<template>
  <div class="flex items-center py-4">
    <span class="text-white uppercase text-lg mr-4">{{label}}</span>
    <div class="flex h-full" >
      <button v-for="({name, key, id}, i) in toggleElems"
              :key="key"
              @click.prevent="changeActiveElem(id)"
              class="toggle-btn"
              :class="[activeElem === id && 'active', i === toggleElems.length - 1 && 'rounded-r', i === 0 && 'rounded-l']"
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
    active: {
      type: String,
      required: true
    },
  },
  data: () => ({
    activeElem: '' as string
  }),
  created() {
    this.$nextTick(function () {
      this.activeElem = this.$props.active;
    })
  },
  methods: {
    changeActiveElem(id: string) {
      this.activeElem = id;
      this.$emit('change-toggler', id);
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

