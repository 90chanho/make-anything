import React from "react";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import CommentStore from "@stores/comment";
import "./Articles.scss";
import ArticleHeader from "@src/components/commentContent/article/ArticleHeader";
import ArticleContent from "@src/components/commentContent/article/ArticleContent";
import ArticlePopularity from "@src/components/commentContent/article/ArticlePopularity";
import ArticleReaction from "@src/components/commentContent/article/ArticleReaction";
import ArticleComment from "@src/components/commentContent/article/ArticleComment";

function Articles(props: { commentStore?: CommentStore }) {
  const { articleList } = props.commentStore!;
  return (
    <ul>
      {articleList.map(article => {
        return (
          <li key={article.aid} className="article">
            <article>
              <ArticleHeader />
              <ArticleContent />
              <footer>
                <ArticlePopularity articleData={article} />
                <ArticleReaction />
                <ArticleComment articleData={article} />
              </footer>
            </article>
          </li>
        );
      })}
    </ul>
  );
}

export default inject("commentStore")(observer(Articles));
