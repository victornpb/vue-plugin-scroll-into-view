export default {
  install(Vue) {
    Vue.prototype.$scrollIntoView = scrollIntoView;
  },
};

/**
* Scrolls an element into the visible area of the browser window
* @param  {VNode|HTMLElement|String} ref A VNode, HTMLElement or a selector
* @param  {Object|Boolean} [scrollIntoViewOptions] Scroll options
* @param  {String} [scrollIntoViewOptions.behavior='auto'] Defines the transition animation. One of auto or smooth. Defaults to auto.
* @param  {String} [scrollIntoViewOptions.block='start'] Defines vertical alignment. One of start, center, end, or nearest. Defaults to start.
* @param  {String} [scrollIntoViewOptions.inline='nearest'] Defines horizontal alignment. One of start, center, end, or nearest. Defaults to nearest.
* @author github.com/victornpb
*/
function scrollIntoView(ref, scrollIntoViewOptions) {
  if (typeof window === 'undefined') return; // SSR

  let scope = this.$el;

  let element;
  if (typeof ref === 'string') element = scope.querySelector(ref); // Selector
  else if (typeof ref === 'object' && ref.$el) element = ref.$el; // VNode
  else element = ref;

  if (element instanceof HTMLElement) {
    this.$nextTick(() => element.scrollIntoView(scrollIntoViewOptions));
  }
}