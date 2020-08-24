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

export interface CommentLikeActionPayloadType {
  aid: string;
  cid: string;
  ccid?: string;
  authorUid: string;
}

export interface CommentDeleteActionPayloadType {
  aid: string;
  cid: string;
  ccid?: string;
}

export type FocusableElementType =
  | HTMLAnchorElement
  | HTMLButtonElement
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement;
