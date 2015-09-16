import React from 'react';
import Timer from './timer';

class Recipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsElapsed: 0,
    }
  }
  onTimerTick(secondsElapsed) {
    this.setState({
      secondsElapsed
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.recipe) {
      this.setState({
        prepTitle: nextProps.recipe.get('prepTitle'),
        prep: nextProps.recipe.get('prep'),
        stepOneTitle: nextProps.recipe.get('stepOneTitle'),
        stepOne: nextProps.recipe.get('stepOne'),
        startOne: nextProps.recipe.get('startOne'),
        stopOne: nextProps.recipe.get('stopOne'),
        stepTwoTitle: nextProps.recipe.get('stepTwoTitle'),
        stepTwo: nextProps.recipe.get('stepTwo'),
        startTwo: nextProps.recipe.get('startTwo'),
        stopTwo: nextProps.recipe.get('stopTwo')
      })
    }
  }

  render() {
    if (!this.props.recipe) {
      return <div>Please Select a Method</div>
    }

    let {secondsElapsed} = this.state;
    let prepTitle = this.state.prepTitle;
    let prep = this.state.prep;
    let stepOneTitle = this.state.stepOneTitle;
    let stepOne = this.state.stepOne;
    let startOne = this.state.startOne;
    let stopOne = this.state.stopOne;
    let stepTwoTitle = this.state.stepTwoTitle;
    let stepTwo = this.state.stepTwo;
    let startTwo = this.state.startTwo;
    let stopTwo = this.state.stopTwo;
    let water = 0;
    let coffee = 0;

    if (this.props.settings) {
      water = this.props.settings.water;
      coffee = this.props.settings.coffee;
    }
    return(
      <div className="recipe">
        <div className="timer">
          <Timer onTimerTick={this.onTimerTick.bind(this)}/>
        </div>
        <div className="details">

          {(secondsElapsed === 0)
            ? <div className="steps">
                <h5>{prepTitle}</h5>
                <p className="step">{prep}</p>
              </div>
            : null
          }

          {(secondsElapsed !== this.props.recipe.get('startOne') && secondsElapsed <= this.props.recipe.get('stopOne'))
            ? <div className="steps">
                <h5>{stepOneTitle}</h5>
                <p className="step">{stepOne}</p>
              </div>
            : null
          }

          {(secondsElapsed > this.props.recipe.get('startTwo') && secondsElapsed <= this.props.recipe.get('stopTwo'))

            ? <div className="steps">
                <h5>{stepTwoTitle}</h5>
                <p className="step">{stepTwo}</p>
              </div>
            : null
          }

          {(secondsElapsed > 180 && secondsElapsed <= 240)
            ? <p className="step">Once you've added {water}g of water, let drain. Aim for
                as flat of a bed as possible. Final brew time should be in the 3:30
                - 4:00 range.</p>
            : null
          }

          {(secondsElapsed > 240)
            ? <p className="step">Finished. Enjoy!</p>
            : null
          }
        </div>
      </div>
    )
  }
}

Recipe.defaultProps = {
  secondsElapsed: 0,
  recipe: null,
  settings: null
};

export default Recipe;
