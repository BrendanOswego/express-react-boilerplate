import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Navigation/Navigation.scss';
import { NavLink as Link } from 'react-router-dom';


const NavLink = ({ isExact, to, label }) => (
  <li>
    <Link activeClassName={styles.active} exact={isExact} to={to}>{label}</Link>
  </li>
);

NavLink.propTypes = {
  isExact: PropTypes.bool,
  to: PropTypes.string,
  label: PropTypes.string
};

NavLink.defaultProps = {
  isExact: false
};

export default NavLink;