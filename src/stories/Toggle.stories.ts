import portalToggle from '@/components/Toggle.vue';
import { Meta, Story } from '@storybook/vue3';
import { defineComponent } from 'vue';

export default {
  title: 'Components/Toggle',
  component: portalToggle,
  decorators: [() => ({
    template: '<div class="bg-stone-800 min-h-screen h-full p-4"><story/></div>',
  })],
} as Meta;

const toggleTemplate: Story = (args) => defineComponent({
  components: { portalToggle },
  setup: () => ({ args }),
  template: '<portal-toggle :toggle-elems="args.elems" :label="args.label"></portal-toggle>',
});

export const twoElems = toggleTemplate.bind({});

twoElems.args = {
  label: 'Filter',
  elems: [
    {
      name: 'one toggle',
      key: '1',
    },
    {
      name: 'two toggle',
      key: '2',
    },
    {
      name: 'three toggle',
      key: '3',
    },
  ],
};

export const manyElems = toggleTemplate.bind({});

manyElems.args = {
  label: 'Many elems:',
  elems: [
    {
      name: 'one toggle',
      key: '1',
    },
    {
      name: 'two toggle',
      key: '2',
    },
    {
      name: 'three toggle',
      key: '3',
    },
    {
      name: 'four toggle',
      key: '4',
    },
    {
      name: 'five toggle',
      key: '5',
    },
  ],
};
