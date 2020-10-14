import * as React from 'react';
import './Filter.css';

export const Filter: React.FunctionComponent = () => (
  <div className="filter-container">
    <div className="filter-name">Filter Recipes:</div>
    <div className="filter-description">
      Check multiple beans below to narrow recipe search results
    </div>
    <div className="filter-type">Filter by Ingestion</div>
    <button className="filter-button">breakfast</button>
    <button className="filter-button">lunch</button>
    <button className="filter-button">dinner</button>
    <div className="filter-type">Filter by Cooking Time</div>
    <button className="filter-button">25 minutes</button>
    <button className="filter-button">40 minutes</button>
    <button className="filter-button">60 minutes</button>
    <button className="filter-button">120 minutes</button>
    <div className="filter-type">Filter by Spicy</div>
    <button className="filter-button">not spicy</button>
    <button className="filter-button">spicy</button>
    <button className="filter-button">very spicy</button>
    <div className="filter-type">Filter by Type</div>
    <button className="filter-button">daily recipes</button>
    <button className="filter-button">desserts</button>
    <button className="filter-button">soups</button>
    <button className="filter-button">snacks</button>
    <button className="filter-button">meat</button>
    <button className="filter-button">salads</button>
    <button className="filter-button">pizza</button>
    <button className="filter-button">mast to make</button>
    <button className="filter-button">popular</button>
  </div>
);
