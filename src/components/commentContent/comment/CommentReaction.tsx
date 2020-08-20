import React from "react";
import moment from "moment";

function CommentReaction() {
  return (
    <div>
      <button
        onClick={
          commentType === "comment"
            ? this.handleLikeComment
            : this.handleLikeReComment
        }
        className={`buttonLike ${
          this.onCheckLikedCurrentUser() ? "liked" : "unliked"
        }`}
      >
        좋아요
      </button>
      <button
        hidden={commentType === "reComment"}
        className="buttonReComment"
        onClick={showReCommentForm}
      >
        답글 달기
      </button>
      <span className="createDate">
        {moment(commentData.createDate).fromNow()}
      </span>
    </div>
  );
}

export default CommentReaction;
