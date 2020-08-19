import { action, observable } from "mobx";
import axios from "axios";

export class CommentStore {
  @observable articles = [];
}
