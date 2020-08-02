import React from 'react';
import classNames from 'classnames/bind';
import NavigationButton from './navigationButton';
import styles from '../styles/idlerants.scss';

const cx = classNames.bind(styles);

const NavigationBar = (props) => (
  <div className={cx('navigationBar')}>
    <NavigationButton
      index={0}
      isSelected={props.selectedPageIndex === 0}
      name={'Home'}
    />
    <NavigationButton
      index={1}
      isSelected={props.selectedPageIndex === 1}
      name={'About'}
    />
    <NavigationButton
      index={2}
      isSelected={props.selectedPageIndex === 2}
      name={'Contact'}
    />
  </div>
);

export default NavigationBar;
