import React from 'react';
import { mount } from 'enzyme';
import Home from '../../../src/client/containers/Home';
import { MemoryRouter } from 'react-router-dom';

describe('About Component', () => {
  it('renders component', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(wrapper).toBeDefined();
  });
});