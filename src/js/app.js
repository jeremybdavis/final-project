import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import App from './components/app';
import SiteNav from './components/site-nav';


import HomeHandler from './components/home';
import ChemexHandler from './components/chemex/chemex.js';
import V60Handler from './components/v60/v60.js';
import ProfileHandler from './components/profile';
import SignInHandler from './components/sign-in';
import SignUpHandler from './components/sign-up';
import MethodSelectorHandler from './components/method-selector';

let routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={HomeHandler}/>
    <Route name="profile" path="/profile" handler={ProfileHandler}/>
    <Route name="signin" path="/signin" handler={SignInHandler}/>
    <Route name="signup" path="/signup" handler={SignUpHandler}/>
    <Route name="chemex" path="/chemex" handler={ChemexHandler}/>
    <Route name="v60" path="/v60" handler={V60Handler}/>
    <Route name="timer" path="/timer" handler={MethodSelectorHandler}/>
  </Route>


  // <Route name="frenchPress" path="/frenchpress" handler={MethodHandler} />
  // <Route name="aeropress" path="/aeropress" handler={MethodHandler} />
  // <Route name="chemexIced" path="/chemexIced" handler={MethodHandler}/>
  // <Route name="v60Iced" path="/v60Iced" handler={MethodHandler}/>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
