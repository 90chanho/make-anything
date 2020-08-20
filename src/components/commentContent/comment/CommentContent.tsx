import React from "react";
import { useState, useRef } from "react";
import { CommentType } from "@src/types/comment";
import { AuthType } from "@src/types/auth";
import Modal from "@src/components/common/Modal";
import "./CommentContent.scss";

interface Props {
  commentData: CommentType;
  userData: AuthType;
  showReCommentForm: () => void;
  commentType?: string;
}

const CommentContent = ({
  commentData,
  userData,
  showReCommentForm,
  commentType = "comment"
}: Props) => {
  const floatLayer = useRef<React.ReactNode | null>(null);
  const [isShowCommentDeleteModal, setIsShowCommentDeleteModal] = useState(
    false
  );

  const onDeleteComment = () => {
    const { aid, cid } = commentData;
    const payload = {
      aid,
      cid
    };
    // action
  };

  const onShowCommentDeleteModal = () => {
    setIsShowCommentDeleteModal(true);
  };

  const onHideCommentDeleteModal = () => {
    setIsShowCommentDeleteModal(false);
  };

  const onToggleFloatLayer = e => {
    e.stopPropagation();
    if (
      floatLayer.current &&
      floatLayer.current.classList.contains("is-show")
    ) {
      floatLayer.current.classList.remove("is-show");
    }
    if (
      floatLayer.current &&
      !floatLayer.current.classList.contains("is-show")
    ) {
      onHideCommentDeleteModal();
      floatLayer.current.classList.add("is-show");
    }
  };

  const handleKeydown = e => {
    e.keyCode === 13 && onToggleFloatLayer(e);
  };

  return (
    <div className="commentContent">
      <div className="contentWrapper">
        <div className="commentBox">
          <p className="author">{userData.name}</p>
          <p className="content">{commentData.content}</p>
        </div>
        <div className="commentLikes" hidden={!commentData.likes.length}>
          <i className="fas fa-thumbs-up" />
          <span>{commentData.likes.length}</span>
        </div>
        {commentType === "comment" && (
          <div
            className="commentHandle"
            tabIndex={0}
            onClick={onToggleFloatLayer}
            onKeyDown={handleKeydown}
          >
            <i className="fas fa-ellipsis-h clickable toggleFloatLayerButton" />
          </div>
        )}
        <div className="handlebuttonWrapper floatLayer" ref={floatLayer}>
          <button onClick={onShowCommentDeleteModal}>삭제하기</button>
        </div>
      </div>
      {isShowCommentDeleteModal && (
        <Modal
          title="댓글을 삭제하시겠습니까?"
          desc="해당 댓글의 답글들도 전부 삭제됩니다."
          onClose={onHideCommentDeleteModal}
        >
          <button className="cancel" onClick={onHideCommentDeleteModal}>
            취소
          </button>
          <button className="action" onClick={onDeleteComment}>
            확인
          </button>
        </Modal>
      )}
      {/*<CommentReaction
        commentType={commentType}
        commentData={commentData}
        showReCommentForm={showReCommentForm}
      />*/}
    </div>
  );
};

export default CommentContent;
