import { observable, action } from "mobx";
import { board } from "@src/api";

export default class TrelloStore {
  @observable boardList = [];
  @observable board = {};
  @observable lists = [];
  @observable cards = [];

  // boards
  @action.bound
  getBoardList() {
    return board.getList().then(res => {
      this.boardList = res.list;
    });
  }

  @action.bound
  getBoardData() {
    board.getData().then(res => {
      this.board = res.item;
    });
  }

  @action.bound
  addBoard() {}

  @action.bound
  editBoard() {}

  @action.bound
  removeBoard() {}

  // lists

  // cards
}
