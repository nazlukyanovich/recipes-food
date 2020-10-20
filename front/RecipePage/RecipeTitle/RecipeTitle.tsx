import * as React from 'react';
import './RecipeTitle.css';
import { Link } from 'react-router-dom';
import { colors } from 'material-ui/styles';
import { MdSearch } from 'react-icons/md';

export const RecipeTitle: React.FC = () => (
  <div className="RecipeTitle-container">
    <div className="first-panel">
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <div
          className="RecipeTitle"
          onMouseDown={titleAnimation}
          onMouseUp={ppp}
        >
          <h1>RecipeFinder</h1>
        </div>
      </Link>
      <div className="Title-buttons">
        <button className="Buttons Search">
          <input className="search-input" type="search" placeholder="Search" />
          <MdSearch className="SearchIcon" />
        </button>
        <button className="Buttons">My Recipe Book</button>
        <button className="Buttons">Add Recipe</button>
      </div>
    </div>
    <div className="menu-panel">
      <button className="Buttons">Home</button>
      <button className="Buttons">All Recipes</button>
      <button className="Buttons">About</button>
    </div>
  </div>
);

const titleAnimation = () => {
  document.querySelector('.RecipeTitle').classList.add('down');
};
const ppp = () => {
  document.querySelector('.RecipeTitle').classList.remove('down');
};
