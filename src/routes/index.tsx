import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import GlobalStyle, {ContainerCenter} from '../styles/createGlobalStyle';
import Load from '../components/Load';
import {useAuth} from '../contexts/auth';

import AppRoutes from './app.route';
import AuthRoutes from './auth.route';

const Routes: React.FC = () => {
  const {signed, loading} = useAuth();

  if (loading) {
    return (
      <ContainerCenter>
        <Load />
      </ContainerCenter>
    );
  }
  return signed ? (
    <BrowserRouter>
      <GlobalStyle />
      <AppRoutes />
    </BrowserRouter>
  ) : (
    <BrowserRouter>
      <GlobalStyle />
      <AuthRoutes />
    </BrowserRouter>
  );
};

export default Routes;
