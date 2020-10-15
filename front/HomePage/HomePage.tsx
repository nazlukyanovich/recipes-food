import * as React from 'react';
import './HomePage.css';
import { SearchPanel } from './SearchPanel/SearchPanel';
import { TopRecipes } from './TopRecipes/TopRecipes';
import { DescriptionSite } from './DescriptionSite/DescriptionSite';

export const HomePage: React.FunctionComponent = () => (
  <div className="HomePage">
    <DescriptionSite />
    <SearchPanel />
    <TopRecipes />
  </div>
);
