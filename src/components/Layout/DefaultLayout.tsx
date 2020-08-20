import * as React from "react";
import Head from "next/head";
import { Provider } from "mobx-react";
import Header from "@src/components/header/Header";
import Footer from "@src/components/footer/Footer";
import "./DefaultLayout.scss";
import RootStore from "@src/stores";

const store = new RootStore();

interface LayoutProps {
  pageName?: string;
  children: React.ReactNode;
}

function DefaultLayout({ pageName, children }: LayoutProps) {
  return (
    <Provider store={store}>
      <div className="app">
        <Head>
          <title>{pageName || "Make Anything"}</title>
        </Head>
        <Header />
        {children}
        <Footer />
      </div>
    </Provider>
  );
}

export default DefaultLayout;
