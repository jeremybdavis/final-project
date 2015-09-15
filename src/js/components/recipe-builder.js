import React from 'react';
import Parse from '../parse';
import RecipeBuilderData from './recipe-builder-data';

class RecipeBuilder extends React.Component {

  onSettingsChange(data) {
    this.setState(data);
  }

  saveRecipe() {
    var CoffeeRecipe = Parse.Object.extend("CoffeeRecipe");
    var coffeeRecipe = new CoffeeRecipe();
    var query = new Parse.Query(CoffeeRecipe);
    let user = query.relationship('user');
    coffeeRecipe.set("title", this.state.selectValue);
    coffeeRecipe.set("Ratio", this.state.ratio);
    coffeeRecipe.set("Coffee", this.state.coffee);
    coffeeRecipe.set("Water", this.state.water);
    coffeeRecipe.set("Yield", this.state.yield);
    user.add(Parse.User.current());

    if (User.loggedIn) {
      coffeeRecipe.save(null, {
        success: function(coffeeRecipe) {
          alert(`Thanks ${User.username}. Your recipe has been saved to your profile.`);
        },
        error: function(coffeeRecipe, error) {
          alert('Failed to create new object, with error code: ' + error.message);
        }
      })
    } else {alert("Please log in to use this feature.")}
  }

  render() {

    return (
      <div>
        <h1>Save and Share Your Perfect Cup</h1>

        <h2>Give It A Name</h2>
        <input placeholder="Recipe Name"/>

        <h2>Quantities</h2>
        <RecipeBuilderData onSettingsChange={this.onSettingsChange}/>

    <button type="button" onClick={this.saveRecipe}>Save This Recipe</button>
      </div>
    )
  }
}

export default RecipeBuilder;
