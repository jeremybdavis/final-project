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
        stepOneTitle: nextProps.recipe.get('stepOneTitle'),
        stepOne: nextProps.recipe.get('stepOne'),
        startOne: nextProps.recipe.get('startOne'),
        stopOne: nextProps.recipe.get('stopOne')
      })
    }
  }

  render() {
    if (!this.props.recipe) {
      return <div>Please Select a Method</div>
    }

    let {secondsElapsed} = this.state;
    let stepOneTitle = this.state.stepOneTitle;
    let stepOne = this.state.stepOne;
    let startOne = this.state.startOne;
    let stopOne = this.state.stopOne;
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
          {(secondsElapsed !== this.props.recipe.get('startOne') && secondsElapsed <= this.props.recipe.get('stopOne'))
            ? <div className="steps">
                <h5>{stepOneTitle}</h5>
                <p className="step">{stepOne}</p>
              </div>
            : null
          }

          {(secondsElapsed > 45 && secondsElapsed <= 180)
            ? <p className="step">Starting from the center and working to the edge, pour slowly
                in circles adding just enough water to raise slurry roughly halfway
                up the cone. Keep adding water slowly in stages, submerging the crust
                as you go. After crust has been covered, pour into the center,
                raising the level if needed toward the end to add all water in time.
                Try adding all water by 3:00</p>
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
