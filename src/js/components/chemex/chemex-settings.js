import React from 'react';

class ChemexSettings extends React.Component {

  onChange() {
    let data =  {
      coffee: React.findDOMNode(this.refs.coffee).value,
      water: React.findDOMNode(this.refs.water).value,
      yield: React.findDOMNode(this.refs.yield).value
    }
    this.props.onSettingsChange(data);
  }
  render() {
    return (
      <div className="method-settings">
        <p>Coffee
        <input
          ref="coffee"
          value={this.props.coffee}
          placeholder="coffee quantity in grams"
          onChange={this.onChange.bind(this)}
          />
          g </p>
        <p>Water
        <input
          ref="water"
          value={this.props.water}
          placeholder="water quantity in grams"
          onChange={this.onChange.bind(this)}
          />
          g </p>

        <p>Yield:
        <input
          ref="yield"
          value={(this.props.water - (this.props.coffee * 2)) * 0.035274}
          placeholder="water quantity in oz"
          onChange={this.onChange.bind(this)}
          />
          oz </p>

        <p>
          Ratio (Coffee to Water) 1:
          <input
            ref="ratio"
            value={this.props.water / this.props.coffee}
            placeholder="Coffee to Water Ratio"
            onChange={this.onChange.bind(this)}
          />
        </p>
      </div>
    )
  }
}

ChemexSettings.defaultProps = { coffee: 25, water: 400};


export default ChemexSettings;
