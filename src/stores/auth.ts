import { action, observable } from "mobx";
import axios from "axios";

export default class AuthStore {
  @observable
  isAuth = false;

  @action
  replaceToSigninPage(
    router: {
      replace: (url: string) => {};
    },
    asPath: string
  ) {
    router.replace(`/signin?rPath=${encodeURIComponent(asPath)}`);
  }

  @action.bound
  setToken(token?: string) {
    if (token) {
      localStorage.setItem("maAuth", token);
      this.isAuth = true;
      console.log("로그인 완료");
    } else {
      localStorage.removeItem("maAuth");
      this.isAuth = false;
      console.log("로그아웃 완료");
    }
    axios.defaults.headers.common["Authorization"] = token
      ? `Bearer ${token}`
      : null;
  }
}
