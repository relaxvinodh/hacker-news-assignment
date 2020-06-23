import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import NewsList from './components/NewsList';
import { theme, ThemeProvider } from './theme';
import NewsChart from './components/NewsChart';
import BusyBox from './components/BusyBox';

const App = () => (
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<BusyBox />}>
        <NewsList />
        <NewsChart />
      </Suspense>
    </ThemeProvider>
  </RecoilRoot>
);

export default App;
