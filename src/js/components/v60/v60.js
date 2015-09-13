import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

class V60 extends React.Component {
  render() {
    return (
      <main className="method-page">
        <div className="hero-v60">
          <div className="hero-inner">
            <a href="" className="hero-logo">
              <img src={"https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_1.png"} alt="Logo Image"/>
            </a>
            <div className="hero-copy">
              <h1>V60</h1>
              <p>0 to 100. Real Quick.</p>
            </div>
          </div>
        </div>

          <section className="main-content">

            <div className="about">
              <h1>About</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio mollitia fugiat facilis enim accusamus quisquam aut, repellendus incidunt quod optio facere labore illo numquam ipsum beatae vero debitis, fugit excepturi.</p>
            </div>

            <div className="brew">
              <h1>Brew Guide</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className="timer-button">
              <Link to="timer">Make It Now</Link>
            </div>


          </section>
      </main>
    )
  }
}

export default V60;
