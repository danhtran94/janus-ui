import Vue from 'vue';
import Router from 'vue-router';

// change page based on browser path
import Login from '@/pages/Login';
import Home from '@/pages/Home';

// use store to check authentication
import store from '../store';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        needLogged: false,
      },
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        needLogged: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(({ meta }) => meta.needLogged)) {
    if (store.state.user.isLogged) {
      next();
    } else {
      next({ path: '/login', query: { from: from.path } });
    }
  }
  if (to.matched.some(({ meta }) => !meta.needLogged)) {
    if (!store.state.user.isLogged) {
      next();
    } else {
      next({ path: '/' });
    }
  }
  next();
});

router.afterEach((ctx) => {
  document.title = ctx.name ? ctx.name : 'Unnamed';
});

export default router;
