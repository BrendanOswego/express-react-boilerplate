import * as actions from '../../../src/client/modules/actions/Home';
import * as types from '../../../src/client/modules/types/Home';

describe('Home actions', () => {

  it('dispatches INCREASE_REQUEST', () => {
    const expected = {
      type: types.INCREASE_REQUEST
    };

    expect(actions.increase()).toEqual(expected);
  });

  it('dispatches DECREASE_REQUEST', () => {
    const expected = {
      type: types.DECREASE_REQUEST
    };

    expect(actions.decrease()).toEqual(expected);
  });
});