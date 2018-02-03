import React from 'react';
import NavLink from '../NavLink';

import styles from './Navigation.scss';

const Navigation = () => (
  <nav className={styles['main-nav']}>
    <ul>
      <NavLink isExact={true} to='/' label='HOME' />
      <NavLink isExact={false} to='/about' label='ABOUT' />
    </ul>
  </nav>
);

export default Navigation;
