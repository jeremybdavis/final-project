import React from 'react';
import {_} from 'lodash';
import Select from 'react-select';
import Parse from '../parse';
import ChemexSettings from './chemex/chemex-settings';
import ChemexRecipe from './chemex/chemex-recipe';
import V60Settings from './v60/v60-settings';
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
      selectValue: 'chemex',
			secondsElapsed: 0
    };
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

		coffeeRecipe.set("title", this.state.selectValue);
		coffeeRecipe.set("ratio", this.state.ratio);
		coffeeRecipe.set("coffee", this.state.coffee);
		coffeeRecipe.set("water", this.state.water);
		coffeeRecipe.set("yield", this.state.yield);

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

	// TIMER
getSeconds() {
	return (
		'0' + this.state.secondsElapsed % 60
	).slice(-2);;
},

getMinutes() {
	return Math.floor(
		this.state.secondsElapsed / 60
	);
},

handleStartClick() {
	var _this = this;

	this.incrementer = setInterval(function () {
		_this.setState({
			secondsElapsed: (_this.state.secondsElapsed + 1)
		});
	}, 1000)
},

handleStopClick() {
	clearInterval(this.incrementer);
	this.setState({lastClearedIncrementer: this.incrementer});
},

handleResetClick() {
	this.setState({secondsElapsed: 0});
},

  render () {
		let props = this.props;
		let settings;
		let recipe;
		var ops = [
      {value: 'chemex', label: 'Chemex'},
      {value: 'v60', label: 'V60'}
    ];

		if (this.state.selectValue === 'chemex') {
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
		} else if (this.state.selectValue === 'v60') {
			settings = <V60Settings
							coffee={this.state.coffee}
							water={this.state.water}
							yield={this.state.yield}
							ratio={this.state.ratio}
							ref="v60"
							onSettingsChange={this.onSettingsChange}
						/>
			recipe = <div className="recipe">
				        {(this.state.secondsElapsed !== 0 && this.state.secondsElapsed <= 45)
				          ? <div className="steps">
				              <h5>Bloom</h5>
				              <p className="step">Lightly pour just enough water to saturate the coffee bed.
				                Let bloom (or expand).
				                This allows the water to distribute evenly, a crucial step to
				                making a delicious cup. Try to avoid going over {this.state.coffee * 2}g</p>
				            </div>
				          : null
				        }

				        {(this.state.secondsElapsed > 45 && this.state.secondsElapsed <= 180)
				          ? <p className="step">Starting from the center and working to the edge, pour slowly
				              in circles adding just enough water to raise slurry roughly halfway
				              up the cone. Keep adding water slowly in stages, submerging the crust
				              as you go. After crust has been covered, pour into the center,
				              raising the level if needed toward the end to add all water in time.
				              Try adding all water by 3:00</p>
				          : null
				        }

				        {(this.state.secondsElapsed > 180 && this.state.secondsElapsed <= 240)
				          ? <p className="step">Once you've added {this.state.water}g of water, let drain. Aim for
				              as flat of a bed as possible. Final brew time should be in the 3:30
				              - 4:00 range.</p>
				          : null
				        }

				        {(this.state.secondsElapsed > 240)
				          ? <p className="step">Finished. Enjoy!</p>
				          : null
				        }
		      		</div>
		}

		return (
			<div className="program">

				<div className="program-content">

					<h1>Let's Get Started</h1>

						<div className="section">

							<h3 className="section-heading">{this.props.label}</h3>

							<Select
								ref="stateSelect"
								options={ops}
								disabled={this.state.disabled}
								value={this.state.selectValue}
								onChange={this.updateValue}
								searchable={this.state.searchable}>

								<span className="Select-arrow-zone"></span>
								<span className="Select-arrow"></span>

							</Select>

							<h3>Recommended Settings</h3>
							{settings}

							<div className="timer-content">

								<h4 className="timer">{this.getMinutes()}:{this.getSeconds()}</h4>

								{(this.state.secondsElapsed === 0 || this.incrementer === this.state.lastClearedIncrementer)
									? <button type="button" onClick={_.debounce(this.handleStartClick, 1000)}><i className="fa fa-play"></i></button>
									: <button type="button" onClick={_.debounce(this.handleStopClick, 1000)}><i className="fa fa-pause"></i></button>
								}

								{(this.state.secondsElapsed !== 0)
									? <button type="button" className="reset-btn" onClick={_.debounce(this.handleResetClick, 1000)}>Reset</button>
									: null
								}

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
