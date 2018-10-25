// use axios to make async requests
import axios from 'axios';
// use mutations to change states
import mutations from './mutations';

export const createAPIEndpoint = ({ rootState, dispatch }, newEndpointValues) => {
  // Transform form model to payload
  const payload = {
    name: newEndpointValues.name,
    active: false,
    proxy: {
      listen_path: newEndpointValues.listenPath,
      upstreams: {
        balancing: 'roundrobin',
        targets: [{ target: newEndpointValues.upstreamTarget }],
      },
    },
  };

  if (newEndpointValues.methods.length > 0) {
    payload.proxy.methods = newEndpointValues.methods;
  } else {
    delete payload.proxy.methods;
  }

  if (newEndpointValues.hostName) {
    payload.proxy.hosts = [newEndpointValues.hostName];
  }

  return axios
    .post(`${process.env.__JANUS_ADMIN__}/apis`, payload, {
      headers: { Authorization: `Bearer ${rootState.user.jwt}` },
    })
    .then((resp) => {
      console.log(resp);
      dispatch({ type: 'getEndpoints' });
      return true;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const getEndpoints = ({ commit, rootState }) =>
  axios
    .get(`${process.env.__JANUS_ADMIN__}/apis`, {
      headers: { Authorization: `Bearer ${rootState.user.jwt}` },
    })
    .then((resp) => {
      console.log(resp);
      commit(mutations.setEndpoints.name, resp.data);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });

export const removeEndpoint = ({ dispatch, rootState }, endpointName) =>
  axios
    .delete(`${process.env.__JANUS_ADMIN__}/apis/${endpointName}`, {
      headers: { Authorization: `Bearer ${rootState.user.jwt}` },
    })
    .then((resp) => {
      console.log(resp);
      dispatch({ type: 'getEndpoints' });
      return true;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });

export const updateEndpoint = (
  { dispatch, rootState },
  { currentEndpointName, modifiedEndpoint },
) => {
  console.log('updating: ', currentEndpointName, modifiedEndpoint.name);
  return axios
    .put(`${process.env.__JANUS_ADMIN__}/apis/${currentEndpointName}`, modifiedEndpoint, {
      headers: { Authorization: `Bearer ${rootState.user.jwt}` },
    })
    .then((resp) => {
      console.log(resp);
      dispatch({ type: 'getEndpoints' });
      return true;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
