import 'jest';
import { shallowMount, mount, VueWrapper } from '@vue/test-utils';
import MovieList from "@/components/MovieList.vue";
import data from "../mock-data/movies.json";
import {createStore} from "vuex";
import {ActionsTypes} from "@/types/store/actions-types";
import {key} from "@/store";
import Formatter from "@/utils/Formatter";
import router from "@/router";
import lazy, {IOptionsLazy} from "@/plugins/lazy";
import setupIntersectionObserverMock from '../../config/test-utils/intersectionObserverMock';


describe('MovieList.vue', () => {
  let wrapper: VueWrapper;
  let store;
  let getMovieMock: jest.Mock;

  beforeEach(() => {
    setupIntersectionObserverMock();
    getMovieMock = jest.fn();
    store = createStore({
      actions: {
        [ActionsTypes.GET_MOVIE_BY_ID]: getMovieMock,
      }
    });
    wrapper = mount(MovieList, {
      props: {
        items: data
      },
      global: {
        provide: {
          [key]: store,
          'formatter': Formatter
        },
        plugins: [
          store,
          router,
          [lazy, {
            height: 592,
            width: 395,
            placeText: 'Loading...',
          } as IOptionsLazy]
        ],
      },
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('render correct', () => {
    expect(wrapper.vm.$el).toMatchSnapshot();
  });

  test('should show need count movies equal count movies', () => {
    const movieList = wrapper.find('.aqa-movie-list');

    expect(movieList.element.children.length).toEqual(data.length);
  });

  test('movie clicked on button and keys', async () => {
    const ID_MOVIE = 1;
    const movieItem = wrapper.find('.aqa-movie');

    movieItem.trigger('click');
    await wrapper.vm.$nextTick();

    expect(getMovieMock).toBeCalledWith(expect.anything(), ID_MOVIE);
  });

  test('should show 404 when 0 movies showed', () => {
    const movieComponent = shallowMount(MovieList, {
      props: {
        items: []
      }
    });
    const movie404 = movieComponent.find('.aqa-404');
    expect(movie404.isVisible()).toBeTruthy();
  });
});
