import React from "react";
import { ArticleType } from "@src/types/comment";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import CommentStore from "@stores/comment";
import "./Article.scss";
import ArticleHeader from "@src/components/commentContent/article/ArticleHeader";
import ArticleContent from "@src/components/commentContent/article/ArticleContent";
import ArticlePopularity from "@src/components/commentContent/article/ArticlePopularity";
import ArticleReaction from "@src/components/commentContent/article/ArticleReaction";
import ArticleComment from "@src/components/commentContent/article/ArticleComment";

function ArticleWrapper({ commentStore }: { commentStore: CommentStore }) {
  const { articleList }: { articleList: ArticleType[] } = commentStore;
  console.log("commentStore =", commentStore);
  return (
    <li className="article">
      <article>
        <ArticleHeader />
        <ArticleContent />
        <footer>
          <ArticlePopularity articleData={articleList} />
          <ArticleReaction />
          <ArticleComment articleData={articleList} />
        </footer>
      </article>
    </li>
  );
}

export default inject("commentStore")(observer(ArticleWrapper));
