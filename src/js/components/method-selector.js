import React from 'react';
import Select from 'react-select';
import Parse from '../parse';
import Timer from './timer';
import Settings from './settings';
import Recipe from './recipe';
import User from '../user';

function logChange() {
	console.log.apply(console, [].concat(['Select value changed:'], Array.prototype.slice.apply(arguments)));
}

var MethodSelector = React.createClass( {
  propTypes: {
		label: React.PropTypes.string,
		searchable: React.PropTypes.bool,
	},

  getDefaultProps() {
    return {
      label: 'Select Your Method:',
    };
  },

  getInitialState () {
    return {
      selectValue: null,
			settings: null,
			secondsElapsed: 0,
			recipes: []
    };
  },

	componentDidMount: function() {
		var CoffeeRecipe = Parse.Object.extend("CoffeeRecipe");
		var query = new Parse.Query(CoffeeRecipe);

		query.find({
			success: recipes => {
				this.setState({
					recipes: recipes,
					selectValue: recipes[0]
				});
			}
		});
	},

  updateValue (selectValue) {
		let selected = this.state.recipes.filter(recipe => {
			return recipe.id === selectValue;
		});

		this.setState({
			selectValue: selected[0]
		});
	},

  focusMethodSelect () {
    this.refs.stateSelect.focus();
  },

	onSettingsChange(settings) {
		this.setState({
			settings: settings
		});
	},

  render () {
		let props = this.props;
		let selectValue;

		if (this.state.selectValue) {
			selectValue = this.state.selectValue.id;
		}

		let options = this.state.recipes.map(recipe => {
			return {
				value: recipe.id,
				label: recipe.attributes.title,
			};
		});

		return (
			<div className="program">

				<div className="program-content">

					<h1>Let's Get Started</h1>

						<div className="section">

							<h3 className="section-heading">{this.props.label}</h3>

							<Select
								ref="stateSelect"
								options={options}
								disabled={this.state.disabled}
								value={selectValue}
								onChange={this.updateValue}
								searchable={true}>

								<span className="Select-arrow-zone"></span>
								<span className="Select-arrow"></span>

							</Select>

							<h3>Recommended Settings</h3>

								<Settings
									ref="settings"
									recipe={this.state.selectValue}
									onSettingsChange={this.onSettingsChange}
								/>

							<div className="timer">
								<Timer/>
							</div>

							<Recipe recipe={this.state.selectValue} settings={this.state.settings}/>
						</div>

				</div>

			</div>
		);
	}
});

export default MethodSelector;
