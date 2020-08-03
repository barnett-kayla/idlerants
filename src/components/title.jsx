import React from 'react';
import IdleRantsTitle from '../images/idlerantsTitle.png';
import classNames from 'classnames/bind';
import styles from '../styles/idlerants.scss';

const cx = classNames.bind(styles);

const Title = () => (
  <img
    className={cx('titleImage')}
    alt={'IdleRants'}
    src={IdleRantsTitle}
  />
);

export default Title;
