import React from 'react';
import risotto from '../static/images/risotto.jpg'

const RecipeDetail = (props) => (
  <div style={props.style}>
    <h2>Creamy Kabocha Risotto</h2>
    <img src={risotto} width="400"></img>
    <div>
      <span>Rice</span>
      <span>1200 cal</span>
    </div>
    <h3>Ingredients</h3>
    <ul>
      <li>1 kabocha</li>
      <li>2 tbsp butter</li>
      <li>2 tbsp olive oil</li>
      <li>1 onion, diced</li>
      <li>2 - 4 cloves garlic, finely sliced</li>
      <li>1 cup risotto</li>
      <li>2 cups chicken stock</li>
      <li>salt and pepper to taste</li>
      <li>freshly grated parmessian cheese</li>
    </ul>
    <h3>Steps</h3>
    <ol>
      <li>Remove seeds from kabocha. Cut into slices and boil until soft. Once cool, remove skin and dice.</li>
      <li>Heat butter and oil over medium heat until hot. Add onion and saute until golden, 6-8 minutes.</li>
      <li>Add garlic and cook until aromatic, 30 - 60 seconds.</li>
      <li>Add risotto, chicken stock and kabocha. Bring to a boil.</li>
      <li>Cover and cook until risotto is al dente, about 30 minutes.</li>
      <li>Add salt and pepper to taste. Serve with grated parmessian.</li>
    </ol>
  </div>
);

export default RecipeDetail;
