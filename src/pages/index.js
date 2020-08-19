import React from "react";
import Head from "next/head";
import DefaultLayout from "@src/components/Layout/DefaultLayout";
import Landing from "@src/components/landing/Landing";

function Home(props) {
  const { pageLoading, Loading } = props;
  console.log("props", props);
  return (
    <DefaultLayout pageName="home">
      <Head>
        <title>인덱스 타이틀</title>
      </Head>
      {pageLoading ? Loading : <Landing />}
    </DefaultLayout>
  );
}

export default Home;
