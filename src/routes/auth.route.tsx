import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from '../pages/auth/Login';
import RememberPassword from '../pages/auth/RememberPassword';

const AuthRoute: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/remember" exact component={RememberPassword} />
      </Switch>
    </BrowserRouter>
  );
};

export default AuthRoute;
