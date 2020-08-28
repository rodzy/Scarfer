import React from "react";
import { AppProps } from "next/app";
import "../styles/index.css";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps}></Component>;
}

export default App;
