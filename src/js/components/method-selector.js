import React from 'react';
import Select from 'react-select';
import Settings from './settings';
import Recipe from './recipe';
import Parse from '../parse';

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
		var userQuery = new Parse.Query(CoffeeRecipe);
    var defaultQuery = new Parse.Query(CoffeeRecipe);

    userQuery.equalTo('user', Parse.User.current());
    defaultQuery.equalTo('isDefault', true);

    var recipesQuery = Parse.Query.or(userQuery, defaultQuery);

		recipesQuery.find({
			success: recipes => {
				this.setState({
					recipes: recipes,
					selectValue: recipes[0]
				});

				this.refs.settings.onChange();
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

	saveRecipe() {
		let authedUser = Parse.User.current();
		if (!authedUser) {
			alert("Please log in to use this feature.");
			return;
		}

		let CoffeeRecipe = Parse.Object.extend("CoffeeRecipe");
		let coffeeRecipe = new CoffeeRecipe();
		let user = coffeeRecipe.relation('user');
		user.add(authedUser);

		coffeeRecipe.set("title", this.state.selectValue.get('title'));
		coffeeRecipe.set("Ratio", Number(this.state.settings.ratio));
		coffeeRecipe.set("Coffee", Number(this.state.settings.coffee));
		coffeeRecipe.set("Water", Number(this.state.settings.water));
		coffeeRecipe.set("Yield", Number(this.state.settings.yielded));

		coffeeRecipe.save(null, {
			success: function(coffeeRecipe) {
        coffeeRecipe.save()
				alert(`Thanks ${authedUser.get('username')}. Your recipe has been saved to your profile.`);
			},
			error: function(coffeeRecipe, error) {
				alert('Failed to create new object, with error code: ' + error.message);
			}
		});
	},

  render () {
		let props = this.props;
		let selectValue;

		if (this.state.selectValue) {
			selectValue = this.state.selectValue.id;
		}

		let options = this.state.recipes.map(recipe => {
      let label = recipe.get('title');
      if (!recipe.get('isDefault')) {
        label = `${label} - Custom`;
      }
			return {
				value: recipe.id,
				label: label
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

							<Recipe recipe={this.state.selectValue} settings={this.state.settings}/>
						</div>

					<button type="button" onClick={this.saveRecipe}>Save This Recipe</button>
				</div>

			</div>
		);
	}
});

export default MethodSelector;
