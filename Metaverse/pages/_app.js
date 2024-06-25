import Head from 'next/head';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Metaverse.</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="https://img.icons8.com/?size=100&id=25230&format=png&color=2c0046" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
