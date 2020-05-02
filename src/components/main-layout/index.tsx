import Link from 'next/link';
import Head from 'next/head';
import classNames from 'classnames/bind';
import Grid from '@material-ui/core/Grid';
import { DEFAULT_META_DESCRIPTION } from '../../config/app-config';
import { IProps } from './type';
import styles from './index.module.scss';
import utilStyles from '../../styles/scss/utils.module.scss';

const cx = classNames.bind(styles);
const util_cx = classNames.bind(utilStyles);

export default ({ children, title, description }: IProps) => {
  return (
    <Grid container={true} className={util_cx('flex-column-flex-start', 'full-height', 'flex-nowrap', 'pt5')}>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description || DEFAULT_META_DESCRIPTION} />
      </Head>
      <header className={util_cx('full-width')}>
        <ul className={util_cx('list')}>
          <li>
            <Link href='/'>
              <a> Home </a>
            </Link>
          </li>
          <li>
            <Link href='/login'>
              <a> Login </a>
            </Link>
          </li>
        </ul>
      </header>
      <main className={cx('main')}>
        {children}
      </main>
      <footer className={cx('footer')}>
        footer
      </footer>
    </Grid>
  );
};
