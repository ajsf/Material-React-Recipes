import React from 'react';
import PropTypes from 'prop-types';
import RecipeCard from './RecipeCard';

const styles = {
  padding: 10,
  width: 460,
};

function RecipeCardList(props) {
  return (
    <div style={styles} >
      {props.recipes.map(recipe => (
        <RecipeCard recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
}

RecipeCardList.propTypes = {
  recipes: PropTypes.array.isRequired,
};

export default RecipeCardList;
