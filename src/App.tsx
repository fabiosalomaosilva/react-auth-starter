import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/createGlobalStyle';

const App: React.FC = () => {
  return (
    <Routes>
      <GlobalStyle />
    </Routes>
  );
};

export default App;
