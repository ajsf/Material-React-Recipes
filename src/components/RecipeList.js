import React from 'react';

const RecipeList = (props) => (
  <div style={props.style}>
    <h2>Recipes</h2>
    <ul>
      <li>
        <span>Smoked Brisket</span>
        <span>Meat</span>
      </li>
      <li>
        <span>Creamy Kabocha Risotto</span>
        <span>Rice</span>
      </li>
      <li>
        <span>Thin Mint Ice Cream</span>
        <span>Dessert</span>
      </li>

    </ul>
  </div>
);

export default RecipeList;
