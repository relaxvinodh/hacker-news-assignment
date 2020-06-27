import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import NewsList from './components/NewsList';
import {
  theme, ThemeProvider, styled, css,
} from './theme';
import NewsChart from './components/NewsChart';
import BusyBox from './components/BusyBox';
import { cssUseBreakpoint } from './theme/responsivity/breakpoints';

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  ${cssUseBreakpoint({ under: 'sm' }, css`
    width: 90%;
  `)};
  ${cssUseBreakpoint({ under: 'md' }, css`
    width: 992px;
  `)};
`;

const App = () => (
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<BusyBox />}>
        <Container>
          <NewsList />
          <NewsChart />
        </Container>
      </Suspense>
    </ThemeProvider>
  </RecoilRoot>
);

export default App;
