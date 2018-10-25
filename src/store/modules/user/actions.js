// use axios to make async requests
import axios from 'axios';
// use mutations to change states
import mutations from './mutations';

export const login = ({ commit }, loginIdentity) =>
  axios
    .post(`${process.env.__JANUS_ADMIN__}/login`, loginIdentity)
    .then((resp) => {
      console.log(resp);
      commit(mutations.setToken.name, { jwt: resp.data.access_token });
      return true;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });

export const logout = ({ commit }) => {
  commit(mutations.removeToken.name);
};
