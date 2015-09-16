import React from 'react';

class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      coffee: 0,
      ratio: 0,
      water: 0,
      yielded: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.recipe) {
      if (!this.state.coffee) {
        this.setState({
          coffee: nextProps.recipe.get('Coffee'),
          ratio: nextProps.recipe.get('Ratio'),
          water: nextProps.recipe.get('Water'),
          yielded: nextProps.recipe.get('Yield')
        });
      }
    }
  }

  onChange() {
    let data =  {
      coffee: React.findDOMNode(this.refs.coffee).value,
      ratio: React.findDOMNode(this.refs.ratio).value
    };

    this.setState({
      coffee: data.coffee,
      ratio: data.ratio,
      water: data.ratio * data.coffee,
      yielded: Math.round(((data.coffee * data.ratio) - (data.coffee * 2)) * 0.035274)
    });

    this.props.onSettingsChange(this.state);
  }
  render() {
    if (!this.props.recipe) {
      return <div>Please Select a Method</div>
    }

    let ratio = this.state.ratio;
    let coffee = this.state.coffee;
    let water = this.state.water;
    let yielded = this.state.yielded;

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
          Coffee
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
          Water {water}g
        </p>

        <p>
          Yield: {yielded}oz
        </p>
      </div>
    )
  }
}

Settings.defaultProps = {
  recipe: null
};

export default Settings;
