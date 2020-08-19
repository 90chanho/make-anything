import React from "react";
import DefaultLayout from "@src/components/Layout/DefaultLayout";
import Article from "@src/components/comment/article/Article";
import { articleType } from "@src/types/comment";

function Comment() {
  const articles = [
    {
      id: 0,
      author: "user1",
      created: "Wed Aug 19 2020 18:29:45 GMT+0900"
    },
    {
      id: 1,
      author: "user1",
      created: "Thu Aug 20 2020 18:29:45 GMT+0900"
    },
    {
      id: 2,
      author: "user1",
      created: "Fri Aug 21 2020 18:29:45 GMT+0900"
    },
    {
      id: 3,
      author: "user1",
      created: "Sat Aug 22 2020 18:29:45 GMT+0900"
    }
  ];

  return (
    <DefaultLayout>
      코멘트 기능
      <ul>
        {articles.map(item => {
          return <Article key={item.id} data={item} />;
        })}
      </ul>
    </DefaultLayout>
  );
}

export default Comment;
