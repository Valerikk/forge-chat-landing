import Head from "next/head";
import Reasons from "../modules/reasons/components/reasons";

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
        <Reasons/>
    </React.Fragment>
  );
}