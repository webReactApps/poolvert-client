import { useEffect } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import FLUX from "../flux";
import RTL from "../components/rtl";
import theme from "../styles/theme";
import "../styles/scss/global.scss";

export default ({ Component, pageProps }: AppProps) => {

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
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
