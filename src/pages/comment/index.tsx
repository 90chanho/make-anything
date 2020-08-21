import * as React from "react";
import { useMemo, useEffect } from "react";
import { Provider } from "mobx-react";
import { observer } from "mobx-react-lite";
import CommentStore from "@src/stores/comment.ts";
import DefaultLayout from "@src/components/Layout/DefaultLayout";
import ArticleWrapper from "@src/components/commentContent/article/Article";
import { onHideAllFloatLayer } from "@src/modules/utils/lib";
import "./index.scss";

function Comment() {
  const commentStore = useMemo(() => new CommentStore(), []);
  const { articleList } = commentStore;

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
    return () => {
      document.body.removeEventListener("click", handleFloatLayer);
    };
  }, []);

  return (
    <Provider commentStore={commentStore}>
      <DefaultLayout>
        <main className="articlePage">
          <h2>코멘트 기능</h2>
          <ul>
            {articleList.map(item => {
              return <ArticleWrapper key={item.aid} data={item} />;
            })}
          </ul>
        </main>
      </DefaultLayout>
    </Provider>
  );
}

export default observer(Comment);
