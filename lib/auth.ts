import { appConfig } from "../config/app-config";

export class Auth {

    static urlSearchParamsTokenKey = appConfig.security.urlSearchParamsTokenKey;
    static storageTokenKey = appConfig.security.storageTokenKey;
    static headerTokenKey = appConfig.security.headerTokenKey;

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
