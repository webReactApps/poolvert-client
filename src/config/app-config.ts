const DEFAULT_META_DESCRIPTION = "Poolvert Web App - CryptoCurrency Market";
const SITE_TITLE = "Poolvert";

const SECURITY = {
    tokenKey: {
        urlSearchParams: "token",
        localStorage: "token",
        header: "authorization",
    },
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

export {
    DEFAULT_META_DESCRIPTION,
    SITE_TITLE,
    SECURITY
};
