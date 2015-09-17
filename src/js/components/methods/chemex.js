import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

class Chemex extends React.Component {
  render() {
    return(
      <main className="method-page">
        <div className="hero-chem">
          <div className="hero-inner">
            <a href="" className="hero-logo">
              <img src={"img/coffee-beans.png"} alt="Logo Image"/>
            </a>
            <div className="hero-copy">
              <h1>Chemex</h1>
              <p>Brewing Guide</p>
            </div>
          </div>
        </div>

        <section className="main-content">
          <div className="ingredients">
            <h1>What You'll Need</h1>
            <ul>
              <li>Scale</li>
              <li>Grinder</li>
              <li>Kettle</li>
              <li><strong>26</strong> grams of Coffee</li>
              <li className="li-bottom"><strong>416</strong> grams of Water</li>
              <li className="li-last">Yields 12oz</li>
            </ul>
          </div>

          <div className="about">
            <h1>About</h1>
            <p>One of the most iconic brewers out there, the Chemex is on most of our kitchen counters for a reason. A beautiful, timeless design (it sits permanently on display in the MOMA design collection) that consistently brews a balanced, smooth, and delicious cup.</p>
          </div>

          <div className="brew">
            <h1>Brew Guide</h1>
            <div className="step-num">
              <h2>Step 1</h2>
              <h3>Prepare Ingredients</h3>
            </div>
            <p>Place filter in Chemex and bring water to a boil. While water is heating up, Weigh out roughly 26g of coffee</p>
            <p>Rinse filter with the hot water and discard water. Doing this will help remove any paper taste from the filter, as well as heat up the Chemex.</p>

            <div className="step-num">
              <h2>Step 2</h2>
              <h3>Grind and Weigh Coffee</h3>
            </div>
            <p>Grind coffee on a medium fine setting (should be similar to sea salt. Finer than French Press, Coarser than a V60).</p>
            <p>Set Chemex on scale and tare to 0. Weigh out 50g of ground coffee into the filter. Create a small divot in the bed, and tare scale back to 0.</p>

            <div className="step-num">
              <h2>Step 3</h2>
              <h3>Bloom</h3>
            </div>
            <p>With water at a boil, remove and let settle for 10-15 seconds. Start your timer (<Link to="timer">click here to use ours</Link>) and pour just enough water to fully saturate the grounds. Let bloom for 30 more seconds.</p>
            <p>Allowing the coffee to bloom, or expand, helps allow the water to disperse evenly across all grounds, an important step to producing a delicious cup.</p>

            <div className="step-num">
              <h2>Step 4</h2>
              <h3>Pour</h3>
            </div>
            <p>Starting from the center out to the edges, pour steadily in a clockwise motion until water has raised about halfway up the cone.</p>
            <p>Continue adding water in stages, submerging the crust as you go. Raise the water level toward the end if needed to add all water by the 3:00 mark.</p>
            <p>Once you've reached 400g of water, let drain. Final brew time should be somewhere between 4-4:30</p>
          </div>

          <div className="timer-button">
            <Link to="timer">Make It Now</Link>
          </div>


        </section>

      </main>
    )
  }
}

export default Chemex;
