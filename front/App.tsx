import * as React from 'react';
import './App.css';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';
import { Header } from './Header/Header';
import { Authentication } from './Header/Authentication/Authentication';
import { Filter } from './Filter/Filter';
import { HomePage } from './HomePage/HomePage';
import { Footer } from './Footer/Footer';

export const App: React.FunctionComponent = () => (
  <div className="app-container">
    <Header />
    <Switch>
      <Route
        exact
        path="/signin"
        render={(props: RouteComponentProps) => (
          <Authentication {...props} operation="Sign In" />
        )}
      />
      <Route
        exact
        path="/signup"
        render={(props: RouteComponentProps) => (
          <Authentication {...props} operation="Sign Up" />
        )}
      />
    </Switch>
    <HomePage />
    {/* <div className="body-container">
      <Filter/>
    </div> */}
    <Footer />
  </div>
);
