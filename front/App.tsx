import * as React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Header } from './Header/Header';
import Authentication from './Header/Authentication/Authentication';

export const App: React.FunctionComponent = () => (
  <div className="app-container">
    <Header />
    <Route
      exact
      path="/signin"
      render={props => <Authentication {...props} operation={'sign in'} />}
    />
    <Route
      exact
      path="/signup"
      render={props => <Authentication {...props} operation={'sign up'} />}
    />
  </div>
);
