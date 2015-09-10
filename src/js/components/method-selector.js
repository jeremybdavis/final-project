import React from 'react';
import Select from 'react-select';
import ChemexSettings from './chemex/chemex-settings';
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

  render () {
		let props = this.props;
		let settings;
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
		} else if (this.state.selectValue === 'v60') {
			settings = <V60Settings coffee={this.state.coffee} water={this.state.water} yield={this.state.yield} ratio={this.state.ratio} ref="v60" onSettingsChange={this.onSettingsChange}/>
		}

		return (
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

			</div>
		);
	}
});

export default MethodSelector;
