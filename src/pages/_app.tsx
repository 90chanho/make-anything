import * as React from "react";
import { useState, useEffect, useMemo } from "react";
import { AppProps } from "next/app";
import Router from "next/router";
import { Provider } from "mobx-react";
import Loading from "@src/components/loading/Loading";
import "../styles/global.scss";
import "../styles/antd.less";
import AuthStore from "@src/stores/auth";

export default function App({ Component, pageProps }: AppProps) {
  const [pageLoading, setPageLoading] = useState(false);
  const authStore = useMemo(() => new AuthStore(), []);

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

    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/b34f7f8ad2.js";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <Provider authStore={authStore}>
      <Component
        {...pageProps}
        pageLoading={pageLoading}
        Loading={<Loading />}
      />
    </Provider>
  );
}
