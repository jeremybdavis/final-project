import React from 'react';
import Select from 'react-select';
import Parse from '../parse';
import Timer from './timer';
import Settings from './settings';
import ChemexSettings from './chemex/chemex-settings';
import ChemexRecipe from './chemex/chemex-recipe';
import V60Settings from './v60/v60-settings';
import V60Recipe from './v60/v60-recipe';
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
      searchable: this.props.searchable,
      selectValue: 'Chemex',
			secondsElapsed: 0,
			recipes: null
    };
  },

	componentDidMount: function() {
		var CoffeeRecipe = Parse.Object.extend("CoffeeRecipe");
		var query = new Parse.Query(CoffeeRecipe);

		query.find({
			success: results => {
				let recipes = results.map(recipe => {
					return {
						value: recipe.id,
						label: recipe.attributes.title,
						ratio: recipe.attributes.Ratio,
						coffee: recipe.attributes.Coffee,
						water: recipe.attributes.Water,
						yield: recipe.attributes.Yield

					};
				});

				this.setState({
					recipes: recipes
				});
			}
		});
	},

  updateValue (newValue) {
		logChange('Method changed to ' + newValue);
		let defaults = {
			chemex: {
				ratio: 16,
				coffee: 25,
				water: 400,
				yield: 12
			},
			v60: {
				ratio: 16,
				coffee: 30,
				water: 500,
				yield: 13
			}
		};

		if (this.state.selectValue !== newValue) {
			let data = Object.assign({}, defaults[newValue], {
				selectValue: newValue || null
			});

			this.setState(data);
		}
	},

  focusMethodSelect () {
    this.refs.stateSelect.focus();
  },

	onSettingsChange(data) {
		console.log(data);
		this.setState(data);
	},

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
	},

  render () {
		let props = this.props;
		let settings;
		let recipe;

		if (this.state.selectValue) {
			settings = <ChemexSettings
										coffee={this.state.coffee}
										water={this.state.water}
										yield={this.state.yield}
										ratio={this.state.ratio}
										ref="chemex"
										onSettingsChange={this.onSettingsChange}
									/>
			recipe = <ChemexRecipe
								coffee={this.state.coffee}
								secondsElapsed={this.state.secondsElapsed}
						/>
		}

		return (
			<div className="program">

				<div className="program-content">

					<h1>Let's Get Started</h1>

						<div className="section">

							<h3 className="section-heading">{this.props.label}</h3>

							<Select
								ref="stateSelect"
								options={this.state.recipes}
								disabled={this.state.disabled}
								value={this.state.selectValue}
								onChange={this.updateValue}
								searchable={this.state.searchable}>

								<span className="Select-arrow-zone"></span>
								<span className="Select-arrow"></span>

							</Select>

							<h3>Recommended Settings</h3>
							{settings}

							<div className="timer">

								<Timer/>

								{recipe}

							</div>

							<button type="button" onClick={this.saveRecipe}>Save This Recipe</button>

						</div>

				</div>

			</div>
		);
	}
});

export default MethodSelector;
