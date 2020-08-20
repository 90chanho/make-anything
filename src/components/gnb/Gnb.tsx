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
          <Link href="/comment">
            <a className={isActive("commentContent")}>컨텐츠</a>
          </Link>
        </li>
        <li>
          <Link href="/noAuth">
            <a className={isActive("noAuth")}>No Auth Page</a>
          </Link>
        </li>
        <li>
          <Link href="/needAuth">
            <a className={isActive("needAuth")}>Auth Page</a>
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
