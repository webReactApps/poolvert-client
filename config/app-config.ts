const security = {
    urlSearchParamsTokenKey: "token",
    storageTokenKey: "token",
    headerTokenKey: "authorization",
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

export const appConfig = {
    siteTitle: "Poolvert",
    security
};
