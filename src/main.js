import DefaultLayout from '~/layouts/Default.vue';

import '~/assets/scss/main.scss';

export default function (Vue, {
  router,
  head,
  isClient
}) {
  Vue.component('Layout', DefaultLayout);

  head.link.push({
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com'
  });

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Open+Sans:wght@300&display=swap'
  });

  head.meta.push({
    name: "google-site-verification",
    content: "-0ZyPYDdFBS2gARetSmEWZ138z-O4np1rCalSfNelKI"
  });
}
