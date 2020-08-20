import React from "react";
import "./ArticleReaction.scss";

function ArticleReaction() {
  return (
    <div className="articleReaction">
      <button>
        <i className="far fa-thumbs-up" />
        좋아요
      </button>
      <button>
        <i className="far fa-comment-alt"></i>
        댓글 달기
      </button>
      <button>
        <i className="far fa-share-square"></i>
        공유 하기
      </button>
    </div>
  );
}

export default ArticleReaction;
