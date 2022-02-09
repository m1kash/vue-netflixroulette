import { Meta, Story } from '@storybook/vue3';
import { defineComponent } from 'vue';
import PortalFooter from '../components/Container/Footer.vue';

export default {
  title: 'Layout/Footer',
  component: PortalFooter,
  argTypes: {
    default: {
      content: 'Slot content',
    },
  },
} as Meta;

export const Default: Story = (args) => defineComponent({
  components: { PortalFooter },
  setup: () => ({ args }),
  template: '<portal-footer/>',
});
