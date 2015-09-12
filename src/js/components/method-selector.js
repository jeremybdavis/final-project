import React from 'react';
import {_} from 'lodash';
import Select from 'react-select';
import ChemexSettings from './chemex/chemex-settings';
import ChemexRecipe from './chemex/chemex-recipe';
import V60Settings from './v60/v60-settings';

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
		this.setState({
			selectValue: newValue || null
		});
	},

  focusMethodSelect () {
    this.refs.stateSelect.focus();
  },

	onSettingsChange(data) {
		console.log(data);
		this.setState(data);
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
					recipe = "foo"
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

							<button>Save This Recipe</button>

						</div>

				</div>

			</div>
		);
	}
});

export default MethodSelector;
