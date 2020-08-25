import React from "react";
import Comment from "@src/components/commentContent/comment/Comment";
import { ArticleType, CommentType } from "@src/types/comment";
import CommentAddForm from "@src/components/commentContent/comment/CommentAddForm";

function ArticleComment({ articleData }: { articleData: ArticleType }) {
  return (
    <div>
      <CommentAddForm aid={articleData.aid} />
      <ul>
        {articleData.comments &&
          articleData.comments.map((comment: CommentType) => {
            return (
              <Comment
                key={comment.cid}
                articleData={articleData}
                commentData={comment}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default ArticleComment;
