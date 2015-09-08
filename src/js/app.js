import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import $ from 'jquery';

import App from './components/app';
import SiteNav from './components/site-nav';


import HomeHandler from './components/home';
import ChemexHandler from './components/chemex/chemex.js';
import ProfileHandler from './components/profile';
import SignInHandler from './components/sign-in';
import SignUpHandler from './components/sign-up';
import TimerHandler from './components/timer';

let routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={HomeHandler}/>
    <Route name="profile" path="/profile" handler={ProfileHandler}/>
    <Route name="signin" path="/signin" handler={SignInHandler}/>
    <Route name="signup" path="/signup" handler={SignUpHandler}/>
    <Route name="chemex" path="/chemex" handler={ChemexHandler}/>
    <Route name="timer" path="/timer" handler={TimerHandler}/>
  </Route>

  // <Route name="v60" path="/v60" handler={MethodHandler}/>
  // <Route name="frenchPress" path="/frenchpress" handler={MethodHandler} />
  // <Route name="aeropress" path="/aeropress" handler={MethodHandler} />
  // <Route name="chemexIced" path="/chemexIced" handler={MethodHandler}/>
  // <Route name="v60Iced" path="/v60Iced" handler={MethodHandler}/>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});

// EXPANDERS

$(document).ready(function() {
  var expanderTrigger = document.getElementById("js-expander-trigger");
  var expanderContent = document.getElementById("js-expander-content");

  $('#js-expander-trigger').click(function(){
    $(this).toggleClass("expander-hidden");
  });
});

$(document).ready(function() {
  var expanderTrigger = document.getElementById("js-expander-trigger2");
  var expanderContent = document.getElementById("js-expander-content2");

  $('#js-expander-trigger2').click(function(){
    $(this).toggleClass("expander-hidden");
  });
});

$(document).ready(function() {
  var expanderTrigger = document.getElementById("js-expander-trigger3");
  var expanderContent = document.getElementById("js-expander-content3");

  $('#js-expander-trigger3').click(function(){
    $(this).toggleClass("expander-hidden");
  });
});
