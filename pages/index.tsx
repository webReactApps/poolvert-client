import Head from "next/head";
import Link from "next/link";

export default () => {
  return (
    <div>
      <Head>
        <title>Poolvert Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Link href="/login">
          <a> Login </a>
        </Link>
      </header>
      <main>
        <h1>  Home Page </h1>
      </main>
      <footer>
        Footer
      </footer>
    </div>
  );
}
