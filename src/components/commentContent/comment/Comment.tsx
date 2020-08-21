import React from "react";
import { useState } from "react";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import AuthStore from "@stores/auth";
import { ArticleType, CommentType } from "@src/types/comment";
import { AuthType } from "@src/types/auth";
import Profile from "@src/components/commentContent/Profile";
import CommentContent from "@src/components/commentContent/comment/CommentContent";
import CommentAddForm from "@src/components/commentContent/comment/CommentAddForm";
import "./Comment.scss";

function Comment({
  authStore,
  articleData,
  commentData
}: {
  authStore?: AuthStore;
  articleData: ArticleType;
  commentData: CommentType;
}) {
  const { userData }: { userData: AuthType } = authStore!;
  const [handleReCommentForm, setHandleReCommentForm] = useState({
    hideReCommentForm: true,
    focusReCommentForm: false
  });

  const showReCommentForm = () => {
    setHandleReCommentForm({
      hideReCommentForm: false,
      focusReCommentForm: true
    });
  };

  return (
    <li className="comment">
      <div className="commentContent">
        <Profile type="small" userData={userData} />
        <CommentContent
          commentData={commentData}
          userData={userData}
          showReCommentForm={showReCommentForm}
        />
      </div>
      <ul className="reCommentList">
        {commentData.comments.map(recomment => {
          return (
            <li key={recomment.ccid} className="reCommentItem">
              <Profile type="small" />
              <CommentContent
                commentType="reComment"
                commentData={recomment}
                userData={userData}
              />
            </li>
          );
        })}
        {!handleReCommentForm.hideReCommentForm && (
          <li>
            <CommentAddForm
              commentType="reComment"
              aid={articleData.aid}
              cid={commentData.cid}
              focusReCommentForm={handleReCommentForm.focusReCommentForm}
            />
          </li>
        )}
      </ul>
    </li>
  );
}

export default inject("authStore")(observer(Comment));
