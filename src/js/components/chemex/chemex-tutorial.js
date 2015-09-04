import React from 'react';

var ChemexTutorial = React.createClass({
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
      <div>
        <h1>{this.getMinutes()}:{this.getSeconds()}</h1>

        {(this.state.secondsElapsed === 0 || this.incrementer ===
          this.state.lastClearedIncrementer)
          ? <button type="button" onClick={this.handleStartClick}>Start</button>
          : <button type="button" onClick={this.handleStopClick}>Pause</button>
        }
        {(this.state.secondsElapsed !== 0)
          ? <button type="button" onClick={this.handleResetClick}>Reset</button>
        : null
        }
        {(this.state.secondsElapsed !== 0 && this.state.secondsElapsed <= 30)
          ? <p>Step 1</p>
          : null
        }
        {(this.state.secondsElapsed > 30 && this.state.secondsElapsed <= 210)
          ? <p>Step 2</p>
          : null
        }
        {(this.state.secondsElapsed > 210)
          ? <p>Finished!</p>
          : null
        }
      </div>
    )
  }
});

export default ChemexTutorial;
