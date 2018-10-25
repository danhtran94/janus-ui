// reg mutions + actions for module
import mutations from './mutations';
import { login, logout } from './actions';

export default {
  namespaced: true,
  name: 'user',
  state: {
    jwt: '',
    isLogged: false,
  },
  getters: {
    isLogged: ({ isLogged }) => isLogged,
  },
  mutations: {
    [mutations.setToken.name]: mutations.setToken.mutator,
    [mutations.removeToken.name]: mutations.removeToken.mutator,
  },
  actions: {
    login,
    logout,
  },
};
