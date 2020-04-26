import Layout from "../components/main-layout";
import utilStyles from "../styles/scss/utils.module.scss";

export default () => {
  return (
    <Layout title="Poolvert Home" description="Poolvert Web App Main Page">
      <section className={utilStyles.headingMd}>
        <p> this will be Home </p>
      </section>
    </Layout>
  );
};
