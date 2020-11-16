// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

//import VTooltip from 'v-tooltip'
import {
  VTooltip,
  VPopover,
  VClosePopover
} from 'v-tooltip'

import 'prismjs/themes/prism.css'
import '~/assets/scss/main.scss'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';
import {
  config,
  library
} from '@fortawesome/fontawesome-svg-core';
import {
  fas
} from '@fortawesome/free-solid-svg-icons';
import {
  fab
} from '@fortawesome/free-brands-svg-icons'

import '@fortawesome/fontawesome-svg-core/styles.css';
import ClickOutside from 'v-click-outside'
import InfiniteLoading from 'vue-infinite-loading'


config.autoAddCss = false;
library.add(fas);
library.add(fab);

export default function (Vue, {
  router,
  head,
  isClient
}) {
  Vue.component('Layout', DefaultLayout)

  Vue.component('font-awesome', FontAwesomeIcon)

  Vue.use(ClickOutside)
  
  if( isClient ) {
    VTooltip.options.defaultPlacement = 'top-end';
    VTooltip.options.defaultClass = 'bg-black text-xs px-2 leading-normal py-1 rounded absolute text-gray-400 max-w-xs ml-2 mt-3';
    VTooltip.options.defaultBoundariesElement = document.body;

    Vue.directive('tooltip', VTooltip)
    Vue.directive('close-popover', VClosePopover)
    Vue.component('v-popover', VPopover)
    Vue.use(InfiniteLoading)
  }

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed'
  });

  head.meta.push({
    name: "google-site-verification",
    content: "-0ZyPYDdFBS2gARetSmEWZ138z-O4np1rCalSfNelKI"
  });
}
