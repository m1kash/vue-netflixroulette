import { Directive, Plugin } from 'vue';

export interface IOptionsLazy {
  width: number,
  height: number,
  placeText: string,
  customImage?: string,
}

const lazyPlugin: Plugin = {
  install: (app, options: IOptionsLazy) => {
    const img = `https://via.placeholder.com/${options.width}x${options.height}.png?text=${options.placeText}`;
    const placeholder = options.customImage
      || img;

    app.directive('lazy', {
      mounted(el: HTMLElement, bindings) {
        const callback: IntersectionObserverCallback = function callbackLazy(
          entries,
        ) {
          el.setAttribute('src', placeholder);
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.setAttribute('src', bindings.value);
              el.addEventListener('error', () => {
                el.setAttribute('src', placeholder);
              });
              // eslint-disable-next-line
              lazyImageObserver.unobserve(el);
            }
          });
        };
        const lazyImageObserver = new IntersectionObserver(callback);

        lazyImageObserver.observe(el);
      },
    } as Directive);
  },
};

export default lazyPlugin;
