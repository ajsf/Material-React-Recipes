import React, { Component } from "react";
import Card, { CardActions, CardHeader, CardContent, CardMedia } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Typography from 'material-ui/Typography';
import IconButton from "material-ui/IconButton";
import Divider from 'material-ui/Divider';

const styles = {
    card: {
        margin: 'auto',
        marginBottom: 20,
        borderRadius: 8,
        overflow: 'hidden',
    },
    media: {
        height: 200,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(1.8)',
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
        marginLeft: 'auto',
    },
};

const bull = <span style={styles.bullet}>•</span>;

class RecipeCard extends React.Component {

    state = { expanded: false };

    constructor(props) {
        super(props)
    }
 
    handleExpandClick = () => {
        console.log(this.props.recipe);
        this.setState({ expanded: !this.state.expanded });
    };
    
    render() {
        return (
            <Card style={styles.card} raised >

                <CardMedia style={styles.media}
                    image={this.props.recipe.image}
                    title={this.props.recipe.name} />
         
                <CardContent>
                <Typography variant='headline'>
                    {this.props.recipe.name}
                </Typography>
                    <Typography variant='subheading'>
                        {this.props.recipe.category}
                    </Typography>
                    <Typography variant='caption'>
                        {this.props.recipe.calories} calories

                    </Typography>
                </CardContent>

                <CardActions style={styles.actions} >
                    <Divider light />

                    <IconButton style={
                        this.state.expanded ? styles.expandOpen : styles.expand}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more">
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>

                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <Divider light />
                    <CardContent>
                        <Typography variant="body2">
                            Ingredients:
                        </Typography>
                        {this.props.recipe.ingredients.map(ingredient =>
                            <Typography variant='body1'>
                                {bull} {ingredient}
                            </Typography>
                        )}
                    </CardContent>
                    <Divider light />
                    <CardContent>
                        <Typography variant="body2">

                            Method:
                        </Typography>
                        {this.props.recipe.steps.map(step =>
                            <Typography paragraph variant='body1'>
                                {step}
                            </Typography>
                        )}

                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}

export default RecipeCard;