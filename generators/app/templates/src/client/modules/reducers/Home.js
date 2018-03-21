import * as types from '../types/Home';

const defaultState = {
  value: 10
};

export const HomeReducer = (state = defaultState, action = { type: null }) => {
  switch (action.type) {
    case types.INCREASE_REQUEST:
      return Object.assign({}, state, {
        value: state.value + 1
      });
    case types.DECREASE_REQUEST:
      return Object.assign({}, state, {
        value: state.value - 1
      });
    default:
      return state;
  }
};
