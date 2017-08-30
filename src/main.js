// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import fastclick from 'fastclick';
import App from './App';
import router from './router';
import store from './store';

import '@assets/scss/index.scss';

Vue.config.productionTip = false;
fastclick.attach(document.body);

Vue.use(VueLazyload, {
  loading: require('@assets/image/default.png')
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
});
