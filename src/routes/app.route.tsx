import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Painel from '../pages/Painel';

const AppRoute: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/painel" exact component={Painel} />
    </BrowserRouter>
  );
};

export default AppRoute;
