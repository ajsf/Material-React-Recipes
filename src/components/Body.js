import React from 'react';
import RecipeCardList from './recipe/RecipeCardList';
import Grid from 'material-ui/Grid';

const styles = {
    root: {
        maxWidth: 1080,
        flexGrow: 1,
        margin: 'auto',
    }
};

function Body(props) {
    const recipes = props.recipes
    const split = recipes.length/2
    return (
        <div style={styles.root}>
            <Grid container spacing={24} justify='center' >
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

export default Body;