import Head from "next/head";
import Header from "./header";

type LayoutProps = {
  user?: any;
  loading?: boolean;
  children: React.ReactNode;
};

const Layout = ({ user, loading = false, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Airbnb Clone-Become a Host</title>
      </Head>

      {/* <Header user={user} loading={loading} /> */}
      <Header />

      <main>
        <div className="">{children}</div>
      </main>
    </>
  );
};

export default Layout;
