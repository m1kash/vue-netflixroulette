import {Directive, Plugin} from "@vue/runtime-core";

export interface IOptionsLazy {
  width: number,
  height: number,
  placeText: string,
  customImage?: string,
}

const lazyPlugin: Plugin = {
  install: (app, options: IOptionsLazy) => {
    const placeholder = options.customImage ||
      `https://via.placeholder.com/${options.width}x${options.height}.png?text=${options.placeText}`;

    app.directive('lazy', {
      mounted(el: HTMLElement, bindings) {
        const callback: IntersectionObserverCallback = function(entries) {
          el.setAttribute('src', placeholder);
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              el.setAttribute('src', bindings.value);
              el.onerror = () => {
                el.setAttribute('src', placeholder);
              };
              lazyImageObserver.unobserve(el);
            }
          });
        };
        const lazyImageObserver = new IntersectionObserver(callback);

        lazyImageObserver.observe(el);
      }
    } as Directive)
  }
};

export default lazyPlugin;
