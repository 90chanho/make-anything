import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import "./Gnb.scss";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import { authStoreProps } from "@src/types/auth";

function Gnb(props: { authStore?: authStoreProps }) {
  const { isAuth, setToken } = props.authStore!;
  const router = useRouter();

  const isActive = (path: string) => {
    return router.pathname.includes(path) ? "active" : "";
  };

  const signOut = () => {
    setToken();
  };

  return (
    <nav className="gnb">
      <ul>
        <li>
          <Link href="/trello">
            <a className={isActive("trello")}>트렐로</a>
          </Link>
        </li>
        <li>
          <Link href="/content2">
            <a className={isActive("content2")}>컨텐츠2</a>
          </Link>
        </li>
        <li>
          <Link href="/content3">
            <a className={isActive("content3")}>컨텐츠3</a>
          </Link>
        </li>
        <li>
          {isAuth ? (
            <a onClick={signOut}>로그아웃</a>
          ) : (
            <Link href="/signin">
              <a className={isActive("signin")}>로그인</a>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default inject(({ store }) => ({ authStore: store.AuthStore }))(
  observer(Gnb)
);
