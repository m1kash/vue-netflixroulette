import { Directive } from "@vue/runtime-core";
const URL_IMAGE_PLACE_HOLDER = 'https://via.placeholder.com/395x592.png?text=Movie%20app';

export default {
  mounted(el: HTMLElement, bindings) {
    const callback: IntersectionObserverCallback = function(entries) {
      el.setAttribute('src', URL_IMAGE_PLACE_HOLDER);
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          el.setAttribute('src', bindings.value);
          lazyImageObserver.unobserve(el);
        }
      });
    };
    const lazyImageObserver = new IntersectionObserver(callback);
    lazyImageObserver.observe(el);
  }
} as Directive;
