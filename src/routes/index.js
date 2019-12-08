import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import Loader from '../components/Loader';

const lazyLoadedPage = path =>
  Loadable({
    loader: () => import('../pages/' + path),
    loading: () => <Loader />
  });

const Routes = () => (
  <Switch>
    <Route exact path="/" component={lazyLoadedPage('Home')} />
    <Route exact path="/company/:id" component={lazyLoadedPage('Company')} />
    <Route exact path="*" component={lazyLoadedPage('Home')} />
  </Switch>
);

export default Routes;
