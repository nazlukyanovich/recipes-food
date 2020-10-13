import * as React from 'react';
import './SearchPanel.css';
import { CgSearch } from 'react-icons/cg';
import { IngredientsWrapper } from './IngredientsWrapper/IngredientsWrapper';
export const SearchPanel: React.FunctionComponent = () => {
  let ingredients = ['apple', 'meat', 'tomato', 'carrot', 'pepper', 'onion'];
  const [valueInput, setValueInput] = React.useState('');

  const inputHandler = value => {
    setValueInput(value);
  };

  return (
    <div className="SearchPanel">
      <div className="SearchPanel_wrapper">
        <form>
          <div className="SearchPanel_searchInput">
            <input
              value={valueInput}
              onChange={e => inputHandler(e.target.value)}
              type="text"
              name="searchIngredients"
            />
          </div>
          <div className="SearchPanel_buttonGroup">
            <button>
              <CgSearch />
            </button>
            <button>Get random dishes</button>
          </div>
        </form>
      </div>
    </div>
  );
};
