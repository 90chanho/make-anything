import { computed, observable, action } from "mobx";
import dummyData from "@src/assets/dummy.json";
import { RootData } from "@src/types/comment";
import {
  CommentType,
  ArticleType,
  CommentLikeActionPayloadType,
  CommentDeleteActionPayloadType
} from "@src/types/comment";

export default class CommentStore {
  @observable data: RootData = dummyData;
  @observable articleList: ArticleType[] = dummyData.articles;

  @computed
  get articles() {
    return this.data.articles;
  }

  setItemArticlesLocalStorage = (data: ArticleType[]) => {
    window.localStorage.setItem("anthony-comment", JSON.stringify(data));
  };

  @action.bound
  setArticleList(data: ArticleType[]) {
    this.articleList = data;
  }

  @action.bound
  sortCommentList(comments: CommentType[]) {
    comments.sort((a, b) => {
      if (a.pin && b.pin) {
        if (a.createDate > b.createDate) {
          return -1;
        }
        return 1;
      } else if (a.pin && !b.pin) {
        return -1;
      } else if (!a.pin && b.pin) {
        return 1;
      }
    });
  }

  @action.bound
  pinComment() {}

  @action.bound
  deletePinComment() {}

  @action.bound
  addComment(payload: CommentType) {
    console.log("payload =", payload);
    this.articleList = this.articleList.map(article => {
      if (article.aid === payload.aid) article.comments.push(payload);
      return article;
    });
    this.setItemArticlesLocalStorage(this.articleList);
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
    this.setItemArticlesLocalStorage(this.articleList);
  }

  @action.bound
  deleteComment(payload: CommentDeleteActionPayloadType) {
    this.articleList = this.articleList.map(article => {
      if (article.aid !== payload.aid) return article;
      const targetCommentIndex = article.comments.findIndex(
        comment => comment.cid === payload.cid
      );
      article.comments.splice(targetCommentIndex, 1);
      return article;
    });
    this.setItemArticlesLocalStorage(this.articleList);
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
    this.setItemArticlesLocalStorage(this.articleList);
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
    this.setItemArticlesLocalStorage(this.articleList);
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
      return article;
    });
    this.setItemArticlesLocalStorage(this.articleList);
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
    this.setItemArticlesLocalStorage(this.articleList);
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
    this.setItemArticlesLocalStorage(this.articleList);
  }
}
