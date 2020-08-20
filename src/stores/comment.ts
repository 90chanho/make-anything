import { computed, observable } from "mobx";
import dummyData from "@src/assets/dummy.json";
import { RootData } from "@src/types/comment";

export class CommentStore {
  @observable data: RootData = dummyData;

  @computed
  get articles() {
    return this.data.articles;
  }
}
