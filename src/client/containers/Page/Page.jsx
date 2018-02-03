import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Navigation from '../../components/Navigation';
import styles from './Page.scss';

class Page extends Component {
  render() {
    return (
      <div className={styles['page-container']}>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

Page.propTypes = {
  children: PropTypes.node
};

export default Page;
