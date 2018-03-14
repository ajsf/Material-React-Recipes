import React from 'react';
import GridList from 'material-ui/GridList';
import RecipeGridItem from './RecipeGridItem';

const styles = {
    root: {
        margin: 70,
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 600,
    },
};

const RecipeGridList = (props) => {
    return (
        <div style={styles.root}>
        <GridList style={styles.gridList}
            cols={2}
            cellHeight={'auto'}>
            {props.recipes.map(recipe => (
                <RecipeGridItem recipe={recipe} key={recipe.id} />
            ))}
        </GridList>
        </div>

    );
}

export default RecipeGridList;