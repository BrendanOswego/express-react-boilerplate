import * as types from '../../../src/client/modules/types/Home';
import { HomeReducer as reducer } from '../../../src/client/modules/reducers/Home';

describe('Home reducer', () => {

  it('returns initial state', () => {
    const initState = {
      value: 10
    };

    expect(reducer(undefined, {})).toEqual(initState);
  });

  it('handles INCREASE_REQUEST action', () => {
    const action = {
      type: types.INCREASE_REQUEST
    };

    const initState = {
      value: 10
    };

    const newState = reducer(initState, action);

    expect(newState.value).toEqual(11);
  });

  it('handles DECREASE_REQUEST action', () => {
    const action = {
      type: types.DECREASE_REQUEST
    };

    const initState = {
      value: 10
    };

    const newState = reducer(initState, action);

    expect(newState.value).toEqual(9);
  });

});