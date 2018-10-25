// helpers
import { createMutation } from '../../util';

const setToken = 'setToken';
const removeToken = 'removeToken';

export default {
  [setToken]: createMutation(setToken, (state, newValues) => {
    state.jwt = newValues.jwt;
    state.isLogged = true;
  }),
  [removeToken]: createMutation(removeToken, (state) => {
    state.jwt = '';
    state.isLogged = false;
  }),
};
