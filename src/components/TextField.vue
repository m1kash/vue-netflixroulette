<template>
  <input :id="id" :placeholder="placeholder" :class="width" @input="onUpdate" class="placeholder:text-stone-500 text-lg bg-stone-800 px-4 py-2 opacity-75 text-white w-3/4 h-12 border-0 rounded" :value="value" type="text" />
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'text-field',
  props: {
    id: String,
    placeholder: String,
    width: String,
    value: String,
  },
  methods: {
    onUpdate(event: Event) {
      if (!event.target) {
        return false;
      }

      this.$emit('update:value', (event.target as HTMLInputElement).value);
    }
  },
});
</script>
