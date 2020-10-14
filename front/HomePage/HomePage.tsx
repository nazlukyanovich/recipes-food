import * as React from 'react';
import './HomePage.css';
import { SearchPanel } from './SearchPanel/SearchPanel';
import { TopRecipes } from './TopRecipes/TopRecipes';
import { DescriptionSite } from './DescriptionSite/DescriptionSite';
import { Filter } from './Filter/Filter';

export const HomePage: React.FunctionComponent = () => (
  <div className="HomePage">
    <DescriptionSite />
    <SearchPanel />
    <Filter />
    <TopRecipes />
  </div>
);
