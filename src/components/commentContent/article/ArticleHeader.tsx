import React from "react";
import Profile from "@src/components/commentContent/Profile";
import "./ArticleHeader.scss";

const ArticleHeader = () => {
  return (
    <div className="articleHeader">
      <Profile />
      <div className="articleInfo">
        <p className="author">Author</p>
        <p className="createDate">createDate</p>
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
};

export default ArticleHeader;
