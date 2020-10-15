import * as React from 'react';
import { Filter } from './Filter/Filter';
import { Results } from './Results/Results';
import './ResultsPage.css';

export const ResultsPage: React.FunctionComponent = () => (
  <div className="ResultsPage">
    <Filter />
    <Results />
  </div>
);
