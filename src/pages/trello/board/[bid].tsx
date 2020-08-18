import React from "react";
import DefaultLayout from "@src/components/Layout/DefaultLayout";
import { useRouter } from "next/router";
import Card from "@src/components/trello/Card";

const BoardID = () => {
  const router = useRouter();
  const bid = router.query.bid;
  console.log(router);

  return (
    <DefaultLayout>
      <p>보드 {bid}</p>
      <Card />
    </DefaultLayout>
  );
};

export default BoardID;
