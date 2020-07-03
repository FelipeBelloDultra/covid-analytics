import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Layout from './layouts';

import { CasesProvider } from './hooks/Cases';

const App: React.FC = () => {
  return (
    <>
      <CasesProvider>
        <Layout />
      </CasesProvider>
      <GlobalStyles />
    </>
  );
};

export default App;
