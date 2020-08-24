import { computed, observable, action } from "mobx";
import dummyData from "@src/assets/dummy.json";
import { RootData } from "@src/types/comment";
import {
  CommentType,
  ArticleType,
  CommentLikeActionPayloadType,
  CommentDeleteActionPayloadType
} from "@src/types/comment";

console.log("this.data =", dummyData.articles);

export default class CommentStore {
  @observable data: RootData = dummyData;
  @observable articleList: ArticleType[] = this.data.articles;

  @computed
  get articles() {
    return this.data.articles;
  }

  @action.bound
  addComment(payload: CommentType) {
    this.articleList = this.articleList.map(article => {
      if (article.aid === payload.aid) article.comments.push(payload);
      return article;
    });
  }

  @action.bound
  addReComment(payload: CommentType) {
    this.articleList = this.articleList.map(article => {
      if (article.aid === payload.aid) {
        article.comments.forEach(
          comment =>
            comment.cid === payload.cid && comment.comments.push(payload)
        );
      }
      return article;
    });
  }

  @action.bound
  deleteComment(payload: CommentDeleteActionPayloadType) {
    console.log("payload :", payload);
    this.articleList = this.articleList.map(article => {
      if (article.aid !== payload.aid) return article;
      const targetCommentIndex = article.comments.findIndex(
        comment => comment.cid === payload.cid
      );
      console.log("targetCommentIndex =", targetCommentIndex);
      article.comments.splice(targetCommentIndex, 1);
      console.log("article =", article);
      return article;
    });
  }

  @action.bound
  deleteReComment(payload: CommentDeleteActionPayloadType) {
    this.articleList = this.articleList.map(article => {
      if (article.aid !== payload.aid) return article;
      const targetCommentIndex = article.comments.findIndex(
        comment => comment.cid === payload.cid
      );
      const targetReCommentIndex = article.comments[
        targetCommentIndex
      ].comments.findIndex(reComment => reComment.ccid === payload.ccid);
      article.comments[targetCommentIndex].comments.splice(
        targetReCommentIndex,
        1
      );
      return article;
    });
  }

  @action.bound
  likeComment(payload: CommentLikeActionPayloadType) {
    this.articleList = this.articleList.map(article => {
      if (article.aid !== payload.aid) return article;
      article.comments.forEach(
        comment =>
          comment.cid === payload.cid && comment.likes.push(payload.authorUid)
      );
      return article;
    });
  }

  @action.bound
  likeReComment(payload: CommentLikeActionPayloadType) {
    this.articleList = this.articleList.map(article => {
      if (article.aid !== payload.aid) return article;
      const targetComment = article.comments.filter(
        comment => comment.cid === payload.cid
      );
      const targetReComment = targetComment[0].comments.filter(
        recomment => recomment.ccid === payload.ccid
      );
      targetReComment[0].likes.push(payload.authorUid);
      console.log(JSON.stringify(article));
      return article;
    });
  }

  @action.bound
  cancelLikeComment(payload: CommentLikeActionPayloadType) {
    this.articleList = this.articleList.map(article => {
      if (article.aid !== payload.aid) return article;
      const targetComment = article.comments.filter(
        comment => comment.cid === payload.cid
      );
      const targetIndex = targetComment[0].likes.findIndex(
        liker => liker === payload.authorUid
      );
      targetComment[0].likes.splice(targetIndex, 1);
      return article;
    });
  }

  @action.bound
  cancelLikeReComment(payload: CommentLikeActionPayloadType) {
    this.articleList = this.articleList.map(article => {
      if (article.aid !== payload.aid) return article;
      const targetComment = article.comments.filter(
        comment => comment.cid === payload.cid
      );
      const targetReComment = targetComment[0].comments.filter(
        recomment => recomment.ccid === payload.ccid
      );
      const targetIndex = targetReComment[0].likes.findIndex(liker => {
        return liker === payload.authorUid;
      });
      targetReComment[0].likes.splice(targetIndex, 1);
      return article;
    });
  }
}
