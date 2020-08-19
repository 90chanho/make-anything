import * as React from "react";
import { useState, useEffect } from "react";
import { AppProps } from "next/app";
import Router from "next/router";
import Loading from "@src/components/loading/Loading";
import "../styles/global.scss";
import "../styles/antd.less";

export default function App({ Component, pageProps }: AppProps) {
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      setPageLoading(true);
    };

    const end = () => {
      setPageLoading(false);
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <Component {...pageProps} pageLoading={pageLoading} Loading={<Loading />} />
  );
}
