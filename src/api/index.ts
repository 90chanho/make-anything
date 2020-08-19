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
