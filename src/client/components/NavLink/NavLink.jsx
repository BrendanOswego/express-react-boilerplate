import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';

const NavLink = ({ isExact, to, label }) => (
  <li>
    <Link exact={isExact} to={to}>{label}</Link>
  </li>
);

NavLink.propTypes = {
  isExact: PropTypes.bool,
  to: PropTypes.string,
  label: PropTypes.string
};

export default NavLink;
