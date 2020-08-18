import React from "react";
import DefaultLayout from "@src/components/Layout/DefaultLayout";
import Trello from "@src/components/trello/Trello";
import { Provider } from "mobx-react";
import TrelloStore from "@stores/trello";

const trelloStore = new TrelloStore();

function TrelloIndexPage() {
  return (
    <DefaultLayout>
      <Provider trelloStore={trelloStore}>
        <Trello />
      </Provider>
    </DefaultLayout>
  );
}

export default TrelloIndexPage;
