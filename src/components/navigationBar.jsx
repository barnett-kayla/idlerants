import React from 'react';
import classNames from 'classnames/bind';
import NavigationButton from './navigationButton';
import styles from '../styles/idlerants.scss';

const cx = classNames.bind(styles);

const NavigationBar = (props) => (
  <div className={cx('navigationBar')}>
    {props.pages.map((page, index) => (
      <NavigationButton
        isSelected={props.selectedPageIndex === index}
        key={`pageIndex ${index}`}
        name={page.name}
        onClick={() => props.onChangePageIndex(index)}
      />
    ))}
  </div>
);

export default NavigationBar;
