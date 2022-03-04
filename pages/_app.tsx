import "../styles/global.css";

import Head from "next/head";
import Layout from "../components/layout";

function MyApp({ Component, pageProps, deviceType }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
