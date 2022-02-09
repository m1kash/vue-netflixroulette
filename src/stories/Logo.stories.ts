import { Meta, Story } from '@storybook/vue3';
import { defineComponent } from 'vue';
import portalLogo from '@/components/Logo.vue';

export default {
  title: 'Components/Logo',
  component: portalLogo,
} as Meta;

const logoTemplate: Story = (args) => defineComponent({
  components: {
    portalLogo,
  },
  setup: () => ({ args }),
  template: '<portal-logo v-bind="args" ></portal-logo>',
});

export const smallLogo = logoTemplate.bind({});

smallLogo.args = {
  width: '200',
};

export const bigLogo = logoTemplate.bind({});

bigLogo.args = {
  width: '500',
};
