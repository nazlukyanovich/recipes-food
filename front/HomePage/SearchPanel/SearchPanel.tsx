import * as React from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './SearchPanel.css';
import { CgSearch } from 'react-icons/cg';
import { Link } from 'react-router-dom';
export const SearchPanel: React.FunctionComponent = () => {
  const [valueInput, setValueInput] = React.useState(null);
  const ingredientsData = [
    { type: 'apple' },
    { type: 'tomato' },
    { type: 'pepper' },
    { type: 'kiwi' },
    { type: 'lemon' },
    { type: 'orange' },
    { type: 'carrot' },
    { type: 'onion' },
    { type: 'pumpkin' },
    { type: 'turnips' },
  ];
  return (
    <div className="SearchPanel">
      <div className="SearchPanel_wrapper">
        <form>
          <div className="SearchPanel_searchInput">
            <Autocomplete
              multiple
              id="auto-complete"
              options={ingredientsData}
              getOptionLabel={option => option.type}
              onChange={(event, value) => {
                setValueInput(value);
              }}
              renderInput={params => (
                <div ref={params.InputProps.ref}>
                  <input
                    value={valueInput}
                    // onChange={e => setValueInput(e.target.value)}
                    type="text"
                    name="searchIngredients"
                    {...params.inputProps}
                  />
                </div>
              )}
            />
          </div>
          <div className="SearchPanel_buttonGroup">
            <button onClick={e => e.preventDefault}>
              <CgSearch />
            </button>
            <button>Get random dishes</button>
          </div>
        </form>
      </div>
    </div>
  );
};
