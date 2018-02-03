import React, { Component } from 'react';

import Page from '../Page';

class About extends Component {
  render() {
    console.log('inside about'); // eslint-disable-line no-console
    return (
      <Page>
        <div>About</div>
      </Page>
    );
  }
}

export default About;
