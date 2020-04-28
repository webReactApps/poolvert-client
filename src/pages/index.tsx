import { MainLayout, useSWR } from "../components";
import { account } from "../api";
import utilStyles from "../styles/scss/utils.module.scss";

export default () => {
  const { data, error } = useSWR(account.getProfile());
  console.log({ data, error });
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <MainLayout title="Poolvert Home" description="Poolvert Web App Main Page">
      <section className={utilStyles.p5}>
        <p> this will be Home </p>
      </section>
    </MainLayout>
  );
};
