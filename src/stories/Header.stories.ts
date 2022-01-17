import { Meta, Story } from '@storybook/vue3';
import { defineComponent } from 'vue';
import PortalHeader from '../components/Container/Header.vue';

export default {
  title: 'Layout/Header',
  component: PortalHeader,
  argTypes: {
    default: {
      content: 'Slot content',
    }
  }
} as Meta;


const headerTemplate: Story = args => defineComponent({
  components: { PortalHeader },
  setup: () => ({ args }),
  template: `<portal-header v-bind="$props">${args.content}</portal-header>`,
});

export const Empty: Story = headerTemplate.bind({});
Empty.args = {
  content: ''
};
export const Content: Story = headerTemplate.bind({});
Content.args = {
  content: '<div class="text-white py-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>'
};
