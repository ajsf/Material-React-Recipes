import React, { Component } from "react";
import { GridListTile } from 'material-ui/GridList';

const styles = {
    width: 250,
    height: 225,
};

class RecipeGridItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeDetails: "",
        };
    }

    componentDidMount() {
        fetch(`${API_URL}/v1/recipes/${this.props.recipe.id}`)
            .then(res => res.json())
            .then(recipeDetails => {
                this.setState({ recipeDetails })
            });
    }

    render() {
        return (
        <GridListTile cols={1} > 
            <img src={this.state.recipeDetails.image} style={styles} />
        </GridListTile>
        );
    }
}

export default RecipeGridItem;