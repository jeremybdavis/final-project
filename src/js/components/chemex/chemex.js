import React from 'react';
import $ from 'jquery';

import ChemexTutorial from './chemex-tutorial';
import ChemexRecipe from './chemex-recipe';

class Chemex extends React.Component {
  render() {
    return(
      <main className="chemex-page">
        <div className="hero-chem">
          <div className="hero-inner">
            <a href="" className="hero-logo">
              <img src={"https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_1.png"} alt="Logo Image"/>
            </a>
            <div className="hero-copy">
              <h1>Chemex</h1>
              <p>Yummmmmm</p>
            </div>
          </div>
        </div>

        <ChemexRecipe/>

        <div className="expander">
          <a href="javascript:void(0)" id="js-expander-trigger" className="expander-trigger expander-hidden">About</a>
          <div id="js-expander-content" className="expander-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio mollitia fugiat facilis enim accusamus quisquam aut, repellendus incidunt quod optio facere labore illo numquam ipsum beatae vero debitis, fugit excepturi.</p>
          </div>
        </div>

          <div className="expander">
            <a href="javascript:void(0)" id="js-expander-trigger2" className="expander-trigger expander-hidden">Brew Guide</a>
            <div id="js-expander-content2" className="expander-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio mollitia fugiat facilis enim accusamus quisquam aut, repellendus incidunt quod optio facere labore illo numquam ipsum beatae vero debitis, fugit excepturi.</p>
            </div>
          </div>

          <div className="expander">
            <a href="javascript:void(0)" id="js-expander-trigger3" className="expander-trigger expander-hidden">Brew Timer</a>
            <div id="js-expander-content3" className="expander-content">
              <ChemexTutorial/>
            </div>
          </div>
      </main>
    )
  }
}

export default Chemex;
