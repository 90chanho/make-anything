import React, { useEffect, useState } from "react";
import Link from "next/link";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import { Spin } from "antd";
import { useRouter } from "next/router";
import { authStoreProps } from "@src/types/auth";
import { boardType } from "@src/types/trello";
import TrelloStore from "@stores/trello";

function Trello(props: {
  authStore?: authStoreProps;
  trelloStore?: TrelloStore;
}) {
  console.log("트렐로 props =", props);
  const router = useRouter();
  const { isAuth, replaceToSigninPage } = props.authStore!;
  const [boardList, setBoardList] = useState<boardType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuth) {
      replaceToSigninPage(router, router.asPath);
    }
    window.setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <Spin tip="Loading..." />
      ) : (
        <ul>
          <p>보드 리스트</p>
          {boardList.length ? (
            boardList.map(board => {
              return (
                <Link
                  href="/trello/board/[bid]"
                  as={`/trello/board/${board.id}`}
                >
                  <li key={board.id}>
                    <a>보드 {board.id}</a>
                  </li>
                </Link>
              );
            })
          ) : (
            <p>생성된 보드가 없습니다..</p>
          )}
        </ul>
      )}
    </div>
  );
}

export default inject(({ store, trelloStore }) => ({
  authStore: store.AuthStore,
  trelloStore: trelloStore
}))(observer(Trello));
