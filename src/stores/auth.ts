import { action, observable } from "mobx";
import authData from "@src/assets/auth.json";
import { AuthType } from "@src/types/auth";

const initValue = {
  auth: authData.auth
};

export default class AuthStore {
  @observable userData = initValue.auth;

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
  signin(data: AuthType) {
    const isPass = this.userValidationCheck(data.uid);
    if (isPass) {
      this.userData = data;
    } else {
      this.userData = data;
    }
    return isPass;
  }

  userValidationCheck(uid: string) {
    const isUser = (user: AuthType) => user.uid === uid;
    return authData.users.some(isUser);
  }
}
