import React from "react";
import { articleType } from "@src/types/comment";
import { articleStyle } from "@src/styles";

function Article({ data }: articleType) {
  return <li className={articleStyle.article}>안녕</li>;
}

export default Article;
