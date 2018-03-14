import React from 'react';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import RecipeCardList from './recipe/RecipeCardList';

const styles = {
  root: {
    maxWidth: 1080,
    flexGrow: 1,
    margin: 'auto',
  },
};

function Body({ recipes }) {
  const split = recipes.length / 2;
  return (
    <div style={styles.root}>
      <Grid container spacing={24} justify="center" >
        <Grid item>
          <RecipeCardList recipes={recipes.slice(0, split)} />
        </Grid>
        <Grid item>
          <RecipeCardList recipes={recipes.slice(split, recipes.length)} />
        </Grid>
      </Grid>
    </div >
  );
}

Body.propTypes = {
  recipes: PropTypes.object.isRequired,
};

export default Body;
