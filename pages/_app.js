import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyle } from '../styles/GlobalStyle';


function MyApp({ Component, pageProps }) {
  return <div>
    <GlobalStyle />
    <Component {...pageProps} />
  </div>

}

export default MyApp
