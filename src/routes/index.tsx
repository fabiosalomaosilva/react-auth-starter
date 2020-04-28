import React from 'react';
import {BrowserRouter} from 'react-router-dom';

//import AppRoutes from './app.route';
import AuthRoutes from './auth.route';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  );
};

export default Routes;
