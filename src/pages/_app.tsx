import * as React from "react";
import { useEffect, useMemo } from "react";
import { AppProps } from "next/app";
import { Provider } from "mobx-react";
import "../styles/global.scss";
import "../styles/antd.less";
import AuthStore from "@src/stores/auth";

export default function App({ Component, pageProps }: AppProps) {
  const authStore = useMemo(() => new AuthStore(), []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/b34f7f8ad2.js";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    return () => {};
  }, []);

  return (
    <Provider authStore={authStore}>
      <Component {...pageProps} />
    </Provider>
  );
}
