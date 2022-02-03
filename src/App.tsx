import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import Header from './components/Header';

import theme from './styles/theme';
import MainBanner from './components/MainBanner';
import Shelf from './components/Shelf';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <MainBanner />
      <Shelf />
    </ThemeProvider>
  );
}

export default App;
