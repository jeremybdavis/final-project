import React from 'react';

import MethodSelector from './method-selector';

var Timer = React.createClass({
  getInitialState() {
    return {
      secondsElapsed: 0,
    };
  },
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

  render() {
    return(
      <div className="program">

        <div className="program-content">
          <h1>Let's Get Started</h1>
          <MethodSelector/>

          <div className="timer-content">

            <h4 className="timer">{this.getMinutes()}:{this.getSeconds()}</h4>

            {(this.state.secondsElapsed === 0 || this.incrementer ===
              this.state.lastClearedIncrementer)
              ? <button type="button" onClick={this.handleStartClick}><i className="fa fa-play"></i></button>
              : <button type="button" onClick={this.handleStopClick}><i className="fa fa-pause"></i></button>
            }

            {(this.state.secondsElapsed !== 0)
              ? <button type="button" className="reset-btn" onClick={this.handleResetClick}>Reset</button>
            : null
            }

            {(this.state.secondsElapsed !== 0 && this.state.secondsElapsed <= 45)
              ? <div className="steps">
                  <h5>Bloom</h5>
                  <p className="step">Lightly pour just enough water to saturate the coffee bed.
                    Let bloom (or expand).
                    This allows the water to distribute evenly, a crucial step to
                    making a delicious cup. Try to avoid going over {this.props.coffee * 2}g</p>
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
              ? <p className="step">Once you've added {this.props.water}g of water, let drain. Aim for
                  as flat of a bed as possible. Final brew time should be in the 3:30
                  - 4:00 range.</p>
              : null
            }

            {(this.state.secondsElapsed > 240)
              ? <p className="step">Finished. Enjoy!</p>
              : null
            }

          </div>

        </div>

      </div>
    )
  }
});

export default Timer;
