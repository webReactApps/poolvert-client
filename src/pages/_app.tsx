import { useEffect } from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import FLUX from "../flux";
import RTL from "../components/rtl";
import { Auth } from "../lib/auth";
import { SECURITY } from "../config/app-config";
import theme from "../styles/theme";
import "../styles/scss/global.scss";

export default ({ Component, pageProps }: AppProps) => {

  const router = useRouter();

  const token = router.query && router.query[SECURITY.tokenKey.urlSearchParams];
  if (typeof token === "string") {
    Auth.setToken(token);
    window.location.replace(window.location.href.split("?")[0]);
  }

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RTL>
        <FLUX>
          <Component {...pageProps} />
        </FLUX>
      </RTL>
    </ThemeProvider>
  );

};
