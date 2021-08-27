import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Containers/Footer/Footer';
import Header from '../Containers/Header';
import   GlobalStyle from '../styles/GlobalStyle';


function MyApp({ Component, pageProps }) {

  return <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>

}
export default MyApp
