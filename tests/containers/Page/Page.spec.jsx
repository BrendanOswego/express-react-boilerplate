import React from 'react';
import { shallow } from 'enzyme';
import Page from '../../../src/client/containers/Page';

describe('Page container', () => {

  it('renders component', () => {
    const wrapper = shallow(
      <Page />
    );

    expect(wrapper).toBeDefined();
  });

});