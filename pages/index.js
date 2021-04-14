import Head from "next/head";
import Layout from "../components/layout/Layout";

const Home = () => {
  return (
    <>
      <Head>
        <title>Page Titel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section>
          <div className="container">
            <h1>Basix Next js Setup for Responsive Navbar</h1>
            <p>Paula Marcella WebDev</p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
