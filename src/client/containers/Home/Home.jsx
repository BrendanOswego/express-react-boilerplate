import React, { Component } from 'react';
import cs from 'classnames';

import Page from '../Page';
import logo from '../../images/react-logo.png';
import styles from './Home.scss';

class Home extends Component {
  render() {
    return (
      <Page>
        <div className={styles['page-home']}>
          <img src={logo} alt='react-logo' />
          <div>Home</div>
        </div>
      </Page>
    );
  }
}

export default Home;
