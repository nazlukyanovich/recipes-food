import * as React from 'react';
import './app.css';
import { HomePage } from './HomePage/HomePage';
import { Footer } from './Footer/Footer';
export const App: React.FunctionComponent = () => (
  <div className="app-container">
    <HomePage />
    <Footer />
  </div>
);
