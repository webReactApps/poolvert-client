import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import FLUX from "../flux";
import RTL from "../components/rtl";
import { appConfig } from "../config/app-config";
import theme from "../styles/theme";
import "../styles/scss/global.scss";

export default ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <RTL>
      <FLUX>
        <Head>
          <title>{appConfig.siteTitle}</title>
          <link rel="icon" href="/images/favicon.ico" />
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="stylesheet" href="/css/google-roboto.css" />
          <link rel="stylesheet" href="/css/iran-yekan.css" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="description" content="Poolvert WebApp" />
          <meta name="theme-color" content="#000000" />
          <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
              appConfig.siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={appConfig.siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <Component {...pageProps} />
      </FLUX>
    </RTL>
  </ThemeProvider>
);
