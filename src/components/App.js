import React from 'react';
import Header from './Header';
import withRoot from './withRoot';
import Body from './Body';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/v1/recipes`)
      .then(res => res.json())
      .then(recipesList => {
        Promise.all(
          recipesList
            .map(recipe => recipe.id)
            .map(id => `${API_URL}/v1/recipes/${id}`)
            .map(url => fetch(url).then(resp => resp.json())),
        ).then(recipes => {
          this.setState({ recipes });
        });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <Body recipes={this.state.recipes} />
      </div>
    );
  }
}

export default withRoot(App);
