import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import RecipeCard from './RecipeCard';

const styles = {
    padding: 10,
    width:460,
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

export default RecipeCardList;
