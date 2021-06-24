import React from "react";
import "../styles/globals.css";
import "../styles/variables.css";
import Head from "next/head";
import { isMobile } from "react-device-detect";
import Message from "../src/utils/Message";
import { Provider } from "react-redux";
import store from "../src/containers/redux/store";

const BrowserContent = ({ text }) => {
  return <p className="home-txt">{text}</p>;
};

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Trollbasket</title>
        <link rel="icon" href="#" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="theme-color" content="rgba(28, 90, 83, 1)" />
        <script
          src="https://kit.fontawesome.com/6f42b1cf6f.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      {isMobile ? (
        <Provider store={store}>
          <Message>
            <Component {...pageProps} />
          </Message>
        </Provider>
      ) : (
        <BrowserContent text="Kindly view this page on a mobile phone." />
      )}
    </React.Fragment>
  );
}

export default MyApp;
