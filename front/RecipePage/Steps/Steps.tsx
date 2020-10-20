import * as React from 'react';
import './Steps.css';
import { MdTimer } from 'react-icons/md';

export const Steps: React.FC = () => (
  <div className="Steps-container">
    <div className="Recipe-info">
      <div className="Name-and-image">
        <div className="Name-of-recipe">
          <h1>Oatmeal porridge with berries </h1>
          <p>
            <MdTimer className="TimeIcon" />
            30 Minutes
          </p>
        </div>
        <div className="Recipe-image">
          <img
            className="images"
            src="https://res.cloudinary.com/foodtactics/image/upload/f_auto,q_auto,w_500,dpr_3.0,c_scale/v1576848986/porridge-bowl-with-chia-pudding-01_al0agi.jpg"
          />
        </div>
      </div>
      <div className="Recipe-ingredients">
        <ol className="List-of-ingredients">
          <h2>Ingredients</h2>
          <li>Name of Ingredient </li>
          <li>Name of Ingredient </li>
          <li>Name of Ingredient </li>
          <li>Name of Ingredient </li>
          <li>Name of Ingredient </li>
          <li>Name of Ingredient </li>
        </ol>
      </div>
    </div>
    <div className="Recipe-steps">
      <h2 className="Steps">Steps</h2>
      <ol className="List-of-steps">
        <li>Step 1 </li>
        <li>Step 2</li>
        <li>Step 3</li>
        <li>Step 3</li>
        <li>Step 4</li>
      </ol>
    </div>
  </div>
);
