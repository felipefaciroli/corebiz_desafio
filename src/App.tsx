import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import theme from './styles/theme';

import Header from './components/Header';
import MainBanner from './components/MainBanner';
import Shelf from './components/Shelf';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import MainBannerMobile from './components/MainBannerMobile';
import HeaderMobile from './components/HeaderMobile';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <HeaderMobile />
      <MainBanner />
      <MainBannerMobile />
      <Shelf />
      <Newsletter />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
