import React from 'react';
import classNames from 'classnames/bind';
import styles from '../styles/idlerants.scss';

const cx = classNames.bind(styles);

const Footer = () => (
  <p className={cx('footer')}>
    &copy; 2020 - Kayla Barnett
  </p>
);

export default Footer;
