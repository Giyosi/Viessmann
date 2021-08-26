import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from '../Containers/Header';
import { darkTheme, GlobalStyle, lightTheme } from '../styles/GlobalStyle';


function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    console.log(theme);
    theme == "light" ? setTheme("dark") : setTheme("light");
  }
  // console.log(theme);
  return <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
    <GlobalStyle />
    <Header theme={() => changeTheme}></Header>
    <Component {...pageProps} />
  </ThemeProvider>

}
export default MyApp
