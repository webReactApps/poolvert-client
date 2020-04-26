import { SECURITY } from "../config/app-config";

export class Auth {

    static urlSearchParamsTokenKey = SECURITY.tokenKey.urlSearchParams;
    static storageTokenKey = SECURITY.tokenKey.localStorage;
    static headerTokenKey = SECURITY.tokenKey.header;

    static setToken(token: string) {
        localStorage.setItem(Auth.storageTokenKey, token);
    }

    static getToken() {
        return localStorage.getItem(Auth.storageTokenKey);
    }

    static hasToken() {
        return Boolean(localStorage.getItem(Auth.storageTokenKey));
    }

    static removeToken() {
        localStorage.removeItem(Auth.storageTokenKey);
    }

}
