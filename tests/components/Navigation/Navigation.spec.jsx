import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Navigation from '../../../src/client/components/Navigation';

describe('Navigation Stateless Component', () => {
  it('renders component', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    expect(wrapper).toBeDefined();
  });
});
