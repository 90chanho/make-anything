import React from "react";
import moment from "moment";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import AuthStore from "@stores/auth";
import "./CommentReaction.scss";
import CommentStore from "@stores/comment";

interface Props {
  commentType: any;
  commentData: any;
  showReCommentForm: any;
  authStore?: AuthStore;
  commentStore?: CommentStore;
}

function CommentReaction(props: Props) {
  const { commentType = "comment", commentData, showReCommentForm } = props;
  const { userData } = props.authStore!;
  const {
    likeComment,
    likeReComment,
    cancelLikeComment,
    cancelLikeReComment
  } = props.commentStore!;

  const handleLikeComment = () => {
    const payload = {
      aid: commentData.aid,
      cid: commentData.cid,
      authorUid: commentData.authorUid
    };
    const isAlreadyLiked = onCheckLikedCurrentUser();
    if (isAlreadyLiked) {
      cancelLikeComment(payload);
    } else {
      likeComment(payload);
    }
  };

  const handleLikeReComment = () => {
    const payload = {
      aid: commentData.aid,
      cid: commentData.cid,
      ccid: commentData.ccid,
      authorUid: commentData.authorUid
    };
    const isAlreadyLiked = onCheckLikedCurrentUser();
    if (isAlreadyLiked) {
      cancelLikeReComment(payload);
    } else {
      likeReComment(payload);
    }
  };

  const onCheckLikedCurrentUser = () => {
    const { uid } = userData;
    const { likes } = commentData;

    let alreadyChecked = false;
    likes.forEach((like: string) => {
      like === uid && (alreadyChecked = true);
    });
    return alreadyChecked;
  };

  return (
    <div className="commentReaction">
      <button
        onClick={
          commentType === "comment" ? handleLikeComment : handleLikeReComment
        }
        className={`buttonLike ${
          onCheckLikedCurrentUser() ? "liked" : "unliked"
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

export default inject(({ authStore, commentStore }) => ({
  authStore,
  commentStore
}))(observer(CommentReaction));
