import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import $ from 'jquery';

import HomeHandler from './components/home';

import SiteNav from './components/site-nav';
import ChemexHandler from './components/chemex.js';
import ProfileHandler from './components/profile';
import SignInHandler from './components/sign-in';
import SignUpHandler from './components/sign-up';


class App extends React.Component {
  render() {
    return(
      <main>
      <SiteNav/>
      <RouteHandler/>
      </main>
    )
  }
};

let routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={HomeHandler}/>
    <Route name="profile" path="/profile" handler={ProfileHandler}/>
    <Route name="signin" path="/signin" handler={SignInHandler}/>
    <Route name="signup" path="/signup" handler={SignUpHandler}/>
    <Route name="chemex" path="/chemex" handler={ChemexHandler}/>
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

// NAV

$(document).ready(function() {
  var menuToggle = $('#js-centered-navigation-mobile-menu').unbind();
  $('#js-centered-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-centered-navigation-menu').slideToggle(function(){
      if($('#js-centered-navigation-menu').is(':hidden')) {
        $('#js-centered-navigation-menu').removeAttr('style');
      }
    });
  });
});


// EXPANDER

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
