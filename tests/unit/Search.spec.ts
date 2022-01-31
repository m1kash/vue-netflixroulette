import 'jest';
import { shallowMount, mount, VueWrapper } from '@vue/test-utils';
import Search from '@/components/Search.vue';
import { createStore } from 'vuex';
import { ActionsTypes } from '@/types/store/actions-types';
import { key } from '@/store';
import {FILTER_PARAMS_SEARCH} from "@/constants";
import ITogglers from "@/types/ITogglers";

describe('Search.vue', () => {
  let wrapper: VueWrapper;
  let store;
  let filterSearchMock: jest.Mock;

  beforeEach(() => {
    filterSearchMock = jest.fn();
    store = createStore({
      actions: {
        [ActionsTypes.FILTER_SEARCH_TEXT]: filterSearchMock,
      }
    });
    wrapper = mount(Search, {
      global: {
        provide: {
          [key]: store,
        },
        plugins: [
          store
        ]
      },
      props: {
        togglers: FILTER_PARAMS_SEARCH as Array<ITogglers>,
      },
      active: 'genres',
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('render correct', () => {
    expect(wrapper.vm.$el).toMatchSnapshot();
  });

  test('user can search movie and pressing enter or button', async () => {
    const form = wrapper.find('.aqa-form-search');
    const button = wrapper.findComponent({ name: 'large-button' });
    const field = wrapper.findComponent({ name: 'text-field' });

    wrapper.find('#search-input').setValue('Movie name');
    button.trigger('click.prevent');
    await wrapper.vm.$nextTick();

    expect(filterSearchMock).toBeCalledWith(expect.anything(), 'Movie name');

    filterSearchMock.mockClear();

    wrapper.find('#search-input').setValue('Movie name 2');
    form.trigger('submit.prevent');

    await wrapper.vm.$nextTick();

    expect(filterSearchMock).toBeCalledWith(expect.anything(), 'Movie name 2');
  });
});
