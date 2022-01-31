import 'jest';
import { shallowMount, mount, VueWrapper } from '@vue/test-utils';
import MovieArticle from '@/components/MovieArticle.vue';
import data from "../mock-data/movies.json";
import Formatter from "@/utils/Formatter";

describe('MovieArticle.vue', () => {
  let wrapper: VueWrapper;
  let filterSearchMock: jest.Mock;

  beforeEach(() => {
    filterSearchMock = jest.fn();
    wrapper = mount(MovieArticle, {
      props: {
        ...data[0]
      },
      global: {
        provide: {
          'formatter': Formatter
        },
      }
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('render correct', () => {
    expect(wrapper.vm.$el).toMatchSnapshot();
  });
});
