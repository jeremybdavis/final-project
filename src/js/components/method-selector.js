import React from 'react';
import Select from 'react-select';
import Settings from './settings';
import Recipe from './recipe';
import Parse from '../parse';
import {_} from 'lodash';

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

  getSettingsFromSelected: function(selected) {
    if (!selected) {
      return null
    }

    return {
      ratio: selected.get('Ratio'),
      coffee: selected.get('Coffee')
    };
  },

	componentDidMount: function() {
    var user = Parse.User.current();
		var CoffeeRecipe = Parse.Object.extend("CoffeeRecipe");
		var userQuery = new Parse.Query(CoffeeRecipe);
    var defaultQuery = new Parse.Query(CoffeeRecipe);
    var recipesQuery;

    defaultQuery.equalTo('isDefault', true);
    if (user) {
      userQuery.equalTo('user', user);
      recipesQuery = Parse.Query.or(userQuery, defaultQuery);
    } else {
      recipesQuery = defaultQuery
    }

		recipesQuery.find({
			success: recipes => {
        let recipe = recipes[0];
				this.setState({
					recipes: recipes,
					selectValue: recipe,
          settings: this.getSettingsFromSelected(recipe)
				});
			}
		});
	},

  updateValue (selectValue) {
		let selected = this.state.recipes.filter(recipe => {
			return recipe.id === selectValue;
		})[0];

		this.setState({
			selectValue: selected,
      settings: this.getSettingsFromSelected(selected)
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

  updateOrCreate() {
    let authedUser = Parse.User.current();
    if (!authedUser) {
      alert("Please log in to use this feature.");
      return;
    }

    let selected = this.state.selectValue;
    // If selected value is a default recipe
    if (selected.get('isDefault')) {
      let recipe = this.state.recipes.filter(recipe => {
        return recipe.get('title') === selected.get('title')
              && !recipe.get('isDefault');
      });
      // If the user has a recipe that matches the selected recipe title
      if (recipe.length) {
        this.updateRecipe(recipe[0]);
      } else {
        // create a new recipe
        this.saveRecipe();
      }
    } else {  // Update the selected recipe
        this.updateRecipe(selected);
    }
  },

  updateRecipe(recipe) {
    let data = {
      Ratio: Number(this.state.settings.ratio),
      Coffee: Number(this.state.settings.coffee)
    };
    recipe.set(data);
    recipe.save();
  },

	saveRecipe() {
		let authedUser = Parse.User.current();
		let CoffeeRecipe = Parse.Object.extend("CoffeeRecipe");
		let coffeeRecipe = new CoffeeRecipe();
		let user = coffeeRecipe.relation('user');
		user.add(authedUser);
    let data = {
      title: this.state.selectValue.get('title'),
  		Ratio: Number(this.state.settings.ratio),
  		Coffee: Number(this.state.settings.coffee),
  		Water: Number(this.state.settings.water),
  		Yield: Number(this.state.settings.yielded),
      prep: this.state.selectValue.get('prep'),
      prepTitle: this.state.selectValue.get('prepTitle'),
      stepOneTitle: this.state.selectValue.get('stepOneTitle'),
      stepOne: this.state.selectValue.get('stepOne'),
      startOne: Number(this.state.selectValue.get('startOne')),
      stopOne: Number(this.state.selectValue.get('stopOne')),
      stepTwoTitle: this.state.selectValue.get('stepTwoTitle'),
      stepTwo: this.state.selectValue.get('stepTwo'),
      startTwo: Number(this.state.selectValue.get('startTwo')),
      stopTwo: Number(this.state.selectValue.get('stopTwo')),
      stepThreeTitle: this.state.selectValue.get('stepThreeTitle'),
      stepThree: this.state.selectValue.get('stepThree'),
      startThree: Number(this.state.selectValue.get('startThree')),
      stopThree: Number(this.state.selectValue.get('stopThree')),
      stepFourTitle: this.state.selectValue.get('stepFourTitle'),
      stepFour: this.state.selectValue.get('stepFour')
    };

		coffeeRecipe.set(data);
		coffeeRecipe.save(null, {
			success: (recipe) => {
        let recipes = _.clone(this.state.recipes);
        recipes.push(recipe);
        this.setState({
          recipes: recipes
        });
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

								<Settings
									ref="settings"
									recipe={this.state.selectValue}
                  settings={this.state.settings}
									onSettingsChange={this.onSettingsChange}
								/>

              <button type="button" className="save-btn" onClick={this.updateOrCreate}>Save This Recipe</button>

							<Recipe recipe={this.state.selectValue} settings={this.state.settings}/>
						</div>


				</div>

			</div>
		);
	}
});

export default MethodSelector;
