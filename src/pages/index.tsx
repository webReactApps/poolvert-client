import Layout from "../components/main-layout";
import useSWR from "../components/swr";
import { login } from "../api/account";
import utilStyles from "../styles/scss/utils.module.scss";

export default () => {
  const { data, error } = useSWR(login.key, login.fetcherOptions);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  console.log({ data, error });
  return (
    <Layout title="Poolvert Home" description="Poolvert Web App Main Page">
      <section className={utilStyles.headingMd}>
        <p> this will be Home </p>
      </section>
    </Layout>
  );
};
