// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Buefy from 'buefy';
import DefaultLayout from '~/layouts/Default.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
// internal icons
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueDisqus from 'vue-disqus';
library.add(fas);

export default function (Vue, { router, head, isClient }) {
  Vue.component('vue-fontawesome', FontAwesomeIcon);
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.use(Buefy, {
    defaultIconComponent: 'vue-fontawesome',
    defaultIconPack: 'fas',
  });
  Vue.use(VueDisqus);
}
