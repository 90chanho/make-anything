export interface ArticleType {
  aid: string;
  authorUid: string;
  createDate: string;
  content: string;
  likes: string[];
  comments: CommentType[];
}

export interface CommentType extends ArticleType {
  cid: string;
  ccid?: string;
}

export interface RootData {
  articles: ArticleType[];
}
