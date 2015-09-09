import React from 'react';

class V60Settings extends React.Component {

  onChange() {
    let data =  {
      coffee: React.findDOMNode(this.refs.coffee).value,
      water: React.findDOMNode(this.refs.water).value
    }
    this.props.onSettingsChange(data);
  }
  render() {
    return (
      <div className="method-settings">
        <p>
          Coffee
          <input
            ref="coffee"
            value={this.props.coffee}
            placeholder="coffee quantity in grams"
            onChange={this.onChange.bind(this)}
            />
          g
        </p>

        <p>
          Water
          <input
            ref="water"
            value={this.props.coffee * 16}
            placeholder="water quantity in grams"
            onChange={this.onChange.bind(this)}
            />
          g
        </p>

        <p>
          Yield:
          <input
            ref="yield"
            value={this.props.coffee * 0.49}
            placeholder="water quantity in oz"
            onChange={this.onChange.bind(this)}
            />
          oz
        </p>
      </div>
    )
  }
}

V60Settings.defaultProps = { coffee: 20, water: 320, };


export default V60Settings;
