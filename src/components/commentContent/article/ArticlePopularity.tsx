import React from "react";
import { ArticleType } from "@src/types/comment";
import "./ArticlePopularity.scss";

const ArticlePopularity = (props: { articleData: ArticleType[] }) => {
  const { articleData } = props;
  console.log("props =", props);
  return (
    <div className="articlePopularity">
      <div>
        <i className="fas fa-thumbs-up"></i> 좋아요
      </div>
      {articleData.comments && (
        <div>댓글 {articleData.comments.length || 0} 개</div>
      )}
    </div>
  );
};

export default ArticlePopularity;
