import * as React from "react";
import { useState, useEffect } from "react";
import { AppProps } from "next/app";
import Router from "next/router";
import Loading from "@src/components/loading/Loading";
import "../styles/global.scss";
import "../styles/antd.less";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };

    const end = () => {
      console.log("end");
      setLoading(false);
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

  return <>{loading ? <Loading /> : <Component {...pageProps} />}</>;
}
