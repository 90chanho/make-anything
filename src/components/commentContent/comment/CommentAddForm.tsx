import React from "react";
import { useState, useRef, useEffect } from "react";
import moment from "moment";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import Profile from "@src/components/commentContent/Profile";
import { setUid } from "@src/modules/utils/lib";
import { CommentType } from "@src/types/comment";
import AuthStore from "@stores/auth";
import "./CommentAddForm.scss";

interface Props {
  aid: string;
  cid?: string;
  commentType?: string;
  focusReCommentForm?: () => {};
  authStore?: AuthStore;
}

const CommentAddForm = (props: Props) => {
  const { aid, cid, commentType, focusReCommentForm } = props;
  const { userData } = props.authStore!;

  const input = useRef();
  const [commentContent, setCommentContent] = useState("");

  const onChange = e => {
    setCommentContent(e.target.value.trim());
  };

  const onAddComment = e => {
    if ((e.code === "enter") & commentContent.length) {
      const payload: CommentType = {
        aid: aid,
        content: commentContent,
        createDate: moment().format("YYYY-MM-DD HH:mm"),
        authorUid: userData.uid,
        likes: [],
        comments: [],
        cid: ""
      };
      setCommentContent("");
      if (commentType === "reComment" && cid) {
        payload.cid = cid;
        payload.ccid = setUid();
        // action : add re-comment
      } else {
        payload.cid = setUid();
        // action : add comment
      }
    }
  };

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
        onKeyDown={onAddComment}
      />
    </div>
  );
};

export default inject("authStore")(observer(CommentAddForm));

CommentAddForm.defaultProps = {
  commentType: "comment"
};
