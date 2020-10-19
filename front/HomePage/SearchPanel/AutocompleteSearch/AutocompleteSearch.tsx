import * as React from 'react';
import './AutocompleteSearch.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Chip from '@material-ui/core/Chip';

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
  { type: 'cabbage' },
  { type: 'cucumber' },
  { type: 'radish' },
  { type: 'celery' },
  { type: 'garlic' },
];
let colors = [
  'red',
  'green',
  'blue',
  'crimson',
  'orange',
  'pink',
  'coral',
  'olive',
  'gold',
  'beige',
  'HotPink',
  'violet',
  'aqua',
  'SpringGreen',
];

const MyChip = props => {
  console.log(props);
  const [color, setColor] = React.useState(null);
  React.useEffect(() => {
    setColor(colors[Math.floor(Math.random() * colors.length - 1)]);
  }, []);

  return <Chip style={{ background: `${color}` }} {...props} />;
};

export const AutocompleteSearch: React.FunctionComponent = () => {
  const [value, setValue] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');
  return (
    <Autocomplete
      multiple
      value={value}
      onChange={(event: any, newValue: string[] | null) => {
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      getOptionLabel={option => option.type}
      filterSelectedOptions
      id="autocomplete"
      options={ingredientsData}
      renderInput={params => <TextField {...params} variant="outlined" />}
      renderTags={(tagValue, getTagProps) => {
        return tagValue.map((option, index) => {
          return <MyChip {...getTagProps({ index })} label={option.type} />;
        });
      }}
    />
  );
};
