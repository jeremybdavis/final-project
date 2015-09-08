import React from 'react';

var ChemexRecipe = React.createClass({
  getInitialState() {
    return {
      "coffee" : "26g",
      "water" : "416g",
      "amount": "12oz"
    };
  },

  render() {
    return(
      <div className="ingredients">
        <h1>What You'll Need</h1>
        <ul>
          <li>
            Ratio (Coffee to Water): <br/>
            1:16
          </li>
          <li>Coffee: {this.state.coffee}</li>
          <li className="li-bottom">Water: {this.state.water}</li>
          <li className="li-last">Prepares: {this.state.amount} of coffee</li>
          <li>Time: 3:30 - 4 minutes</li>
        </ul>
      </div>
    )
  }
})

export default ChemexRecipe;
