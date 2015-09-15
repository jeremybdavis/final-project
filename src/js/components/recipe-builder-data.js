import React from 'react';

class RecipeBuilderData extends React.Component {
  onChange() {
    let data =  {
      coffee: React.findDOMNode(this.refs.coffee).value,
      water: React.findDOMNode(this.refs.water).value,
      yield: React.findDOMNode(this.refs.yield).value,
      ratio: React.findDOMNode(this.refs.ratio).value
    }
  }

  render() {
    return(
      <div>
        <p>Ratio (Coffee to Water) 1:
          <input
            ref="ratio"
            type="number"
            placeholder="16"
            value={this.props.ratio}
            onChange={this.onChange.bind(this)}
          />
        </p>


        <p>
          Coffee
          <input
            ref="coffee"
            value={this.props.coffee}
            placeholder="Quantity in grams"
            onChange={this.onChange.bind(this)}
            />
            g
        </p>

        <p>
          Water
          <input
            ref="water"
            value={this.props.coffee * this.props.ratio}
            placeholder="Quantity in grams"
            onChange={this.onChange.bind(this)}
            />
          g
        </p>

        <p>
          Yield (Amount Brewed):
          <input
            ref="yield"
            value={Math.round(((this.props.coffee * this.props.ratio) - (this.props.coffee * 2)) * 0.035274)}
            placeholder="Total Amount Brewed"
            onChange={this.onChange.bind(this)}
            />
          oz
        </p>

      <h2>Steps</h2>
      <h3>Step 1</h3>
        <p>Title:<input placeholder="Bloom"/></p>
        <textarea/>
        <p>Start: <input placeholder="0"/></p>
        <p>Stop: <input placeholder="45"/></p>
      </div>

    )
  }
}

RecipeBuilderData.defaultProps = { coffee: 25, ratio: 16};

export default RecipeBuilderData;
