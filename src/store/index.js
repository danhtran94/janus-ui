import Vue from 'vue';
import Vuex from 'vuex';

import userModule from './modules/user';
import endpointsModule from './modules/endpoints';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    [userModule.name]: userModule,
    [endpointsModule.name]: endpointsModule,
  },
});
