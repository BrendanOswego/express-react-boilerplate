import {
  INCREASE_REQUEST,
  DECREASE_REQUEST
} from '../types/Home';

const defaultState = {
  value: 10
};

const HomeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREASE_REQUEST:
      return Object.assign({}, state, {
        value: state.value + 1
      });
    case DECREASE_REQUEST:
      return Object.assign({}, state, {
        value: state.value - 1
      });
    default:
      return state;
  }
};

export default HomeReducer;
