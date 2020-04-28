import { SECURITY } from "../config/app-config";

class Auth {

  private urlSearchParamsTokenKey: string;
  private storageTokenKey: string;
  private headerTokenKey: string;

  constructor(urlSearchParamsTokenKey?: string, storageTokenKey?: string, headerTokenKey?: string) {
    this.urlSearchParamsTokenKey = urlSearchParamsTokenKey || SECURITY.tokenKey.urlSearchParams;
    this.storageTokenKey = storageTokenKey || SECURITY.tokenKey.localStorage;
    this.headerTokenKey = headerTokenKey || SECURITY.tokenKey.header;
  }

  get UrlSearchParamsTokenKey() {
    return this.urlSearchParamsTokenKey;
  }

  get StorageTokenKey() {
    return this.storageTokenKey;
  }

  get HeaderTokenKey() {
    return this.headerTokenKey;
  }

  createTokenHeaderObject(token: string) {
    return { [this.headerTokenKey]: (SECURITY.tokenValuePrefix + token) };
  }

  setToken(token: string) {
    localStorage.setItem(this.storageTokenKey, token);
  }

  getToken() {
    return localStorage.getItem(this.storageTokenKey);
  }

  hasToken() {
    return Boolean(localStorage.getItem(this.storageTokenKey));
  }

  removeToken() {
    localStorage.removeItem(this.storageTokenKey);
  }

}

const instance = new Auth();
export { Auth, instance };
