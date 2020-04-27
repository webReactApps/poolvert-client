import { TApiObject } from "../type/general-types";

const login: TApiObject = {
  key: "Account/Login",
  fetcherOptions: {
    method: "post",
    body: JSON.stringify({ mobile: "09109541215", password: "13791379" })
  }
};

export {
  login
};
