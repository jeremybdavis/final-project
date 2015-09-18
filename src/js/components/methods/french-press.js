import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

class FrenchPress extends React.Component {
  render() {
    return(
      <main className="method-page">
        <div className="hero-fp">
          <div className="hero-inner">
            <a href="" className="hero-logo">
              <img src={"img/coffee-beans.png"} alt="Logo Image"/>
            </a>
            <div className="hero-copy">
              <h1>French Press</h1>
              <p>Brewing Guide</p>
            </div>
          </div>
        </div>

        <section className="main-content">
          <div className="ingredients">
            <h4>What You'll Need</h4>
              <ul>
                <li>Scale</li>
                <li>Grinder</li>
                <li>Kettle</li>
                <li><strong>27</strong> grams of Coffee</li>
                <li className="li-bottom"><strong>400</strong> grams of Water</li>
                <li className="li-last">Yields 1 12oz Cup</li>
              </ul>
          </div>

          <div className="about">
            <h1>About</h1>
            <p>Patented by Milanese designer Attilo Calimani in 1929, the french press is one of the simplest ways to make great coffee at home. The french press makes a rich, full bodied cup.</p>
          </div>

          <div className="brew">
            <h1>Brew Guide</h1>
              <div className="step-num">
                <h2>Step 1</h2>
                <h3>Prepare Ingredients</h3>
              </div>
              <p>Preheat press with boiling water and discard the water.</p>

              <div className="step-num">
                <h2>Step 2</h2>
                <h3>Grind and Weigh Coffee</h3>
              </div>
              <p>Weigh out desired amount of coffee and grind on a course setting (similar to coarse sea salt).</p>
              <p>Place press on scale and tare, add desired amount of ground coffee into press and tare scale once again.</p>

              <div className="step-num">
                <h2>Step 3</h2>
                <h3>Bloom</h3>
              </div>
              <p>With water at a boil, remove and let settle for 10-15 seconds. Start your timer (<Link to="timer">click here to use ours</Link>) and pour just enough water to fully saturate the full coffee bed. Let bloom for 30 more seconds.</p>

              <div className="step-num">
                <h2>Step 4</h2>
                <h3>Pour and Steep</h3>
              </div>
              <p>Pour water over grounds until you reach 400g. Push plunger down slightly so all grounds are submerged in water.</p>
              <p>Cover and steep until 3:30.</p>
          </div>

          <div className="timer-button">
            <Link to="timer">Make It Now</Link>
          </div>


        </section>

      </main>
    )
  }
}

export default FrenchPress;
