import * as React from 'react';
import './RecipePage.css';
import { RecipeTitle } from './RecipeTitle/RecipeTitle';
import { Steps } from './Steps/Steps';

export const RecipePage: React.FC = () => (
  <div className="RecipePage">
    <RecipeTitle />
    <Steps />
  </div>
);
