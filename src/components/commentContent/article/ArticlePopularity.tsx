import React from "react";
import { ArticleType } from "@src/types/comment";
import "./ArticlePopularity.scss";

const ArticlePopularity = ({ articleData }: { articleData: ArticleType }) => {
  return (
    <div className="articlePopularity">
      <div>
        <i className="fas fa-thumbs-up"></i> 좋아요
      </div>
      <div hidden={!articleData.comments.length}>
        댓글 {articleData.comments ? articleData.comments.length : 0} 개
      </div>
    </div>
  );
};

export default ArticlePopularity;
