import Link from "next/link";
import styles from "./index.module.scss";
import utilStyles from "../../styles/scss/utils.module.scss";

export default ({ children, home = false }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={utilStyles.headingLg}>
          <Link href={home ? "/login" : "/"}>
            <a className={utilStyles.colorInherit}> {"header --- " + (home ? "Login" : "Back Home")} </a>
          </Link>
        </h2>
      </header>
      <main>{children}</main>
      <footer>
        <div className={styles.backToHome}>
          <Link href={home ? "/login" : "/"}>
            <a> {"footer --- " + (home ? "Login" : "Back Home")} </a>
          </Link>
        </div>
      </footer>
    </div>
  );
};
