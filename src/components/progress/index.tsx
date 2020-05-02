import React, { useState } from 'react';
import Router from 'next/router';
import classNames from 'classnames/bind';
import LinearProgress from '@material-ui/core/LinearProgress';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

export default ({ children }) => {

  const [loaded, setLoaded] = useState(true);

  Router.events.on('routeChangeStart', (url) => {
    if (loaded) {
      setLoaded(false);
    }
  });

  Router.events.on('routeChangeComplete', (err, url) => {
    if (!loaded) {
      setLoaded(true);
    }
  });

  Router.events.on('routeChangeError', (url) => {
    if (!loaded) {
      setLoaded(true);
    }
  });

  return (
    <>
      <LinearProgress variant={loaded ? 'determinate' : 'indeterminate'} value={100} className={cx('linearProgress')} />
      {children}
    </>
  );

};
