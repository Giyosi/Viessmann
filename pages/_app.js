import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from '../styles/GlobalStyle';
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

function MyApp({ Component, pageProps }) {

  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());

  return <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>

}
export default MyApp
