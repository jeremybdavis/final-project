import React from 'react';

class V60Settings extends React.Component {

  onChange() {
    let data =  {
      coffee: React.findDOMNode(this.refs.coffee).value,
      water: React.findDOMNode(this.refs.water).value,
      yield: React.findDOMNode(this.refs.yield).value,
      ratio: React.findDOMNode(this.refs.ratio).value
    }
    this.props.onSettingsChange(data);
  }
  render() {
    return (
      <div className="method-settings">

        <p>
          Ratio (Coffee to Water) 1:
          <input
            ref="ratio"
            value={this.props.ratio}
            placeholder="Coffee to Water Ratio"
            onChange={this.onChange.bind(this)}
          />
        </p>
        
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
          value={this.props.coffee * this.props.ratio}
          placeholder="water quantity in grams"
          onChange={this.onChange.bind(this)}
          />
          g </p>

        <p>Yield:
        <input
          ref="yield"
          value={((this.props.coffee * this.props.ratio) - (this.props.coffee * 2)) * 0.035274}
          placeholder="water quantity in oz"
          onChange={this.onChange.bind(this)}
          />
          oz </p>

      </div>
    )
  }
}

V60Settings.defaultProps = { coffee: 20, ratio: 16 };


export default V60Settings;
