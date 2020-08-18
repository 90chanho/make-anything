import React, { useCallback, useState } from "react";
import { Input, Button } from "antd";
import { observer } from "mobx-react-lite";
import { inject } from "mobx-react";
import { useRouter } from "next/router";
import "./SigninForm.scss";
import { auth } from "@src/api";
import { authStoreProps } from "@src/types/auth";

function SigninForm(props: { authStore?: authStoreProps }) {
  const { setToken } = props.authStore!;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const signIn = useCallback(() => {
    auth
      .login({
        email,
        password
      })
      .then(res => {
        if (res.status === 401) {
          alert("로그인 정보가 올바르지 않습니다.");
        } else {
          setToken(res.accessToken);
          router.query.rPath
            ? router.replace(`${router.query.rPath}`)
            : router.replace("/");
        }
      });
  }, [email, password]);

  return (
    <div className="signinForm">
      <form>
        <label htmlFor="userId">
          아이디
          <Input
            id="userId"
            type="text"
            placeholder="test@test.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="userPassword">
          패스워드
          <Input
            id="userPassword"
            type="password"
            placeholder="123123"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <Button className="signinButton" onClick={signIn}>
          로그인
        </Button>
      </form>
    </div>
  );
}

export default inject(({ store }) => ({ authStore: store.AuthStore }))(
  observer(SigninForm)
);
