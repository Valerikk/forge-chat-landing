import Head from "next/head";
import Integration from "../modules/integration/components/Integration";

export default function Feature() {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="./assets/fonts/Gilroy/stylesheet.css"
          rel="stylesheet"
        ></link>
      </Head>
        <Integration/>
    </React.Fragment>
  );
}