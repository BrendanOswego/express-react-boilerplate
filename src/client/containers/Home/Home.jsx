import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  increase,
  decrease
} from '../../modules/actions/Home';

import Page from '../Page';
import logo from '../../images/react-logo.png';
import styles from './Home.scss';

export class Home extends Component {

  handleDecrease(event) {
    event.preventDefault();
    this.props.decrease();
  }

  handleIncrease(event) {
    event.preventDefault();
    this.props.increase();
  }

  render() {
    const { home } = this.props;
    return (
      <Page>
        <div className={styles['page-home']}>
          <img src={logo} alt='react-logo' />
          <div>Home {home.value}</div>
          <button onClick={this.handleIncrease.bind(this)}>Click to increase</button>
          <button onClick={this.handleDecrease.bind(this)}>Click to decrease</button>
        </div>
      </Page>
    );
  }
}

Home.propTypes = {
  home: PropTypes.object,
  increase: PropTypes.func,
  decrease: PropTypes.func
};

Home.defaultProps = {
  home: {
    value: 10
  }
};

const mapStateToProps = ({ home }) => ({ home });

const mapDispatchToProps = (dispatch) => ({
  increase: () => dispatch(increase()),
  decrease: () => dispatch(decrease())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
