// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// Vue core
import Vue from 'vue';

// Reset css
import 'normalize.css/normalize.css';

// Element components
// import ElementUI from 'element-ui';
// Element css
import 'element-ui/lib/theme-chalk/index.css';
// Element i18n
import english from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';

// App core
import store from './store';
import router from './router';
import App from './App';

locale.use(english);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
