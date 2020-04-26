import Link from "next/link";
import Head from "next/head";
import cn from "classnames/bind";
import Grid from "@material-ui/core/Grid";
import { DEFAULT_META_DESCRIPTION } from "../../config/app-config";
import { IProps } from "./type";
import styles from "./index.module.scss";
import utilStyles from "../../styles/scss/utils.module.scss";

export default ({ children, title, description }: IProps) => {
  return (
    <Grid container={true} direction="column" alignItems="center" className={utilStyles.fullHeight}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description || DEFAULT_META_DESCRIPTION} />
      </Head>
      <header className={utilStyles.fullWidth}>
        <ul className={utilStyles.list}>
          <li>
            <Link href="/">
              <a> Home </a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a> Login </a>
            </Link>
          </li>
        </ul>
      </header>
      <main className={cn({ [styles.main]: true, [utilStyles.fullWidth]: true })}>
        {children}
      </main>
      <footer className={cn({ [styles.footer]: true, [utilStyles.fullWidth]: true })}>
        footer
      </footer>
    </Grid>
  );
};
