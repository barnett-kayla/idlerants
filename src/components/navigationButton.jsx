import React from 'react';
import classNames from 'classnames/bind';
import styles from '../styles/idlerants.scss';

const cx = classNames.bind(styles);

const NavigationButton = (props) => (
  <span onClick={props.onClick} className={cx('navigationButton', { selected: props.isSelected })}>
    {props.name}
  </span>
);

export default NavigationButton;
