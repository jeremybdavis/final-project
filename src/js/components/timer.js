import React from 'react';
import {_} from 'lodash';

import MethodSelector from './method-selector';

var Timer = React.createClass({
  getInitialState() {
    return {
      secondsElapsed: 0,
    };
  },
  componentWillUnmount() {
    this.handleStopClick();
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
    this.incrementer = setInterval(() => {
      this.setState({
        secondsElapsed: (this.state.secondsElapsed + 1)
      });

      this.props.onTimerTick(this.state.secondsElapsed);
    }, 1000, true)
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

          </div>

    )
  }
});

export default Timer;
