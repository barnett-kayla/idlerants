import React from 'react';
import classNames from 'classnames/bind';
import styles from '../styles/idlerants.scss';

const cx = classNames.bind(styles);

const SimplePage = (props) => (
  <pre className={cx('simplePage')}>
    {props.pageContent}
  </pre>
);

export default SimplePage;
