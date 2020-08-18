export interface authStoreProps {
  isAuth: boolean;
  replaceToSigninPage: (router: {}, asPath: string) => void;
  setToken: (token?: string) => void;
}
