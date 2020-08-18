import React from "react";
import Head from "next/head";
import DefaultLayout from "@src/components/Layout/DefaultLayout";
import Landing from "@src/components/landing/Landing";
import TrelloStore from "@stores/trello";
import { Provider } from "mobx-react";

const trelloStore = new TrelloStore();

function Home() {
  return (
    <DefaultLayout pageName="home">
      <Head>
        <title>인덱스 타이틀</title>
      </Head>
      <Provider trelloStore={trelloStore}>
        <Landing />
      </Provider>
    </DefaultLayout>
  );
}

export default Home;
