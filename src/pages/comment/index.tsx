import * as React from "react";
import { useMemo, useEffect } from "react";
import { Provider } from "mobx-react";
import { observer } from "mobx-react-lite";
import CommentStore from "@src/stores/comment.ts";
import DefaultLayout from "@src/components/Layout/DefaultLayout";
import Articles from "@src/components/commentContent/article/Articles";
import { onHideAllFloatLayer } from "@src/modules/utils/lib";
import "./index.scss";

function Comment() {
  const commentStore = useMemo(() => new CommentStore(), []);

  const handleFloatLayer = (e: MouseEvent) => {
    if (
      !(e.target as HTMLElement).classList.contains("floatLayer") &&
      !(e.target as HTMLElement).classList.contains("toggleFloatLayerButton")
    ) {
      onHideAllFloatLayer();
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleFloatLayer);
    const storedArticles = window.localStorage.getItem("anthony-comment");

    if (storedArticles) {
      const localStorageData = JSON.parse(storedArticles);
      commentStore.setArticleList(localStorageData);
    }

    return () => {
      document.body.removeEventListener("click", handleFloatLayer);
    };
  }, []);

  return (
    <Provider commentStore={commentStore}>
      <DefaultLayout>
        <main className="articlePage">
          <h2>코멘트 기능</h2>
          <Articles />
        </main>
      </DefaultLayout>
    </Provider>
  );
}

export default observer(Comment);
