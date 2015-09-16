import React from 'react';
import Parse from '../parse';
import RecipeBuilderData from './recipe-builder-data';

class RecipeBuilder extends React.Component {

  onSettingsChange(data) {
    this.setState(data);
  }

  render() {

    return (
      <div>
        <h1>Save and Share Your Perfect Cup</h1>

        <h2>Give It A Name</h2>
        <input placeholder="Recipe Name"/>

        <h2>Quantities</h2>
        <RecipeBuilderData onSettingsChange={this.onSettingsChange}/>

    
      </div>
    )
  }
}

export default RecipeBuilder;
