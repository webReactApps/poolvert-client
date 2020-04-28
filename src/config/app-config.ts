import fetch from "unfetch";
import { ConfigInterface } from "swr";

const DEFAULT_META_DESCRIPTION = "Poolvert Web App - CryptoCurrency Market";

const SITE_TITLE = "Poolvert";

const API_END_POINT = "http://5.202.190.154:8080/api/";

const SECURITY = {
    tokenKey: {
        urlSearchParams: "token",
        localStorage: "token",
        header: "Authorization"
    },
    tokenValuePrefix: "bearer ",
    unAuthenticatedRedirect: "/",
    retryLoginMessage: "جهت مشاهده صفحه مورد نظر لطفا با حساب کابری خود وارد شوید",
    unAuthenticatedMessage: "امکان مشاهده صفحه مورد نظر مقدور نمی باشد",
    redirectMessage: "تا چند لحظه دیگر به صفحه اصلی منتقل خواهید شد",
    redirectTimeout: 4000,
    rolePermissions: {
        "*": ["/"],
        // "admin": [/^\/admin/]
    }
};

const SWR: ConfigInterface = {
    errorRetryCount: 3,
    fetcher: fetch
};

const UNFETCH: RequestInit = {
    keepalive: true,
    headers: {
        'Content-Type': 'application/json'
    }
};

export {
    DEFAULT_META_DESCRIPTION,
    SITE_TITLE,
    SECURITY,
    SWR,
    UNFETCH,
    API_END_POINT
};
