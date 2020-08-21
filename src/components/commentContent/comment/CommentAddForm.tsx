import React from "react";
import { useCallback, useState, useRef, useEffect } from "react";
import moment from "moment";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import Profile from "@src/components/commentContent/Profile";
import { setUid } from "@src/modules/utils/lib";
import { CommentType } from "@src/types/comment";
import AuthStore from "@stores/auth";
import CommentStore from "@stores/comment";
import "./CommentAddForm.scss";

interface Props {
  aid: string;
  cid?: string;
  commentType?: string;
  focusReCommentForm?: boolean;
  authStore?: AuthStore;
  commentStore?: CommentStore;
}

const CommentAddForm = (props: Props) => {
  const { aid, cid, commentType, focusReCommentForm } = props;
  const { userData } = props.authStore!;
  const { addComment, addReComment } = props.commentStore!;

  const input = useRef<HTMLInputElement | null>(null);
  const [commentContent, setCommentContent] = useState("");

  const onChange = useCallback(
    e => {
      setCommentContent(e.target.value);
    },
    [setCommentContent]
  );

  const onAddComment = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && commentContent.length) {
        const payload: CommentType = {
          aid: aid,
          content: commentContent.trim(),
          createDate: moment().format("YYYY-MM-DD HH:mm"),
          authorUid: userData.uid,
          likes: [],
          comments: [],
          cid: ""
        };
        if (commentType === "reComment" && cid) {
          payload.cid = cid;
          payload.ccid = setUid();
          addReComment(payload);
        } else {
          payload.cid = setUid();
          addComment(payload);
        }
        setCommentContent("");
      }
    },
    [aid, commentContent, userData]
  );

  useEffect(() => {
    return () => {
      if (focusReCommentForm && input.current) {
        input.current.focus();
      }
    };
  });

  return (
    <div className="commentAddForm">
      <Profile type="small" />
      <input
        ref={input}
        type="text"
        placeholder="댓글을 입력하세요..."
        value={commentContent}
        onChange={onChange}
        onKeyPress={e => onAddComment(e)}
      />
    </div>
  );
};

export default inject(({ authStore, commentStore }) => ({
  authStore,
  commentStore
}))(observer(CommentAddForm));

CommentAddForm.defaultProps = {
  commentType: "comment"
};
