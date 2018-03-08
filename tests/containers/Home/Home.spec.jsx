import React from 'react';
import sinon from 'sinon';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';

import ConnectedHome from '../../../src/client/containers/Home/Home';

import rootReducer from '../../../src/client/modules/reducers/rootReducer';

describe('Home component', () => {

  let store, wrapper, props;


  const e = {
    stopPropagation: () => { },
    preventDefault: () => { }
  };

  beforeEach(() => {
    const mockStore = configureStore(rootReducer(), {});
    store = mockStore({
      home: {
        value: 10
      }
    });

    props = {
      increase: sinon.spy(),
      decrease: sinon.spy()
    };

    wrapper = mount(
      <MemoryRouter>
        <ConnectedHome {...props} store={store} />
      </MemoryRouter>
    );
  });

  it('renders component', () => {
    expect(wrapper).toBeDefined();
  });

  it('simulates increase button click', () => {
    wrapper.find('button').at(0).simulate('click', e);

    expect(props.increase).toBeDefined();
  });

  it('simlulates decrease button click', () => {
    wrapper.find('button').at(1).simulate('click', e);

    expect(props.decrease).toBeDefined();
  });

});
