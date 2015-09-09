import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import TimerHandler from '../timer';

class V60 extends React.Component {
  render() {
    return (
      <main className="method-page">
        <h1>V60 Page</h1>

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
