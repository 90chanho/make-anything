import AuthStore from "./auth";

export default class RootStore {
  constructor() {
    this.AuthStore = new AuthStore();
  }
}
