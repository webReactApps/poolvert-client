import Layout from "../components/mainLayout";
import utilStyles from "../styles/scss/utils.module.scss";

export default () => {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p> this will be Home </p>
      </section>
    </Layout>
  );
};
