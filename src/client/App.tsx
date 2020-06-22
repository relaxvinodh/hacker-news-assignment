import React from 'react';
import { RecoilRoot } from 'recoil';
import NewsList from '../components/NewsList';
import { theme, ThemeProvider } from '../theme';

const App = () => (
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <NewsList />
    </ThemeProvider>
  </RecoilRoot>
);

export default App;
