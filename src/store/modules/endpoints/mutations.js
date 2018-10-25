// helpers
import { createMutation } from '../../util';

const setEndpoints = 'setEndpoints';

export default {
  [setEndpoints]: createMutation(setEndpoints, (state, newValues) => {
    state.endpoints = newValues;
  }),
};
