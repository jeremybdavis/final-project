import React from 'react';

class Settings extends React.Component {
  onChange() {
    let data = {
      coffee: React.findDOMNode(this.refs.coffee).value,
      ratio: React.findDOMNode(this.refs.ratio).value
    };

    this.props.onSettingsChange(data);
  }

  render() {
    if (!this.props.recipe) {
      return <div><img src={"./img/loader.gif"}></img></div>
    }

    if(!this.props.settings){
      return null;
    }

    let {ratio, coffee, water, yielded } = this.props.settings;

    return (
      <div className="method-settings">
        <h3>Settings for {this.props.recipe.get('title')}</h3>
        <p>
          Ratio (Coffee to Water) 1:
          <input
            ref="ratio"
            type="number"
            value={ratio}
            placeholder="Coffee to Water Ratio"
            onChange={this.onChange.bind(this)}
          />
        </p>

        <p>
          Coffee:
          <input
            ref="coffee"
            type="number"
            value={coffee}
            placeholder="coffee quantity in grams"
            onChange={this.onChange.bind(this)}
            />
            g
        </p>

        <p>
          Water: {ratio * coffee}g
        </p>

        <p>
          Yield: {Math.round(((coffee * ratio) - (coffee * 2)) * 0.035274)}oz
        </p>
      </div>
    )
  }
}

Settings.defaultProps = {
  recipe: null,
  settings: null
};

export default Settings;
