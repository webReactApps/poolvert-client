import { TLogin, TGetProfile } from "./type";

const login: TLogin = (mobile, password) => ({
  key: "Account/Login",
  fetcherOptions: {
    method: "post",
    body: JSON.stringify({ mobile, password })
  }
});

const getProfile: TGetProfile = () => ({
  key: "Account/GetProfile"
});

export {
  login,
  getProfile
};
