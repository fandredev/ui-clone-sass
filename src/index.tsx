import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import Globals from './globals';

ReactDOM.render(
  <>
    <BrowserRouter>
      <Globals />
      <Switch>
        <Route path="/" exact component={Layout} />
      </Switch>
    </BrowserRouter>
  </>,
  document.getElementById('root'),
);
