import axios, { AxiosResponse } from "axios";

const DOMAIN = "http://localhost:3000";

export const auth = {
  login(data: {}) {
    return axios
      .post(DOMAIN + "/login", data)
      .then((resp: AxiosResponse) => {
        return resp.data;
      })
      .catch(resp => {
        return resp.response;
      });
  }
};

export const board = {
  getList() {
    return axios
      .get(DOMAIN + "/boards")
      .then((resp: AxiosResponse) => resp.data)
      .catch(resp => resp.response);
  },
  getData() {
    return axios
      .get(DOMAIN + "/boards/1")
      .then((resp: AxiosResponse) => resp.data)
      .catch(resp => resp.response);
  },
  addBoard(data: { title: string }) {
    return axios
      .post(DOMAIN + "/boards/1")
      .then((resp: AxiosResponse) => resp.data)
      .catch(resp => resp.response);
  },
  editBoard(data: { title: string; bgColor: string }) {
    return axios
      .put(DOMAIN + "/boards/1")
      .then((resp: AxiosResponse) => resp.data)
      .catch(resp => resp.response);
  },
  removeBoard() {
    return axios
      .delete(DOMAIN + "/boards/1")
      .then((resp: AxiosResponse) => resp.data)
      .catch(resp => resp.response);
  }
};
