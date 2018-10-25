// reg mutions + actions for module
import mutations from './mutations';
import { createAPIEndpoint, getEndpoints, removeEndpoint, updateEndpoint } from './actions';

export default {
  namespaced: true,
  name: 'endpoints',
  state: {
    endpoints: [],
  },
  getters: {
    endpoints: ({ endpoints }) => endpoints,
  },
  mutations: {
    [mutations.setEndpoints.name]: mutations.setEndpoints.mutator,
  },
  actions: {
    createAPIEndpoint,
    getEndpoints,
    removeEndpoint,
    updateEndpoint,
  },
};
