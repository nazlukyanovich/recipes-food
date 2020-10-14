import * as React from 'react';
import './IngredientsWrapper.css';
interface Props {
  ingredients: string;
}
export const IngredientsWrapper: React.FunctionComponent<Props> = props => {
  return (
    <div className="IngredientsWrapper">
      <p>{props.ingredients}</p>
    </div>
  );
};
