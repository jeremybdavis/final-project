import React from 'react';

class ChemexRecipe extends React.Component {
  render() {
    return(

      <div className="recipe">
        {(this.props.secondsElapsed !== 0 && this.props.secondsElapsed <= 45)
          ? <div className="steps">
              <h5>Bloom</h5>
              <p className="step">Lightly pour just enough water to saturate the coffee bed.
                Let bloom (or expand).
                This allows the water to distribute evenly, a crucial step to
                making a delicious cup. Try to avoid going over {this.props.coffee * 2}g</p>
            </div>
          : null
        }

        {(this.props.secondsElapsed > 45 && this.props.secondsElapsed <= 180)
          ? <p className="step">Starting from the center and working to the edge, pour slowly
              in circles adding just enough water to raise slurry roughly halfway
              up the cone. Keep adding water slowly in stages, submerging the crust
              as you go. After crust has been covered, pour into the center,
              raising the level if needed toward the end to add all water in time.
              Try adding all water by 3:00</p>
          : null
        }

        {(this.props.secondsElapsed > 180 && this.props.secondsElapsed <= 240)
          ? <p className="step">Once you've added {this.props.water}g of water, let drain. Aim for
              as flat of a bed as possible. Final brew time should be in the 3:30
              - 4:00 range.</p>
          : null
        }

        {(this.props.secondsElapsed > 240)
          ? <p className="step">Finished. Enjoy!</p>
          : null
        }
      </div>

    )
  }
}

ChemexRecipe.defaultProps = {
  secondsElapsed: 0,
  coffee: 25
};

export default ChemexRecipe;
